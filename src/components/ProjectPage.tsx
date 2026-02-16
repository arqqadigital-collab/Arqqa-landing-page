import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const LOGO_URL = "https://i.ibb.co/jPDY2nBG/Arqqa-Logo-White.png";

export interface ProjectPageData {
  titleLine1: string;
  titleLine2: string;
  titleLine2Color: string;
  subtitle: string;
  subtitleHighlight: string;
  paragraphs: string[];
  solutionItems: string[];
  heroImage: string;
  presentationImage: string;
  tabletImage: string;
  accentColor: string;
  accentRgb: string;
}

const ProjectPage = ({ data, onBack }: { data: ProjectPageData; onBack: () => void }) => {
  const { titleLine1, titleLine2, titleLine2Color, subtitle, subtitleHighlight, paragraphs, solutionItems, heroImage, presentationImage, tabletImage, accentColor, accentRgb } = data;

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
        <div className={`absolute top-[-20%] right-[-10%] w-[60%] h-[140%] bg-gradient-to-bl ${accentColor}/10 via-transparent to-transparent rotate-12 blur-[120px] pointer-events-none z-0`} style={{ background: `linear-gradient(to bottom left, rgba(${accentRgb}, 0.1), transparent, transparent)` }} />
        <div className="absolute top-[10%] right-[-5%] w-[2px] h-[60%] bg-gradient-to-b from-transparent to-transparent rotate-[15deg] blur-[2px] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(to bottom, transparent, rgba(${accentRgb}, 0.5), transparent)` }} />
        <div className="absolute top-[15%] right-[5%] w-[400px] h-[400px] blur-[100px] rounded-full pointer-events-none z-0" style={{ backgroundColor: `rgba(${accentRgb}, 0.05)` }} />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-screen flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] blur-[150px] pointer-events-none" style={{ backgroundColor: `rgba(${accentRgb}, 0.4)` }} />
          <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[80%] h-[100px] blur-[100px] rounded-full pointer-events-none" style={{ backgroundColor: `rgba(${accentRgb}, 0.6)` }} />
          <img 
            src={heroImage} 
            alt={`${titleLine1} ${titleLine2} Hero Mockup`} 
            className="w-screen min-w-full h-auto object-cover relative z-20"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black via-black/80 to-transparent z-30" />
        </motion.div>
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Navigation (Overlay) */}
      <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-transparent backdrop-blur-sm border-b border-white/5">
        <button onClick={onBack} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all">
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
                {titleLine1} <span className="drop-shadow-[0_0_20px_currentColor]" style={{ color: `rgb(${accentRgb})` }}>{titleLine2}</span>
              </h1>
              <p className="text-2xl md:text-3xl font-light text-gray-400 tracking-tight leading-snug">
                {subtitle} <span className="text-white">{subtitleHighlight}</span>
              </p>
              <div className="w-20 h-1 mx-auto mt-8" style={{ backgroundImage: `linear-gradient(to right, rgb(${accentRgb}), transparent)` }} />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-16 text-left space-y-8"
            >
              {paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-gray-300 font-light leading-relaxed">{p}</p>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-left"
            >
              <div className="col-span-1 md:col-span-2 space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: `rgb(${accentRgb})` }}>Solution & Execution</span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                   {solutionItems.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg text-gray-300 font-light border-b border-white/5 pb-2">
                        <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: `rgb(${accentRgb})` }} />
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
        <div className="absolute top-0 left-0 right-0 h-px z-20" style={{ backgroundImage: `linear-gradient(to right, transparent, rgb(${accentRgb}), transparent)`, boxShadow: `0 0 20px rgba(${accentRgb}, 0.8)` }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[150px] blur-[100px] z-10" style={{ backgroundColor: `rgba(${accentRgb}, 0.2)` }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-30 w-full"
        >
          <img 
            src={presentationImage} 
            alt={`${titleLine1} ${titleLine2} Full Presentation`} 
            className="w-full h-auto object-cover block"
            style={{ boxShadow: `0 0 80px rgba(${accentRgb}, 0.15)` }}
          />
        </motion.div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[100px] blur-[80px] z-10" style={{ backgroundColor: `rgba(${accentRgb}, 0.1)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-px z-20" style={{ backgroundImage: `linear-gradient(to right, transparent, rgba(${accentRgb}, 0.4), transparent)` }} />
      </section>

      {/* --- TABLET MOCKUP SECTION --- */}
      <section className="relative w-full py-24 overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] blur-[160px] pointer-events-none z-0" style={{ backgroundColor: `rgba(${accentRgb}, 0.15)` }} />
        <div className="absolute top-10 left-0 right-0 h-px z-20" style={{ backgroundImage: `linear-gradient(to right, transparent, rgb(${accentRgb}), transparent)`, boxShadow: `0 0 30px rgba(${accentRgb}, 0.5)` }} />
        <div className="absolute bottom-10 left-0 right-0 h-px z-20" style={{ backgroundImage: `linear-gradient(to right, transparent, rgb(${accentRgb}), transparent)`, boxShadow: `0 0 40px rgba(${accentRgb}, 0.6)` }} />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 w-full"
        >
          <img 
            src={tabletImage} 
            alt={`${titleLine1} ${titleLine2} Tablet Mockup`} 
            className="w-full h-auto object-cover block brightness-90 contrast-110"
            style={{ boxShadow: `0 0 100px rgba(${accentRgb}, 0.2)` }}
          />
        </motion.div>

        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full blur-[4px] animate-pulse" style={{ backgroundColor: `rgb(${accentRgb})` }} />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full blur-[6px] animate-pulse" style={{ backgroundColor: `rgb(${accentRgb})` }} />
      </section>
    </motion.div>
  );
};

export default ProjectPage;
