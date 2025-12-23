import React, { useState } from "react";
import { ArrowRight, ChevronDown, Mail, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceCategories, getServiceTechnologies } from "@/data/services";

type HeaderSectionProps = {
  scrolled?: boolean;
};

const HeaderSection: React.FC<HeaderSectionProps> = ({ scrolled = false }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileMenu = () => setMobileOpen((p) => !p);
  const closeMobileMenu = () => setMobileOpen(false);

  /* ---------------- LOGO ---------------- */
  function LogoWordmark({ className = "" }: { className?: string }) {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F82cc076b94784bbcb97cc9a80eff4923%2F7533a4654adf47458753b4beb6bab3f9?format=webp&width=300"
          alt="YSoft Solution"
          className="h-8 md:h-9 w-auto object-contain"
        />
      </div>
    );
  }
  /* ---------------- DESKTOP: ABOUT ---------------- */
  function AboutDropdown() {
    const [open, setOpen] = useState(false);

    const links = [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Insights", to: "/insights" },
    ];

    return (
      <div
        className="relative hidden md:block"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Link to="/about" className="hover:text-[hsl(36,100%,50%)]">
          About
        </Link>

        <div
          className={`absolute left-1/2 -translate-x-1/2 top-full pt-6 z-50 transition
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}`}
        >
          <div className="min-w-[200px] rounded-xl border bg-background shadow-lg">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block px-4 py-2 text-sm hover:text-[hsl(36,100%,50%)]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- DESKTOP: SERVICES ---------------- */
  function ServicesMegaMenu() {
    const [open, setOpen] = useState(false);

    return (
      <div
        className="relative hidden md:block"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Link
          to="/services/flutter-development"
          className="hover:text-[hsl(36,100%,50%)]"
        >
          Services
        </Link>

        <div
          className={`absolute left-1/2 -translate-x-1/2 top-full pt-8 w-screen z-50 transition
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
        >
          <div className="mx-auto max-w-7xl rounded-2xl border bg-background shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-[340px,1fr]">
              {/* Left card */}
              <div className="hidden lg:block p-6 bg-gradient-to-br from-primary/80 to-primary/40 text-white">
                <LogoWordmark className="text-white" />
                <p className="mt-4 text-sm opacity-90">
                  Smart Digital Solutions for Your Business
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[hsl(36,100%,50%)] px-5 py-2.5 text-white"
                >
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>

              {/* Right */}
              <div className="p-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {serviceCategories.map((col) => (
                    <div key={col.title}>
                      <p className="text-sm font-semibold text-primary">
                        {col.title}
                      </p>
                      <ul className="mt-3 space-y-2 text-sm">
                        {col.items.map((item) => {
                          const techPreview = getServiceTechnologies(
                            item.slug,
                            2,
                          );
                          return (
                            <li key={item.slug}>
                              <Link
                                to={`/services/${item.slug}`}
                                className="inline-flex items-center gap-2 text-muted-foreground hover:text-[hsl(36,100%,50%)]"
                              >
                                <item.icon size={16} className="text-primary" />
                                {item.label}
                              </Link>
                              {techPreview.length > 0 && (
                                <p className="pl-6 text-xs text-muted-foreground/80">
                                  {techPreview.join(" • ")}
                                </p>
                              )}
                            </li>
                          );
                        })}
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

  /* ---------------- HEADER ---------------- */
  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 transition
      ${scrolled ? "border-b shadow-sm" : ""}`}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link to="/">
            <LogoWordmark />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <AboutDropdown />
            <ServicesMegaMenu />
            <Link to="/portfolio" className="hover:text-primary">
              Portfolio
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3 text-sm text-muted-foreground">
              <Mail size={16} />
              contact@ysoftsolution.com
            </div>

            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-[hsl(36,100%,50%)] px-4 py-2 text-sm text-white"
            >
              Get a Quote <ArrowRight size={14} />
            </Link>

            <button
              className="md:hidden h-10 w-10 rounded-full border flex items-center justify-center"
              onClick={toggleMobileMenu}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      <div
        className={`md:hidden absolute inset-x-0 top-full bg-background border-t transition
        ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <div className="px-4 py-6 space-y-6">
          {[
            { label: "About", to: "/about" },
            { label: "Careers", to: "/careers" },
            { label: "Insights", to: "/insights" },
            { label: "Portfolio", to: "/portfolio" },
            { label: "Contact", to: "/contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={closeMobileMenu}
              className="flex items-center justify-between py-3 border-b text-base"
            >
              {l.label} <ArrowRight size={14} />
            </Link>
          ))}

          {/* Services (mobile grouped) */}
          <div>
            <p className="text-xs uppercase tracking-widest text-primary/80 mb-2">
              Services
            </p>
            <div className="grid gap-2">
              {serviceCategories
                .flatMap((c) => c.items)
                .slice(0, 6)
                .map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <item.icon size={14} className="text-primary" />
                    {item.label}
                  </Link>
                ))}
              <Link
                to="/services/flutter-development"
                className="text-sm font-semibold text-primary mt-2"
                onClick={closeMobileMenu}
              >
                Explore all services →
              </Link>
            </div>
          </div>

          <div className="pt-4 text-sm text-muted-foreground space-y-2">
            <a href="tel:+910000000000" className="flex items-center gap-2">
              <Phone size={16} /> +91 00000 00000
            </a>
            <a
              href="mailto:contact@ysoftsolution.com"
              className="flex items-center gap-2"
            >
              <Mail size={16} /> contact@ysoftsolution.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
