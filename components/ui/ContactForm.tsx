"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Loader2, Mail, MessageCircle } from "lucide-react";
import { enquirySchema, type Enquiry, SERVICES, TYPES, EMAIL, whatsappUrl } from "@/lib/validations";

type Status = { kind: "idle" | "sending" | "ok" | "error" | "wa"; msg?: string };
const field =
  "w-full rounded-md border border-line bg-white px-4 py-3 text-body shadow-sm transition-all duration-200 placeholder:text-muted/70 hover:border-heading/30 focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/10";

function SelectChevron() {
  return (
    <span className="pointer-events-none absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors duration-200 group-hover:bg-gold/15 group-focus-within:bg-gold/20">
      <ChevronDown
        aria-hidden
        className="h-4 w-4 transition-transform duration-200 group-focus-within:rotate-180"
      />
    </span>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Enquiry>({ resolver: zodResolver(enquirySchema), defaultValues: { service: "" as never, type: "" as never } });
  const sending = status.kind === "sending";

  const sendEmail = handleSubmit(async (d) => {
    if (sending) return;
    setStatus({ kind: "sending" });
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Project Enquiry — SALU CORE ELECTRICAL",
          _template: "table",
          _captcha: "false",
          _replyto: d.email,
          "Full Name": d.name,
          Phone: d.phone,
          Email: d.email,
          "Service Required": d.service,
          "Project Location": d.location,
          "Project Type": d.type,
          "Project Description": d.description,
        }),
      });

      if (!response.ok) {
        throw new Error("Email submission failed");
      }

      const payload: unknown = await response.json();
      if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
        throw new Error("Email submission failed");
      }

      const result = payload as Record<string, unknown>;
      if (result.success !== "true" && result.success !== true) {
        throw new Error("Email submission failed");
      }

      setStatus({
        kind: "ok",
        msg: "Your request has been sent. We'll be in touch soon.!!",
      });
      reset();
    } catch (error) {
      console.error("FormSubmit email submission failed:", error);
      setStatus({
        kind: "error",
        msg: "Sorry, your message was not sent.",
      });
    }
  });

  const sendWhatsApp = handleSubmit((d) => {
    window.open(whatsappUrl(d), "_blank", "noopener,noreferrer");
    setStatus({
      kind: "wa",
      msg: "WhatsApp has opened with your message. Please press Send there to deliver it.",
    });
  });

  const Err = ({ k }: { k: keyof Enquiry }) => errors[k] ? <p id={`${k}-err`} role="alert" className="mt-1 text-sm text-red-700">{errors[k]?.message}</p> : null;
  const a = (k: keyof Enquiry) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form noValidate onSubmit={(e) => e.preventDefault()} className="space-y-5 border border-line bg-white p-6 md:p-10" aria-label="Project enquiry form">
      <div className="grid gap-5 md:grid-cols-2">
        <div><label htmlFor="name" className="mb-1 block text-sm font-medium text-heading">Full Name</label><input id="name" autoComplete="name" className={field} {...a("name")} {...register("name")} /><Err k="name" /></div>
        <div><label htmlFor="phone" className="mb-1 block text-sm font-medium text-heading">Phone Number</label><input id="phone" type="tel" autoComplete="tel" className={field} {...a("phone")} {...register("phone")} /><Err k="phone" /></div>
      </div>
      <div><label htmlFor="email" className="mb-1 block text-sm font-medium text-heading">Email Address</label><input id="email" type="email" autoComplete="email" className={field} {...a("email")} {...register("email")} /><Err k="email" /></div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1 block text-sm font-medium text-heading">
            Service Required
          </label>
          <div className="group relative">
            <select
              id="service"
              className={`${field} cursor-pointer appearance-none pr-14`}
              {...a("service")}
              {...register("service")}
            >
              <option value="">Select a service</option>
              {SERVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <SelectChevron />
          </div>
          <Err k="service" />
        </div>
        <div>
          <label htmlFor="type" className="mb-1 block text-sm font-medium text-heading">
            Project Type
          </label>
          <div className="group relative">
            <select
              id="type"
              className={`${field} cursor-pointer appearance-none pr-14`}
              {...a("type")}
              {...register("type")}
            >
              <option value="">Select a type</option>
              {TYPES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <SelectChevron />
          </div>
          <Err k="type" />
        </div>
      </div>
      <div><label htmlFor="location" className="mb-1 block text-sm font-medium text-heading">Project Location</label><input id="location" className={field} placeholder="City and state" {...a("location")} {...register("location")} /><Err k="location" /></div>
      <div><label htmlFor="description" className="mb-1 block text-sm font-medium text-heading">Project Description</label><textarea id="description" rows={5} className={field} {...a("description")} {...register("description")} /><Err k="description" /></div>
      <div className="grid gap-3 sm:grid-cols-2">
        <button type="button" onClick={sendEmail} disabled={sending} className="inline-flex min-h-12 items-center justify-center gap-2 bg-gold px-6 text-sm font-medium text-heading transition-colors hover:bg-[#B18D1F] disabled:opacity-60">
          {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
          {sending ? "Sending…" : "Send via Email"}
        </button>
        <button type="button" onClick={sendWhatsApp} disabled={sending} className="inline-flex min-h-12 items-center justify-center gap-2 bg-gold px-6 text-sm font-medium text-heading transition-colors hover:bg-[#B18D1F] disabled:opacity-60">
          <MessageCircle className="h-4 w-4" />
          Send via WhatsApp
        </button>
      </div>
      <div aria-live="polite">{status.msg && <p className={`border-l-2 px-4 py-3 text-sm ${status.kind === "error" ? "border-red-700 bg-red-50 text-red-800" : status.kind === "ok" ? "border-green-700 bg-green-50 text-green-800" : "border-gold bg-gold/5 text-heading"}`}>{status.msg}</p>}</div>
    </form>
  );
}
