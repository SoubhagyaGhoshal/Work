import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export function InteractiveOrb() {
  const [isListening, setIsListening] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isListening) {
      controls.start({
        scale: [1, 1.2, 0.9, 1.1, 1],
        opacity: [0.8, 1, 0.7, 1, 0.8],
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
      });
    } else {
      controls.start({
        scale: [1, 1.05, 1],
        opacity: [0.6, 0.8, 0.6],
        transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
      });
    }
  }, [isListening, controls]);

  return (
    <div className="relative flex items-center justify-center w-64 h-64 md:w-96 md:h-96 mx-auto cursor-pointer"
         onMouseEnter={() => setIsListening(true)}
         onMouseLeave={() => setIsListening(false)}>
      
      {/* Outer Glow */}
      <motion.div
        animate={controls}
        className="absolute inset-0 rounded-full bg-primary/20 blur-3xl pointer-events-none"
      />
      
      {/* Middle Layer */}
      <motion.div
        animate={controls}
        style={{ animationDelay: '0.2s' }}
        className="absolute inset-8 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-50 pointer-events-none"
      />
      
      {/* Inner Core */}
      <motion.div
        animate={controls}
        style={{ animationDelay: '0.4s' }}
        className="relative z-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-white via-primary to-secondary shadow-[0_0_50px_rgba(126,20,255,0.8)] border-4 border-white/10"
      >
        <div className="absolute inset-0 bg-black/10 rounded-full mix-blend-overlay" />
      </motion.div>

      {/* Voice Particles (simulated) */}
      {isListening && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut"
              }}
              className="absolute w-2 h-2 rounded-full bg-white blur-[1px]"
            />
          ))}
        </>
      )}
    </div>
  );
}
