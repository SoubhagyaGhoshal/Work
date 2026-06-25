import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GlassCard } from '../ui/GlassCard';

export function JourneyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fade out Step 1
  const step1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const step1Y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // Fade in/out Step 2
  const step2Opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0]);
  const step2Y = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);

  // Fade in Step 3
  const step3Opacity = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 1, 1]);
  const step3Y = useTransform(scrollYProgress, [0.5, 0.7], [50, 0]);

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden pt-20">
        
        {/* Left Side: Text Narrative */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <motion.div style={{ opacity: step1Opacity, y: step1Y }} className="absolute">
            <h3 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Step 1: Listen</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Hear every nuance.</h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Helllo.ai doesn't just transcribe text; it understands sentiment, urgency, and context in real-time, matching human cognitive speed.
            </p>
          </motion.div>

          <motion.div style={{ opacity: step2Opacity, y: step2Y }} className="absolute">
            <h3 className="text-secondary font-medium tracking-widest uppercase mb-4 text-sm">Step 2: Think</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Agentic processing.</h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Instead of rigid dialogue trees, our agent extracts intents dynamically and constructs the optimal path to resolve the user's issue instantly.
            </p>
          </motion.div>

          <motion.div style={{ opacity: step3Opacity, y: step3Y }} className="absolute">
            <h3 className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">Step 3: Act</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Zero friction.</h2>
            <p className="text-muted-foreground text-lg max-w-md">
              It calls your APIs, books the calendar, updates Salesforce, and resolves the ticket. Real work, completely automated.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Visualizations */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center relative p-8">
          
          {/* Step 1 Visual: Waveform */}
          <motion.div style={{ opacity: step1Opacity }} className="absolute inset-0 flex items-center justify-center">
             <GlassCard className="w-full max-w-md aspect-video flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(20)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="w-2 bg-primary rounded-full"
                      animate={{ height: [10, Math.random() * 50 + 20, 10] }}
                      transition={{ duration: 0.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))}
                </div>
                <p className="font-mono text-sm text-primary mt-4">"I need to reschedule my flight..."</p>
             </GlassCard>
          </motion.div>

          {/* Step 2 Visual: JSON/Brain */}
          <motion.div style={{ opacity: step2Opacity }} className="absolute inset-0 flex items-center justify-center">
            <GlassCard className="w-full max-w-md bg-black/60 border-secondary/30">
              <pre className="font-mono text-xs text-secondary/80 overflow-hidden">
{`{
  "intent": "reschedule_flight",
  "urgency": "high",
  "entities": {
    "booking_id": null,
    "new_date": null
  },
  "action": "trigger_workflow_reschedule",
  "next_prompt": "Can I have your booking reference?"
}`}
              </pre>
            </GlassCard>
          </motion.div>

          {/* Step 3 Visual: API Nodes */}
          <motion.div style={{ opacity: step3Opacity }} className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Nodes and connecting lines simulation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center shadow-[0_0_20px_#7e14ff]">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
              <motion.div 
                className="absolute top-1/4 left-1/4 w-12 h-12 rounded-xl bg-secondary/20 border border-secondary flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0px #47bfff", "0 0 20px #47bfff", "0 0 0px #47bfff"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white text-[10px]">CRM</span>
              </motion.div>
              <motion.div 
                className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-xl bg-green-500/20 border border-green-500 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0px #22c55e", "0 0 20px #22c55e", "0 0 0px #22c55e"] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity }}
              >
                <span className="text-white text-[10px]">API</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
