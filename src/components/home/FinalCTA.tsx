import { Button } from '../ui/Button';

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Massive Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Ready to automate your <br/>
          <span className="bg-gradient-primary bg-clip-text text-transparent">business?</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Deploy production-ready AI voice agents in minutes. Scale your customer experience without scaling headcount.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="text-lg px-8 shadow-[0_0_30px_rgba(126,20,255,0.5)]">
            Start Your Free Trial
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            Talk to Sales
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          Free trial includes 30 minutes monthly. No credit card required.
        </p>
      </div>
    </section>
  );
}
