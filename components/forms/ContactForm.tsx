"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { ContactRequestSchema, type ContactRequest } from "@/types/contact";
import { cn } from "@/lib/utils/classNames";

type ApiErrorBody = {
  success: false;
  message: string;
  fieldErrors?: Record<string, string[]>;
};

const labelCls =
  "mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#1A1814]0";
const inputCls =
  "w-full rounded-lg border border-[#E4DFD7]/90 bg-[#FAF8F5]/60 px-3 py-2.5 text-sm text-[#2D2923] placeholder:text-slate-600 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30 min-h-[44px]";
const errCls = "mt-1.5 text-xs text-red-600";

export default function ContactForm() {
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<ContactRequest>({
    resolver: zodResolver(ContactRequestSchema),
    defaultValues: { name: "", email: "", message: "" }
  });

  const onSubmit = handleSubmit(async (data) => {
    setFormError(null);
    setSuccessMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const json = (await res.json()) as
        | { success: true; message: string }
        | ApiErrorBody;

      if (!res.ok && "fieldErrors" in json && json.fieldErrors) {
        for (const [field, msgs] of Object.entries(json.fieldErrors)) {
          if (
            field === "name" ||
            field === "email" ||
            field === "message"
          ) {
            setError(field, { message: msgs[0] ?? json.message });
          }
        }
        setFormError(json.message);
        return;
      }

      if (!res.ok) {
        const body = json as ApiErrorBody;
        setFormError(body.message ?? "Something went wrong.");
        return;
      }

      if (json.success) {
        setSuccessMessage(json.message);
        reset();
      }
    } catch {
      setFormError(
        "Something went wrong. Please try again or email directly."
      );
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="contact-name" className={labelCls}>
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          className={cn(inputCls, errors.name && "border-red-500/50")}
          {...register("name")}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "contact-name-err" : undefined}
        />
        {errors.name ? (
          <p id="contact-name-err" className={errCls} role="alert">
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelCls}>
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          className={cn(inputCls, errors.email && "border-red-500/50")}
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "contact-email-err" : undefined}
        />
        {errors.email ? (
          <p id="contact-email-err" className={errCls} role="alert">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelCls}>
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          className={cn(
            inputCls,
            "min-h-[120px] resize-y py-3",
            errors.message && "border-red-500/50"
          )}
          {...register("message")}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={
            errors.message ? "contact-message-err" : undefined
          }
        />
        {errors.message ? (
          <p id="contact-message-err" className={errCls} role="alert">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {formError ? (
        <p className="text-sm text-red-600" role="alert">
          {formError}
        </p>
      ) : null}

      {successMessage ? (
        <p className="text-sm text-emerald-700" role="status">
          {successMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="motion-safe-transition inline-flex min-h-[44px] min-w-[160px] items-center justify-center gap-2 rounded-lg bg-[#C8102E] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_12px_rgba(200,16,46,0.12)] hover:bg-[#C8102E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2
              className="h-4 w-4 shrink-0 animate-spin motion-reduce:animate-none"
              aria-hidden
            />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
