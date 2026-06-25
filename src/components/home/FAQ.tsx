import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    question: "How long does it take to deploy a voice agent?",
    answer: "With our no-code platform, you can have a basic agent running in 5 minutes. Complex integrations (like Salesforce or custom APIs) typically take 1-2 days depending on your workflow requirements."
  },
  {
    question: "Do you support multiple languages?",
    answer: "Yes, helllo.ai supports over 25 languages natively, including English, Spanish, French, German, Hindi, and more, with real-time accent adaptation."
  },
  {
    question: "How does it handle complex customer issues?",
    answer: "Our agentic orchestration engine extracts intents dynamically. If an issue is too complex or requires human intervention, the AI seamlessly transfers the call to your human staff along with a complete summary of the conversation."
  },
  {
    question: "Is my data secure and compliant?",
    answer: "Absolutely. We are SOC 2 Type II compliant and GDPR ready. All data is encrypted end-to-end, and we offer options for PII redaction on the fly."
  },
  {
    question: "Can it integrate with my existing tools?",
    answer: "Yes! We have native integrations with over 50 platforms including Salesforce, HubSpot, Zendesk, Shopify, and Calendly. We also offer webhooks and an open API for custom systems."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-surface/30 relative border-t border-white/5" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </header>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
                openIndex === index ? 'bg-white/5 border-primary/30' : 'bg-transparent border-white/10 hover:border-white/20'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-white' : 'text-white/80'}`}>
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 text-primary ${openIndex === index ? 'rotate-45' : ''}`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed pt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
