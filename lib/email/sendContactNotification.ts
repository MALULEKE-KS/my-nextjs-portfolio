import { Resend } from "resend";
import type { ContactRequest } from "@/types/contact";

const DEFAULT_FROM = "Portfolio <onboarding@resend.dev>";

export type SendContactResult =
  | { ok: true; mode: "email" | "skipped" }
  | { ok: false; message: string };

/**
 * When `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are set, sends via Resend.
 * Otherwise returns `{ ok: true, mode: 'skipped' }` so the API can still acknowledge.
 */
export async function sendContactNotification(
  data: ContactRequest
): Promise<SendContactResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();

  if (!apiKey || !to) {
    return { ok: true, mode: "skipped" };
  }

  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM;

  const resend = new Resend(apiKey);
  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    "",
    data.message
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `Portfolio: message from ${data.name}`,
    text
  });

  if (error) {
    return {
      ok: false,
      message: "Something went wrong. Please try again or email directly."
    };
  }

  return { ok: true, mode: "email" };
}
