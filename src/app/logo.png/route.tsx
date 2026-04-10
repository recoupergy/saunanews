import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const contentType = 'image/png';

// 600x60 publisher logo — used in NewsArticle and NewsMediaOrganization JSON-LD
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          width: 600,
          height: 60,
          background: '#FAF8F5',
          padding: '0 16px',
        }}
      >
        {/* Flame mark */}
        <svg width="22" height="32" viewBox="0 0 20 28">
          <path
            d="M10,0 C4,9 0,15 0,19 C0,25 4,28 10,28 C16,28 20,25 20,19 C20,15 16,9 10,0Z"
            fill="#4A6741"
          />
          <path
            d="M11,12 C8,16 6,18 6,21 C6,25 8,26.5 10.5,26.5 C13,26.5 14.5,24 14.5,21 C14.5,18 13,16 11,12Z"
            fill="#FAF8F5"
          />
        </svg>
        {/* Wordmark */}
        <span
          style={{
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            color: '#1C1C1C',
          }}
        >
          Sauna
        </span>
        <span
          style={{
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            color: '#4A6741',
          }}
        >
          News
        </span>
      </div>
    ),
    { width: 600, height: 60 }
  );
}
