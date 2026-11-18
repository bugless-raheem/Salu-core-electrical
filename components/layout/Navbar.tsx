"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
const links = ["Home","About","Services","Projects","Testimonials","Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const go = (e: React.MouseEvent, id: string) => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: string, o: object) => void } }).__lenis;
    setOpen(false);
    if (lenis) { e.preventDefault(); lenis.scrollTo(`#${id}`, { offset: -72 }); history.replaceState(null, "", `#${id}`); }
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:px-12">
        <a href="#home" onClick={(e) => go(e, "home")} className="font-display text-base font-semibold tracking-wide text-heading">SALU CORE <span className="text-gold">ELECTRICAL</span></a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} onClick={(e) => go(e, l.toLowerCase())} className="text-sm text-body transition-colors hover:text-gold">{l}</a></li>)}
          <li><Button href="#contact" onClick={(e) => go(e, "contact")} variant="primary">Request a Quote</Button></li>
        </ul>
        <button className="p-2 text-heading lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-line bg-white lg:hidden">
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} onClick={(e) => go(e, l.toLowerCase())} className="block py-3 text-lg text-heading">{l}</a></li>)}
              <li className="pt-2"><Button href="#contact" onClick={(e) => go(e, "contact")} variant="primary" className="w-full">Request a Quote</Button></li>
            </ul>
          </motion.div>)}
      </AnimatePresence>
    </header>
  );
}
