"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    image: "/images/expertise-01.jpeg",
    title: "Architectural lighting",
    category: "Residential",
    description: "Layered ceiling lighting designed to bring warmth and clarity to a home.",
    alt: "Warm recessed and cove lighting in a residential interior",
  },
  {
    image: "/images/expertise-02.jpeg",
    title: "Interior lighting installation",
    category: "Residential",
    description: "A considered lighting finish for a modern interior.",
    alt: "Modern interior with a geometric ceiling and pendant lighting",
  },
  {
    image: "/images/expertise-03.jpeg",
    title: "Electrical panel & voltage protection",
    category: "Electrical systems",
    description: "Electrical distribution and voltage regulation equipment installed on site.",
    alt: "Electrical distribution panel and voltage stabilizer installation",
  },
  {
    image: "/images/expertise-04.jpeg",
    title: "Custom ceiling lighting",
    category: "Residential",
    description: "A detailed ceiling installation with integrated ambient lighting.",
    alt: "Contemporary ceiling design with integrated warm lighting",
  },
  {
    image: "/images/expertise-05.jpeg",
    title: "Feature ceiling installation",
    category: "Residential",
    description: "A statement ceiling with carefully placed recessed lighting.",
    alt: "Decorative ceiling installation with recessed and cove lighting",
  },
  {
    image: "/images/expertise-06.jpeg",
    title: "Commercial ceiling fit-out",
    category: "Commercial",
    description: "Timber-look ceiling details and lighting during a commercial fit-out.",
    alt: "Commercial interior fit-out with timber-look ceiling and lighting",
  },
] as const;

export default function ExpertiseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const showSlide = (index: number) =>
    setActiveIndex((index + projects.length) % projects.length);
  const activeProject = projects[activeIndex];
  const handleTouchEnd = (touchEnd: number) => {
    if (touchStart.current === null) return;
    const distance = touchStart.current - touchEnd;
    if (Math.abs(distance) > 45) {
      showSlide(activeIndex + (distance > 0 ? 1 : -1));
    }
    touchStart.current = null;
  };

  return (
    <div
      id="expertise-work"
      role="region"
      aria-roledescription="carousel"
      aria-label="Project highlights"
      data-reveal
      className="mt-16 border-t border-heading/10 pt-10 md:mt-20 md:pt-14"
    >
      <div className="mb-7 grid gap-5 md:mb-9 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-12">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            A look at our work
          </p>
          <h3 className="font-display text-3xl leading-tight md:text-4xl">
            See the care behind every detail.
          </h3>
        </div>
        <p className="max-w-xl leading-relaxed text-muted md:justify-self-end md:text-right">
          From considered lighting and ceiling installations to essential
          electrical systems, browse a few examples of the work. Swipe or use
          the controls to explore the gallery.
        </p>
      </div>

      <div
        className="group relative touch-pan-y overflow-hidden bg-heading"
        onTouchStart={(event) => {
          touchStart.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const touchEnd = event.changedTouches[0]?.clientX;
          if (touchEnd !== undefined) handleTouchEnd(touchEnd);
        }}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {projects.map(({ image, title, category, description, alt }, index) => (
            <article
              key={image}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${projects.length}: ${title}`}
              aria-hidden={activeIndex !== index}
              className="relative aspect-[4/3] w-full shrink-0 overflow-hidden sm:aspect-[16/9] lg:aspect-[2.1/1]"
            >
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(min-width: 1280px) 1152px, 100vw"
                priority={index === 0}
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.02] motion-reduce:transition-none"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9 md:p-12">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {category}
                </p>
                <h4 className="font-display text-2xl leading-tight sm:text-3xl md:text-4xl">
                  {title}
                </h4>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                  {description}
                </p>
              </div>
              <span className="absolute right-5 top-5 border border-white/35 bg-black/20 px-3 py-1 text-xs tracking-[0.12em] text-white backdrop-blur-sm sm:right-8 sm:top-8">
                {String(index + 1).padStart(2, "0")}{" "}
                <span aria-hidden>/</span>{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => showSlide(activeIndex - 1)}
          aria-label="Previous project"
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/50 bg-black/20 text-white backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold hover:text-heading sm:left-7 sm:h-12 sm:w-12"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => showSlide(activeIndex + 1)}
          aria-label="Next project"
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/50 bg-black/20 text-white backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold hover:text-heading sm:right-7 sm:h-12 sm:w-12"
        >
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted" aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")}{" "}
          <span aria-hidden>/</span>{" "}
          {String(projects.length).padStart(2, "0")}
          <span className="sr-only"> — {activeProject.title}</span>
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.image}
              type="button"
              onClick={() => showSlide(index)}
              aria-label={`Go to project ${index + 1}: ${project.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-gold"
                  : "w-2 bg-line hover:bg-gold/60"
              }`}
            />
          ))}
          <button
            type="button"
            onClick={() => showSlide(activeIndex + 1)}
            className="ml-2 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-medium text-heading transition-colors hover:text-gold"
          >
            View more
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
