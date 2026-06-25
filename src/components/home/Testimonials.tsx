import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

const TESTIMONIALS = [
  {
    quote: "helllo.ai completely transformed our front desk. We handle 5x the call volume without adding headcount, and CSAT is up 40%.",
    author: "Sarah Jenkins",
    role: "VP of Operations",
    company: "TechMed Clinics"
  },
  {
    quote: "The easiest deployment we've ever done. It integrated directly into our Zendesk flow in minutes and just started working.",
    author: "David Chen",
    role: "Customer Success Director",
    company: "RetailNova"
  },
  {
    quote: "It doesn't just sound human; it actually solves the problem instead of just routing it. Absolute game changer for our SDR team.",
    author: "Amanda Torres",
    role: "Head of Sales",
    company: "GrowthStack"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase mb-4 text-sm">
            Customer Stories
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Loved by <span className="bg-gradient-primary bg-clip-text text-transparent">innovators</span>
          </h2>
        </header>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <GlassCard className="p-8 h-full flex flex-col justify-between border-white/5 relative overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="text-primary text-5xl opacity-20 absolute top-4 left-6 font-serif">"</div>
                <div className="relative z-10">
                  <p className="text-lg text-white/90 leading-relaxed mb-8 pt-4">
                    {t.quote}
                  </p>
                  <div>
                    <h4 className="font-bold text-white">{t.author}</h4>
                    <p className="text-sm text-muted-foreground">{t.role}, <span className="text-primary">{t.company}</span></p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
