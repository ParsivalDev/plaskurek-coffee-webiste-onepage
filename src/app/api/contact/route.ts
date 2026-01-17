import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    await resend.emails.send({
      from: "NOWA REZERWACJA w Płaskurek <rezerwacja@plaskurekcoffee.pl>",
      to: "plaskurek@o2.pl",
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
