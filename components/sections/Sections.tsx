import {
  PencilRuler,
  Cable,
  Wrench,
  Search,
  MessagesSquare,
  SunMedium,
  Mail,
  MessageCircle,
  MapPin,
  GraduationCap,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/ui/ContactForm";
import TestimonialForm from "@/components/ui/TestimonialForm";
import FAQ from "@/components/ui/FAQ";
import HeroArtwork from "@/components/sections/HeroArtwork";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import ExpertiseCarousel from "@/components/sections/ExpertiseCarousel";
import { EMAIL } from "@/lib/validations";

const wrap = "mx-auto max-w-7xl px-6 md:px-12";
const eyebrow =
  "mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold";
const h2 = "font-display text-3xl leading-tight md:text-5xl";

export function Hero() {
  return (
    <section
      id="home"
      className={`${wrap} grid gap-14 pb-24 pt-32 md:pb-32 md:pt-40 lg:grid-cols-12 lg:items-center`}
    >
      <div className="lg:col-span-7" data-reveal>
        <p className={`${eyebrow} flex items-center gap-3`}>
          <span className="h-px w-8 bg-gold" />
          Electrical engineering, installation &amp; solar
        </p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-[5.25rem]">
          Electrical work, planned well and done right.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
          From design and installation to maintenance and solar, get practical
          help for residential, commercial, and industrial projects.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="#contact" variant="primary">
            Talk about your project
          </Button>
          <Button href="#services" variant="ghost">
            See what we do
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted">
          Owner-operated · Serving Kwara State and Lagos State
        </p>
      </div>
      <div className="lg:col-span-5">
        <HeroArtwork />
      </div>
    </section>
  );
}

export function TrustStrip() {
  const items = [
    [Clock, "5+ Years", "Practical experience"],
    [GraduationCap, "ND", "Electrical Engineering"],
    [GraduationCap, "HND", "Currently pursuing"],
    [MapPin, "Kwara & Lagos", "States served"],
  ] as const;
  return (
    <section aria-label="Experience" className="mt-12 bg-light-gray">
      <ul className={`${wrap} grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4`}>
        {items.map(([I, t, s]) => (
          <li
            key={t + s}
            className="flex items-start gap-3 border-l border-heading/15 pl-4"
          >
            <I className="mt-1 h-5 w-5 text-gold" aria-hidden />
            <div>
              <p className="font-display text-xl text-heading">{t}</p>
              <p className="text-sm text-body/75">{s}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function About() {
  return (
    <section
      id="about"
      className={`${wrap} grid gap-12 py-24 md:py-32 lg:grid-cols-12`}
    >
      <div className="lg:col-span-5" data-reveal>
        <div className="relative aspect-2/3 overflow-hidden border border-line bg-white">
          <Image
            src="/images/malik.jpeg"
            alt="Saliu Malik Olamide Malachi"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="lg:col-span-7 lg:pt-16" data-reveal>
        <p className={eyebrow}>About</p>
        <h2 className={h2}>
          Practical Experience. Professional Electrical Thinking.
        </h2>
        <p className="mt-6 max-w-2xl text-lg">
          SALU CORE ELECTRICAL is an electrical engineering services business
          led by Saliu Malik Olamide Malachi. With five years of practical
          experience and an educational background in Electrical Engineering,
          Malik provides electrical design, installation, maintenance,
          troubleshooting, consultation, and solar/inverter installation
          services.
        </p>
        <p className="mt-4 max-w-2xl text-muted">
          Education: ND in Electrical Engineering, Kwara State Polytechnic.
          Currently pursuing HND.
        </p>
        <div className="mt-10">
          <div className="relative aspect-4/3 overflow-hidden border border-line bg-white lg:max-w-xl">
            <Image
              src="/images/working-photo.png"
              alt="Saliu Malik Olamide Malachi repairing a home electrical panel"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  [
    PencilRuler,
    "Electrical Design",
    "Planning electrical layouts and systems suited to the requirements of your project.",
  ],
  [
    Cable,
    "Electrical Installation",
    "Installation of electrical systems for residential, commercial, and industrial properties.",
  ],
  [
    Wrench,
    "Electrical Maintenance",
    "Maintenance support to keep existing electrical systems in working order.",
  ],
  [
    Search,
    "Electrical Troubleshooting",
    "Diagnosing and resolving electrical faults and issues.",
  ],
  [
    MessagesSquare,
    "Electrical Consultation",
    "Practical electrical advice to help you make informed project decisions.",
  ],
  [
    SunMedium,
    "Solar & Inverter Installation",
    "Solar and inverter installation. Discuss your requirements with us.",
  ],
] as const;
export function Services() {
  const span = [
    "lg:col-span-7",
    "lg:col-span-5",
    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-12",
  ];
  return (
    <section id="services" className="bg-light-gray py-24 md:py-32">
      <div className={wrap}>
        <div data-reveal className="mb-14 max-w-3xl">
          <p className={eyebrow}>Services</p>
          <h2 className={h2}>
            Electrical Services for Every Stage of Your Project.
          </h2>
        </div>
        <div className="grid gap-px border border-line bg-line lg:grid-cols-12">
          {services.map(([I, t, d], i) => (
            <article
              key={t}
              data-reveal
              className={`group bg-white p-8 transition-colors hover:bg-heading md:p-10 ${span[i]}`}
            >
              <span className="font-display text-sm text-muted transition-colors group-hover:text-white/70">
                0{i + 1}
              </span>
              <I
                className="my-6 h-8 w-8 text-gold transition-colors group-hover:text-gold"
                aria-hidden
              />
              <h3 className="text-2xl transition-colors group-hover:text-white!">{t}</h3>
              <p className="mt-3 max-w-md text-muted transition-colors group-hover:text-white/80">
                {d}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  const expertise = [
    {
      title: "Residential",
      description:
        "Thoughtful electrical layouts, lighting, installation, maintenance, and solar or inverter solutions for homes.",
      image: "/images/residential-project.jpeg",
      alt: "Residential electrical installation work inside a home",
    },
    {
      title: "Commercial",
      description:
        "Practical electrical installation and maintenance for business premises, retail spaces, and workplaces.",
      image: "/images/commercial-project.jpeg",
      alt: "Electrician carrying out commercial electrical work outdoors",
    },
    {
      title: "Industrial",
      description:
        "Electrical support for suitable industrial environments, with each project's requirements reviewed up front.",
      image: "/images/industrial-project.jpeg",
      alt: "Industrial electrical equipment and testing work",
    },
  ] as const;
  return (
    <section className="bg-light-gray py-24 md:py-32" aria-labelledby="exp-h">
      <div className={wrap}>
        <div
          data-reveal
          className="mb-12 grid gap-6 border-b border-heading/10 pb-10 md:mb-14 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-12"
        >
          <div>
            <p className={eyebrow}>Areas of Expertise</p>
            <h2 id="exp-h" className={h2}>
              Residential, Commercial, Industrial.
            </h2>
          </div>
          <p className="max-w-xl leading-relaxed text-muted md:justify-self-end md:text-lg">
            Every space has different electrical needs. SALU CORE ELECTRICAL
            brings practical planning and hands-on service to projects of
            different sizes, from a home installation to a business fit-out.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {expertise.map(({ title, description, image, alt }, i) => (
            <article
              key={title}
              data-reveal
              className="group border border-line bg-white transition-shadow duration-500 hover:shadow-xl hover:shadow-heading/5"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-heading">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"
                />
                <span className="absolute left-5 top-5 border border-white/50 bg-black/20 px-3 py-1 text-xs tracking-[0.12em] text-white backdrop-blur-sm">
                  0{i + 1}
                </span>
                <h3 className="absolute bottom-5 left-5 font-display text-2xl text-white! md:text-3xl">
                  {title}
                </h3>
              </div>
              <div className="p-6 md:p-7">
                <p className="leading-relaxed text-muted">{description}</p>
              </div>
            </article>
          ))}
        </div>
        <ExpertiseCarousel />
      </div>
    </section>
  );
}

export function WhyUs() {
  const p = [
    "Five years of practical experience.",
    "Educational background in Electrical Engineering.",
    "Multiple electrical service offerings.",
    "Residential, commercial, and industrial project focus.",
    "Primary service coverage in Kwara and Lagos States.",
    "Negotiable, project-based pricing.",
  ];
  return (
    <section className="bg-light-gray py-24 md:py-32">
      <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-5" data-reveal>
          <p className={eyebrow}>Why Choose Us</p>
          <h2 className={h2}>Why Choose SALU CORE ELECTRICAL?</h2>
          <div className="relative mt-8 aspect-[3/2] w-full max-w-lg">
            <Image
              src="/images/why-choose-illustration.png"
              alt="Illustration of an electrician with a solar panel and safety checklist"
              fill
              sizes="(min-width: 1024px) 459px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
        <ol className="lg:col-span-7">
          {p.map((t, i) => (
            <li
              key={t}
              data-reveal
              className="flex gap-6 border-t border-heading/15 py-6"
            >
              <span className="font-display text-2xl text-gold">0{i + 1}</span>
              <span className="text-lg text-body">{t}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className={`${wrap} py-24 md:py-32`}>
      <div
        data-reveal
        className="relative overflow-hidden bg-light-gray px-8 py-12 text-body md:px-14 md:py-16"
      >
        <div className="relative grid gap-8 md:grid-cols-[1.35fr_0.65fr] md:items-center">
          <div className="max-w-2xl">
            <p className={eyebrow}>Have a project in mind?</p>
            <h2 className={h2}>Let&apos;s start with what you need.</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-body">
              Tell us what you need, whether it&apos;s an installation, a fault
              to trace, or a solar setup. We&apos;ll talk through the next step.
            </p>
            <Button href="#contact" variant="primary" className="mt-7">
              Get in touch
            </Button>
          </div>
          <div
            aria-hidden
            className="relative mx-auto h-56 w-full max-w-sm md:h-72 md:max-w-none"
          >
            <Image
              src="/images/electrician-checklist.png"
              alt=""
              fill
              sizes="(min-width: 768px) 35vw, 100vw"
              className="object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 md:py-32">
      <div className={wrap}>
        <div
          data-reveal
          className="w-full border border-line bg-light-gray p-6 md:p-12"
        >
          <p className={eyebrow}>Testimonials</p>
          <h2 className={h2}>What clients say.</h2>
          <TestimonialCarousel />
          <div className="mt-12 border-t border-line pt-10">
            <p className={eyebrow}>Share your experience</p>
            <h2 className={h2}>Your feedback is welcome.</h2>
            <p className="mt-4 text-muted">
              Tell us about your experience using the form. Submissions are
              reviewed before being shared on the site.
            </p>
            <TestimonialForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const s = [
    [
      "Initial Enquiry",
      "The client shares their requirements and project details.",
    ],
    ["Project Assessment", "The requirements are reviewed and clarified."],
    [
      "Planning & Execution",
      "The work is planned and carried out according to the agreed scope.",
    ],
    ["Project Completion", "The completed work is reviewed with the client."],
  ];
  return (
    <section className={`${wrap} py-24 md:py-32`}>
      <div data-reveal className="mb-14 max-w-3xl">
        <p className={eyebrow}>How It Works</p>
        <h2 className={h2}>A Clear Process From Enquiry to Completion.</h2>
      </div>
      <ol className="grid gap-10 md:grid-cols-4">
        {s.map(([t, d], i) => (
          <li
            key={t}
            data-reveal
            className="relative border-t-2 border-gold pt-6"
          >
            <span className="font-display text-5xl text-heading/15">
              0{i + 1}
            </span>
            <h3 className="mt-2 text-xl">{t}</h3>
            <p className="mt-2 text-muted">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Locations() {
  return (
    <section className="bg-light-gray py-24 md:py-32">
      <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
        <div data-reveal>
          <p className={eyebrow}>Service Locations</p>
          <h2 className={h2}>Working Across Kwara, Lagos, and Beyond.</h2>
        </div>
        <ul data-reveal className="space-y-5 text-lg text-body">
          <li className="flex gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden />
            Kwara State and Lagos State are the primary service areas.
          </li>
          <li className="flex gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden />
            Selected projects in other parts of Nigeria may also be considered.
          </li>
          <li className="flex gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden />
            Travel can be arranged for larger projects.
          </li>
        </ul>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Do you handle residential and commercial electrical projects?",
    a: "Yes. Services are available for residential, commercial, and industrial project environments.",
  },
  {
    q: "What electrical services do you offer?",
    a: "Electrical design, installation, maintenance, troubleshooting, consultation, and solar/inverter installation.",
  },
  {
    q: "Do you install solar and inverter systems?",
    a: "Yes. Solar and inverter installation is among the services offered. Clients can make an enquiry to discuss their project requirements.",
  },
  {
    q: "Which locations do you cover?",
    a: "Kwara State and Lagos State are the primary service areas. Selected projects in other parts of Nigeria may also be considered.",
  },
  {
    q: "Do you have fixed prices?",
    a: "Pricing is negotiable and depends on the nature and requirements of each project.",
  },
  {
    q: "How can I get started?",
    a: "Visitors can submit an enquiry through the website using either email or WhatsApp.",
  },
];
export function FAQSection() {
  return (
    <section className={`${wrap} grid gap-12 py-24 md:py-32 lg:grid-cols-12`}>
      <div className="lg:col-span-4" data-reveal>
        <p className={eyebrow}>FAQ</p>
        <h2 className={h2}>Frequently Asked Questions</h2>
        <div className="relative mt-8 aspect-[3/2] w-full max-w-md">
          <Image
            src="/images/faq-illustration.png"
            alt="Illustration of an electrician answering common questions"
            fill
            sizes="(min-width: 1024px) 352px, 100vw"
            className="object-contain"
          />
        </div>
      </div>
      <div className="lg:col-span-8" data-reveal>
        <FAQ items={faqs} />
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-light-gray py-24 md:py-32">
      <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-5" data-reveal>
          <p className={eyebrow}>Contact</p>
          <h2 className={h2}>Let&apos;s Discuss Your Electrical Project.</h2>
          <p className="mt-5 text-lg text-muted">
            Have a project in mind? Share your requirements with us and
            let&apos;s discuss the right electrical solution for your needs.
          </p>
          <ul className="mt-8 space-y-3">
            <li>
              <a
                className="flex items-center gap-3 text-heading hover:text-gold"
                href={`mailto:${EMAIL}`}
              >
                <Mail className="h-5 w-5 text-gold" aria-hidden />
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 text-heading hover:text-gold"
                href="https://wa.me/2349056186734"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 text-gold" aria-hidden />
                WhatsApp: 09056186734
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-gold" aria-hidden />
              Kwara State and Lagos State, with selected projects considered
              across Nigeria.
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`mailto:${EMAIL}`} variant="primary">
              Email Us
            </Button>
            <Button
              href="https://wa.me/2349056186734"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
        <div className="lg:col-span-7" data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-light-gray text-body">
      <div className={`${wrap} grid gap-10 py-14 md:grid-cols-4`}>
        <div className="md:col-span-2">
          <p className="font-display text-lg text-heading">
            SALU CORE ELECTRICAL
          </p>
          <p className="mt-3 max-w-sm text-sm">
            An owner-operated electrical engineering business offering design,
            installation, maintenance, troubleshooting, consultation, and
            solar/inverter installation.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-3 text-sm font-semibold text-heading">Navigate</p>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "About",
              "Services",
              "Projects",
              "Testimonials",
              "Contact",
            ].map((l) => (
              <li key={l}>
                <a className="hover:text-heading" href={`#${l.toLowerCase()}`}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm">
          <p className="mb-3 font-semibold text-heading">Contact</p>
          <p>
            <a className="hover:text-heading" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
          <p className="mt-2">
            <a
              className="hover:text-heading"
              href="https://wa.me/2349056186734"
            >
              09056186734 (WhatsApp)
            </a>
          </p>
          <p className="mt-2">Kwara State · Lagos State</p>
        </div>
      </div>
      <div
        data-reveal
        className="border-t border-heading/10 py-5 text-center text-xs"
      >
        <p className="mb-2 inline-flex items-center gap-2 font-medium text-heading">
          <span aria-hidden className="text-gold">
            ✝
          </span>
          Jesus is Lord
        </p>
        <p className="text-body/70">
          © {new Date().getFullYear()} SALU CORE ELECTRICAL. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
