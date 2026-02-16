import { ProjectPageData } from "@/components/ProjectPage";

import starlightHero from "@/assets/starlight-hero.png";
import starlightPresentation from "@/assets/starlight-presentation.png";
import starlightTablet from "@/assets/starlight-tablet.png";
import geideaHero from "@/assets/geidea-hero.png";
import geideaPresentation from "@/assets/geidea-presentation.png";
import geideaTablet from "@/assets/geidea-tablet.png";
import gtsHero from "@/assets/gts-hero.png";
import gtsPresentation from "@/assets/gts-presentation.png";
import gtsTablet from "@/assets/gts-tablet.png";
import banksHero from "@/assets/banks-hero.png";
import banksPresentation from "@/assets/banks-presentation.png";
import banksTablet from "@/assets/banks-tablet.png";
import directHero from "@/assets/direct-hero.webp";
import directPresentation from "@/assets/direct-presentation.png";
import directTablet from "@/assets/direct-tablet.png";
import clavigermeHero from "@/assets/clavigerme-hero.png";
import clavigermePresentation from "@/assets/clavigerme-presentation.png";
import clavigermeTablet from "@/assets/clavigerme-tablet.png";
import goalngoHero from "@/assets/goalngo-hero.png";
import goalngoPresentation from "@/assets/goalngo-presentation.png";
import goalngoTablet from "@/assets/goalngo-tablet.png";

