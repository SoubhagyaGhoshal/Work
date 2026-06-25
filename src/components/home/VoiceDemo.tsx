import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

export function VoiceDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  // Simulate audio player timing
  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setTime(t => {
          if (t >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return t + 0.5;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-24 bg-surface/20 border-y border-white/5 relative overflow-hidden" id="solutions">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Side: Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">
            Hear It In Action
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Indistinguishable from <br/><span className="text-white">human agents.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
            Listen to a real AI voice agent handling a complex customer support ticket with zero latency and natural conversational nuance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button size="lg" className="w-full sm:w-auto shadow-[0_0_20px_rgba(126,20,255,0.4)]">
              Build Your Agent Now
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Case Studies
            </Button>
          </div>
        </div>

        {/* Right Side: Interactive Audio Player */}
        <div className="flex-1 w-full max-w-xl">
          <GlassCard className="p-8 relative overflow-hidden border-white/10 shadow-2xl">
            {/* Pulsing ring when playing */}
            {isPlaying && (
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[50px] animate-pulse" />
            )}
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 shadow-[0_0_15px_rgba(126,20,255,0.3)]">
                    <span className="text-xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Support Agent</h4>
                    <p className="text-sm text-primary flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      Active Call
                    </p>
                  </div>
                </div>
                <div className="text-sm font-mono text-muted-foreground bg-black/40 px-3 py-1 rounded-full border border-white/10">
                  00:{Math.floor(time / 10).toString().padStart(2, '0')}
                </div>
              </div>

              {/* Waveform Visualization */}
              <div className="h-24 flex items-center justify-center gap-1 mb-8 bg-black/30 rounded-xl border border-white/5 p-4">
                {[...Array(40)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="w-1.5 bg-primary rounded-full"
                    animate={{ 
                      height: isPlaying ? [10, Math.random() * 60 + 10, 10] : 10,
                      opacity: isPlaying ? 1 : 0.3
                    }}
                    transition={{ 
                      duration: 0.5 + Math.random(), 
                      repeat: isPlaying ? Infinity : 0,
                      ease: "easeInOut" 
                    }}
                  />
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>
                  ) : (
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  )}
                </button>
              </div>

              {/* Progress bar */}
              <div className="mt-8 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-75 ease-linear"
                  style={{ width: `${time}%` }}
                />
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
