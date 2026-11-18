"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function HeroArtwork() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-square w-full max-w-124"
    >
      <Image
        src="/images/electrician-at-work.png"
        alt="Illustration of an electrician working on an electrical panel"
        fill
        sizes="(min-width: 1024px) 496px, 100vw"
        className="object-contain"
        priority
      />
    </motion.div>
  );
}
