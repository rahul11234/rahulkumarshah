export type BlogPost = {
  slug: string;
  title: string;
  tag: string;
  read: string;
  date: string;
  excerpt: string;
  content: { heading?: string; body: string }[];
};

export const posts: BlogPost[] = [
  {
    slug: "meta-ads-mistakes-that-kill-roas",
    title: "5 Meta Ads Mistakes That Kill Your ROAS",
    tag: "Strategy",
    read: "5 min",
    date: "2026-05-12",
    excerpt:
      "Most underperforming Meta Ads accounts I audit share the same five issues. Fix these and ROAS usually climbs within 2–3 weeks — no extra budget needed.",
    content: [
      {
        body: "After auditing 80+ ad accounts for Nepali and global brands in the last two years, I keep seeing the same pattern. The platform isn't broken, the targeting isn't dead, and Advantage+ isn't the silver bullet — most accounts are just leaking money through five very fixable mistakes.",
      },
      {
        heading: "1. Optimising for the wrong event",
        body: "If your pixel is firing 'Add to Cart' but your campaign is optimised for 'Landing Page Views', Meta is buying the cheapest clicks — not the buyers. Always optimise for the deepest event you can get at least 30–50 conversions per week on. For small Nepali stores I often start on 'Initiate Checkout' and graduate to 'Purchase' once volume is there.",
      },
      {
        heading: "2. Too many ad sets, not enough budget",
        body: "Splitting $10/day across 8 ad sets means no ad set ever leaves the learning phase. Consolidate. 1–2 ad sets per campaign, broad targeting, and let the algorithm do its job. This single change has rescued more accounts than any creative rewrite.",
      },
      {
        heading: "3. Creative fatigue you never measured",
        body: "Watch frequency and CTR by ad, not by campaign. When CTR drops 25% from its peak or frequency crosses 3.5 in a 7-day window, the creative is cooked. Have the next batch ready before that happens — don't wait for CPA to spike.",
      },
      {
        heading: "4. No exclusions on retargeting",
        body: "Showing purchase ads to people who already bought yesterday is the fastest way to burn cash and annoy customers. Build a clean exclusion stack: past purchasers (30/90/180 days), current leads, and employees. Yes, employees — they click everything.",
      },
      {
        heading: "5. Judging campaigns on day 2",
        body: "Meta needs roughly 7 days and ~50 conversions to exit learning. Killing an ad set on day 3 because CPL looks high is sabotage. Set a clear kill rule before launch (e.g. 'pause if CPL > 2x target after 7 days and 50 results') and stick to it.",
      },
      {
        heading: "The takeaway",
        body: "None of this is glamorous. But fix these five and you'll usually find 30–60% more efficiency hiding inside your existing budget — before you ever touch creative or targeting.",
      },
    ],
  },
  {
    slug: "creative-testing-framework-2026",
    title: "How to Build a Creative Testing Framework in 2026",
    tag: "Creative",
    read: "7 min",
    date: "2026-04-02",
    excerpt:
      "A repeatable system for testing Meta Ads creative — angles, hooks, formats — without burning budget on guesswork.",
    content: [
      {
        body: "In 2026, creative is the targeting. iOS limits, Advantage+, and broad audiences mean the ad itself is doing 70%+ of the heavy lifting. Yet most teams still test creative the same way they did in 2019: launch 3 ads, watch for a week, pick a 'winner'. That's not a framework — that's a coin flip.",
      },
      {
        heading: "Step 1 — Define the angle, not the ad",
        body: "Before opening Canva, write 5–8 angles. For a Nepali fashion brand that might be: 'festive look in under Rs.2000', 'office to evening transition', 'monsoon-proof fabric', 'tailor-fit without the wait'. Each angle becomes a mini-campaign of 3 ads (image, reel, carousel).",
      },
      {
        heading: "Step 2 — Use the 3x3 grid",
        body: "3 hooks × 3 formats = 9 ads per angle. Hooks are the first 3 seconds — question, bold claim, pattern interrupt. Formats are static, 9:16 reel, 1:1 carousel. This grid surfaces what's actually working: the message, the medium, or both.",
      },
      {
        heading: "Step 3 — Read the right metric",
        body: "Don't pick winners on CPM or CTR alone. Use Cost Per Result + Hook Rate (3-sec views ÷ impressions). A reel with 35% hook rate but $0.80 CPR beats a static with 8% hook rate and $0.60 CPR — because the reel can scale, the static can't.",
      },
      {
        heading: "Step 4 — Promote, iterate, retire",
        body: "Winning creatives graduate to the main campaign. Losers go into a 'learnings' doc — note WHY they lost (wrong hook? bad offer? format mismatch?). Iterate the winner with new hooks before scaling. Every winner has a 30–45 day shelf life.",
      },
      {
        heading: "Step 5 — Make it weekly, not occasional",
        body: "The teams that win on Meta in 2026 ship 5–10 new creatives per week, every week. Not because they're geniuses — because they have a system. The framework above takes about 4 hours/week once it's running.",
      },
    ],
  },
  {
    slug: "advantage-plus-vs-manual-campaigns",
    title: "Advantage+ vs Manual Campaigns: What's Actually Working",
    tag: "Meta Updates",
    read: "6 min",
    date: "2026-02-18",
    excerpt:
      "After running both side-by-side across 40+ accounts in 2026, here's when Advantage+ wins, when it loses, and how to combine them.",
    content: [
      {
        body: "Advantage+ Shopping Campaigns (ASC) and Advantage+ Leads aren't magic — but they're not snake oil either. The truth is more boring: they win in specific situations and lose badly in others. Here's what I've seen across real accounts.",
      },
      {
        heading: "Where Advantage+ wins",
        body: "Established e-commerce accounts with a clean pixel, 50+ purchases/week, and 3+ creative variants. In these accounts ASC has consistently delivered 15–35% better ROAS than my best manual setups in 2026. The algorithm has enough signal to actually do its job.",
      },
      {
        heading: "Where Advantage+ loses",
        body: "New accounts under 30 weekly conversions, lead-gen for niche services, and anything where the audience is genuinely narrow (geo-locked services, B2B in Nepal). In these cases manual ABO campaigns with 2–3 tight ad sets still outperform — sometimes by 2x.",
      },
      {
        heading: "The hybrid setup I use",
        body: "For most growing accounts I run a 70/30 split: 70% of budget in Advantage+ for scale, 30% in manual campaigns for control — retargeting, specific city pushes, and creative testing. The manual side feeds learnings (and winning creatives) into the Advantage+ side.",
      },
      {
        heading: "What to watch for in 2026",
        body: "Meta keeps quietly expanding what 'Advantage+' touches — placements, audiences, budgets, creative variations. Audit the toggles before every launch. The defaults are not always in your favour, especially the 'Advantage+ creative' enhancements that auto-crop and auto-add music.",
      },
      {
        heading: "Bottom line",
        body: "Advantage+ is a tool, not a strategy. Use it where it has signal, control it where it doesn't, and never let the platform decide what 'good' looks like for your business.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
