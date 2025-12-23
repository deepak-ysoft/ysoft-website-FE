import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Image as ImageIcon } from "lucide-react";

import { getProjectBySlug } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="container max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Projects</p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground">We could not find that project yet.</h1>
        <p className="mt-3 text-muted-foreground">
          Pick another case study from our portfolio or reach out to learn more about recent work.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5">
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(36,100%,50%)] px-5 py-2.5 text-white shadow hover:opacity-95 transition"
          >
            Start a project <ArrowRight size={16} />
          </a>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-background text-foreground">
      <section className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80">{project.sector}</p>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">{project.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground md:max-w-2xl">{project.summary}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border bg-primary/5 px-5 py-3 text-center shadow-sm min-w-[140px]"
              >
                <p className="text-2xl font-semibold text-primary">{metric.value}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-[32px] border">
          <img src={project.cover} alt={project.title} className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="container max-w-6xl mx-auto px-4 py-16 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-[28px] border bg-background p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Project overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{project.description}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm uppercase tracking-[0.3em] text-primary/80">Challenges</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {project.challenges.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.3em] text-primary/80">Solutions</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {project.solutions.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-[28px] border bg-background p-8 shadow-sm">
            <h3 className="text-sm uppercase tracking-[0.3em] text-primary/80">Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h3 className="mt-8 text-sm uppercase tracking-[0.3em] text-primary/80">Outcomes</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3">
          <ImageIcon className="text-primary" size={20} />
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Gallery</p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {project.gallery.map((asset) => (
            <figure key={asset.src} className="overflow-hidden rounded-[24px] border bg-background shadow-sm">
              <img src={asset.src} alt={asset.caption} className="h-full w-full object-cover" />
              <figcaption className="px-4 py-3 text-sm text-muted-foreground">{asset.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="rounded-[36px] border bg-gradient-to-br from-primary/15 via-background to-primary/5 p-10 shadow-xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Next up</p>
            <h2 className="mt-4 text-3xl font-semibold">Ready to write your next case study?</h2>
            <p className="mt-4 text-muted-foreground">
              Tell us about your KPIs and constraints. We will assemble product, design, and engineering talent that
              moves as quickly as you do.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(36,100%,50%)] px-6 py-3 text-white shadow hover:opacity-95 transition"
              >
                Book a working session <ArrowRight size={18} />
              </a>
              <Link to="/portfolio" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
                View all projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;


