import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

const CATEGORIES = ['All Features', 'Call Management', 'Integrations', 'Intelligence'];

const FEATURES = [
  { id: 1, title: 'Agentic flows and orchestration', category: 'Intelligence', desc: 'Complex multi-turn conversations handled effortlessly.' },
  { id: 2, title: 'Production-ready AI voice agents', category: 'Call Management', desc: 'Deploy agents instantly without engineering overhead.' },
  { id: 3, title: 'Customer experience automation', category: 'Intelligence', desc: 'Enhance CSAT with 24/7 instant issue resolution.' },
  { id: 4, title: 'CRM integration', category: 'Integrations', desc: 'Salesforce, HubSpot, Zendesk, and 50+ more.' },
  { id: 5, title: 'Multi-language support', category: 'Call Management', desc: 'Speak to your customers in 25+ global languages.' },
  { id: 6, title: 'Enterprise-grade security', category: 'All Features', desc: 'SOC2 Type II and GDPR compliant infrastructure.' },
  { id: 7, title: 'Real-time analytics', category: 'Intelligence', desc: 'Track sentiment, intent, and resolution rates live.' },
  { id: 8, title: 'Calendar & Scheduling', category: 'Integrations', desc: 'Automatically book meetings via Calendly.' },
  { id: 9, title: 'Inbound Call Routing', category: 'Call Management', desc: 'Intelligently route calls based on intent.' },
];

export function PowerfulFeatures() {
  const [activeTab, setActiveTab] = useState('All Features');

  const filteredFeatures = activeTab === 'All Features' 
    ? FEATURES 
    : FEATURES.filter(f => f.category === activeTab || f.category === 'All Features');

  return (
    <section className="py-24 bg-surface/30 relative" id="features">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to automate customer communication, manage leads, and scale operations.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border-2 ${
                activeTab === category 
                  ? 'border-primary bg-primary/20 text-white shadow-[0_0_15px_rgba(126,20,255,0.4)]' 
                  : 'border-white/10 text-muted-foreground hover:border-white/30 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map(feature => (
              <motion.div
                key={feature.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-6 h-full border-white/5 hover:border-primary/40 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
