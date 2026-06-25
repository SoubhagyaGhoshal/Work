import React, { useState, useEffect, useRef } from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import PartnerMarquee from './PartnerMarquee';
import TiltWrapper from './TiltWrapper';

const BASE_WORDS = ["Front Desk Services", "Customer Experience", "Revenue Operations"];
const WORDS = Array.from({ length: 12 * BASE_WORDS.length }, (_, r) => BASE_WORDS[r % BASE_WORDS.length]);

const HERO_CSS = `
  .partner-logo-container {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  .partner-logo {
    max-height: 50px;
    max-width: 140px;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: grayscale(100%) opacity(0.65) brightness(1.4);
    transition: all 0.3s ease;
  }
  .partner-logo-container:hover .partner-logo {
    filter: grayscale(0%) opacity(1) brightness(1.1);
    transform: scale(1.05);
  }
  .partner-marquee {
    overflow: hidden;
    width: 100%;
    -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
    mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  }
  .partner-marquee-track {
    display: flex;
    align-items: center;
    width: max-content;
    gap: 4rem;
    animation: partner-marquee-scroll 45s linear infinite;
    will-change: transform;
  }
  .partner-marquee:hover .partner-marquee-track { animation-play-state: paused; }
  @keyframes partner-marquee-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  .hero-slot {
    display: inline-flex;
    align-items: baseline;
    justify-content: flex-end;
    height: 1.2em;
    overflow: hidden;
    vertical-align: baseline;
    padding: 0;
    text-align: right;
  }
  .hero-slot-track {
    display: block;
    text-align: right;
    will-change: transform;
    transition: transform 700ms cubic-bezier(0.25, 0.1, 0.25, 1), filter 700ms ease;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .hero-slot-track.no-transition { transition: none; }
  .hero-slot-item {
    display: block;
    height: 1.2em;
    line-height: 1.2em;
    text-align: right;
  }
  .hero-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }
  @media (prefers-reduced-motion: reduce) {
    .hero-slot-track {
      transition: none;
      background: var(--accent-cyan);
      -webkit-text-fill-color: var(--accent-cyan);
    }
    .partner-marquee-track {
      animation: none;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }
  }
`;

// Animated particle network canvas — mimics reference site background
const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Increase density for a richer network
    const COUNT = Math.max(50, Math.floor((width * height) / 9000));
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 1.5 + 0.8,
      });
    }

    const MAX_DIST = 150;
    let mouseX = -1000;
    let mouseY = -1000;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', onMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        
        // Safety bounds
        if (p.x < 0) p.x = 0;
        if (p.x > width) p.x = width;
        if (p.y < 0) p.y = 0;
        if (p.y > height) p.y = height;
      }
      
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        // Connections between particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < MAX_DIST) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - dist / MAX_DIST) * 0.4})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        
        // Connection to mouse
        const dxMouse = particles[i].x - mouseX;
        const dyMouse = particles[i].y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < MAX_DIST * 1.5) {
          ctx.strokeStyle = `rgba(6, 182, 212, ${(1 - distMouse / (MAX_DIST * 1.5)) * 0.6})`;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
        
        // Draw particle dot
        ctx.fillStyle = 'rgba(6, 182, 212, 0.7)';
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].r, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animId = requestAnimationFrame(draw);
    };
    
    draw();

    const onResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', onResize);
    
    return () => { 
      cancelAnimationFrame(animId); 
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
};

