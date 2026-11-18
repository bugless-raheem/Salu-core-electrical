"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => (
        <div key={it.q}>
          <h3 className="font-sans"><button id={`faq-b-${i}`} aria-expanded={open === i} aria-controls={`faq-p-${i}`} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-heading">
            {it.q}<Plus className={`h-5 w-5 shrink-0 text-gold transition-transform ${open === i ? "rotate-45" : ""}`} aria-hidden /></button></h3>
          <AnimatePresence initial={false}>
            {open === i && <motion.div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="max-w-2xl pb-6 text-muted">{it.a}</p></motion.div>}
          </AnimatePresence>
        </div>))}
    </div>);
}
