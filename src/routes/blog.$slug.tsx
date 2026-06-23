import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { getPost, posts } from "@/lib/blog";
import { WHATSAPP_LINK } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Article — Rahul K. Sah" }] };
    return {
      meta: [
        { title: `${post.title} — Rahul K. Sah` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Article not found</h1>
      <p className="mt-3 text-muted-foreground">The post you're looking for doesn't exist.</p>
      <Button asChild className="mt-6"><Link to="/">Back to home</Link></Button>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-x py-24 text-center">
      <h1 className="font-display text-2xl font-bold">Couldn't load this article</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      <Button onClick={reset} className="mt-6">Try again</Button>
    </div>
  ),
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="section-pad">
      <div className="container-x max-w-3xl">
        <Reveal>
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to home
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full bg-primary/10 text-primary px-2.5 py-1 font-semibold">{post.tag}</span>
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
            </span>
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <Clock className="h-3.5 w-3.5" /> {post.read} read
            </span>
          </div>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 aspect-[16/9] rounded-2xl gradient-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
            <div className="absolute bottom-4 left-4 text-white/90 text-xs font-medium">
              By Rahul K. Sah · Meta Ads Specialist
            </div>
          </div>
        </Reveal>

        <div className="mt-10 space-y-6">
          {post.content.map((block, i) => (
            <Reveal key={i} delay={i * 40}>
              {block.heading && (
                <h2 className="font-display text-xl sm:text-2xl font-bold mt-4">{block.heading}</h2>
              )}
              <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">{block.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="font-display text-lg sm:text-xl font-bold">
            Want this kind of thinking applied to your ad account?
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Free 30-min audit — I'll point out the biggest leaks in your current Meta Ads setup.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild className="gradient-bg text-primary-foreground">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </Button>
            <Button asChild variant="outline"><Link to="/">View case studies</Link></Button>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <div className="font-display text-xl font-bold">Keep reading</div>
            <div className="mt-5 grid sm:grid-cols-2 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/blog/$slug"
                  params={{ slug: r.slug }}
                  className="group rounded-2xl border border-border bg-card p-5 hover:shadow-elegant hover:border-primary/40 transition"
                >
                  <div className="text-[11px] inline-block rounded-full bg-primary/10 text-primary px-2 py-0.5 font-semibold">
                    {r.tag}
                  </div>
                  <div className="mt-3 font-display font-semibold group-hover:text-primary transition">
                    {r.title}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{r.read} read</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
