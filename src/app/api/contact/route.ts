import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO = 'hello@saunanews.com';

// Safe to call even without the key — returns a graceful error instead of crashing at build time
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot — bots fill hidden fields
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

    const resend = getResend();

    if (!resend) {
      // RESEND_API_KEY not set — log it so nothing is silently lost
      console.log('[Contact Form]', { name, email, organization, inquiryType, message });
      return NextResponse.json({
        success: true,
        message: "Thanks — we'll be in touch shortly.",
      });
    }

    const { error } = await resend.emails.send({
      from: 'SaunaNews Contact <hello@saunanews.com>',
      to: TO,
      replyTo: email,
      subject: `[${inquiryType ?? 'Contact'}] ${name}${organization ? ` — ${organization}` : ''}`,
      html: `
        <p><strong>From:</strong> ${name}${organization ? ` (${organization})` : ''}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Type:</strong> ${inquiryType ?? 'General'}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
      text: `From: ${name}${organization ? ` (${organization})` : ''}\nEmail: ${email}\nType: ${inquiryType ?? 'General'}\n\n${message}`,
    });

    if (error) {
      console.error('[Contact Form Resend Error]', error);
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
