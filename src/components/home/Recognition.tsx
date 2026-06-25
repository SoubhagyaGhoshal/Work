import { GlassCard } from '../ui/GlassCard';

export function Recognition() {
  return (
    <section className="py-24 border-y border-white/5 bg-gradient-to-b from-surface/20 to-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">
            Backed by recognised programmes
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Vetted by industry leaders you already trust
          </h2>
          <p className="text-muted-foreground text-lg">
            From India's national startup registry to SAP and Google accelerators — proof you can diligence, whether you are investing or buying enterprise voice AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* SAP */}
          <GlassCard className="p-8 flex flex-col items-center justify-between text-center gap-6 group hover:border-primary/30 transition-colors">
            <div className="h-16 flex items-center justify-center">
              <img src="/logos/sap-logo.svg" alt="SAP" className="h-10 opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">SAP Startup Studio</h3>
              <p className="text-sm text-muted-foreground">
                Building enterprise-grade voice workflows alongside SAP's innovation ecosystem.
              </p>
            </div>
            <a href="https://news.sap.com/india/tags/sap-startup-studio/" target="_blank" rel="noreferrer" className="text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              View programme &rarr;
            </a>
          </GlassCard>

          {/* Google */}
          <GlassCard className="p-8 flex flex-col items-center justify-between text-center gap-6 group hover:border-primary/30 transition-colors">
            <div className="h-16 flex items-center justify-center">
              <img src="/logos/google-wordmark.svg" alt="Google" className="h-8 opacity-80 group-hover:opacity-100 transition-opacity invert" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Cloud Program</h3>
              <p className="text-sm text-muted-foreground">
                Cloud, credits, and technical depth to ship secure, scalable AI voice at speed.
              </p>
            </div>
            <a href="https://startup.google.com/cloud/" target="_blank" rel="noreferrer" className="text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              View programme &rarr;
            </a>
          </GlassCard>

          {/* DPIIT */}
          <GlassCard className="p-8 flex flex-col items-center justify-between text-center gap-6 group hover:border-primary/30 transition-colors">
            <div className="h-16 flex flex-col items-center justify-center gap-2">
              <div className="flex h-1.5 w-16 overflow-hidden rounded-full opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="flex-1 bg-[#FF9933]"></div>
                <div className="flex-1 bg-white"></div>
                <div className="flex-1 bg-[#138808]"></div>
              </div>
              <span className="font-bold tracking-tight text-white/90">DPIIT recognised</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Startup India</h3>
              <p className="text-sm text-muted-foreground">
                National recognition under DPIIT — the standard banks, enterprises, and LPs look for in India.
              </p>
            </div>
            <a href="https://www.startupindia.gov.in/" target="_blank" rel="noreferrer" className="text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              View programme &rarr;
            </a>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
