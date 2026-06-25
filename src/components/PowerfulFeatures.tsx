import React, { useState, useRef } from 'react';
import TiltWrapper from './TiltWrapper';

const featuresData = [
  {
    "title": "Call Recording",
    "description": "Record every conversation for quality assurance and compliance.",
    "category": "Call Management"
  },
  {
    "title": "Call Transcriptions",
    "description": "Real-time transcription of all conversations with high accuracy.",
    "category": "Call Management"
  },
  {
    "title": "Call Summary",
    "description": "AI-powered summaries of key points and action items from each call.",
    "category": "Call Management"
  },
  {
    "title": "Sentiment Analysis",
    "description": "Understand customer emotions and satisfaction in real-time.",
    "category": "Call Management"
  },
  {
    "title": "HubSpot Integration",
    "description": "Native integration with HubSpot CRM, Marketing, and Sales Hubs.",
    "category": "Integrations"
  },
  {
    "title": "Custom CRM Integration",
    "description": "Build custom integrations with any CRM or business tool via API.",
    "category": "Integrations"
  },
  {
    "title": "Call Summarization Messages",
    "description": "Automated summaries sent to both owner and customer after each call.",
    "category": "Communication"
  },
  {
    "title": "Human Handoff",
    "description": "Seamlessly transfer complex conversations to human agents when needed.",
    "category": "Communication"
  },
  {
    "title": "Automated Lead Follow-ups",
    "description": "Intelligent follow-up sequences that nurture leads automatically.",
    "category": "Automation"
  },
  {
    "title": "WhatsApp Integration",
    "description": "Seamlessly connect with customers via WhatsApp messaging.",
    "category": "Integrations"
  },
  {
    "title": "WebChat Embed Script",
    "description": "Add AI chat agent directly to your website with one line of code.",
    "category": "Integrations"
  },
  {
    "title": "Lead Management",
    "description": "Sync leads with Salesforce, HubSpot, and 50+ CRM platforms.",
    "category": "Integrations"
  },
  {
    "title": "Zapier Integration",
    "description": "Connect with 5,000+ apps and automate workflows without coding.",
    "category": "Integrations"
  },
  {
    "title": "Campaign Setup",
    "description": "Create and manage outbound calling campaigns with advanced targeting.",
    "category": "Campaign & Outreach"
  },
  {
    "title": "Google Search",
    "description": "AI agents can search the web for real-time information during calls.",
    "category": "Intelligence"
  },
  {
    "title": "Nearby Location",
    "description": "Find and recommend nearby locations, services, or businesses.",
    "category": "Intelligence"
  },
  {
    "title": "Conversation Continuity Context",
    "description": "Maintain context across multiple conversations and channels.",
    "category": "Intelligence"
  }
];

const categories = [
  "All Features",
  "Call Management",
  "Integrations",
  "Communication",
  "Campaign & Outreach",
  "Intelligence",
  "Automation"
];

// Map categories to icons
const getIconForCategory = (category: string) => {
  switch (category) {
    case 'Call Management':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative h-16 w-16 text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
    case 'Integrations':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative h-16 w-16 text-secondary"><rect width="8" height="8" x="3" y="3" rx="2"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect width="8" height="8" x="13" y="13" rx="2"></rect></svg>;
    case 'Communication':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative h-16 w-16 text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
    case 'Campaign & Outreach':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative h-16 w-16 text-secondary"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>;
    case 'Intelligence':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative h-16 w-16 text-primary"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>;
    case 'Automation':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative h-16 w-16 text-secondary"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>;
    default:
      return null;
  }
};

const PowerfulFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All Features");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredFeatures = activeTab === "All Features" 
    ? featuresData 
    : featuresData.filter(f => f.category === activeTab);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="features" className="pt-20 pb-12 snap-start" style={{ background: '#080808', minHeight: '80vh' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#ffffff', letterSpacing: '-0.03em' }}>
            Powerful <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Features</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(245,245,245,0.55)' }}>
            Everything you need to automate customer communication, manage leads, and scale your business operations.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all h-9 px-3 rounded-full"
              style={activeTab === cat ? {
                background: 'var(--accent-gradient)',
                color: '#fff',
                boxShadow: '0 2px 12px rgba(139, 92, 246, 0.3)',
              } : {
                border: '1px solid var(--surface-border)',
                background: 'transparent',
                color: 'rgba(245,245,245,0.7)',
              }}
              onMouseEnter={e => { if (activeTab !== cat) { e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'; e.currentTarget.style.color = 'var(--accent-cyan)'; } }}
              onMouseLeave={e => { if (activeTab !== cat) { e.currentTarget.style.borderColor = 'var(--surface-border)'; e.currentTarget.style.color = 'rgba(245,245,245,0.7)'; } }}
            >
              {cat}
              <span className="ml-2 text-xs opacity-70">
                ({cat === "All Features" ? featuresData.length : featuresData.filter(f => f.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all h-10 w-10 absolute left-0 top-1/2 -translate-y-1/2 z-10 backdrop-blur-sm shadow-lg" 
            aria-label="Scroll left"
            style={{ border: '1px solid var(--surface-border)', background: 'rgba(10,10,15,0.8)', color: 'rgba(245,245,245,0.7)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'; e.currentTarget.style.color = 'var(--accent-cyan)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--surface-border)'; e.currentTarget.style.color = 'rgba(245,245,245,0.7)'; }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left h-5 w-5"><path d="m15 18-6-6 6-6"></path></svg>
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all h-10 w-10 absolute right-0 top-1/2 -translate-y-1/2 z-10 backdrop-blur-sm shadow-lg" 
            aria-label="Scroll right"
            style={{ border: '1px solid var(--surface-border)', background: 'rgba(10,10,15,0.8)', color: 'rgba(245,245,245,0.7)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'; e.currentTarget.style.color = 'var(--accent-cyan)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--surface-border)'; e.currentTarget.style.color = 'rgba(245,245,245,0.7)'; }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-5 w-5"><path d="m9 18 6-6-6-6"></path></svg>
          </button>

          <div 
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide pb-6 px-12 scroll-smooth flex gap-6" 
            style={{ scrollbarWidth: 'none' }}
          >
            {filteredFeatures.map((feature, i) => (
              <div key={i} className="flex-shrink-0 w-80 perspective-1000">
                <TiltWrapper maxTilt={10} scale={1.05} className="h-full">
                  <div
                    className="rounded-xl relative h-full cursor-pointer transition-all duration-300"
                    style={{ background: 'var(--surface-elevated)', border: '1px solid var(--surface-border)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(139, 92, 246, 0.15)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--surface-border)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div className="relative h-48 overflow-hidden rounded-t-xl" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(6, 182, 212, 0.02))' }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 opacity-30 blur-3xl" style={{ background: 'var(--accent-gradient)' }}></div>
                          {getIconForCategory(feature.category)}
                        </div>
                      </div>
                      <div
                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: 'rgba(10,10,15,0.85)', border: '1px solid rgba(139, 92, 246, 0.15)', color: 'rgba(245,245,245,0.85)', backdropFilter: 'blur(8px)' }}
                      >
                        {feature.category}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1.5 p-6 pb-3">
                      <div className="flex items-start justify-between">
                        <h3 className="tracking-tight text-xl font-semibold pr-8" style={{ color: '#ffffff' }}>{feature.title}</h3>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,245,245,0.5)' }}>
                        {feature.description}
                      </p>
                      <div className="mt-4 text-sm font-medium" style={{ color: 'var(--accent-cyan)' }}>Learn more →</div>
                    </div>
                  </div>
                </TiltWrapper>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm" style={{ color: 'rgba(245,245,245,0.35)' }}>Scroll horizontally to explore all features</p>
        </div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;
