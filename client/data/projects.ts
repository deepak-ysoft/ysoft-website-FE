export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectGalleryItem = {
  src: string;
  caption: string;
};

export type ProjectDetail = {
  slug: string;
  title: string;
  sector: string;
  summary: string;
  cover: string;
  metrics: ProjectMetric[];
  description: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  technologies: string[];
  gallery: ProjectGalleryItem[];
};

export const projects: ProjectDetail[] = [
  {
    slug: "alto-commerce",
    title: "Alto Commerce",
    sector: "Retail · D2C",
    summary:
      "Replatformed a 9-country Shopify Plus brand with Hydrogen storefronts, unified inventory, and experimentation-ready component libraries.",
    cover:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Conversion lift", value: "+38%" },
      { label: "Bounce rate drop", value: "-27%" },
      { label: "Markets launched", value: "4" },
    ],
    description:
      "Alto needed to leave a legacy Magento stack behind without disrupting global launches. We delivered a composable commerce architecture, custom Hydrogen storefronts, and operations tooling that keeps the brand nimble.",
    challenges: [
      "Legacy stack slowed go-live dates and limited localization.",
      "Catalog data lived across multiple systems, creating fulfillment errors.",
      "Marketing wanted to test new templates weekly without engineering bottlenecks.",
    ],
    solutions: [
      "Composable Shopify Plus + Hydrogen storefronts with localized routes and pricing.",
      "Sync service that unifies ERP, OMS, and storefront inventory data with real-time alerts.",
      "Custom section library powered by Sanity CMS so marketers launch experiments in hours.",
    ],
    outcomes: [
      "Average order value up 22% after personalization experiments.",
      "4 new markets launched in three months with localized content and payments.",
      "Ops team reduced manual inventory adjustments by 60%.",
    ],
    technologies: ["Shopify Plus", "Hydrogen", "Sanity", "Node.js", "GraphQL"],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1542838686-73e53747d56a?auto=format&fit=crop&w=1400&q=80",
        caption: "Hydrogen storefront concept showcasing immersive merchandising.",
      },
      {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
        caption: "Operations dashboard visualizing inventory accuracy across regions.",
      },
    ],
  },
  {
    slug: "motion-os",
    title: "MotionOS",
    sector: "Industrial SaaS",
    summary:
      "Built a React + Node platform for real-time fleet telemetry with offline-capable mobile apps and advanced authorization.",
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "MVP timeline", value: "12 weeks" },
      { label: "Events processed", value: "1B+/day" },
      { label: "Uptime", value: "99.98%" },
    ],
    description:
      "MotionOS is a mission-critical operating system for industrial fleets. We helped them design and build a telemetry platform that works in low-connectivity environments while providing rich analytics to HQ.",
    challenges: [
      "Existing desktop software couldn’t support real-time insights for field teams.",
      "Security and role-based access requirements were strict due to enterprise clients.",
      "Need for offline-first mobile apps that sync when coverage returns.",
    ],
    solutions: [
      "Event-driven architecture powered by Kafka and TimescaleDB for analytics.",
      "React dashboard with dynamic permissions driven by Zod-safe policies.",
      "Offline-ready React Native companion app with deterministic sync engine.",
    ],
    outcomes: [
      "Fleet managers reduced incident response time by 35%.",
      "Platform achieved SOC2 readiness within the first release.",
      "Customer success teams now onboard clients in half the previous time.",
    ],
    technologies: ["React", "Node.js", "Kafka", "TimescaleDB", "React Native", "AWS"],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
        caption: "Telemetry map with live alerts and drill-down widgets.",
      },
      {
        src: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=1400&q=80",
        caption: "Mobile app screens demonstrating offline mode and sync states.",
      },
    ],
  },
  {
    slug: "pulse-financial",
    title: "Pulse Financial",
    sector: "Fintech",
    summary:
      "Crafted a design system and mobile banking experience with biometric auth, deep analytics, and AA accessibility.",
    cover:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "App rating", value: "4.9★" },
      { label: "NPS lift", value: "+42" },
      { label: "Release cadence", value: "Weekly" },
    ],
    description:
      "Pulse asked us to modernize their consumer banking app and internal analytics suite. We delivered a unified design language, accessibility upgrades, and a data platform that empowers support teams.",
    challenges: [
      "Fragmented UI across Android and iOS led to inconsistent support tickets.",
      "Accessibility gaps exposed risk for regulated markets.",
      "Analytics teams struggled to answer CX questions quickly.",
    ],
    solutions: [
      "Figma + React Native design system with token-driven theming and motion patterns.",
      "WCAG AA audit and remediation, including voice-over flows and high-contrast modes.",
      "Embedded analytics built with Superset and domain-specific metrics for CX.",
    ],
    outcomes: [
      "App store ratings climbed to 4.9 with 55% more positive mentions.",
      "Customer support handle time dropped by 18% thanks to new insights.",
      "Teams now ship weekly using automated regression suites and feature flags.",
    ],
    technologies: ["React Native", "TypeScript", "Superset", "GraphQL", "AWS Cognito"],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1400&q=80",
        caption: "Design system documentation and component tokens.",
      },
      {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
        caption: "Mobile banking flows across light and dark themes.",
      },
    ],
  },
];

export const getProjectBySlug = (slug?: string | null) =>
  slug ? projects.find((project) => project.slug === slug) : undefined;