const HeroSection: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    let intervalId: number | undefined;
    const timeoutId = setTimeout(() => {
      setWordIndex(prev => prev + 1);
      intervalId = window.setInterval(() => {
        setWordIndex(prev => {
          const next = prev + 1;
          return next >= WORDS.length ? 0 : next;
        });
      }, 2500);
    }, 800);
    return () => { clearTimeout(timeoutId); if (intervalId) window.clearInterval(intervalId); };
  }, []);

  useEffect(() => {
    if (noTransition) return;
    setIsSpinning(true);
    const t = window.setTimeout(() => setIsSpinning(false), 700);
    return () => window.clearTimeout(t);
  }, [noTransition, wordIndex]);

  useEffect(() => {
    if (wordIndex >= BASE_WORDS.length) {
      const t = window.setTimeout(() => {
        setNoTransition(true);
        setWordIndex(0);
        window.requestAnimationFrame(() => setNoTransition(false));
      }, 700);
      return () => window.clearTimeout(t);
    }
  }, [wordIndex]);

  const trackClasses = ['hero-slot-track', isSpinning ? 'is-spinning' : '', noTransition ? 'no-transition' : ''].filter(Boolean).join(' ');

  return (
    <>
      <style>{HERO_CSS}</style>
      <section
        id="home"
        className="relative pt-16 pb-8 lg:pt-20 lg:pb-10 overflow-hidden min-h-screen flex flex-col snap-start"
        style={{ background: '#080808' }}
        role="banner"
      >
        <ParticleCanvas />
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 flex-1 flex flex-col justify-center">
          <div className="max-w-5xl mx-auto text-center flex-1 flex flex-col justify-center">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 tracking-tight flex flex-col items-center text-center"
              style={{ rowGap: '0.5rem' }}
            >
              <span className="block leading-tight" style={{ color: '#ffffff' }}>Supercharge your</span>
              <span style={{ color: '#ffffff' }} className="block leading-tight">
                <span className="flex items-baseline justify-center gap-3 flex-wrap">
                  <span className="hero-slot" aria-live="polite">
                    <span className={trackClasses} style={{ transform: `translateY(-${1.2 * wordIndex}em)` }}>
                      {WORDS.map((word, i) => (
                        <span key={`${word}-${i}`} className="hero-slot-item">{word}</span>
                      ))}
                    </span>
                  </span>
                  <span>&nbsp;with</span>
                </span>
              </span>
              <span className="block leading-tight italic" style={{ color: '#ffffff' }}>AI Voice Agents + Agentic Flows</span>
            </h1>

            <p
              className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed max-w-3xl mx-auto"
              style={{ color: 'rgba(245,245,245,0.6)' }}
            >
              Deploy and scale production-ready AI voice agents, powered by agentic orchestration, to deliver business outcomes.
            </p>

            <div className="w-full flex justify-center perspective-1000">
              <TiltWrapper maxTilt={5} scale={1.03} className="w-full">
                <div
                  className="rounded-xl overflow-hidden w-full"
                  style={{
                    background: 'var(--surface-elevated)',
                    border: '1px solid var(--surface-border)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
                  }}
                >
                  <div className="p-6 pt-5 px-4 sm:px-8 md:px-12 lg:px-16 pb-3">
                    <div className="flex flex-col sm:flex-row gap-3 items-start">
                      <div className="flex flex-col gap-1 w-full sm:flex-1">
                        <div className="flex items-center gap-2 w-full">
                          <button
                            type="button"
                            className="flex items-center justify-between px-3 py-2 text-sm w-auto h-12 pl-3 pr-2 rounded-lg self-start transition-colors"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#f5f5f5' }}
                          >
                            <span style={{ pointerEvents: 'none' }}>
                              <span className="flex items-center">
                                <span className="text-xl leading-none">🇮🇳&nbsp;</span>
                                <span className="text-base font-medium whitespace-nowrap" style={{ color: '#f5f5f5' }}>&nbsp;+91&nbsp;</span>
                              </span>
                            </span>
                            <ChevronDown className="h-4 w-4 opacity-40" aria-hidden="true" />
                          </button>
                          <div className="flex flex-col gap-1 flex-1">
                            <input
                              type="tel"
                              className="flex py-2 w-full h-12 text-base px-4 rounded-lg transition-colors focus:outline-none"
                              placeholder="Enter your phone number"
                              aria-label="Phone number"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#f5f5f5',
                              }}
                            />
                            <div className="h-5 min-h-[20px]" />
                          </div>
                        </div>
                      </div>
                      <button
                        className="text-lg h-12 active:scale-95 transition-all duration-200 rounded-lg px-6 sm:px-8 font-bold uppercase tracking-widest flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap"
                        aria-label="Call me - Start call"
                        style={{
                          background: 'var(--accent-gradient)',
                          color: '#fff',
                          boxShadow: '0 4px 20px rgba(139, 92, 246, 0.35)',
                          letterSpacing: '0.14em',
                          border: 'none'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 28px rgba(139, 92, 246, 0.55)'; e.currentTarget.style.transform = 'scale(1.03)'; }}
                        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.35)'; e.currentTarget.style.transform = 'scale(1)'; }}
                      >
                        <Phone className="h-4 w-4" />
                        CALL ME
                      </button>
                    </div>
                    <div className="flex items-center pt-1 pb-4 justify-center px-4 sm:px-8 md:px-12 lg:px-16">
                      <p className="text-sm text-center" style={{ color: 'rgba(245,245,245,0.38)' }}>
                        Experience helllo AI voice now!
                      </p>
                    </div>
                  </div>
                </div>
              </TiltWrapper>
            </div>
          </div>
        </div>

        <PartnerMarquee />
      </section>
    </>
  );
};

export default HeroSection;
