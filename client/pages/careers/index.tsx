import React from "react";
import { Briefcase, Globe, Rocket, Leaf, ArrowRight } from "lucide-react";

const positions = [
  {
    title: "Senior Product Designer",
    location: "Ahmedabad · Hybrid",
    type: "Full-time",
    description:
      "Lead discovery workshops, craft design systems, and partner with engineering to ship polished product experiences.",
  },
  {
    title: "Lead React Engineer",
    location: "Remote (India)",
    type: "Full-time",
    description:
      "Own front-end architecture for global SaaS platforms using React, TypeScript, and modern tooling.",
  },
  {
    title: "Delivery Manager",
    location: "Ahmedabad · Hybrid",
    type: "Full-time",
    description:
      "Guide multidisciplinary squads, shape roadmaps, and keep delivery aligned with client outcomes.",
  },
];

const perks = [
  {
    icon: Globe,
    title: "Remote-first culture",
    copy: "Work from anywhere in India with quarterly in-person summits.",
  },
  {
    icon: Rocket,
    title: "Growth budgets",
    copy: "Annual stipends for conferences, certifications, and coaching.",
  },
  {
    icon: Leaf,
    title: "Time to recharge",
    copy: "Flexible PTO, wellness days, and no-meeting Fridays twice a month.",
  },
];

const CareersPage = () => {
  return (
    <div className="bg-background text-foreground">
      <section className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
          Careers at YSoft
        </p>
        <div className="mt-6 grid gap-10 md:grid-cols-[1.3fr,0.7fr]">
          <div>
            <h1 className="text-4xl font-semibold leading-tight">
              Build products people love. Grow alongside experts who care.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We are a fully distributed team of strategists, designers,
              engineers, and growth specialists. If you love solving complex
              problems and collaborating with ambitious clients, you will feel
              at home here.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Briefcase size={16} />
              Now hiring across product, design, and engineering
            </div>
          </div>
          <div className="rounded-[32px] border bg-gradient-to-br from-primary/20 via-background to-primary/10 p-8 shadow-lg">
            <h2 className="text-xl font-semibold">How we hire</h2>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>1. Share your work samples + short application</li>
              <li>2. Meet with the hiring manager and craft leads</li>
              <li>3. Solve a collaborative brief (paid for senior roles)</li>
              <li>4. Final conversation with leadership</li>
            </ol>
            <a
              href="mailto:careers@ysoftsolution.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[hsl(36,100%,50%)] px-5 py-2.5 text-white shadow hover:opacity-95 transition"
            >
              Send your portfolio
            </a>
          </div>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
                Open roles
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                We are growing across disciplines
              </h2>
            </div>
            <p className="text-muted-foreground md:max-w-md">
              Don’t see your role? Tell us how you can help build the next wave
              of digital products—great people always find a seat here.
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            {positions.map((role) => (
              <div
                key={role.title}
                className="rounded-3xl border bg-background p-6 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {role.location} · {role.type}
                    </p>
                  </div>
                  <a
                    href="mailto:careers@ysoftsolution.com"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Apply now
                    <ArrowRight size={16} />
                  </a>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-4 py-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="rounded-[32px] border bg-gradient-to-br from-primary/10 via-background to-primary/5 p-10 shadow-lg">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
              Thrive here
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Benefits & perks</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="rounded-3xl border bg-white/70 p-5 backdrop-blur"
                >
                  <perk.icon className="text-primary" size={24} />
                  <h3 className="mt-4 text-lg font-semibold">{perk.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {perk.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border bg-primary/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
              Referral program
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Bring a friend, earn a bonus
            </h3>
            <p className="mt-4 text-muted-foreground">
              Team members receive up to ₹75,000 for every successful referral.
              We prefer to grow through trusted networks.
            </p>
            <a
              href="mailto:careers@ysoftsolution.com?subject=Referral"
              className="mt-6 inline-flex items-center gap-2 text-primary"
            >
              Refer someone today
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;


