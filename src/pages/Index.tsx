import React, { useState, useEffect, useRef } from "react";
import lifelypetsHero from "@/assets/lifelypets-hero.png";
import lifelypetsPresentation from "@/assets/lifelypets-presentation.png";
import lifelypetsTablet from "@/assets/lifelypets-tablet.png";
import lifelypetsCard from "@/assets/lifelypets-card.webp";
import starlightCard from "@/assets/starlight-card.webp";
import geideaCard from "@/assets/geidea-card.webp";
import gtsCard from "@/assets/gts-card.webp";
import banksCard from "@/assets/banks-card.webp";
import directCard from "@/assets/direct-card.png";
import clavigermeCard from "@/assets/clavigerme-card.webp";
import goalngoCard from "@/assets/goalngo-card.png";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from "framer-motion";
import clientLogo1 from "@/assets/client-logo-1.png";
import clientLogo2 from "@/assets/client-logo-2.png";
import clientLogo3 from "@/assets/client-logo-3.png";
import clientLogo4 from "@/assets/client-logo-4.png";
import clientLogo5 from "@/assets/client-logo-5.png";
import clientLogo6 from "@/assets/client-logo-6.png";
import clientLogo7 from "@/assets/client-logo-7.png";
import clientLogo8 from "@/assets/client-logo-8.png";
import ProjectPage from "@/components/ProjectPage";
import { projectsData } from "@/data/projectsData";
import {
  CheckCircle2,
  Globe,
  Smartphone,
  ShieldCheck,
  Layout,
  MessageSquare,
  Menu,
  X,
  Zap,
  Layers,
  Search,
  Star,
  ChevronRight,
  Mail,
  User,
  Phone,
  Briefcase,
  ArrowRight,
  ExternalLink,
  Code2,
  Cpu,
  Database,
  Lock,
  BarChart3,
  Sparkles,
  Command,
  Aperture,
  Hexagon,
  ArrowLeft,
  FileText,
  PenTool,
  Rocket,
  Video,
} from "lucide-react";

// Updated Logo URL
const LOGO_URL = "https://i.ibb.co/jPDY2nBG/Arqqa-Logo-White.png";

