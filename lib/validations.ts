import { z } from "zod";
export const SERVICES = ["Electrical Design","Electrical Installation","Electrical Maintenance","Electrical Troubleshooting","Electrical Consultation","Solar & Inverter Installation"] as const;
export const TYPES = ["Residential","Commercial","Industrial","Other"] as const;
export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  phone: z.string().trim().min(7, "Please enter a valid phone number").regex(/^[+\d\s()-]+$/, "Use digits, spaces, + or - only"),
  email: z.string().trim().email("Please enter a valid email address"),
  service: z.enum(SERVICES, { errorMap: () => ({ message: "Please select a service" }) }),
  location: z.string().trim().min(2, "Please enter the project location"),
  type: z.enum(TYPES, { errorMap: () => ({ message: "Please select a project type" }) }),
  description: z.string().trim().min(10, "Please describe your project (at least 10 characters)"),
});
export type Enquiry = z.infer<typeof enquirySchema>;
export const testimonialSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name must be 80 characters or fewer"),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000, "Message must be 2000 characters or fewer"),
});
export type Testimonial = z.infer<typeof testimonialSchema>;
export const WHATSAPP_NUMBER = "2349056186734";
export const EMAIL = "bugggy10100@gmail.com";
export function whatsappUrl(d: Enquiry) {
  const msg = `Hello SAL U CORE-ELECTRICAL,\n\nI would like to make a project enquiry.\n\nCUSTOMER DETAILS:\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\n\nPROJECT DETAILS:\nService Required: ${d.service}\nProject Location: ${d.location}\nProject Type: ${d.type}\n\nPROJECT DESCRIPTION:\n${d.description}\n\nI would like to discuss this project and request a quote.\n\nThank you.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
