"use client";
import { motion } from "motion/react";
type Props = React.ComponentProps<"a"> & { variant?: "primary" | "ghost" };
const styles = { primary: "bg-gold text-heading hover:bg-[#B18D1F]", ghost: "border border-gold text-heading hover:bg-gold/10" };
export default function Button({ variant = "primary", className = "", ...p }: Props) {
  return <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className={`inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium transition-colors ${styles[variant]} ${className}`} {...(p as object)} />;
}
