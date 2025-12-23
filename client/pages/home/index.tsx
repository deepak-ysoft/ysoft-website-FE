import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ArrowUpRight, Shield, Sparkles, Clock10, Users } from "lucide-react";
import { Link } from "react-router-dom";

import HeroSection from "./heroSection";
import Testimonials from "./testimonialsSection";
import { serviceCategories } from "@/data/services";
import { projects } from "@/data/projects";

const stats = [
  { label: "Products launched", value: "150+", detail: "across web & mobile" },
  { label: "Avg. team tenure", value: "3.2 yrs", detail: "craft-first squads" },
  { label: "Markets served", value: "12", detail: "global rollouts" },
  { label: "NPS", value: "+68", detail: "partner satisfaction" },
];

const processSteps = [
  {
    icon: Sparkles,
    title: "Discover & define",
    copy: "Co-create North Star metrics, audit platforms, and align the roadmap.",
  },
  {
    icon: Shield,
    title: "Design & architect",
    copy: "Rapid prototyping, design systems, and technical blueprints that scale.",
  },
  {
    icon: Clock10,
    title: "Build & ship",
    copy: "Cross-functional pods deliver in sprints with QA, analytics, and ops baked in.",
  },
  {
    icon: Users,
    title: "Measure & grow",
    copy: "Growth loops, experimentation, and enablement to keep momentum going.",
  },
];

export default function HomePage() {
  const featuredServices = serviceCategories.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col gap-0">
      <HeroSection />

      <section className="bg-background border-t border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid gap-6 py-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border bg-card/70 p-5 shadow-sm">
                <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="about" eyebrow="Who we are" label="Strategic partner for ambitious digital roadmaps">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              YSoft teams combine research, design, engineering, QA, and growth to build software that feels crafted and
              performs under pressure. We embed with your stakeholders, operate with clarity, and own outcomes from
              kickoff to rollout.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <ValueCard title="Modern delivery" copy="Transparent rituals, async-first collaboration, and instrumentation across every release." />
              <ValueCard title="Craft & empathy" copy="Design systems, accessibility, and storytelling that deepen every customer interaction." />
            </div>
          </div>
          <div className="rounded-[32px] border bg-gradient-to-br from-primary/10 via-background to-primary/5 p-8 shadow-lg">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">What we unlock</p>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li>• Faster launches with autonomous pods plugged into your workflow.</li>
              <li>• Shared component libraries and playbooks so internal teams scale confidently.</li>
              <li>• Outcome dashboards tying engineering velocity to business metrics.</li>
            </ul>
            <Link to="/portfolio" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              See our recent work <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section id="services" eyebrow="What we do" label="Capabilities across the product lifecycle">
        <div className="grid gap-6 md:grid-cols-3">
          {featuredServices.map((category) => (
            <div key={category.title} className="rounded-3xl border bg-card/70 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80">{category.title}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {category.items.slice(0, 4).map((item) => (
                  <li key={item.slug} className="flex items-center gap-2">
                    <item.icon size={16} className="text-primary" />
                    {item.label}
                  </li>
                ))}
              </ul>
              <Link
                to={`/services/${category.items[0].slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Explore more <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section id="process" eyebrow="How we work" label="A proven operating cadence">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <ProcessStep key={step.title} {...step} />
          ))}
        </div>
      </Section>

      <Section id="portfolio" eyebrow="Selected work" label="Case studies">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, idx) => (
            <CaseStudyCard key={project.slug} project={project} delay={idx * 0.1} />
          ))}
        </div>
      </Section>

      <Section id="testimonials" eyebrow="Testimonials" label="What partners say">
        <Testimonials />
      </Section>

      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="rounded-[36px] border bg-gradient-to-br from-primary/15 via-background to-primary/5 p-10 shadow-xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Let’s collaborate</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              Provide the vision. We’ll build the product, platform, or growth engine.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Share your brief and we’ll respond with a team recommendation, timeline, and clear next steps within a few
              days.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(36,100%,50%)] px-6 py-3 text-white shadow hover:opacity-95 transition"
              >
                Start a project <ArrowRight size={18} />
              </Link>
              <Link to="/services/flutter-development" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
                Browse services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({
  id,
  label,
  eyebrow,
  children,
}: {
  id: string;
  label: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-28 scroll-mt-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-primary/80 font-semibold">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{label}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ValueCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-2xl border bg-card/70 p-5 shadow-sm">
      <p className="text-sm uppercase tracking-[0.3em] text-primary/80">{title}</p>
      <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
    </div>
  );
}

function ProcessStep({
  icon: Icon,
  title,
  copy,
}: {
  icon: LucideIcon;
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-3xl border bg-card/70 p-6 shadow-sm">
      <Icon size={28} className="text-primary" />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
    </div>
  );
}

function CaseStudyCard({
  project,
  delay,
}: {
  project: (typeof projects)[number];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="rounded-[28px] border bg-card/80 shadow-sm overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={project.cover} alt={project.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-xs uppercase tracking-[0.4em]">{project.sector}</p>
          <h3 className="text-2xl font-semibold">{project.title}</h3>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 flex-1">
        <p className="text-sm text-muted-foreground">{project.summary}</p>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full border border-border px-3 py-1">
              {tech}
            </span>
          ))}
        </div>
        <Link to={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Dive deeper <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
