import { NextResponse } from "next/server";

/**
 * Contact endpoint stub.
 * Wire this to an email provider (Resend, SendGrid) or a service
 * like Formspree before relying on it in production. For now it
 * validates the payload and returns 200 so the UI flow works.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email) ||
    !body.message.trim()
  ) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  // TODO: send an email here, e.g. with Resend:
  // await resend.emails.send({ from, to: "a2bali@uwaterloo.ca", subject, text });
  console.log("Contact form submission:", body);

  return NextResponse.json({ ok: true });
}
