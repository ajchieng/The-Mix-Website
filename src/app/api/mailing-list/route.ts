import { NextResponse } from "next/server";

type MailingListPayload = {
  school?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as MailingListPayload;

    const school = body.school?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const message = body.message?.trim() ?? "";

    if (!school || !email || !message) {
      return NextResponse.json(
        { error: "Please complete all fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid student email." },
        { status: 400 },
      );
    }

    if (message.length < 12) {
      return NextResponse.json(
        { error: "Please add a little more detail in your message." },
        { status: 400 },
      );
    }

    console.log("[mailing-list-submission]", {
      school,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