// --- LIQUID BACKGROUND ANIMATION ---
const LiquidBackground = ({ scrollYProgress, variant = "default" }: { scrollYProgress?: any; variant?: string }) => {
  const defaultScroll = useMotionValue(0);
  const activeProgress = scrollYProgress || defaultScroll;

  const y1 = useTransform(activeProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(activeProgress, [0, 1], ["0%", "10%"]);

  const colors =
    variant === "lifely"
      ? { p: "bg-red-600/40", s: "bg-red-500/30", glow: "from-[#1a0505] via-red-600/10 to-transparent" }
      : { p: "bg-red-600/40", s: "bg-blue-600/40", glow: "from-red-600/5 via-blue-600/5 to-transparent" };

  return (
    <motion.div className="absolute inset-0 overflow-hidden bg-black z-0 pointer-events-none">
      <motion.div
        style={{ y: y1 }}
        animate={{
          x: [-150, 250, -100, -150],
          y: [-100, 200, 150, -100],
          rotate: [0, 120, 240, 360],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-[-25%] left-[-15%] w-[110%] h-[110%] ${colors.p} blur-[130px] rounded-full mix-blend-screen`}
      />
      <motion.div
        style={{ y: y2 }}
        animate={{
          x: [300, -250, 150, 300],
          y: [150, 250, -100, 150],
          rotate: [0, -150, 150, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-[-20%] right-[-15%] w-[100%] h-[100%] ${colors.s} blur-[150px] rounded-full mix-blend-screen`}
      />
      <div className={`absolute inset-0 bg-gradient-to-tr ${colors.glow} pointer-events-none`} />
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </motion.div>
  );
};

// --- NEW PAGE: LIFELYPETS INNER PAGE ---
const LifelyPetsPage = ({ onBack, onBookCall }: { onBack: () => void; onBookCall?: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#02040a] text-white relative font-sans overflow-x-hidden"
    >
      {/* --- MODERN DARK HERO SECTION --- */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040a] via-[#050b14] to-black z-0" />
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[140%] bg-gradient-to-bl from-red-600/10 via-transparent to-transparent rotate-12 blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-[10%] right-[-5%] w-[2px] h-[60%] bg-gradient-to-b from-transparent via-red-500/50 to-transparent rotate-[15deg] blur-[2px] pointer-events-none z-0" />
        <div className="absolute top-[15%] right-[5%] w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none z-0" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full flex flex-col items-center justify-center mt-10 md:mt-20"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-red-600/40 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[80%] h-[100px] bg-red-600/60 blur-[100px] rounded-full pointer-events-none" />
          <img
            src={lifelypetsHero}
            alt="Lifelypets Hero Mockup"
            className="w-full h-auto object-cover relative z-20 shadow-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-black via-black/90 to-transparent z-30" />
        </motion.div>
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Navigation (Overlay) */}
      <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-transparent backdrop-blur-sm border-b border-white/5">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back to Work</span>
        </button>
        <img src={LOGO_URL} alt="Arqqa" className="h-6 object-contain opacity-70" />
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="container mx-auto px-6 py-20 relative z-10 bg-black">
        <div className="max-w-6xl mx-auto space-y-32">
          <div className="max-w-4xl mx-auto text-center pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] mb-10">
                Lifely <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]">Pets</span>
              </h1>
              <p className="text-2xl md:text-3xl font-light text-gray-400 tracking-tight leading-snug">
                Pet Care & <span className="text-white">Wellness</span>
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-8" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-16 text-left space-y-8"
            >
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                Lifely Pets was created from a genuine love for animals and a deep belief that pets are family. The
                brand is built on care, trust, and long-term commitment to animal health—values that needed to be
                reflected consistently across its digital presence.
              </p>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                As a growing e-commerce brand, Lifely required more than just an online store. The website needed to
                communicate emotional connection, educate customers, and deliver a seamless shopping experience that
                builds trust and drives repeat purchases.
              </p>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                ARQQA Agency partnered with Lifely Pets to audit, redesign, and develop a conversion-focused e-commerce
                platform—balancing emotional storytelling with performance, usability, and scalability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-left"
            >
              <div className="col-span-1 md:col-span-2 space-y-4">
                <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em]">
                  Solution & Execution
                </span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    "Conversion-Oriented",
                    "Trust-Driven Interface Design (UI)",
                    "Customer-Centered User Experience (UX)",
                    "Scalable CMS & Management",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-lg text-gray-300 font-light border-b border-white/5 pb-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- MACBOOK PRESENTATION SECTION --- */}
      <section className="relative w-full py-20 overflow-hidden bg-black">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_20px_rgba(220,38,38,0.8)] z-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[150px] bg-red-600/20 blur-[100px] z-10" />
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-30 w-full"
        >
          <img
            src={lifelypetsPresentation}
            alt="Lifely Pets Full Presentation"
            className="w-full h-auto object-cover block shadow-[0_0_80px_rgba(220,38,38,0.15)]"
          />
        </motion.div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[100px] bg-red-600/10 blur-[80px] z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent z-20" />
      </section>

      {/* --- REPLACED FINAL PHOTO WITH FULL-WIDTH TABLET MOCKUP --- */}
      <section className="relative w-full py-24 overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-red-600/15 blur-[160px] pointer-events-none z-0" />
        <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_30px_rgba(239,68,68,0.5)] z-20" />
        <div className="absolute bottom-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_40px_rgba(239,68,68,0.6)] z-20" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 w-full"
        >
          <img
            src={lifelypetsTablet}
            alt="Lifely Pets Urban Tablet Mockup"
            className="w-full h-auto object-cover block brightness-90 contrast-110 shadow-[0_0_100px_rgba(220,38,38,0.2)]"
          />
        </motion.div>

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full blur-[4px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-red-600 rounded-full blur-[6px] animate-pulse" />
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative w-full py-24 bg-black">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={onBookCall || onBack}
            className="px-10 py-4 rounded-full bg-[#e63232] hover:bg-[#cc2a2a] text-white font-bold text-lg tracking-wide transition-all shadow-[0_0_30px_rgba(230,50,50,0.4)] hover:shadow-[0_0_40px_rgba(230,50,50,0.6)]"
          >
            Book a Free Consultation
          </button>
          <a
            href="https://lifelypets.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full border border-white/20 hover:border-white/50 text-white font-bold text-lg tracking-wide transition-all hover:bg-white/5"
          >
            Visit Website
          </a>
        </div>
      </section>
    </motion.div>
  );
};

