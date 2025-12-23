import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import HeaderSection from "@/pages/Components/header/header";

const useSmoothAnchorScroll = () => {
  useEffect(() => {
    const handler = (event: Event) => {
      const target = event.target as HTMLAnchorElement | null;
      if (!(target instanceof HTMLAnchorElement) || !target.hash) return;

      const id = target.hash.replace("#", "");
      const element = document.getElementById(id);

      if (!element) return;

      event.preventDefault();
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
};

const SiteLayout = () => {
  useSmoothAnchorScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <HeaderSection scrolled={scrolled} />
      <main id="home" className="flex-1">
        <Outlet />
      </main>
      <Footer className="mt-16" />
    </div>
  );
};

export default SiteLayout;

