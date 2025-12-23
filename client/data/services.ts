import type { LucideIcon } from "lucide-react";
import {
  Smartphone,
  Globe,
  PenTool,
  ShoppingCart,
  Code2,
  Layers,
  Workflow,
  Monitor,
  BarChart3,
  Megaphone,
  RefreshCcw,
  FlaskConical,
} from "lucide-react";

export type ServiceItem = {
  label: string;
  slug: string;
  icon: LucideIcon;
};

export type ServiceCategory = {
  title: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Mobile App Development",
    items: [
      { label: "Flutter Development", slug: "flutter-development", icon: Smartphone },
      {
        label: "React Native Development",
        slug: "react-native-development",
        icon: Smartphone,
      },
    ],
  },
  {
    title: "Web Development",
    items: [
      {
        label: "Premium Website Development",
        slug: "premium-website-development",
        icon: Globe,
      },
      {
        label: "Shopify Development",
        slug: "shopify-development",
        icon: ShoppingCart,
      },
      {
        label: "Squarespace & Custom UI/UX",
        slug: "squarespace-custom-ui-ux",
        icon: PenTool,
      },
      {
        label: "Website Development",
        slug: "website-development",
        icon: Globe,
      },
      {
        label: "Laravel / PHP Development",
        slug: "laravel-php-development",
        icon: Code2,
      },
      {
        label: "MERN Stack Development",
        slug: "mern-stack-development",
        icon: Layers,
      },
      {
        label: "WordPress Development",
        slug: "wordpress-development",
        icon: Globe,
      },
    ],
  },
  {
    title: "Enterprise & Consulting",
    items: [
      {
        label: "Software Consulting Services",
        slug: "software-consulting-services",
        icon: Workflow,
      },
      {
        label: "Custom Software Development",
        slug: "custom-software-development",
        icon: Code2,
      },
      {
        label: ".NET Development",
        slug: "dotnet-development",
        icon: Code2,
      },
      {
        label: "Windows Development",
        slug: "windows-development",
        icon: Monitor,
      },
      {
        label: "Netsuite / SuiteCommerce Development",
        slug: "netsuite-suitecommerce-development",
        icon: Layers,
      },
    ],
  },
  {
    title: "E-commerce Solutions",
    items: [
      {
        label: "Shopify Development",
        slug: "shopify-development",
        icon: ShoppingCart,
      },
      {
        label: "E-Commerce Development",
        slug: "ecommerce-development",
        icon: ShoppingCart,
      },
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      {
        label: "SEO & Ads Management",
        slug: "seo-ads-management",
        icon: BarChart3,
      },
      {
        label: "Social Media Management",
        slug: "social-media-management",
        icon: Megaphone,
      },
    ],
  },
  {
    title: "Support & Maintenance",
    items: [
      {
        label: "Software Testing Services",
        slug: "software-testing-services",
        icon: FlaskConical,
      },
      {
        label: "Software Maintenance Services",
        slug: "software-maintenance-services",
        icon: RefreshCcw,
      },
    ],
  },
];

export type ServiceDetail = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  overview: string;
  useCases: string[];
  technologies: string[];
  outcomes: string[];
};

