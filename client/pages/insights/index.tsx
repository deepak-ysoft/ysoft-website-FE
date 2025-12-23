import React from "react";
import { ArrowRight, Mic2, NotebookPen, Lightbulb } from "lucide-react";

const articles = [
  {
    title: "Designing enterprise apps that feel as simple as consumer tools",
    summary:
      "Frameworks we use to audit workflows, reduce cognitive load, and launch intuitive UX for complex B2B products.",
    type: "Product Design",
    date: "Nov 04, 2025",
    readTime: "8 min read",
  },
  {
    title: "Our playbook for accelerating React Native releases",
    summary:
      "How YSoft teams standardize architecture, automate QA, and use OTA updates to confidently ship weekly.",
    type: "Engineering",
    date: "Oct 18, 2025",
    readTime: "6 min read",
  },
  {
    title: "Standing up a growth lab inside established organizations",
    summary:
      "Lessons from embedding cross-functional squads that own experimentation and marketing ops end to end.",
    type: "Growth",
    date: "Sep 29, 2025",
    readTime: "10 min read",
  },
];

const podcasts = [
  {
    title: "Dhruvil Patel on crafting outcome-driven product squads",
    length: "32:14",
  },
  {
    title: "Scaling Shopify without sacrificing brand storytelling",
    length: "27:02",
  },
];

const InsightsPage = () => {
  return (
    <div className="bg-background text-foreground">
      <section className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
          Insights & resources
        </p>
        <div className="mt-6 grid gap-8 md:grid-cols-[1.2fr,0.8fr]">
          <div>
            <h1 className="text-4xl font-semibold">
              Field notes on building lovable products and resilient platforms.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We publish practical guides, interviews, and frameworks learned
              from shipping software for ambitious brands. Use these playbooks to
              align teams, move faster, and reduce delivery risk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <NotebookPen size={16} />
                Actionable templates
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Mic2 size={16} />
                Expert interviews
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Lightbulb size={16} />
                Strategic deep dives
              </div>
            </div>
          </div>
          <div className="rounded-[32px] border bg-gradient-to-br from-primary/20 via-background to-primary/5 p-8 shadow-lg">
            <h2 className="text-xl font-semibold">Subscribe for updates</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Monthly digest covering our latest case studies, talk recordings,
              and product thinking.
            </p>
            <form className="mt-6 flex flex-col gap-3 md:flex-row">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-[hsl(36,100%,50%)] px-6 py-3 text-white shadow hover:opacity-95 transition"
              >
                Join list
              </button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">
              No spam—just curated insights from the studio.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
                Latest articles
              </p>
              <h2 className="mt-2 text-3xl font-semibold">On our minds</h2>
            </div>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View all articles
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="rounded-3xl border bg-background p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {article.type}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{article.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {article.summary}
                </p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-4 py-16 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-[32px] border bg-gradient-to-br from-primary/10 via-background to-primary/5 p-8 shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
            Playbooks
          </p>
          <h2 className="mt-2 text-3xl font-semibold">
            Tools to align product, design, and engineering
          </h2>
          <ul className="mt-8 space-y-4 text-muted-foreground">
            <li className="rounded-2xl border bg-white/70 p-5 text-sm backdrop-blur">
              Product Discovery Canvas – a Notion template to map research,
              hypotheses, and success metrics.
            </li>
            <li className="rounded-2xl border bg-white/70 p-5 text-sm backdrop-blur">
              DX Scorecard – a simple scoring model to prioritize developer
              experience investments.
            </li>
            <li className="rounded-2xl border bg-white/70 p-5 text-sm backdrop-blur">
              Growth Experiment Log – track velocity, wins, and learnings across
              channels.
            </li>
          </ul>
        </div>
        <div className="rounded-[32px] border bg-background p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
            Studio podcast
          </p>
          <h2 className="mt-2 text-3xl font-semibold">Signals & Systems</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Conversations with product leaders on the rituals, metrics, and
            mindsets that keep them shipping.
          </p>
          <div className="mt-6 space-y-4">
            {podcasts.map((episode) => (
              <div
                key={episode.title}
                className="rounded-2xl border bg-muted/40 p-4 text-sm"
              >
                <p className="font-semibold">{episode.title}</p>
                <span className="text-xs text-muted-foreground">
                  {episode.length} episode
                </span>
              </div>
            ))}
          </div>
          <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Listen to episodes
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;


