import React from "react";
import { ArrowRight, Phone, Mail, MapPin, Clock4, MessageSquare } from "lucide-react";

const contactPoints = [
  {
    icon: Phone,
    title: "Call us",
    detail: "+91 00000 00000",
    href: "tel:+910000000000",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "contact@ysoftsolution.com",
    href: "mailto:contact@ysoftsolution.com",
  },
  {
    icon: MapPin,
    title: "Studio",
    detail: "Ahmedabad, Gujarat · India",
    href: "https://maps.google.com",
  },
];

const faqs = [
  {
    question: "How quickly can you start?",
    answer: "Most projects kick off within 1–2 weeks. We can also plug into existing squads instantly if you need extra capacity.",
  },
  {
    question: "Do you work on fixed scopes?",
    answer: "Yes. We scope discovery, design sprints, or full builds with outcomes, milestones, and transparent pricing.",
  },
  {
    question: "Can you augment our internal team?",
    answer: "Absolutely. We regularly embed product leads, designers, engineers, QA, and growth specialists alongside in-house teams.",
  },
];

const ContactPage = () => {
  return (
    <div className="bg-background text-foreground">
      <section className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
          Contact
        </p>
        <div className="mt-6 grid gap-10 md:grid-cols-[1.2fr,0.8fr]">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Tell us about your roadmap. We’ll bring the squad, craft, and
              momentum.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Share what you are building, timelines, KPIs, and existing
              constraints. Within a few days we’ll reply with recommended team
              shape, plan, and high-level estimate.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {contactPoints.map((point) => (
                <a
                  key={point.title}
                  href={point.href}
                  className="rounded-3xl border bg-primary/5 p-5 shadow-sm transition hover:-translate-y-1"
                >
                  <point.icon size={20} className="text-primary" />
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {point.title}
                  </p>
                  <p className="mt-1 text-sm font-semibold  text-wrap ">
                    {point.detail}
                  </p>
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border bg-background p-6 shadow-lg">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              <MessageSquare size={14} />
              Start a brief
            </div>
            <h2 className="mt-4 text-2xl font-semibold">Project intake form</h2>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm font-medium">
                  Name
                  <input
                    type="text"
                    className="mt-1 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm font-medium">
                  Work email
                  <input
                    type="email"
                    className="mt-1 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="text-sm font-medium">
                Company / Organization
                <input
                  type="text"
                  className="mt-1 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Company name"
                />
              </label>
              <label className="text-sm font-medium">
                What are you building?
                <textarea
                  className="mt-1 min-h-[140px] w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Tell us about goals, timelines, and current challenges."
                />
              </label>
              <label className="text-sm font-medium">
                Budget range
                <select className="mt-1 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30">
                  <option value="">Select</option>
                  <option value="under-25">Under $25k</option>
                  <option value="25-75">$25k – $75k</option>
                  <option value="75-150">$75k – $150k</option>
                  <option value="150-plus">$150k+</option>
                </select>
              </label>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[hsl(36,100%,50%)] px-6 py-3 text-white shadow hover:opacity-95 transition"
              >
                Send brief <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="container max-w-6xl mx-auto px-4 py-16 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-[32px] border bg-background p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
              Availability
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Upcoming capacity</h2>
            <div className="mt-6 grid gap-4 text-sm text-muted-foreground">
              {[
                {
                  label: "Product discovery",
                  slot: "1 squad available · from Dec 01",
                },
                { label: "Design systems", slot: "Bookings open · Dec–Jan" },
                {
                  label: "Engineering pods",
                  slot: "2 pods available · Jan 15",
                },
              ].map((slot) => (
                <div
                  key={slot.label}
                  className="flex items-center justify-between rounded-2xl border px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {slot.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{slot.slot}</p>
                  </div>
                  <Clock4 size={16} className="text-primary" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border bg-background p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
              Answers
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Common questions</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border px-4 py-3"
                >
                  <summary className="cursor-pointer text-sm font-semibold">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;


