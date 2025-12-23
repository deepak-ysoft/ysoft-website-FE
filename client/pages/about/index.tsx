import React from "react";
import { ArrowRight, Sparkles, Users, Shield, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-background text-foreground">
      <section className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
          About YSoft Solution
        </p>
        <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr,1fr]">
          <div>
            <h1 className="text-4xl font-semibold leading-tight">
              We craft digital products that move businesses forward.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Since 2015, we have paired strategy, design, and engineering to
              deliver software that feels thoughtful, fast, and resilient. Our
              teams operate as true partners—embedding alongside your leaders to
              unlock growth, modernize platforms, and create meaningful customer
              experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl border bg-primary/5 px-6 py-4">
                <p className="text-3xl font-semibold text-primary">150+</p>
                <p className="text-sm text-muted-foreground">Products shipped</p>
              </div>
              <div className="rounded-2xl border bg-primary/5 px-6 py-4">
                <p className="text-3xl font-semibold text-primary">12</p>
                <p className="text-sm text-muted-foreground">
                  Countries served
                </p>
              </div>
              <div className="rounded-2xl border bg-primary/5 px-6 py-4">
                <p className="text-3xl font-semibold text-primary">90%</p>
                <p className="text-sm text-muted-foreground">
                  Repeat partnerships
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[32px] border bg-gradient-to-br from-primary/10 via-transparent to-primary/5 p-8 shadow-lg">
            <h2 className="text-xl font-semibold">What motivates us</h2>
            <p className="mt-4 text-muted-foreground">
              We obsess over craft, clarity, and measurable business impact. Our
              multidisciplinary squads blend research, design, engineering, QA,
              and growth to keep outcomes front and center.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
              Meet the leadership team
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
                Our principles
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Values that guide every engagement
              </h2>
            </div>
            <p className="text-muted-foreground md:max-w-md">
              High-quality software emerges from empowered teams, transparent
              communication, and relentless focus on customer experience.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Sparkles,
                title: "Craft & curiosity",
                copy: "Ship with polish and always challenge assumptions through research.",
              },
              {
                icon: Users,
                title: "Partnership",
                copy: "Operate as an embedded partner that upskills your internal teams.",
              },
              {
                icon: Shield,
                title: "Reliability",
                copy: "Design architectures for uptime, observability, and security.",
              },
              {
                icon: Heart,
                title: "Empathy",
                copy: "Start from the human experience—whether a user, stakeholder, or teammate.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border bg-background p-6 shadow-sm"
              >
                <value.icon className="text-primary" size={28} />
                <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-[32px] border bg-gradient-to-br from-primary/10 via-background to-primary/5 p-10 shadow-lg">
          <div className="grid gap-8 md:grid-cols-[1.2fr,0.8fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
                Leadership note
              </p>
              <h2 className="mt-4 text-2xl font-semibold">
                “We created YSoft to prove that strategic thinking and execution
                excellence can coexist. Our clients trust us with their hardest
                problems, and we deliver by acting as an extension of their
                team.”
              </h2>
              <p className="mt-6 text-muted-foreground">
                Dhruvil Patel · Founder & CEO
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/50 p-6 backdrop-blur">
              <p className="text-sm text-muted-foreground">
                Ready to explore a partnership?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[hsl(36,100%,50%)] px-6 py-3 text-white shadow-lg"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;


