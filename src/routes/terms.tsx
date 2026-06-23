import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Rahul K. Sah" },
      { name: "description", content: "Terms & Conditions governing use of rahulksah.com." },
      { property: "og:title", content: "Terms & Conditions — Rahul K. Sah" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <article className="container-x section-pad max-w-3xl">
      <h1 className="font-display text-4xl font-bold">Terms & Conditions</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
      <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>By accessing this website, you agree to the following terms. If you do not agree, please discontinue use of the site.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Content</h2>
        <p>All content on this site is for informational purposes. Results referenced in case studies are specific to individual clients and not a guarantee of future performance.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Intellectual Property</h2>
        <p>All trademarks, logos, and copy on this site are the property of their respective owners and may not be reused without permission.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Engagements</h2>
        <p>Any consulting or marketing engagement is governed by a separate written agreement between Rahul K. Sah and the client.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Liability</h2>
        <p>This site and its contents are provided "as is" without warranty of any kind. Rahul K. Sah is not liable for any indirect damages arising from the use of this website.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Contact</h2>
        <p>For questions about these terms, email hello@rahulksah.com.</p>
      </div>
    </article>
  );
}
