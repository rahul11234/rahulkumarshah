import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Rahul K. Sah" },
      { name: "description", content: "Privacy Policy for rahulksah.com — how data submitted via the contact form is handled." },
      { property: "og:title", content: "Privacy Policy — Rahul K. Sah" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <article className="container-x section-pad prose-styles max-w-3xl">
      <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
      <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>This Privacy Policy describes how Rahul K. Sah ("I", "me", "my") collects, uses, and protects information you provide through this website.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Information I Collect</h2>
        <p>When you submit the contact form, I collect your name, phone number, email, business name, monthly ad budget, and message contents. Submissions are transmitted to my WhatsApp account for direct communication.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">How I Use Information</h2>
        <p>Information is used solely to respond to your inquiry, provide consultation, and follow up about potential engagements. It is never sold or shared with third parties for marketing.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Data Retention</h2>
        <p>Inquiry data is retained only as long as needed to provide a response and continue our communication. You can request deletion at any time.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Contact</h2>
        <p>For privacy questions, email hello@rahulksah.com.</p>
      </div>
    </article>
  );
}
