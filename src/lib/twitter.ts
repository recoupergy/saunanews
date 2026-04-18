import { createHmac, randomBytes } from 'node:crypto';

interface TweetResponse {
  data?: {
    id: string;
    text: string;
  };
  errors?: Array<{
    message: string;
  }>;
}

interface PostTweetInput {
  text: string;
  apiKey: string;
  apiSecret: string;
  accessToken: string;
  accessTokenSecret: string;
}

const TWITTER_CREATE_TWEET_URL = 'https://api.twitter.com/2/tweets';

function percentEncode(value: string) {
  return encodeURIComponent(value)
    .replace(/[!'()*]/g, (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`);
}

function buildAuthorizationHeader(
  method: string,
  url: string,
  apiKey: string,
  apiSecret: string,
  accessToken: string,
  accessTokenSecret: string
) {
  const oauthParams: Record<string, string> = {
    oauth_consumer_key: apiKey,
    oauth_nonce: randomBytes(16).toString('hex'),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: accessToken,
    oauth_version: '1.0',
  };

  const normalizedParams = Object.entries(oauthParams)
    .sort(([aKey, aValue], [bKey, bValue]) => {
      if (aKey === bKey) {
        return aValue.localeCompare(bValue);
      }
      return aKey.localeCompare(bKey);
    })
    .map(([key, value]) => `${percentEncode(key)}=${percentEncode(value)}`)
    .join('&');

  const signatureBase = [
    method.toUpperCase(),
    percentEncode(url),
    percentEncode(normalizedParams),
  ].join('&');

  const signingKey = `${percentEncode(apiSecret)}&${percentEncode(accessTokenSecret)}`;

  const oauthSignature = createHmac('sha1', signingKey)
    .update(signatureBase)
    .digest('base64');

  const authorizationParams = {
    ...oauthParams,
    oauth_signature: oauthSignature,
  };

  const authHeader = Object.entries(authorizationParams)
    .sort(([aKey], [bKey]) => aKey.localeCompare(bKey))
    .map(([key, value]) => `${percentEncode(key)}="${percentEncode(value)}"`)
    .join(', ');

  return `OAuth ${authHeader}`;
}

export async function postTweet(input: PostTweetInput) {
  const authorization = buildAuthorizationHeader(
    'POST',
    TWITTER_CREATE_TWEET_URL,
    input.apiKey,
    input.apiSecret,
    input.accessToken,
    input.accessTokenSecret
  );

  const response = await fetch(TWITTER_CREATE_TWEET_URL, {
    method: 'POST',
    headers: {
      Authorization: authorization,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: input.text }),
  });

  const body = (await response.json().catch(() => ({}))) as TweetResponse;

  if (!response.ok || !body.data?.id) {
    const errorMessage = body.errors?.map((error) => error.message).join(', ')
      || `Twitter API request failed with status ${response.status}`;
    throw new Error(errorMessage);
  }

  return body.data;
}
