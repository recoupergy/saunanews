import { NextRequest, NextResponse } from 'next/server';

const INBOX = 'hello@saunanews.com';
const AGENTMAIL_BASE = 'https://api.agentmail.to/v0';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot — bots fill hidden fields, humans don't
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const { name, email, organization, inquiryType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.AGENTMAIL_API_KEY;
    const subject = `[${inquiryType ?? 'Contact'}] ${name}${organization ? ` — ${organization}` : ''}`;

    if (!apiKey) {
      // Key not set yet — log so nothing is silently lost
      console.log('[Contact Form]', { name, email, organization, inquiryType, message });
      return NextResponse.json({
        success: true,
        message: "Thanks — we'll be in touch shortly.",
      });
    }

    const res = await fetch(
      `${AGENTMAIL_BASE}/inboxes/${encodeURIComponent(INBOX)}/messages/send`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: [INBOX],
          replyTo: `${name} <${email}>`,
          subject,
          html: `
            <p><strong>From:</strong> ${name}${organization ? ` (${organization})` : ''}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Type:</strong> ${inquiryType ?? 'General'}</p>
            <hr />
            <p>${message.replace(/\n/g, '<br />')}</p>
          `,
          text: `From: ${name}${organization ? ` (${organization})` : ''}\nEmail: ${email}\nType: ${inquiryType ?? 'General'}\n\n${message}`,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error('[AgentMail Error]', res.status, err);
      return NextResponse.json(
        { success: false, message: 'Failed to send. Please email us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thanks — we'll be in touch shortly.",
    });
  } catch (err) {
    console.error('[Contact Form Error]', err);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