export const projectsData: Record<string, ProjectPageData> = {
  starlight: {
    titleLine1: "Starlight",
    titleLine2: "Developments",
    titleLine2Color: "purple",
    subtitle: "Luxury Real ",
    subtitleHighlight: "Estate Development",
    paragraphs: [
      "Starlight Developments is a design-driven real estate developer with over three decades of experience, standing as a true pioneer of luxury living in Egypt. With a heartfelt vocation for creating architecturally refined, inspiring living spaces, the brand represents more than development—it represents vision, legacy, and design excellence.",
      "As a leader in the luxury real estate sector, Starlight required a website that could reflect its heritage, design philosophy, and premium positioning—while clearly communicating its projects to investors, partners, and high-end buyers.",
      "ARQQA Agency was engaged to design and develop a sophisticated digital platform that translates Starlight Developments' design-led DNA into a seamless, modern, and future-ready web experience.",
    ],
    solutionItems: [
      "Strategic Content Structuring",
      "Experience-Led Navigation",
      "Flexible CMS Integration",
      "Premium User Experience (UX)",
      "Elegant Interface Design (UI)",
    ],
    heroImage: starlightHero,
    presentationImage: starlightPresentation,
    tabletImage: starlightTablet,
    accentColor: "from-purple-600",
    accentRgb: "147, 51, 234",
  },
  geidea: {
    titleLine1: "Geidea",
    titleLine2: "Payments",
    titleLine2Color: "gray",
    subtitle: " Financial Technology (FinTech) &",
    subtitleHighlight: "Digital Payment Solutions",
    paragraphs: [
      "Geidea is a prominent digital payment solutions provider enabling businesses to accept, manage, and scale transactions through advanced financial technology. Serving enterprises, SMEs, and retail merchants, the company plays a critical role in accelerating cashless transformation across high-growth markets.",
      "As Geidea continued expanding its ecosystem of payment products—including POS systems, online payments, and business management tools—their digital presence needed to evolve accordingly. The existing website did not fully communicate the depth of their capabilities, product flexibility, or enterprise-grade reliability. Additionally, the user journey required refinement to better support merchant acquisition and simplify product discovery.",
      "ARQQA Agency partnered with Geidea to elevate their digital experience through a structured, conversion-driven website strategy. The goal was to translate technical complexity into clarity, strengthen brand authority, and create a scalable platform capable of supporting rapid business growth.",
    ],
    solutionItems: [
      "Enterprise Website Audit & UX Analysis",
      "Strategic Information Architecture",
      "Conversion-Oriented User Experience (UX)",
      "Modern, Technology-Driven Interface (UI)",
      "Authority & Trust Framework",
    ],
    heroImage: geideaHero,
    presentationImage: geideaPresentation,
    tabletImage: geideaTablet,
    accentColor: "from-gray-500",
    accentRgb: "107, 114, 128",
  },
  gts: {
    titleLine1: "GTS",
    titleLine2: "Holding",
    titleLine2Color: "cyan",
    subtitle: "Enterprise IT Infrastructure & ",
    subtitleHighlight: "Cybersecurity Solutions",
    paragraphs: [
      "GTS Holding is a regional technology partner delivering secure, scalable IT infrastructure and cybersecurity solutions across Egypt, Saudi Arabia, and the UAE. Founded in 2018 by seasoned engineers and technology leaders, GTS focuses on solving critical infrastructure challenges for various sectors, including banking, healthcare, telecom, and industrial enterprises.",
      "Despite their robust service offerings and regional presence, GTS's digital platform required enhancements to better reflect their technical depth, service breadth, and commitment to innovation. The existing website lacked a cohesive structure and engaging user experience, limiting their ability to showcase their solutions and engage potential clients effectively.",
      "ARQQA Agency collaborated with GTS Holding to revamp their website, aiming to create a dynamic and user-friendly platform that highlights their services, showcases their expertise, and enhances client engagement.",
    ],
    solutionItems: [
      "Comprehensive Website Audit & UX Diagnostics",
      "Strategic Information Architecture",
      "Lead-Focused User Experience (UX)",
      "Professional Interface Design (UI)",
      "Trust & Credibility Signals",
    ],
    heroImage: gtsHero,
    presentationImage: gtsPresentation,
    tabletImage: gtsTablet,
    accentColor: "from-cyan-500",
    accentRgb: "6, 182, 212",
  },
  banks: {
    titleLine1: "Egyptian",
    titleLine2: "Banks",
    titleLine2Color: "indigo",
    subtitle: "Banking Information &",
    subtitleHighlight: "Financial Services Directory",
    paragraphs: [
      "EgyptianBanks.com serves as a comprehensive digital hub for banking information in Egypt, offering users access to bank listings, services, products, and financial insights in one centralized platform.",
      "Given the volume of data, frequent updates, and trust-sensitive nature of financial information, the website required a structured, scalable, and performance-driven digital experience—capable of serving both everyday users and professional audiences.",
      "ARQQA Agency partnered with EgyptianBanks.com to audit, restructure, and develop a modern web platform that prioritizes clarity, usability, and long-term scalability—while positioning the website as a reliable authority in the financial information space.",
    ],
    solutionItems: [
      "Platform Audit & Content Diagnostics",
      "Data-Led Information Architecture",
      "Search & Discovery–Focused UX",
      "Functional, Trust-Oriented UI Design",
    ],
    heroImage: banksHero,
    presentationImage: banksPresentation,
    tabletImage: banksTablet,
    accentColor: "from-indigo-500",
    accentRgb: "99, 102, 241",
  },
  direct: {
    titleLine1: "Direct",
    titleLine2: "Group",
    titleLine2Color: "violet",
    subtitle: "Media Production &",
    subtitleHighlight: "Event Management",
    paragraphs: [
      "Direct Group is a leading media production and events management company based in Riyadh, Saudi Arabia. They specialize in delivering creative solutions for brands, events, and productions, offering services such as photography, videography, event planning, and more.",
      "Despite their extensive service offerings and creative expertise, Direct Group's digital presence did not fully reflect their innovative capabilities and industry leadership. The existing website lacked a cohesive structure and engaging user experience, which limited their ability to showcase their portfolio and attract new clients effectively.",
      "ARQQA Agency collaborated with Direct Group to revamp their website, aiming to create a dynamic and user-friendly platform that highlights their services, showcases their work, and enhances client engagement.",
    ],
    solutionItems: [
      "Comprehensive Website Audit & UX Diagnostics",
      "Strategic Information Architecture",
      "Lead-Focused User Experience (UX)",
      "Professional Interface Design (UI)",
      "Trust & Credibility Signals",
    ],
    heroImage: directHero,
    presentationImage: directPresentation,
    tabletImage: directTablet,
    accentColor: "from-violet-500",
    accentRgb: "139, 92, 246",
  },
  clavigerme: {
    titleLine1: "Claviger",
    titleLine2: "Me",
    titleLine2Color: "emerald",
    subtitle: "Hospitality Sales, Marketing &",
    subtitleHighlight: "Asset Management",
    paragraphs: [
      "Claviger Middle East is a leading representation agency serving the hospitality, travel, and tourism sectors across the Middle East and Africa. With deep market expertise, regional networks, and a consultative sales model, Claviger helps independent and multinational hotel brands increase market share, drive revenue, and strengthen regional visibility.",
      "Despite having a strong service portfolio—including sales representation, marketing & PR, and asset management—their digital platform lacked the structure, clarity, and conversion focus needed to support demand generation and stakeholder engagement in key markets.",
      "ARQQA Agency collaborated with Claviger Middle East to audit and redesign the website, developing a refined and performance-optimized platform that amplifies credibility, enhances user engagement, and supports lead generation across audiences. The work aligned the digital experience with Claviger's premium service positioning and strategic business goals.",
    ],
    solutionItems: [
      "Comprehensive Website Audit & UX Diagnostics",
      "Strategic Information Architecture",
      "Lead-Focused User Experience (UX)",
      "Professional Interface Design (UI)",
      "Trust & Credibility Signals",
    ],
    heroImage: clavigermeHero,
    presentationImage: clavigermePresentation,
    tabletImage: clavigermeTablet,
    accentColor: "from-emerald-500",
    accentRgb: "16, 185, 129",
  },
  goalngo: {
    titleLine1: "Goal",
    titleLine2: "N Go",
    titleLine2Color: "orange",
    subtitle: "Sports Technology &",
    subtitleHighlight: "Football Talent Ecosystem",
    paragraphs: [
      "Goalngo is an AI-powered scouting and recruiting platform dedicated to transforming the global football ecosystem. It connects emerging talents, professionals, clubs, academies, and fans through a comprehensive digital infrastructure. The platform offers services ranging from talent discovery and recruitment to fan engagement and investment opportunities.",
      "Despite its innovative offerings, Goalngo's digital presence required a cohesive and user-centric platform to effectively showcase its multifaceted services and facilitate seamless interactions among stakeholders.",
      "ARQQA Agency collaborated with Goalngo to design and develop a dynamic platform that encapsulates the brand's vision, enhances user experience, and supports the diverse needs of its global football community.",
    ],
    solutionItems: [
      "Comprehensive Platform Audit & UX Diagnostics",
      "Strategic Information Architecture",
      "Conversion-Oriented User Experience (UX)",
      "Modern, Responsive Interface Design (UI)",
      "Trust & Credibility Signals",
    ],
    heroImage: goalngoHero,
    presentationImage: goalngoPresentation,
    tabletImage: goalngoTablet,
    accentColor: "from-orange-500",
    accentRgb: "249, 115, 22",
  },
};
