import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Platform', href: '#features' },
  { name: 'Use Cases', href: '#industries' },
  { name: 'Developers', href: '#resources' },
  { name: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine the current state of the pill
  // It is expanded ONLY IF we are not heavily scrolled down OR if the user hovers near the top.
  const isExpanded = !isScrolled || isHovered;

  return (
    <>
      {/* Invisible proximity hover area at the top of the screen */}
      <div 
        className="fixed top-0 left-0 right-0 h-32 z-40 pointer-events-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveHoverId(null);
        }}
      />

      <motion.header
        className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <motion.div
          layout
          className={`flex items-center pointer-events-auto overflow-hidden bg-[#0A0A0A]/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out`}
          style={{ 
            height: 48,
            padding: '0 8px',
            gap: isExpanded ? '24px' : '0px'
          }}
        >
          
          {/* Logo Area */}
          <a href="/" className="flex items-center gap-3 pl-3 py-2 flex-shrink-0">
            <motion.div layout className="w-6 h-6 rounded flex items-center justify-center bg-white">
              <span className="text-black font-bold text-sm">H</span>
            </motion.div>
            
            {/* The subtle pulsing dot that shows it's "listening" when collapsed */}
            <AnimatePresence>
              {!isExpanded && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"
                />
              )}
            </AnimatePresence>
          </a>

          {/* Expanded Links Area */}
          <AnimatePresence>
            {isExpanded && (
              <motion.nav 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex items-center gap-1 whitespace-nowrap"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setActiveHoverId(link.name)}
                    className="relative px-4 py-2 text-[13px] font-medium tracking-tight text-[#888888] hover:text-white transition-colors z-10"
                  >
                    {link.name}
                    
                    {/* Animated dot indicator under the active/hovered link */}
                    {activeHoverId === link.name && (
                      <motion.div
                        layoutId="activeNavDot"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>

          {/* CTA Area */}
          <motion.div layout className="flex-shrink-0 flex items-center py-2 pr-1">
            <a href="#login" className="px-4 py-1.5 text-[13px] font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden sm:block mr-2">
              Sign In
            </a>
            <button className="px-5 py-1.5 bg-white text-black text-[13px] font-bold rounded-full hover:scale-105 transition-transform">
              Initialize
            </button>
          </motion.div>

        </motion.div>
      </motion.header>

      {/* Mobile nav fallback - floating bottom bar */}
      <div className="fixed bottom-6 left-4 right-4 z-50 sm:hidden">
         {/* Simplified mobile view that just has the logo and initialize button */}
         <div className="flex items-center justify-between p-2 bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl">
            <div className="flex items-center gap-2 pl-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-black font-bold">H</span>
              </div>
            </div>
            <button className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full">
              Initialize
            </button>
         </div>
      </div>
    </>
  );
}
