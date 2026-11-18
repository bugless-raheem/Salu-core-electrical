import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });
const title = "SALU CORE ELECTRICAL | Electrical Engineering Services";
const description =
  "Professional electrical design, installation, maintenance, troubleshooting, consultation, and solar/inverter installation services in Kwara State, Lagos State, and selected locations across Nigeria.";
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_NG",
    siteName: "SALU CORE ELECTRICAL",
  },
  icons: { icon: "/favicon.png" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable}`}
    >
      <body>
        <MotionConfig reducedMotion="user">
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
