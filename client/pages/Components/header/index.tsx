import React, { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  Cloud,
  Shield,
  Smartphone,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Phone,
  Clock,
  Headphones,
  Workflow,
  Layers,
  Sparkles,
  Globe,
  PenTool,
  ShoppingCart,
  ExternalLink,
  MapPin,
  BarChart3,
  Megaphone,
  RefreshCcw,
  FlaskConical,
  Monitor,
} from "lucide-react";

const HeaderSection = ({ scrolled }) => {
  function ServicesMegaMenu() {
    const [open, setOpen] = useState(false);
    const serviceColumns: {
      title: string;
      items: { label: string; icon: React.ReactNode }[];
    }[] = [
      {
        title: "Mobile App Development",
        items: [
          {
            label: "Flutter Development",
            icon: <Smartphone size={16} className="text-primary" />,
          },
          {
            label: "React Native Development",
            icon: <Smartphone size={16} className="text-primary" />,
          },
        ],
      },
      {
        title: "Web Development",
        items: [
          {
            label: "Premium Website Development",
            icon: <Globe size={16} className="text-primary" />,
          },
          {
            label: "Shopify Development",
            icon: <ShoppingCart size={16} className="text-primary" />,
          },
          {
            label: "Squarespace & Custom UI/UX",
            icon: <PenTool size={16} className="text-primary" />,
          },
          {
            label: "Website Development",
            icon: <Globe size={16} className="text-primary" />,
          },
          {
            label: "Laravel / PHP Development",
            icon: <Code2 size={16} className="text-primary" />,
          },
          {
            label: "MERN Stack Development",
            icon: <Layers size={16} className="text-primary" />,
          },
          {
            label: "WordPress Development",
            icon: <Globe size={16} className="text-primary" />,
          },
        ],
      },
      {
        title: "Enterprise & Consulting",
        items: [
          {
            label: "Software Consulting Services",
            icon: <Workflow size={16} className="text-primary" />,
          },
          {
            label: "Custom Software Development",
            icon: <Code2 size={16} className="text-primary" />,
          },
          {
            label: ".NET Development",
            icon: <Code2 size={16} className="text-primary" />,
          },
          {
            label: "Windows Development",
            icon: <Monitor size={16} className="text-primary" />,
          },
          {
            label: "Netsuite / SuiteCommerce Development",
            icon: <Layers size={16} className="text-primary" />,
          },
        ],
      },
      {
        title: "E-commerce Solutions",
        items: [
          {
            label: "Shopify Development",
            icon: <ShoppingCart size={16} className="text-primary" />,
          },
          {
            label: "E-Commerce Development",
            icon: <ShoppingCart size={16} className="text-primary" />,
          },
        ],
      },
      {
        title: "Digital Marketing",
        items: [
          {
            label: "SEO & Ads Management",
            icon: <BarChart3 size={16} className="text-primary" />,
          },
          {
            label: "Social Media Management",
            icon: <Megaphone size={16} className="text-primary" />,
          },
        ],
      },
      {
        title: "Support & Maintenance",
        items: [
          {
            label: "Software Testing Services",
            icon: <FlaskConical size={16} className="text-primary" />,
          },
          {
            label: "Software Maintenance Services",
            icon: <RefreshCcw size={16} className="text-primary" />,
          },
        ],
      },
    ];
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <a href="#services" className="hover:text-[hsl(36,100%,50%)]">
          Services
        </a>
        <div
          className={`${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"} transition z-50 absolute left-1/2 -translate-x-1/2 top-full pt-8 w-screen`}
        >
          <div className="mx-auto max-w-7xl rounded-2xl border bg-background shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-[340px,1fr]">
              {/* Left card */}
              <div className="hidden lg:block p-6 bg-gradient-to-br from-primary/80 to-primary/40 text-white">
                <LogoWordmark className="text-white" />
                <p className="mt-4 text-sm/6 opacity-90">
                  Smart Digital Solutions for Your Business
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[hsl(36,100%,50%)] text-white px-5 py-2.5 shadow hover:opacity-95 transition"
                >
                  Get a Quote <ArrowRight size={18} />
                </a>
              </div>
              {/* Right columns */}
              <div className="p-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {serviceColumns.map((col) => (
                    <div key={col.title}>
                      <p className="text-sm font-semibold text-primary">
                        {col.title}
                      </p>
                      <ul className="mt-3 space-y-2 text-sm">
                        {col.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href="#services"
                              className="group inline-flex items-center gap-2 text-muted-foreground hover:text-[hsl(36,100%,50%)]"
                            >
                              <span className="transition-transform group-hover:translate-x-0.5">
                                {item.icon}
                              </span>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function AboutDropdown() {
    const [open, setOpen] = useState(false);

    const aboutLinks = [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Insights", href: "/insights" },
    ];

    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <a
          href="/about"
          className="hover:text-[hsl(36,100%,50%)] flex items-center gap-1"
        >
          About
        </a>

        {/* Dropdown */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition z-50
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}`}
        >
          <div className="rounded-xl border bg-background shadow-lg overflow-hidden min-w-[200px]">
            <ul className="py-2 text-sm">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block px-4 py-2  hover:text-[hsl(36,100%,50%)] transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  function LogoWordmark({ className = "" }: { className?: string }) {
    return (
      <div
        className={`select-none inline-flex items-center gap-2 ${className}`}
        aria-label="YSoft Solution"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F82cc076b94784bbcb97cc9a80eff4923%2F7533a4654adf47458753b4beb6bab3f9?format=webp&width=300"
          alt="YSoft Solution logo"
          className="h-8 md:h-9 w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all backdrop-blur supports-[backdrop-filter]:bg-background/70 ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-20">
          <div className="flex items-center">
            <a href="#home" className="inline-flex items-center gap-3">
              <LogoWordmark />
            </a>
          </div>
          <nav className="hidden md:flex items-center justify-center gap-6 text-sm font-medium">
            <AboutDropdown />
            <ServicesMegaMenu />
            <a href="#portfolio" className="hover:text-primary">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </nav>
          <div className="flex items-center justify-end gap-4">
            <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
              <span className="h-4 w-px bg-border" />
              <a
                href="mailto:contact@ysoftsolution.com"
                className="inline-flex items-center gap-1 hover:text-foreground"
              >
                <Mail size={16} /> contact@ysoftsolution.com
              </a>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(36,100%,50%)] text-white px-5 py-2.5 shadow hover:opacity-95 transition"
            >
              Get a Quote <ArrowRight size={18} />
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border"
              onClick={() =>
                document
                  .getElementById("mobile-menu")
                  ?.classList.toggle("hidden")
              }
            >
              <ChevronDown />
            </button>
          </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        className="md:hidden hidden border-t border-border bg-background/90 backdrop-blur"
      >
        <div className="container max-w-7xl mx-auto px-4 py-3 grid gap-2">
          <a href="#about" className="py-2">
            About
          </a>
          <details className="group">
            <summary className="py-2 cursor-pointer select-none">
              Services
            </summary>
            <div className="pl-3 pb-2 grid gap-3 text-sm text-muted-foreground">
              {[
                "Mobile App Development",
                "Web Development",
                "Enterprise & Consulting",
                "E-commerce Solutions",
                "Digital Marketing",
                "Support & Maintenance",
              ].map((t) => (
                <div key={t}>
                  <p className="font-medium text-foreground/80">{t}</p>
                  <div className="mt-2 grid gap-1">
                    {/* Subitems are summarized to keep mobile concise */}
                  </div>
                </div>
              ))}
            </div>
          </details>
          <a href="#portfolio" className="py-2">
            Portfolio
          </a>
          <a href="#contact" className="py-2">
            Contact
          </a>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="tel:+910000000000"
              className="inline-flex items-center gap-1 text-sm"
            >
              <Phone size={16} /> +91 00000 00000
            </a>
            <a
              href="mailto:contact@ysoftsolution.com"
              className="inline-flex items-center gap-1 text-sm"
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
