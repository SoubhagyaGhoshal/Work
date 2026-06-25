import { motion } from 'framer-motion';

export function CatalystPrism() {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden pointer-events-none">
      
      {/* 1. The Chaotic Input Thread (Voice) */}
      <motion.svg 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-40 opacity-70"
        viewBox="0 0 500 100" 
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 50 Q 50 10, 100 50 T 200 50 T 300 20 T 400 80 T 500 50"
          fill="transparent"
          stroke="url(#chaoticGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' }}
        />
        <defs>
          <linearGradient id="chaoticGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* 2. The Obsidian Prism */}
      <motion.div 
        className="relative z-10 w-40 h-40 md:w-56 md:h-56"
        animate={{ 
          rotateX: [0, 10, 0, -10, 0], 
          rotateY: [0, -15, 0, 15, 0],
          rotateZ: [0, 5, 0, -5, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Diamond shape using CSS clip-path and rich gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#050505] to-[#111] opacity-90 border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)] backdrop-blur-xl" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
          
          {/* Inner reflections */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent" />
          
          {/* The Core Flash (Impact Point) */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full blur-[20px]"
            animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
          />
        </div>
      </motion.div>

      {/* 3. The Structured Output Beams (Action) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex flex-col justify-center gap-12">
        {/* Beam 1 */}
        <div className="relative w-full h-[1px]">
          <motion.div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-white via-white/50 to-transparent w-full"
            initial={{ scaleX: 0, opacity: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2, ease: "circOut" }}
            style={{ filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))' }}
          />
          <motion.span 
            className="absolute left-20 -top-5 text-[9px] font-mono tracking-widest text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2.2 }}
          >
            CRM_RECORD_UPDATED
          </motion.span>
        </div>

        {/* Beam 2 */}
        <div className="relative w-full h-[2px]">
          <motion.div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-white via-white/50 to-transparent w-full"
            initial={{ scaleX: 0, opacity: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2.1, ease: "circOut" }}
            style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' }}
          />
          <motion.span 
            className="absolute left-40 -top-5 text-[9px] font-mono tracking-widest text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2.3 }}
          >
            MEETING_SCHEDULED
          </motion.span>
        </div>

        {/* Beam 3 */}
        <div className="relative w-full h-[1px]">
          <motion.div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-white via-white/50 to-transparent w-full"
            initial={{ scaleX: 0, opacity: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2.2, ease: "circOut" }}
            style={{ filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))' }}
          />
          <motion.span 
            className="absolute left-10 -top-5 text-[9px] font-mono tracking-widest text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2.4 }}
          >
            TICKET_RESOLVED
          </motion.span>
        </div>
      </div>

    </div>
  );
}
