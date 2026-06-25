import { motion } from 'framer-motion';
import { CatalystPrism } from './CatalystPrism';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center pt-20 overflow-hidden selection:bg-white/20">
      
      {/* Background is pure black as per creative direction. No gradients. No noise. */}
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* The Prism Animation Layer */}
        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-80 mix-blend-screen">
          <CatalystPrism />
        </div>

        {/* Typography Layer (Z-index high to float above the prism) */}
        <div className="relative z-20 text-center flex flex-col items-center mt-32 md:mt-20">
          
          <motion.h1 
            className="text-6xl md:text-[8rem] leading-[0.9] font-bold text-white tracking-tighter mb-8"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Speak.<br />
            It is done.
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-[#888888] font-medium tracking-wide mb-12 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            The execution engine for the voice-first enterprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative group"
          >
            <button className="px-10 py-4 bg-white text-black text-sm uppercase tracking-widest font-bold rounded-full hover:scale-105 transition-transform duration-300">
              Initialize
            </button>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}