const details: ServiceDetail[] = [
  {
    slug: "flutter-development",
    title: "Flutter Development",
    category: "Mobile App Development",
    tagline: "Craft pixel-perfect mobile apps from a single codebase.",
    overview:
      "We design and build Flutter apps that feel truly native on iOS, Android, and the web. Our team focuses on performance, delightful UI, and a maintainable architecture so you can ship reliably.",
    useCases: [
      "Greenfield B2C or B2B mobile apps",
      "Proof-of-concept builds for rapid validation",
      "Experience refreshes for legacy mobile products",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Supabase", "Bloc", "Riverpod"],
    outcomes: [
      "Consistent UX across platforms",
      "Reduced development cost by up to 40%",
      "Faster release cycles with shared component libraries",
    ],
  },
  {
    slug: "react-native-development",
    title: "React Native Development",
    category: "Mobile App Development",
    tagline: "Ship mobile experiences powered by React and TypeScript.",
    overview:
      "We leverage React Native with modern tooling such as Expo and Reanimated to deliver smooth mobile apps that integrate deeply with device capabilities while reusing your existing React knowledge.",
    useCases: [
      "Consumer apps with frequent iteration",
      "Companion apps for existing SaaS platforms",
      "Internal tooling with offline capability",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "GraphQL"],
    outcomes: [
      "85% shared code between iOS and Android",
      "Battle-tested CI pipelines for the app stores",
      "Instrumentation for analytics, push, and OTA updates",
    ],
  },
  {
    slug: "premium-website-development",
    title: "Premium Website Development",
    category: "Web Development",
    tagline: "Marketing experiences that convert and scale globally.",
    overview:
      "From strategy to deployment, we build premium websites with modern stacks, accessibility baked in, and CMS workflows that empower marketers.",
    useCases: [
      "Corporate marketing sites",
      "Product launch microsites",
      "Multi-locale brand experiences",
    ],
    technologies: ["Next.js", "Remix", "Vite", "Sanity", "Contentful", "Tailwind CSS"],
    outcomes: [
      "Sub-second page loads",
      "Flexible component libraries for content teams",
      "Search-optimized architecture with schema data",
    ],
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    category: "E-commerce Solutions",
    tagline: "Shopify storefronts built for high conversion and easy operations.",
    overview:
      "We customize Shopify themes, extend storefronts using Hydrogen, and automate operations so your commerce team can scale effortlessly.",
    useCases: [
      "Theme upgrades and custom sections",
      "Bespoke checkout and subscription flows",
      "App and integration development for ERP/CRM",
    ],
    technologies: ["Shopify", "Hydrogen", "Liquid", "GraphQL Admin API", "Klaviyo"],
    outcomes: [
      "Higher AOV via tailored buying journeys",
      "Unified data flows between Shopify and back-office",
      "Operational dashboards for merchandising teams",
    ],
  },
  {
    slug: "squarespace-custom-ui-ux",
    title: "Squarespace & Custom UI/UX",
    category: "Web Development",
    tagline: "Design-forward Squarespace builds with custom UX polish.",
    overview:
      "We go beyond templates by crafting custom blocks, animations, and integrations on Squarespace that align with your brand and KPIs.",
    useCases: [
      "Launch sites for creative businesses",
      "Portfolio destinations with immersive storytelling",
      "Marketing sites that need rapid iteration",
    ],
    technologies: ["Squarespace", "GSAP", "Figma", "TypeScript", "REST APIs"],
    outcomes: [
      "Premium design systems implemented end-to-end",
      "Editable layouts without sacrificing performance",
      "Unique interactions tuned for engagement",
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    category: "Web Development",
    tagline: "Robust, secure, and SEO-ready web platforms.",
    overview:
      "We build core web platforms with clean architecture, automated testing, and observability to support long-term roadmaps.",
    useCases: [
      "Corporate portals and intranets",
      "Customer self-service dashboards",
      "Partner or vendor ecosystems",
    ],
    technologies: ["React", "Vite", "Astro", "Node.js", "Express", "PostgreSQL"],
    outcomes: [
      "Clean component APIs and documentation",
      "Accessibility conformance with WCAG 2.1 AA",
      "Observability via OpenTelemetry and modern logging",
    ],
  },
  {
    slug: "laravel-php-development",
    title: "Laravel / PHP Development",
    category: "Web Development",
    tagline: "Secure Laravel applications with modern DevOps practices.",
    overview:
      "We craft Laravel backends, APIs, and admin panels with advanced caching, queueing, and cloud-native deployments.",
    useCases: [
      "Multi-tenant SaaS platforms",
      "API backends powering mobile/web apps",
      "Internal workflow automation tools",
    ],
    technologies: ["Laravel", "PHP 8", "MySQL", "Redis", "Horizon", "Vapor"],
    outcomes: [
      "Hardened authentication and authorization",
      "Zero-downtime deployments",
      "Instrumentation and queue monitoring out of the box",
    ],
  },
  {
    slug: "mern-stack-development",
    title: "MERN Stack Development",
    category: "Web Development",
    tagline: "Full-stack JavaScript delivery with MongoDB, Express, React, and Node.",
    overview:
      "Our MERN teams handle everything from API design to frontend delivery, ensuring type safety and performance through the stack.",
    useCases: [
      "Real-time collaboration tools",
      "Data-heavy dashboards",
      "Customer portals with role-based access",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Zod"],
    outcomes: [
      "Shared types between client and server",
      "Streaming APIs for real-time UX",
      "Automated testing with Vitest and Playwright",
    ],
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    category: "Web Development",
    tagline: "Enterprise WordPress with custom Gutenberg components.",
    overview:
      "We architect WordPress sites that balance editorial freedom with strict branding and performance budgets.",
    useCases: [
      "Headless WordPress powering React frontends",
      "Global editorial teams with custom workflows",
      "Migration from legacy CMS platforms",
    ],
    technologies: ["WordPress", "Gutenberg", "WPGraphQL", "Next.js", "PHP", "Docker"],
    outcomes: [
      "Reusable Gutenberg blocks with documentation",
      "Performance budgets enforced via CI",
      "Secure hosting and update pipelines",
    ],
  },
  {
    slug: "software-consulting-services",
    title: "Software Consulting Services",
    category: "Enterprise & Consulting",
    tagline: "Strategic guidance that aligns technology with business KPIs.",
    overview:
      "We partner with leadership to audit platforms, define roadmaps, and create pragmatic modernization plans.",
    useCases: [
      "Due diligence before acquisitions",
      "Platform modernization discovery",
      "Build vs. buy evaluations",
    ],
    technologies: ["Capability audits", "Architecture reviews", "Cost modeling"],
    outcomes: [
      "Actionable recommendations with ROI modeling",
      "Prioritized backlog aligned to OKRs",
      "Enablement plans for internal teams",
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    category: "Enterprise & Consulting",
    tagline: "End-to-end product teams for complex initiatives.",
    overview:
      "Our cross-functional squads handle product strategy, UX, engineering, and QA to ship bespoke platforms.",
    useCases: [
      "Mission-critical internal systems",
      "Customer-facing SaaS offerings",
      "Workflow automation for operations",
    ],
    technologies: ["React", "Node.js", "Python", "Go", "PostgreSQL", "AWS"],
    outcomes: [
      "Incremental delivery with measurable value",
      "Cloud-native architecture with resiliency baked in",
      "Product analytics loops for informed decisions",
    ],
  },
  {
    slug: "dotnet-development",
    title: ".NET Development",
    category: "Enterprise & Consulting",
    tagline: "Modernize and extend your Microsoft stack applications.",
    overview:
      "We build APIs, services, and desktop apps with .NET 8, pairing legacy expertise with modern engineering practices.",
    useCases: [
      "Migrating on-prem workloads to Azure",
      "Extending ERP and CRM systems",
      "Building secure desktop utilities",
    ],
    technologies: [".NET 8", "ASP.NET Core", "C#", "Azure", "Blazor", "SQL Server"],
    outcomes: [
      "Performance profiling and tuning",
      "Better observability with Application Insights",
      "Automated regression suites",
    ],
  },
  {
    slug: "windows-development",
    title: "Windows Development",
    category: "Enterprise & Consulting",
    tagline: "Native Windows experiences with modern UX for desktop users.",
    overview:
      "We craft Windows apps using WinUI, MAUI, and WPF to deliver secure, reliable experiences tightly integrated with hardware.",
    useCases: [
      "Industrial control panels",
      "Financial or trading terminals",
      "Internal productivity tools",
    ],
    technologies: ["WinUI", "WPF", ".NET MAUI", "C++/CLI", "Azure AD"],
    outcomes: [
      "Optimized performance for large data sets",
      "Secure packaging and deployment pipelines",
      "Device integrations (printing, scanning, IoT)",
    ],
  },
  {
    slug: "netsuite-suitecommerce-development",
    title: "Netsuite / SuiteCommerce Development",
    category: "Enterprise & Consulting",
    tagline: "Extend Netsuite workflows and SuiteCommerce storefronts.",
    overview:
      "We implement custom scripts, integrations, and headless storefronts so Netsuite truly reflects your business rules.",
    useCases: [
      "Advanced order management automations",
      "Custom SuiteCommerce UI components",
      "Integrations with logistics and finance tools",
    ],
    technologies: ["SuiteScript", "SuiteCommerce", "Node.js", "GraphQL", "RESTlets"],
    outcomes: [
      "Unified data between Netsuite and external systems",
      "Automated financial and fulfillment processes",
      "Improved customer portal experiences",
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    category: "E-commerce Solutions",
    tagline: "Composable commerce experiences across channels.",
    overview:
      "We design omnichannel commerce solutions that blend storefront UX, headless APIs, and backend integrations.",
    useCases: [
      "Marketplace builds",
      "B2B ordering portals with contract pricing",
      "Subscription commerce platforms",
    ],
    technologies: ["CommerceTools", "Shopify Plus", "BigCommerce", "Algolia", "Stripe"],
    outcomes: [
      "Personalized merchandising powered by data",
      "Unified inventory and fulfillment operations",
      "Robust analytics for revenue optimization",
    ],
  },
  {
    slug: "seo-ads-management",
    title: "SEO & Ads Management",
    category: "Digital Marketing",
    tagline: "Always-on acquisition programs rooted in data.",
    overview:
      "Our growth team handles technical SEO, performance content, and multi-channel ad campaigns tied to measurable KPIs.",
    useCases: [
      "Search visibility for product launches",
      "Always-on demand gen for SaaS",
      "Localized campaigns for new markets",
    ],
    technologies: ["GA4", "Looker Studio", "Ahrefs", "Google Ads", "Meta Ads"],
    outcomes: [
      "Full-funnel reporting with attribution modeling",
      "Technical SEO sprints with dev-ready tickets",
      "Clear playbooks for in-house marketing teams",
    ],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    category: "Digital Marketing",
    tagline: "Build communities and campaigns across social platforms.",
    overview:
      "We plan, produce, and publish content that matches your brand voice while leveraging platform-native analytics.",
    useCases: [
      "Executive thought leadership programs",
      "Always-on content calendars",
      "Paid social amplification and creator ops",
    ],
    technologies: ["Sprout Social", "Hootsuite", "Canva", "Figma", "Meta Suite"],
    outcomes: [
      "Consistent storytelling with measurable engagement",
      "Community management playbooks",
      "Campaign retros with actionable insights",
    ],
  },
  {
    slug: "software-testing-services",
    title: "Software Testing Services",
    category: "Support & Maintenance",
    tagline: "Quality engineering across manual, automated, and performance testing.",
    overview:
      "We embed QA engineers and SDETs to design test strategies, automation suites, and performance benchmarks.",
    useCases: [
      "Shift-left QA for new product development",
      "Regression automation for legacy systems",
      "Performance and load testing ahead of launches",
    ],
    technologies: ["Playwright", "Cypress", "Postman", "k6", "BrowserStack"],
    outcomes: [
      "Higher release confidence with coverage metrics",
      "Stable CI pipelines with parallelized suites",
      "Detailed reports with remediation guidance",
    ],
  },
  {
    slug: "software-maintenance-services",
    title: "Software Maintenance Services",
    category: "Support & Maintenance",
    tagline: "Keep critical systems secure, performant, and up to date.",
    overview:
      "We provide retainers for monitoring, patching, and incremental enhancements to ensure your platforms stay reliable.",
    useCases: [
      "24/7 monitoring and incident response",
      "Tech debt backlog management",
      "Feature enhancements with strict SLAs",
    ],
    technologies: ["PagerDuty", "Grafana", "Datadog", "Terraform", "GitHub Actions"],
    outcomes: [
      "Improved uptime with proactive alerts",
      "Predictable roadmap of optimizations",
      "Transparent reporting on SLA performance",
    ],
  },
];

export const serviceDetails = details.reduce(
  (acc, detail) => {
    acc[detail.slug] = detail;
    return acc;
  },
  {} as Record<string, ServiceDetail>
);

export const getServiceDetail = (slug?: string | null) =>
  slug ? serviceDetails[slug] : undefined;

export const getServiceTechnologies = (slug?: string | null, limit?: number) => {
  const tech = slug ? serviceDetails[slug]?.technologies ?? [] : [];
  return typeof limit === "number" ? tech.slice(0, limit) : tech;
};


