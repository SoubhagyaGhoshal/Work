import { GlassCard } from '../ui/GlassCard';

const FEATURES = [
  {
    title: '5-Minute Setup',
    stat: '5 min',
    desc: 'Get started in minutes, not hours. No technical expertise required.',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <polyline points="12 6 12 12 16 14" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: '50+ Integrations',
    stat: '50+',
    desc: 'Works with Salesforce, HubSpot, Calendly, and all your favorite tools.',
    icon: (
      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />
      </svg>
    )
  },
  {
    title: 'Best-in-Class AI',
    stat: '3+ LLMs',
    desc: 'Powered by GPT-4, Claude, and Gemini for natural conversations.',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      </svg>
    )
  },
  {
    title: '25+ Languages',
    stat: '25+',
    desc: 'Serve customers globally in their native language.',
    icon: (
      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeWidth="2" d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path strokeWidth="2" d="M2 12h20" />
      </svg>
    )
  },
  {
    title: 'Unlimited Scale',
    stat: '10K+',
    desc: 'From 10 to 10,000+ calls daily. Grows with your business.',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" strokeWidth="2" />
        <polyline points="16 7 22 7 22 13" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: 'Enterprise Security',
    stat: '99.9%',
    desc: 'SOC 2 Type II, GDPR compliant with end-to-end encryption.',
    icon: (
      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth="2" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    )
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Helllo.ai</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade AI voice agents built for businesses of all sizes. Ready to work from day one.
          </p>
        </header>

        {/* Big Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {[
            { value: '5 min', label: 'Setup Time' },
            { value: '25+', label: 'Languages' },
            { value: '50+', label: 'Integrations' },
            { value: '99.9%', label: 'Uptime' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {FEATURES.map((feature, i) => (
            <GlassCard key={i} className="p-6 group hover:border-primary/30 transition-colors" hoverEffect>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-surface/50 border border-white/5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-lg text-white group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
                      {feature.stat}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
