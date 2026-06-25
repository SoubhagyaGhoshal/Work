import { motion } from 'framer-motion';

export function EcosystemOrbit() {
  return (
    <section className="py-32 border-t border-white/5 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Deep <span className="text-secondary">Integrations</span>
          </h2>
          <p className="text-xl font-medium text-white mb-4">
            Every conversation, unified across your stack.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Powered by helllo.ai — the action layer that books appointments, looks up orders, updates CRM records, and files tickets in real time.
          </p>
        </div>

        <div className="relative h-[400px] md:h-[600px] w-full max-w-4xl mx-auto flex items-center justify-center">
          
          {/* Center Hub */}
          <div className="relative z-20 flex items-center justify-center w-24 h-24 rounded-2xl bg-black border border-white/10 shadow-[0_0_30px_rgba(71,191,255,0.3)]">
            <span className="text-2xl font-bold text-white">H</span>
            <div className="absolute inset-0 rounded-2xl border border-secondary/50 animate-ping" />
          </div>

          {/* Orbits */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-white/5 border-dashed animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full border border-white/5 border-dashed animate-[spin_60s_linear_infinite_reverse]" />
          </div>

          {/* Orbiting Elements - Inner */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {/* Element 1 */}
            <div className="absolute -top-[150px] md:-top-[200px] w-16 h-16 rounded-xl bg-surface border border-white/10 flex items-center justify-center shadow-lg">
              <img src="/logos/salesforce.svg" alt="Salesforce" className="w-8 h-8 object-contain" onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0N2JmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjEgMTZhMyAzIDAgMCAxLTMgM2gtLjVhNCA0IDAgMCAxLTcuMi0xLjUgMiAyIDAgMCAxLTMuOC0xQTQgNCAwIDAgMSAyIDEwYTMgMyAwIDAgMSAzLTNoLjVhNCA0IDAgMCAxIDcuMiAxLjUgMiAyIDAgMCAxIDMuOCAxIDQgNCAwIDAgMSAyIDV6Ii8+PC9zdmc+' }} />
            </div>
            {/* Element 2 */}
            <div className="absolute -bottom-[150px] md:-bottom-[200px] w-16 h-16 rounded-xl bg-surface border border-white/10 flex items-center justify-center shadow-lg">
              <img src="/logos/hubspot.svg" alt="HubSpot" className="w-8 h-8 object-contain" onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjdlM2IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMThhNiA2IDAgMTAwLTEyIDYgNiAwIDAwMCAxMnoiLz48L3N2Zz4=' }} />
            </div>
          </motion.div>

          {/* Orbiting Elements - Outer */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          >
            {/* Element 3 */}
            <div className="absolute -left-[225px] md:-left-[300px] w-16 h-16 rounded-xl bg-surface border border-white/10 flex items-center justify-center shadow-lg">
              <span className="text-xs font-bold text-muted-foreground">API</span>
            </div>
            {/* Element 4 */}
            <div className="absolute -right-[225px] md:-right-[300px] w-16 h-16 rounded-xl bg-surface border border-white/10 flex items-center justify-center shadow-lg">
              <span className="text-xs font-bold text-muted-foreground">CRM</span>
            </div>
            {/* Element 5 */}
            <div className="absolute top-[160px] left-[160px] md:top-[210px] md:left-[210px] w-16 h-16 rounded-xl bg-surface border border-white/10 flex items-center justify-center shadow-lg">
              <span className="text-xs font-bold text-muted-foreground">ERP</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
