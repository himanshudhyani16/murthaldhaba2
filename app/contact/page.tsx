import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInformation } from "@/components/contact/ContactInformation";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact Us | Murthal Dhaba Indian Restaurant Calgary",
  description:
    "Contact Murthal Dhaba in NE Calgary for reservations, events & inquiries. Find our address, phone number, hours & directions. Call or visit us today.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" breadcrumb="CONTACT" />
      <ContactInformation />
      <ContactForm />

    </>
  );
}
