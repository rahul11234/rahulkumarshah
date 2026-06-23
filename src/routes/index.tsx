import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight, Target, Users, ShoppingBag, Search, Repeat, TrendingUp,
  Palette, MessageSquare, CheckCircle2, BarChart3, Zap, FileBarChart,
  Sparkles, Award, Phone, Mail, Building2, DollarSign, User, Send,
  ChevronDown, Rocket, Settings, LineChart, Calendar, PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/site";
import rahulPhoto from "@/assets/rahul-profile.jpg.asset.json";
import rahulIntro from "@/assets/rahul-intro.webm.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rahul K. Sah | Performance Marketing Specialist — Meta Ads Expert" },
      { name: "description", content: "Helping businesses grow with high-converting Meta Ads. Facebook & Instagram advertising for leads, sales, and ROAS." },
      { property: "og:title", content: "Rahul K. Sah | Meta Ads Expert" },
      { property: "og:description", content: "Strategic Facebook & Instagram advertising campaigns that generate leads, sales, and revenue." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <IntroVideo />
      <Services />
      <WhyMe />
      <Portfolio />
      <CaseStudies />
      <Skills />
      <Process />
      <Certifications />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}

/* ---------------- INTRO VIDEO ---------------- */
function IntroVideo() {
  return (
    <section id="intro-video" className="section-pad">
      <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
        <Reveal>
          <SectionLabel>Meet Rahul</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            A 60-second intro to <span className="gradient-text">how I work</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hear directly how I approach Meta Ads for Nepali businesses — from creative angles to message campaigns that convert chats into paying customers.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
            {[{n:"5+",l:"Years"},{n:"100+",l:"Campaigns"},{n:"$0.32",l:"Avg CPL"}].map((x)=>(
              <div key={x.l} className="rounded-xl border border-border p-3 text-center bg-card">
                <div className="font-display text-lg font-bold gradient-text">{x.n}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{x.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl gradient-bg opacity-20 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-elegant">
              <video
                src={rahulIntro.url}
                controls
                playsInline
                preload="metadata"
                poster={rahulPhoto.url}
                className="w-full h-auto aspect-[9/16] sm:aspect-video object-cover bg-black"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[var(--primary-dark)]/20 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
      </div>

      <div className="container-x pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Available for new projects
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Helping Businesses Grow with{" "}
            <span className="gradient-text">High-Converting Meta Ads</span>
          </h1>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground">
            I help businesses generate leads, sales, and revenue through strategic Facebook & Instagram advertising campaigns.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gradient-bg text-primary-foreground hover:opacity-90 shadow-elegant">
              <a href="#contact">
                <Calendar className="mr-2 h-4 w-4" /> Book a Free Consultation
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border">
              <a href="#portfolio">
                <PlayCircle className="mr-2 h-4 w-4" /> View My Work
              </a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Meta Certified</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> 5+ Years Experience</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> 100+ Campaigns</div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl gradient-bg opacity-20 blur-2xl" />
            <div className="relative rounded-3xl border border-border bg-card p-6 shadow-elegant">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-destructive" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                </div>
                <div className="text-xs text-muted-foreground">Meta Ads Manager</div>
              </div>
              <div className="mt-5 space-y-4">
                <DashCard label="ROAS" value="6.8x" trend="+42%" color="from-primary to-[var(--primary-dark)]" />
                <DashCard label="Leads Generated" value="12,486" trend="+128%" color="from-accent to-emerald-500" />
                <DashCard label="Cost Per Lead" value="$0.32" trend="-58%" color="from-[var(--primary-dark)] to-primary" inverse />
                <div className="rounded-xl border border-border p-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Conversion Trend</span><span>30 days</span>
                  </div>
                  <div className="mt-3 flex items-end gap-1.5 h-20">
                    {[40,55,48,72,65,80,68,88,76,92,84,100].map((h,i) => (
                      <div key={i} className="flex-1 rounded-t-md gradient-bg" style={{ height: `${h}%`, opacity: 0.5 + (i/24) }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DashCard({ label, value, trend, color, inverse }: { label: string; value: string; trend: string; color: string; inverse?: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border p-4">
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-display text-2xl font-bold mt-1">{value}</div>
      </div>
      <div className={`text-xs font-semibold rounded-full px-2.5 py-1 bg-gradient-to-r ${color} text-white`}>
        {inverse ? "↓" : "↑"} {trend}
      </div>
    </div>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  const items = [
    { value: 100, suffix: "+", label: "Campaigns Launched" },
    { value: 1, suffix: "M+ USD", label: "Ad Spend Managed" },
    { value: 6, suffix: "x", label: "Average ROAS" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ];
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="container-x py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((s) => (
          <Reveal key={s.label} className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const tags = ["Meta Ads", "Facebook Advertising", "Instagram Advertising", "Lead Generation", "Conversion Campaigns", "E-commerce Marketing", "Campaign Optimization", "Retargeting Strategy"];
  return (
    <section id="about" className="section-pad">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl gradient-bg opacity-15 blur-2xl" />
            <div className="relative rounded-3xl border border-border bg-card overflow-hidden">
              <div className="relative aspect-[4/5]">
                <img
                  src={rahulPhoto.url}
                  alt="Rahul K. Sah — Performance Marketing Specialist based in Nepal"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 rounded-xl bg-background/90 backdrop-blur px-3 py-2 shadow-soft border border-border">
                  <div className="text-[10px] text-muted-foreground">Based in</div>
                  <div className="text-xs font-semibold flex items-center gap-1">📍 Nepal · Global</div>
                </div>
                <div className="absolute bottom-4 left-4 rounded-xl bg-background/90 backdrop-blur px-3 py-2 shadow-soft border border-border">
                  <div className="font-display text-sm font-bold">Rahul K. Sah</div>
                  <div className="text-[11px] text-muted-foreground">Meta Ads Specialist</div>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
                {[{n:"5+",l:"Years"},{n:"100+",l:"Clients"},{n:"6x",l:"Avg ROAS"}].map((x)=>(
                  <div key={x.l} className="p-4 text-center">
                    <div className="font-display text-lg font-bold">{x.n}</div>
                    <div className="text-[11px] text-muted-foreground">{x.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionLabel>About Me</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Performance marketer obsessed with <span className="gradient-text">measurable growth</span>
          </h2>
          <div className="mt-5 space-y-4 text-muted-foreground">
            <p>
              I'm Rahul K. Sah, a Performance Marketing Specialist with hands-on experience running profitable Meta Ads campaigns for startups, e-commerce brands, and service businesses across multiple industries.
            </p>
            <p>
              My approach blends sharp audience research, conversion-led creative, and relentless optimization. From building full-funnel campaign architectures to scaling winning ad sets and reducing CPL, every decision is backed by data — not guesswork.
            </p>
            <p>
              I partner with founders and marketing teams to turn ad spend into predictable, scalable revenue.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    { icon: Target, title: "Meta Ads Management", desc: "End-to-end campaign management across Facebook & Instagram with daily optimization." },
    { icon: Users, title: "Lead Generation Campaigns", desc: "High-intent lead funnels that drive qualified inquiries at the lowest possible cost." },
    { icon: ShoppingBag, title: "E-commerce Sales Campaigns", desc: "Conversion-focused campaigns built to scale ROAS for online stores." },
    { icon: Search, title: "Audience Research & Targeting", desc: "Deep audience analysis to find the customers most likely to buy." },
    { icon: Repeat, title: "Retargeting Campaigns", desc: "Re-engage warm visitors and abandoned carts to recover lost revenue." },
    { icon: TrendingUp, title: "Conversion Optimization", desc: "Landing page and funnel optimization to maximize conversion rates." },
    { icon: Palette, title: "Creative Strategy", desc: "Scroll-stopping ad creative concepts that resonate and convert." },
    { icon: MessageSquare, title: "Marketing Consultation", desc: "Strategic guidance to align your marketing with real business outcomes." },
  ];
  return (
    <section id="services" className="section-pad bg-muted/30 border-y border-border">
      <div className="container-x">
        <div className="max-w-2xl">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Full-service Meta Ads, built for <span className="gradient-text">measurable ROI</span>
          </h2>
          <p className="mt-4 text-muted-foreground">A complete suite of services to plan, launch, and scale profitable advertising on Facebook and Instagram.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-elegant transition-all">
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-bg text-primary-foreground group-hover:scale-110 transition">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY ME ---------------- */
function WhyMe() {
  const items = [
    { icon: BarChart3, title: "Data-Driven Decisions", desc: "Every campaign decision backed by analytics, not assumptions." },
    { icon: TrendingUp, title: "ROI-Focused Campaigns", desc: "Built around real business outcomes — leads, sales, revenue." },
    { icon: Zap, title: "Continuous Optimization", desc: "Daily monitoring and iterative testing to scale what works." },
    { icon: FileBarChart, title: "Transparent Reporting", desc: "Clear, no-jargon reports so you always know what's working." },
    { icon: Sparkles, title: "Personalized Strategy", desc: "No templates. Every plan is tailored to your goals and audience." },
    { icon: Award, title: "Latest Meta Practices", desc: "Up-to-date with Advantage+ campaigns and the latest ad tech." },
  ];
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <SectionLabel>Why Work With Me</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            A partner who treats your ad spend like <span className="gradient-text">their own</span>
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border p-6 bg-card hover:bg-primary/5 transition">
                <it.icon className="h-7 w-7 text-primary" />
                <div className="mt-4 font-display text-lg font-semibold">{it.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
function Portfolio() {
  const projects = [
    { client: "Himalayan Threads", industry: "Fashion · Kathmandu", objective: "Drive online sales via Instagram", strategy: "Advantage+ Shopping + Nepali creative testing", results: "5.2x ROAS · $2.85 CPP", color: "from-pink-500 to-primary" },
    { client: "Annapurna Trekking Co.", industry: "Travel · Pokhara", objective: "Generate trek inquiries", strategy: "Messenger Ads + WhatsApp follow-up", results: "640 chats · $0.38 / chat", color: "from-accent to-emerald-500" },
    { client: "EverestEdu Consultancy", industry: "Abroad Study · Kathmandu", objective: "Student counselling leads", strategy: "Instant Forms + lookalike of past students", results: "1,180 leads · $0.48 CPL", color: "from-primary to-[var(--primary-dark)]" },
    { client: "Newa Kitchen", industry: "Restaurant · Lalitpur", objective: "Daily table bookings", strategy: "Click-to-WhatsApp + reels ads", results: "+212% bookings · $0.09 / msg", color: "from-amber-500 to-pink-500" },
    { client: "Sherpa Realty", industry: "Real Estate · Bhaktapur", objective: "Site visit bookings", strategy: "Lead Gen + retargeting visitors", results: "320 site visits · $1.20 / lead", color: "from-[var(--primary-dark)] to-accent" },
    { client: "Tamang Organic Tea", industry: "D2C · Ilam", objective: "Scale e-commerce orders", strategy: "Advantage+ Shopping · UGC reels", results: "4.6x ROAS · 38% new buyers", color: "from-orange-500 to-red-500" },
  ];
  return (
    <section id="portfolio" className="section-pad bg-muted/30 border-y border-border">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
              Selected work & <span className="gradient-text">client wins</span>
            </h2>
          </div>
          <Button asChild variant="outline"><a href="#contact">Start your project <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.client} delay={i * 70}>
              <article className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant transition-all">
                <div className={`aspect-[16/10] bg-gradient-to-br ${p.color} relative grid place-items-center`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                  <div className="relative text-white text-center px-4">
                    <div className="font-display text-2xl font-bold">{p.client}</div>
                    <div className="text-xs opacity-90 mt-1">{p.industry}</div>
                  </div>
                </div>
                <div className="p-5 space-y-3 text-sm">
                  <Row label="Objective" value={p.objective} />
                  <Row label="Strategy" value={p.strategy} />
                  <Row label="Results" value={p.results} highlight />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className={`mt-0.5 ${highlight ? "font-semibold text-accent" : ""}`}>{value}</div>
    </div>
  );
}

/* ---------------- CASE STUDIES ---------------- */
function CaseStudies() {
  const cases = [
    {
      title: "Newa Kitchen — Click-to-WhatsApp Message Campaign",
      tag: "Message Campaign · Lalitpur",
      metrics: [
        { k: "Conversations", v: "2,840" }, { k: "Cost / Message", v: "$0.09" },
        { k: "Bookings", v: "612" }, { k: "Reach", v: "184K" },
      ],
      summary:
        "Built a Click-to-WhatsApp campaign for a Newari restaurant in Patan. Used short Nepali-language reels of signature dishes with a one-tap WhatsApp CTA. Weekend tables booked out 6 weeks in a row, with cost per message dropping 47% after the first creative refresh.",
    },
    {
      title: "Himalayan Threads — Instagram Sales Campaign in Kathmandu",
      tag: "Sales Campaign · Fashion",
      metrics: [
        { k: "ROAS", v: "5.2x" }, { k: "Cost / Purchase", v: "$2.85" },
        { k: "Orders", v: "1,460" }, { k: "Reach", v: "920K" },
      ],
      summary:
        "Restructured the ad account into Advantage+ Shopping with 3 creative angles: festival drops, daily-wear styling, and customer reviews in Nepali. Scaled monthly ad spend from $720 to $2,880 while keeping ROAS above 5x for 3 months straight.",
    },
    {
      title: "EverestEdu Consultancy — Abroad Study Lead Campaign",
      tag: "Lead Campaign · Education",
      metrics: [
        { k: "Leads", v: "1,180" }, { k: "Cost / Lead", v: "$0.48" },
        { k: "Counselling Shows", v: "68%" }, { k: "Enrollments", v: "184" },
      ],
      summary:
        "Built an Instant Form lead funnel targeting Bagmati province parents and +2 graduates. Used lookalike audiences from past visa-approved students and country-specific creatives (Australia, Japan, UK). Delivered 1,180 qualified leads in 8 weeks at $0.48 CPL — well below the $1.50+ industry average.",
    },
    {
      title: "Annapurna Trekking Co. — Monsoon Off-Season Message Ads",
      tag: "Message Campaign · Travel",
      metrics: [
        { k: "Chats", v: "640" }, { k: "Cost / Chat", v: "$0.38" },
        { k: "Trek Bookings", v: "92" }, { k: "Avg. Ticket", v: "$340" },
      ],
      summary:
        "Ran a Messenger + WhatsApp campaign targeting Indian and domestic travellers during a typically slow season. Custom audience exclusions filtered out past bookers, and a quick 4-question chat flow qualified leads before the sales team replied.",
    },
  ];
  return (
    <section id="case-studies" className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Real campaigns. <span className="gradient-text">Real numbers.</span>
          </h2>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 hover:shadow-elegant transition">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{c.tag}</div>
                <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.summary}</p>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {c.metrics.map((m) => (
                    <div key={m.k} className="rounded-xl border border-border p-3 text-center">
                      <div className="font-display text-lg font-bold gradient-text">{m.v}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{m.k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
function Skills() {
  const skills = [
    { name: "Meta Ads Manager", v: 98 },
    { name: "Facebook Ads", v: 96 },
    { name: "Instagram Ads", v: 94 },
    { name: "Audience Targeting", v: 92 },
    { name: "Conversion Tracking", v: 90 },
    { name: "Analytics", v: 88 },
    { name: "Retargeting", v: 95 },
    { name: "Funnel Strategy", v: 91 },
  ];
  return (
    <section className="section-pad bg-muted/30 border-y border-border">
      <div className="container-x">
        <div className="max-w-2xl">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Tools & disciplines I work in <span className="gradient-text">daily</span>
          </h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 50}>
              <div>
                <div className="flex justify-between text-sm font-medium">
                  <span>{s.name}</span><span className="text-muted-foreground">{s.v}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full gradient-bg rounded-full"
                    style={{ width: `${s.v}%`, animation: "progress-fill 1.4s ease-out" }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { icon: Phone, title: "Discovery Call", desc: "Understand your business, goals, and current marketing." },
    { icon: Search, title: "Market Research", desc: "Audience, competitor and offer analysis." },
    { icon: Settings, title: "Campaign Setup", desc: "Account structure, tracking, creative briefs." },
    { icon: Rocket, title: "Launch", desc: "Go live with tested ad sets and clear KPIs." },
    { icon: Zap, title: "Optimization", desc: "Daily tweaks, scale winners, kill losers." },
    { icon: LineChart, title: "Reporting", desc: "Transparent weekly insights and next moves." },
  ];
  return (
    <section id="process" className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <SectionLabel>Process</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            A clear path from <span className="gradient-text">brief to results</span>
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="relative rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition">
                <div className="absolute -top-3 -left-3 grid h-9 w-9 place-items-center rounded-full gradient-bg text-primary-foreground text-sm font-bold shadow-soft">
                  {i + 1}
                </div>
                <s.icon className="h-7 w-7 text-primary" />
                <div className="mt-4 font-display text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CERTIFICATIONS ---------------- */
function Certifications() {
  const certs = [
    { name: "Meta Advertising Certification", issuer: "Meta Blueprint" },
    { name: "Performance Marketing Training", issuer: "Industry Bootcamp" },
    { name: "Digital Marketing Certifications", issuer: "Google & HubSpot" },
  ];
  return (
    <section className="section-pad bg-muted/30 border-y border-border">
      <div className="container-x">
        <div className="max-w-2xl">
          <SectionLabel>Certifications</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Trained by the <span className="gradient-text">best platforms</span> in the industry
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <div className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4 hover:shadow-elegant transition">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-bg text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-semibold">{c.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{c.issuer}</div>
                  <div className="mt-3 text-[11px] inline-flex items-center gap-1 text-accent font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Verified
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const reviews = [
    { name: "Priya Sharma", role: "Founder, Lumen Skincare", quote: "Rahul scaled our ad spend 4x while keeping ROAS above 6x. Easily the most thoughtful media buyer we've worked with." },
    { name: "Arjun Mehta", role: "Owner, FitForge Gym", quote: "Our pipeline went from empty to overflowing. The lead quality is far better than any agency we tried before." },
    { name: "Sneha Rao", role: "Marketing Head, EduPath", quote: "Rahul's funnel strategy 3x'd our enrollments. He explains everything clearly and reports results weekly." },
    { name: "Daniel K.", role: "Co-founder, BrewCraft Co.", quote: "Beyond Meta Ads — he treats it like a real growth role. Our repeat orders climbed significantly." },
  ];
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            What clients <span className="gradient-text">are saying</span>
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <figure className="h-full rounded-2xl border border-border bg-card p-6 sm:p-8 hover:shadow-elegant transition">
                <div className="text-primary text-3xl leading-none font-display">"</div>
                <blockquote className="mt-2 text-base sm:text-lg">{r.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full gradient-bg text-primary-foreground font-bold">
                    {r.name.split(" ").map((n) => n[0]).slice(0,2).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BLOG ---------------- */
function Blog() {
  const posts = [
    { title: "5 Meta Ads Mistakes That Kill Your ROAS", tag: "Strategy", read: "5 min" },
    { title: "How to Build a Creative Testing Framework in 2025", tag: "Creative", read: "7 min" },
    { title: "Advantage+ vs Manual Campaigns: What's Actually Working", tag: "Meta Updates", read: "6 min" },
  ];
  return (
    <section id="blog" className="section-pad bg-muted/30 border-y border-border">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <SectionLabel>Blog</SectionLabel>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
              Insights on <span className="gradient-text">Meta advertising</span>
            </h2>
          </div>
          <span className="text-xs text-muted-foreground">More articles coming soon</span>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group h-full rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant transition">
                <div className="aspect-[16/9] gradient-bg relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span className="rounded-full bg-primary/10 text-primary px-2 py-0.5 font-semibold">{p.tag}</span>
                    <span>{p.read} read</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold group-hover:text-primary transition">{p.title}</h3>
                  <div className="mt-4 inline-flex items-center text-sm text-primary font-medium">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    { q: "What's your typical engagement model?", a: "I work on monthly retainers tailored to your ad spend and goals. Project-based campaigns are also available." },
    { q: "What is the minimum ad budget you work with?", a: "For Nepali businesses I usually start from around $200–$300/month in ad spend — enough to gather data and prove the funnel before scaling." },
    { q: "How quickly will I see results?", a: "Most clients see directional results within the first 2 weeks, with meaningful ROAS improvements by week 4–6." },
    { q: "Do you handle creative production?", a: "I provide creative direction and briefs. I can collaborate with your designer or recommend trusted creators." },
    { q: "Will I own my Meta Ads account?", a: "Always. You own your Business Manager, ad account, pixel, and all assets — full transparency, no lock-ins." },
  ];
  return (
    <section id="faq" className="section-pad">
      <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Don't see your question? Reach out via WhatsApp and I'll respond personally.</p>
          <Button asChild className="mt-6 gradient-bg text-primary-foreground"><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Ask on WhatsApp</a></Button>
        </Reveal>
        <Reveal delay={120}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`q-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  <span className="flex items-center gap-3">
                    <ChevronDown className="h-4 w-4 text-primary shrink-0 hidden" />
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) || "").trim();

    const name = get("name");
    const phone = get("phone");
    const email = get("email");
    const business = get("business");
    const budget = get("budget");
    const message = get("message");

    if (!name || !email || !phone) {
      toast.error("Please fill in your name, email and phone.");
      setSubmitting(false);
      return;
    }

    const text = [
      "*New Inquiry — rahulksah.com*",
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Email:* ${email}`,
      `*Business:* ${business || "—"}`,
      `*Monthly Ad Budget:* ${budget || "—"}`,
      "",
      "*Message:*",
      message || "—",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your message…");
    setTimeout(() => setSubmitting(false), 600);
  };

  return (
    <section id="contact" className="section-pad bg-muted/30 border-t border-border">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Let's grow your business with <span className="gradient-text">Meta Ads</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell me a little about your business and goals. I'll review your details and reply within 24 hours.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> +977 9804885936</div>
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> hello@rahulksah.com</div>
          </div>
          <div className="mt-8 rounded-2xl border border-border overflow-hidden bg-card">
            <iframe
              title="Location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=85.28%2C27.68%2C85.36%2C27.75&layer=mapnik"
              className="w-full h-56 border-0"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft space-y-4">
            <Field id="name" label="Full Name" icon={User}>
              <Input id="name" name="name" placeholder="John Doe" required />
            </Field>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field id="phone" label="Phone Number" icon={Phone}>
                <Input id="phone" name="phone" type="tel" placeholder="+1 555 000 0000" required />
              </Field>
              <Field id="email" label="Email" icon={Mail}>
                <Input id="email" name="email" type="email" placeholder="you@company.com" required />
              </Field>
            </div>
            <Field id="business" label="Business Name" icon={Building2}>
              <Input id="business" name="business" placeholder="Your company" />
            </Field>
            <Field id="budget" label="Monthly Ad Budget" icon={DollarSign}>
              <select
                id="budget" name="budget"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                defaultValue=""
              >
                <option value="" disabled>Select a range</option>
                <option>Under $500</option>
                <option>$500 – $1,000</option>
                <option>$1,000 – $5,000</option>
                <option>$5,000 – $10,000</option>
                <option>$10,000+</option>
              </select>
            </Field>
            <Field id="message" label="Message" icon={MessageSquare}>
              <Textarea id="message" name="message" placeholder="Tell me about your business and goals…" rows={4} />
            </Field>
            <Button type="submit" disabled={submitting} className="w-full gradient-bg text-primary-foreground hover:opacity-90 h-11">
              {submitting ? "Sending…" : (<><Send className="mr-2 h-4 w-4" /> Send via WhatsApp</>)}
            </Button>
            <p className="text-[11px] text-muted-foreground text-center">By submitting you'll be redirected to WhatsApp with your details pre-filled.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ id, label, icon: Icon, children }: { id: string; label: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="flex items-center gap-2 text-sm">
        <Icon className="h-3.5 w-3.5 text-primary" /> {label}
      </Label>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}
