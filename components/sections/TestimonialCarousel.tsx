"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    image: "/images/testimonial-1.jpeg",
    message:
      "I appreciated having everything explained clearly from the beginning. The team was professional, responsive, and made the whole process feel straightforward.",
  },
  {
    image: "/images/testimonial-2.jpeg",
    message:
      "The work was handled with care, and communication was clear at every step. It made a big difference knowing what to expect throughout the project.",
  },
  {
    image: "/images/testimonial-3.jpeg",
    message:
      "From our first conversation to the finished work, the experience felt organized and thoughtful. I would happily recommend a team that takes the time to get things right.",
  },
  {
    image: "/images/testimonial-4.jpeg",
    message:
      "It was reassuring to work with people who listened to what I needed and kept me informed. The whole experience was smooth and professional.",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const showSlide = (index: number) =>
    setActiveIndex((index + testimonials.length) % testimonials.length);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      className="mt-8 md:mt-10"
    >
      <div className="overflow-hidden border border-line bg-white shadow-sm">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map(({ image, message }, index) => (
            <article
              key={image}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${testimonials.length}`}
              aria-hidden={activeIndex !== index}
              className="grid w-full shrink-0 md:min-h-[25rem] md:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="relative h-80 bg-light-gray md:h-auto">
                <Image
                  src={image}
                  alt="Portrait of a Salu client"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-top"
                  priority={index === 0}
                />
              </div>
              <div className="flex flex-col justify-center p-7 md:p-12 lg:p-16">
                <Quote
                  aria-hidden
                  className="mb-6 h-9 w-9 fill-gold/15 text-gold"
                  strokeWidth={1.5}
                />
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Client testimonial
                </p>
                <blockquote className="font-display text-xl leading-relaxed text-heading md:text-2xl">
                  “{message}”
                </blockquote>
                <p className="mt-7 text-sm font-medium text-muted">
                  Salu client
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-sm text-muted" aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")}{" "}
          <span aria-hidden>/</span>{" "}
          {String(testimonials.length).padStart(2, "0")}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => showSlide(activeIndex - 1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center border border-line text-heading transition-colors hover:border-gold hover:bg-gold/10"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => showSlide(activeIndex + 1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center border border-line text-heading transition-colors hover:border-gold hover:bg-gold/10"
          >
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => showSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all ${
              activeIndex === index
                ? "w-8 bg-gold"
                : "w-2.5 bg-line hover:bg-gold/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
