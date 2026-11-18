"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2, Send } from "lucide-react";
import {
  EMAIL,
  testimonialSchema,
  type Testimonial,
} from "@/lib/validations";

const field =
  "w-full border border-line bg-white px-4 py-3 text-body placeholder:text-muted/70";

type Status = { kind: "success" | "error"; message: string } | null;

export default function TestimonialForm() {
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Testimonial>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: { name: "", message: "" },
  });

  const onSubmit = handleSubmit(async (data) => {
    if (sending) return;
    setSending(true);
    setStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Testimonial Submission — SALU CORE ELECTRICAL",
          _template: "table",
          _captcha: "false",
          _honey: "",
          Name: data.name,
          Testimonial: data.message,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || String(result.success) !== "true") {
        throw new Error(result.message || "Submission failed");
      }

      reset();
      setStatus({
        kind: "success",
        message: "Thank you. Your testimonial has been sent for review.",
      });
    } catch (error) {
      console.error("Testimonial submission failed:", error);
      setStatus({
        kind: "error",
        message:
          "Your testimonial could not be sent. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  });

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="mt-7 space-y-5"
      aria-label="Submit a testimonial"
    >
      <div>
        <label
          htmlFor="testimonial-name"
          className="mb-1 block text-sm font-medium text-heading"
        >
          Your name
        </label>
        <input
          id="testimonial-name"
          autoComplete="name"
          className={field}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "testimonial-name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p
            id="testimonial-name-error"
            role="alert"
            className="mt-1 text-sm text-red-700"
          >
            {errors.name.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="testimonial-message"
          className="mb-1 block text-sm font-medium text-heading"
        >
          Your testimonial
        </label>
        <textarea
          id="testimonial-message"
          rows={4}
          maxLength={2000}
          className={field}
          placeholder="Tell us about your experience..."
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? "testimonial-message-error" : undefined
          }
          {...register("message")}
        />
        {errors.message && (
          <p
            id="testimonial-message-error"
            role="alert"
            className="mt-1 text-sm text-red-700"
          >
            {errors.message.message}
          </p>
        )}
      </div>
      <p className="text-xs text-muted">
        Your message will be sent to SALU CORE ELECTRICAL for review and will
        only be published with approval.
      </p>
      <button
        type="submit"
        disabled={sending}
        className="inline-flex min-h-12 items-center justify-center gap-2 bg-gold px-6 text-sm font-medium text-heading transition-colors hover:bg-[#B18D1F] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Send className="h-4 w-4" aria-hidden />
        )}
        {sending ? "Sending..." : "Submit testimonial"}
      </button>
      <div aria-live="polite">
        {status && (
          <p
            role="status"
            className={`border-l-2 px-4 py-3 text-sm ${
              status.kind === "error"
                ? "border-red-700 bg-red-50 text-red-800"
                : "border-gold bg-gold/5 text-heading"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
