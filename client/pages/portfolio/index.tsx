import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Layers, Sparkles, BarChart3 } from "lucide-react";

import { projects } from "@/data/projects";

const capabilities = [
  {
    icon: Layers,
    title: "End-to-end product pods",
    copy: "Cross-functional squads that cover research, design, engineering, QA, and growth so outcomes stay aligned.",
  },
  {
    icon: Sparkles,
    title: "Design systems & craft",
    copy: "Reusable tokens, components, and motion principles implemented across platforms for brand consistency.",
  },
  {
    icon: BarChart3,
    title: "Outcome-driven delivery",
    copy: "Experimentation frameworks, analytics loops, and executive-ready reporting baked into every engagement.",
  },
];

const metrics = [
  { label: "Products launched", value: "130+" },
  { label: "Avg. team tenure", value: "3.2 yrs" },
  { label: "Global markets", value: "15" },
  { label: "Deployment frequency", value: "Daily" },
];

const process = [
  "Discover & align on KPIs",
  "Co-design experience & architecture",
  "Run build sprints with QA + observability",
  "Launch, measure, and iterate with growth loops",
];

const Portfolio = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Selected work</p>
        <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr,1fr]">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Digital products, platforms, and brand experiences built with measurable impact.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Every engagement pairs strategy with execution. We operate as embedded product teams that ship quickly,
              de-risk delivery, and make sure the humans using your software feel the difference.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border bg-primary/5 px-6 py-4 text-center shadow-sm min-w-[160px]"
                >
                  <p className="text-3xl font-semibold text-primary">{metric.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border bg-gradient-to-br from-primary/10 via-background to-primary/5 p-8 shadow-lg">
            <h2 className="text-xl font-semibold">How we partner</h2>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              {process.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[hsl(36,100%,50%)] px-6 py-3 text-white shadow hover:opacity-95 transition"
            >
              Share your brief <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities snapshot */}
      <section className="bg-muted/40">
        <div className="container max-w-6xl mx-auto px-4 py-16 grid gap-6 md:grid-cols-3">
          {capabilities.map((capability) => (
            <div key={capability.title} className="rounded-3xl border bg-background p-6 shadow-sm">
              <capability.icon size={28} className="text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{capability.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{capability.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Case studies</p>
            <h2 className="mt-2 text-3xl font-semibold">Recent launches</h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Request full portfolio <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-[28px] border bg-background overflow-hidden shadow-sm flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={project.cover} alt={project.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm tracking-widest uppercase">{project.sector}</p>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
              </div>
              <div className="flex flex-col gap-5 p-6 flex-1">
                <p className="text-sm text-muted-foreground">{project.summary}</p>
                <ul className="space-y-2 text-sm font-semibold">
                  {project.metrics.map((stat) => (
                    <li key={stat.label} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-primary">{stat.value}</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {stat.label}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Dive deeper <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="rounded-[40px] border bg-gradient-to-br from-primary/15 via-background to-primary/5 p-10 shadow-xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Let’s build together</p>
            <h2 className="mt-4 text-3xl font-semibold">
              Provide the vision. We’ll handle the roadmap, delivery, and results.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Tell us about your next initiative—product overhaul, commerce experience, enterprise tool, or growth lab.
              We will assemble a squad around your KPIs and plug into your workflow within days.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(36,100%,50%)] px-6 py-3 text-white shadow hover:opacity-95 transition"
              >
                Book a working session <ArrowRight size={18} />
              </a>
              <a href="/services/flutter-development" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
                Browse capabilities
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
