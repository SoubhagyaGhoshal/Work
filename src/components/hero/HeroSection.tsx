
import { motion } from 'framer-motion';
import { InteractiveOrb } from './InteractiveOrb';
import { Button } from '../ui/Button';
import { Mic, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Introducing Agentic Flows
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-gradient">
            The Voice of <br /> Your Business.
          </h1>
          <p className="max-w-[600px] mx-auto text-muted-foreground text-lg md:text-xl">
            Human-speed conversation. Sub-500ms latency. Deploy production-ready AI voice agents powered by true agentic orchestration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="w-full max-w-2xl mx-auto my-12"
        >
          <InteractiveOrb />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        >
          <Button size="lg" className="group">
            <Mic className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Hold to Speak
          </Button>
          <Button size="lg" variant="ghost" className="group">
            View Documentation
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
