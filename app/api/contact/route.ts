import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { ContactRequestSchema } from "@/types/contact";
import { sendContactNotification } from "@/lib/email/sendContactNotification";

function fieldErrorsFromZod(error: ZodError): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const iss of error.errors) {
    const key = iss.path[0];
    if (typeof key !== "string") continue;
    if (!out[key]) out[key] = [];
    out[key].push(iss.message);
  }
  return out;
}

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request body.",
        fieldErrors: {}
      },
      { status: 400 }
    );
  }

  const parsed = ContactRequestSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please check the fields below.",
        fieldErrors: fieldErrorsFromZod(parsed.error)
      },
      { status: 400 }
    );
  }

  const sendResult = await sendContactNotification(parsed.data);
  if (!sendResult.ok) {
    return NextResponse.json(
      { success: false, message: sendResult.message },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thanks — your message was sent."
  });
}
