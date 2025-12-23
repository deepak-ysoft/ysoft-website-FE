import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import HomePage from "./pages/home";
import SiteLayout from "@/components/layout/SiteLayout";

const queryClient = new QueryClient();

import Portfolio from "./pages/portfolio";
import ServiceDetail from "./pages/services/ServiceDetail";
import AboutPage from "./pages/about";
import CareersPage from "./pages/careers";
import InsightsPage from "./pages/insights";
import ProjectDetail from "./pages/portfolio/ProjectDetail";
import ContactPage from "./pages/contact";

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <TooltipProvider> */}
    {/* <Toaster /> */}
    {/* <Sonner /> */}
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* </TooltipProvider> */}
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
