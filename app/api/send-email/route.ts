import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_3bdLQcgb_DPmxLFnCQj185MuRxZzWSNhf');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',          // seu email pessoal para teste
      to: 'wesjrpiri@gmail.com',            // pode ser o mesmo ou temporário
      replyTo: email,                      // responde para quem enviou o formulário
      subject: subject,
      text: `
        Message from: ${name} <${email}>
        ${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
