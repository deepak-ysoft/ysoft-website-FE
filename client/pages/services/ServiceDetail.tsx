import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { getServiceDetail, serviceCategories } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const detail = getServiceDetail(slug);

  const relatedCategory = detail
    ? serviceCategories.find((category) => category.title === detail.category)
    : undefined;

  const relatedServices =
    relatedCategory?.items
      .filter((item) => item.slug !== detail?.slug)
      .slice(0, 3) ?? [];

  if (!detail) {
    return (
      <section className="container max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
          Services
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground">
          We could not find that service yet.
        </h1>
        <p className="mt-3 text-muted-foreground">
          Try selecting another capability from our services menu or head back
          to the home page.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(36,100%,50%)] text-white px-5 py-2.5 shadow hover:opacity-95 transition"
          >
            View our work <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-background">
      <section className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
          {detail.category}
        </p>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-foreground">
              {detail.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{detail.tagline}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(36,100%,50%)] text-white px-6 py-3 shadow hover:opacity-95 transition"
          >
            Discuss this service <ArrowRight size={18} />
          </Link>
        </div>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground">
          {detail.overview}
        </p>
      </section>

      <section className="bg-muted/40">
        <div className="container max-w-6xl mx-auto px-4 py-16 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl border bg-background p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">
              Where this shines
            </h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              {detail.useCases.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-transparent bg-muted/60 px-4 py-3 text-sm font-medium text-muted-foreground"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-[hsl(36,100%,50%)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border bg-background p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Stack</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tooling we bring to this engagement.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {detail.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-4 py-16 grid gap-6">
        <h2 className="text-2xl font-semibold text-foreground">
          Engagement outcomes
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {detail.outcomes.map((outcome) => (
            <div
              key={outcome}
              className="rounded-2xl border bg-background/80 p-6 shadow-sm"
            >
              <p className="text-base text-muted-foreground">{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="bg-muted/40">
          <div className="container max-w-6xl mx-auto px-4 py-16">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
                  Explore more
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">
                  Related {detail.category.toLowerCase()}
                </h2>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Talk to us about these <ArrowRight size={14} />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group rounded-2xl border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-[hsl(36,100%,50%)]"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <service.icon size={18} />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-foreground">
                    {service.label}
                  </p>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-primary">
                    View details
                    <ArrowRight
                      size={14}
                      className="ml-1 transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceDetail;


