import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, date, people, message } = body ?? {};

    if (!name || !email || !date || !people || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "NOWA REZERWACJA w Płaskurek <rezerwacja@plaskurekcoffee.pl>",
      to: "plaskurekcoffee@o2.pl",
      subject: `Zapytanie eventowe od ${name}`,
      replyTo: email,
      text: [
        `Imie: ${name}`,
        `Email: ${email}`,
        `Data: ${date}`,
        `Liczba osob: ${people}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send" },
      { status: 500 }
    );
  }
}