// --- NEON DECORATIONS ---
const NeonParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
          animate={{ opacity: [0.1, 0.4, 0.1], y: ["0%", "-20%", "0%"], x: ["0%", "5%", "0%"] }}
          transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
          className={`absolute w-1 h-20 bg-gradient-to-b ${i % 2 === 0 ? "from-red-600" : "from-blue-600"} to-transparent blur-[2px]`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 45}deg)`,
          }}
        />
      ))}
    </div>
  );
};

// --- CINEMATIC REVEAL COMPONENTS ---
const RevealLine = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <div className="overflow-hidden relative block py-2">
      <motion.div
        initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// --- REUSABLE COMPONENTS ---
const PrimaryButton = ({
  children,
  className = "",
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) => {
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.01, boxShadow: "0 0 40px rgba(220,38,38,0.5)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group relative px-10 py-4 rounded-full font-bold text-white bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.3)] overflow-hidden transition-all duration-300 ${className}`}
    >
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  );
};

const ConsultationVisual = () => {
  return (
    <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 group bg-zinc-900">
      <img
        src="https://i.ibb.co/G4WkHc8Q/consultant-photo.png"
        alt="Tech Consultant"
        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-700 brightness-75 contrast-110 saturate-[0.8]"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
      <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-blue-600/5 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
      <div className="absolute top-8 right-8 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/30 shadow-lg">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Consultant Online</span>
      </div>
      <div className="absolute bottom-8 left-8 right-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-6 rounded-3xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center text-white border border-white/10 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              <Video size={20} />
            </div>
            <div>
              <p className="text-white font-bold text-lg">Discovery Phase</p>
              <p className="text-gray-400 text-xs font-light">Available for technical audits</p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-lg bg-black/40 text-[9px] font-black text-gray-300 border border-white/5 uppercase tracking-widest">
              Structure
            </span>
            <span className="px-3 py-1 rounded-lg bg-black/40 text-[9px] font-black text-gray-300 border border-white/5 uppercase tracking-widest">
              Strategy
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- PROCESS GALAXY VISUAL ---
const ProcessGalaxy = () => {
  return (
    <div className="relative w-full h-[600px] lg:h-[800px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-red-900/10 via-black to-transparent opacity-60 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] pointer-events-none flex items-center justify-center z-10 scale-75 md:scale-100">
        <div className="absolute w-32 h-32 bg-red-600 rounded-full blur-[60px] z-10 animate-pulse" />
        <div className="absolute w-16 h-16 bg-white rounded-full z-20 shadow-[0_0_60px_white]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg width="100%" height="100%" viewBox="0 0 800 800" className="absolute opacity-30">
            <circle cx="400" cy="400" r="150" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="400" cy="400" r="300" fill="none" stroke="#dc2626" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="400" cy="400" r="380" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <line
                key={i}
                x1="400"
                y1="400"
                x2={400 + 380 * Math.cos((deg * Math.PI) / 180)}
                y2={400 + 380 * Math.sin((deg * Math.PI) / 180)}
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.2"
              />
            ))}
          </svg>
        </motion.div>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full border border-white/10 ${i % 2 === 0 ? "border-dashed" : "border-dotted"}`}
            style={{
              width: 200 + i * 80,
              height: 200 + i * 80,
              borderColor: i === 2 ? "rgba(220,38,38,0.4)" : "rgba(255,255,255,0.1)",
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 30 + i * 5, repeat: Infinity, ease: "linear" }}
          >
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 ${i === 2 ? "bg-red-500" : "bg-white"} rounded-full shadow-[0_0_15px_currentColor]`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- NEW PAGE: PROCESS TIMELINE ---
const ProcessPage = ({ onBack, onBookCall }: { onBack: () => void; onBookCall: () => void }) => {
  const steps = [
    {
      id: 1,
      title: "Discovery Call",
      description: "We dive deep into your business goals, target audience, and current technical bottlenecks.",
      details: ["45-min Zoom Strategy Session", "KPI & Goal Definition", "Technical Feasibility Audit"],
      icon: MessageSquare,
    },
    {
      id: 2,
      title: "Proposal & Roadmap",
      description: "We present a detailed scope of work, timeline, and investment required to achieve your goals.",
      details: ["Detailed Scope of Work (SOW)", "Project Roadmap Timeline", "Contract & Deposit"],
      icon: FileText,
    },
    {
      id: 3,
      title: "Onboarding & Kickoff",
      description: "Official project start. We set up communication channels and gather necessary assets.",
      details: ["Slack Channel Setup", "Asset Collection (Brand/Copy)", "Access to Analytics/Hosting"],
      icon: Rocket,
    },
    {
      id: 4,
      title: "Architecture & Logic",
      description: "Before design, we map out the user flow and technical architecture to ensure scalability.",
      details: ["Sitemap & User Flow", "Wireframing Key Pages", "Tech Stack Finalization"],
      icon: Layers,
    },
    {
      id: 5,
      title: "High-Fidelity Design",
      description: "We craft the visual interface, focusing on conversion psychology and brand aesthetics.",
      details: ["UI Design System", "Interactive Prototypes", "Design Review & Feedback"],
      icon: PenTool,
    },
    {
      id: 6,
      title: "Development & QA",
      description: "Our engineers build the solution using clean, modern code, followed by rigorous testing.",
      details: ["Frontend & Backend Dev", "Performance Optimization", "Cross-Browser QA Testing"],
      icon: Code2,
    },
    {
      id: 7,
      title: "Launch & Growth",
      description: "We deploy your site and provide post-launch support to ensure everything runs smoothly.",
      details: ["Live Deployment", "SEO Indexing Submission", "30-Day Post-Launch Support"],
      icon: Globe,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white relative font-sans"
    >
      <LiquidBackground />
      <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
        </button>
        <img src={LOGO_URL} alt="Arqqa" className="h-6 object-contain opacity-50" />
      </div>
      <div className="container mx-auto px-6 py-32 relative z-10 max-w-4xl">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-red-900/20 border border-red-600/30 text-red-500 text-xs font-black uppercase tracking-[0.2em]">
            The Protocol
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">
            Arqqa <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-white">Onboarding.</span>
          </h1>
        </div>
        <div className="relative">
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-600/50 to-transparent" />
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`flex-1 w-full ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}>
                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-red-600/30 transition-all group">
                    <span className="text-red-500 text-xs font-black uppercase tracking-widest mb-2 block">
                      Phase 0{step.id}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 font-light mb-6 leading-relaxed">{step.description}</p>
                    <div className={`space-y-2 ${i % 2 === 0 ? "items-end" : "items-start"} flex flex-col`}>
                      {step.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-300"
                        >
                          {i % 2 !== 0 && <div className="w-1.5 h-1.5 rounded-full bg-red-600" />}
                          <span>{detail}</span>
                          {i % 2 === 0 && <div className="w-1.5 h-1.5 rounded-full bg-red-600" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-black border-2 border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center justify-center z-10">
                    <step.icon size={24} className="text-white" />
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
          <div className="mt-32 text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Ready to start Phase 01?</h3>
            <PrimaryButton className="px-12 py-5 text-lg" onClick={onBookCall}>
              Book Discovery Call
            </PrimaryButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN SECTIONS ---
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-xl border-b border-red-600/20 py-3" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <img
            src={LOGO_URL}
            alt="Arqqa"
            className="h-7 md:h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]"
          />
        </a>
        <div className="hidden md:flex items-center gap-10">
          {["Philosophy", "Services", "Process", "Work"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-red-500 transition-all"
            >
              {item}
            </a>
          ))}
          <PrimaryButton
            className="px-6 py-2.5 text-sm"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start a Project
          </PrimaryButton>
        </div>
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="text-red-500" /> : <Menu className="text-red-500" />}
        </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-red-900/40 p-6 flex flex-col gap-6 md:hidden backdrop-blur-2xl"
          >
            {["Philosophy", "Services", "Process", "Work"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-red-500"
              >
                {item}
              </a>
            ))}
            <PrimaryButton
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start a Project
            </PrimaryButton>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black"
    >
      <LiquidBackground scrollYProgress={scrollYProgress} />
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div style={{ y: yText }} className="flex flex-col items-center">
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.85] max-w-5xl mx-auto uppercase italic">
            <RevealLine delay={0.4}>Build</RevealLine>
            <RevealLine delay={0.6}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-blue-500 to-red-600 animate-gradient-x">
                High-Impact
              </span>
            </RevealLine>
            <RevealLine delay={0.8}>Digital Assets</RevealLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed font-light italic"
          >
            Custom websites engineered for scalability, trust, and aggressive lead generation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <PrimaryButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Secure Your Strategy Call
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const clientLogos = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo7,
  clientLogo8,
];

const Clients = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-black relative overflow-hidden z-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="md:w-1/4 flex-shrink-0">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 text-center md:text-left leading-relaxed">
            Trusted by <br className="hidden md:block" /> Industry Leaders
          </p>
        </div>
        <div className="md:w-3/4 w-full relative overflow-hidden">
          <motion.div
            className="flex gap-12 md:gap-16 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-12 md:gap-16 items-center">
                {clientLogos.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={`Client logo ${i + 1}`}
                    className={`w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 ${
                      i === 1 || i === 4 ? "h-8 md:h-8" : "h-6 md:h-8"
                    }`}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => (
  <section id="philosophy" className="py-32 relative bg-black overflow-hidden border-t border-white/5">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-6 block drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">
            Our Core Philosophy
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
            Before you start… <br />
            <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]">We Consult.</span>
          </h2>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              Because the right scope matters more than anything else, we don't jump straight into building your
              website. We take the time to understand your business, your goals, and your real needs.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
              Through a free consultation, we help you define what matters, what you need, and what you don't, from
              features to technical setup, so your website is built with clarity from day one.
            </p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-white font-medium text-xl leading-snug">
                No unnecessary features. No overengineering. <br />
                <span className="text-red-500 font-bold">Just the right scope for your business.</span>
              </p>
            </div>
          </div>
          <div className="mt-12">
            <PrimaryButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Book a Free Consultation
            </PrimaryButton>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <ConsultationVisual />
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Free consultation",
      desc: "To define the right scope needs",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      glow: "rgba(255, 60, 0, 0.7)",
    },
    {
      icon: Layout,
      title: "Custom Design",
      desc: "Unique designs built according to your business",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      glow: "rgba(180, 0, 255, 0.7)",
    },
    {
      icon: Layers,
      title: "CMS Integration",
      desc: "Easy-to-manage systems for content control",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      glow: "rgba(0, 150, 255, 0.7)",
    },
    {
      icon: Search,
      title: "SEO Ready",
      desc: "Built-in tools ready to rank on search engines",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      glow: "rgba(255, 60, 0, 0.7)",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      desc: "Exceptional experience across all devices",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      glow: "rgba(180, 0, 255, 0.7)",
    },
    {
      icon: Globe,
      title: "Multilingual Options",
      desc: "Support for multiple languages",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      glow: "rgba(0, 150, 255, 0.7)",
    },
    {
      icon: ShieldCheck,
      title: "Support & Maintenance",
      desc: "2 months of free priority assistance",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      glow: "rgba(255, 60, 0, 0.7)",
    },
    {
      icon: Zap,
      title: "Fast & Secure",
      desc: "Performance optimized and reinforced security",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      glow: "rgba(180, 0, 255, 0.7)",
    },
  ];

  return (
    <section id="services" className="py-32 relative bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight uppercase tracking-tighter">
            What are you paying for?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative group h-[280px]"
            >
              <div
                className="absolute -inset-1 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[45px] z-0 scale-110"
                style={{ backgroundColor: f.glow }}
              />
              <div
                className={`absolute inset-0 rounded-[2.5rem] p-[2px] bg-gradient-to-br ${f.gradient} transition-all duration-500 group-hover:scale-[1.03]`}
              >
                <div className="flex flex-col h-full w-full bg-[#080808] rounded-[2.4rem] p-8 relative z-10 overflow-hidden">
                  <f.icon
                    size={28}
                    className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_white] transition-all"
                  />
                  <div className="mt-auto">
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{f.title}</h3>
                    <p className="text-gray-500 text-sm font-light group-hover:text-gray-200 transition-colors">
                      {f.desc}
                    </p>
                  </div>
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent transition-transform duration-1000 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = ({ onOpenProject }: { onOpenProject: (id: string) => void }) => {
  const projects = [
    { id: "lifelypets", title: "Lifelypets", img: lifelypetsCard, color: "from-blue-600 to-blue-900" },
    {
      id: "starlight",
      title: "Starlight Developments",
      img: starlightCard,
      color: "from-purple-600 to-indigo-900",
    },
    { id: "geidea", title: "Geidea", img: geideaCard, color: "from-gray-700 to-gray-900" },
    { id: "gts", title: "GTS holding", img: gtsCard, color: "from-cyan-600 to-blue-900" },
    {
      id: "banks",
      title: "Egyptian Banks",
      img: banksCard,
      color: "from-indigo-600 to-purple-900",
    },
    {
      id: "direct",
      title: "Direct Group",
      img: directCard,
      color: "from-violet-600 to-fuchsia-900",
    },
    {
      id: "clavigerme",
      title: "Claviger Me",
      img: clavigermeCard,
      color: "from-emerald-600 to-teal-900",
    },
    {
      id: "goalngo",
      title: "Goal N Go",
      img: goalngoCard,
      color: "from-orange-600 to-red-900",
    },
  ];

  return (
    <section id="work" className="py-32 relative bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-[0.85] mb-6">
            Success <br /> <span className="text-red-600">Architectures.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              onClick={() => onOpenProject(p.id)}
              className="relative h-[480px] group cursor-pointer rounded-[2rem] overflow-hidden border border-white/10"
              whileHover={{ y: -5 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${p.color} opacity-60 group-hover:opacity-40 transition-opacity duration-700`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                <h3 className="text-3xl font-black text-white tracking-tight">{p.title}</h3>
                <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                  Click to Explore <ArrowRight size={14} />
                </div>
              </div>
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = ({ onNavigate }: { onNavigate: () => void }) => {
  const steps = [
    { num: "01", title: "Discover", desc: "Understanding goals & constraints." },
    { num: "02", title: "Plan", desc: "Strategy, scope & roadmap." },
    { num: "03", title: "Design", desc: "UI/UX & architectural blueprint." },
    { num: "04", title: "Develop", desc: "Coding & implementation." },
    { num: "05", title: "Deploy", desc: "Testing, launch & go-live." },
    { num: "06", title: "Maintain", desc: "Support, updates & scaling." },
  ];

  return (
    <section id="process" className="py-32 relative bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
              Just trust <br />
              <span className="text-red-600">the process.</span>
            </h2>
            <div className="space-y-3 mb-8">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] border border-white/10 p-3 rounded-xl flex items-center gap-4 group hover:bg-red-600 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:bg-white transition-colors">
                    <span className="text-base font-black text-white/30 group-hover:text-red-600">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white uppercase tracking-tight">{step.title}</h3>
                    <p className="text-gray-500 text-xs font-light group-hover:text-white/90">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <PrimaryButton
              className="w-full md:w-2/3 py-5 text-lg"
              onClick={() => {
                window.scrollTo(0, 0);
                onNavigate();
              }}
            >
              View Full Process
            </PrimaryButton>
          </div>
          <div className="order-1 lg:order-2 h-[600px] flex items-center justify-center">
            <ProcessGalaxy />
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      company: "Company",
      logo: Layers,
      text: "Real-time insights from AI agents help us spot trends before they emerge.",
      author: "Jamal Richardson",
      role: "Head of Analytics",
      img: "https://i.pravatar.cc/150?u=jamal",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      company: "Logoipsum",
      logo: Globe,
      text: "Seamless Slack and Salesforce integrations keep our team in sync. Fusion AI is vital.",
      author: "Priya Desai",
      role: "Customer Success Manager",
      img: "https://i.pravatar.cc/150?u=priya",
      gradient: "from-orange-500 to-red-500",
    },
    {
      company: "Venture",
      logo: Zap,
      text: "Automated workflows have cut our manual data entry by 80%. Exceptional partner.",
      author: "Mat Mursmark",
      role: "Chief Growth Officer",
      img: "https://i.pravatar.cc/150?u=mat",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      company: "Apex",
      logo: BarChart3,
      text: "Scalability was our biggest concern, but this architecture handled 10x growth.",
      author: "Sarah Jenkins",
      role: "CTO",
      img: "https://i.pravatar.cc/150?u=sarah",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];
  const repeated = [...testimonials, ...testimonials];

  return (
    <section className="py-32 bg-black overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10 text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
          We Have Done This Before
        </h2>
      </div>
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-8 py-10"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {repeated.map((t, i) => (
            <div
              key={i}
              className="relative w-[350px] md:w-[400px] h-[450px] p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col justify-between overflow-hidden group shrink-0 backdrop-blur-3xl"
            >
              <div
                className={`absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-gradient-to-tr ${t.gradient} blur-[90px] opacity-40 rounded-full pointer-events-none`}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <t.logo className="w-8 h-8 text-white" />
                  <span className="text-2xl font-bold text-white tracking-tight">{t.company}</span>
                </div>
                <p className="text-xl text-white/90 font-medium leading-relaxed whitespace-normal">"{t.text}"</p>
              </div>
              <div className="relative z-10 flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
                <img
                  src={t.img}
                  alt={t.author}
                  className="w-12 h-12 rounded-xl object-cover grayscale ring-2 ring-white/10"
                />
                <div>
                  <p className="text-white font-bold text-sm tracking-wide">{t.author}</p>
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("https://formsubmit.co/ajax/info@arqqa.net", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (res.ok) {
        setSubmitted(true);
        formRef.current?.reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        console.error("FormSubmit error:", await res.text());
      }
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="New Contact Form Submission" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
          <input
            type="text"
            name="full_name"
            placeholder="John Doe"
            required
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-1 focus:ring-red-500/50"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            placeholder="+1 (555) 000-0000"
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-1 focus:ring-red-500/50"
          />
        </div>
      </div>
      <div className="space-y-3">
        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Work Email</label>
        <input
          type="email"
          name="email"
          placeholder="name@company.com"
          required
          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-1 focus:ring-red-500/50"
        />
      </div>
      <div className="space-y-3">
        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
        <textarea
          rows={4}
          name="message"
          placeholder="Tell us about your project..."
          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-1 focus:ring-red-500/50 resize-none"
        ></textarea>
      </div>
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 text-sm font-medium text-center py-2"
        >
          ✓ Message sent successfully!
        </motion.div>
      )}
      <div className="pt-6">
        <PrimaryButton
          type="submit"
          className="w-full rounded-2xl py-5 uppercase font-black text-xs tracking-widest bg-gradient-to-r from-red-600 to-blue-600"
        >
          {isSubmitting ? "Sending..." : "Book My Strategy Call"}
        </PrimaryButton>
      </div>
    </form>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 leading-tight uppercase tracking-tighter italic">
              Don't build <br /> before <br />{" "}
              <span className="text-red-500 underline decoration-blue-900 underline-offset-8">defining scope.</span>
            </h2>
          </div>
          <div className="w-full relative">
            <div className="p-8 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 border-t border-white/10 bg-black relative z-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
      <img src={LOGO_URL} alt="Arqqa" className="h-10 opacity-60" />
      <div className="flex gap-8">
        {["Philosophy", "Services", "Process", "Work"].map((s) => (
          <a
            key={s}
            href={`#${s.toLowerCase()}`}
            className="text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-red-500 transition-colors"
          >
            {s}
          </a>
        ))}
      </div>
      <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-bold">
        Built for <span className="text-red-600">Clarity</span>
      </p>
    </div>
  </footer>
);

const Index = () => {
  const [view, setView] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-red-500/50 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {view === "home" && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <NeonParticles />
            <Navigation />
            <Hero />
            <Clients />
            <Philosophy />
            <Features />
            <CaseStudies onOpenProject={(id) => setView(id)} />
            <Process onNavigate={() => setView("process")} />
            <Testimonials />
            <ContactSection />
            <Footer />
          </motion.div>
        )}

        {view === "process" && (
          <ProcessPage
            key="process"
            onBack={() => setView("home")}
            onBookCall={() => {
              setView("home");
              setTimeout(() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }, 600);
            }}
          />
        )}

        {view === "lifelypets" && (
          <LifelyPetsPage
            key="lifely"
            onBack={() => setView("home")}
            onBookCall={() => {
              setView("home");
              setTimeout(() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }, 600);
            }}
          />
        )}

        {Object.keys(projectsData).includes(view) && (
          <ProjectPage
            key={view}
            data={projectsData[view]}
            onBack={() => setView("home")}
            onBookCall={() => {
              setView("home");
              setTimeout(() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }, 600);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
