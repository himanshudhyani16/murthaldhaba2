import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInformation } from "@/components/contact/ContactInformation";
import { PageHeader } from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" breadcrumb="CONTACT" />
      <ContactInformation />
      <ContactForm />

    </>
  );
}
