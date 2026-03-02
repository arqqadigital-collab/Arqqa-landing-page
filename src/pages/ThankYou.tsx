import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const LOGO_URL = "https://i.ibb.co/jPDY2nBG/Arqqa-Logo-White.png";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: "thank_you_page_view" });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-red-500/50 overflow-x-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-red-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-blue-600/15 blur-[150px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-red-600/20 py-3">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center group">
            <img
              src={LOGO_URL}
              alt="Arqqa"
              className="h-7 md:h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]"
            />
          </a>
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back to Home</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-red-600/20 to-red-600/5 border border-red-600/30 flex items-center justify-center shadow-[0_0_60px_rgba(220,38,38,0.2)]">
                <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-red-500" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9] max-w-4xl mx-auto uppercase italic"
            >
              Request{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-blue-500 to-red-600 animate-gradient-x">
                Submitted
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light italic"
            >
              Your request has been submitted successfully. We will contact you shortly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <motion.button
                whileHover={{ scale: 1.01, boxShadow: "0 0 40px rgba(220,38,38,0.5)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/")}
                className="group relative px-10 py-4 rounded-full font-bold text-white bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.3)] overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Back to Home
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-16 border-t border-white/10 bg-black z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <img src={LOGO_URL} alt="Arqqa" className="h-10 opacity-60" />
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-bold">
            Built for <span className="text-red-600">Clarity</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;
