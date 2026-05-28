import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/server";

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

    const supabase = createSupabaseAdminClient();

    const { error } = await supabase
      .from("mailing_list_submissions")
      .upsert(
        {
          school,
          email,
          message,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "email",
        },
      );

    if (error) {
      console.error("[mailing-list-submission-error]", error);

      return NextResponse.json(
        { error: "Unable to submit right now. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[mailing-list-submission-exception]", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
