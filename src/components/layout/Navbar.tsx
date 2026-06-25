import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '../ui/Button';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2">
            <img src="/logo-wide.svg" alt="Helllo.ai" className="h-8 md:h-10 w-auto" />
          </a>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-foreground">
          <a href="#features" className="hover:text-primary transition-colors flex items-center gap-1">Features <span className="text-[10px] opacity-50">▼</span></a>
          <a href="#industries" className="hover:text-primary transition-colors flex items-center gap-1">Industries <span className="text-[10px] opacity-50">▼</span></a>
          <a href="#solutions" className="hover:text-primary transition-colors flex items-center gap-1">Solutions <span className="text-[10px] opacity-50">▼</span></a>
          <a href="#resources" className="hover:text-primary transition-colors flex items-center gap-1">Resources <span className="text-[10px] opacity-50">▼</span></a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#login" className="text-sm font-medium text-foreground hover:text-primary px-3 py-2 border-2 border-primary/20 rounded-md transition-colors hover:border-primary">
            Sign In
          </a>
          <Button variant="primary">Schedule a Demo</Button>
        </div>

        {/* Mobile Menu Toggle (simplified for now) */}
        <button className="lg:hidden text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
        </button>
      </div>
    </motion.header>
  );
}
