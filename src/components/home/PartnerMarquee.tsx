import { motion } from 'framer-motion';

const PARTNERS = [
  { name: 'ESSEM 18', logo: '/partner-logos/1-essem18-logo.png' },
  { name: 'The Cascades', logo: '/partner-logos/2-cascade-neopolis.png' },
  { name: 'Clean Fanatics', logo: '/partner-logos/3-clean-fanatics-.webp' },
  { name: 'MedNet Labs', logo: '/partner-logos/4-mednetLabs_logo.png' },
  { name: 'Delta Hospitals', logo: '/partner-logos/5-delta-images.jpeg' },
  { name: 'GSL College', logo: '/partner-logos/6-gsl-college.png' },
  { name: 'Voltran', logo: '/partner-logos/7-voltran.svg' },
  { name: 'Nambiar', logo: '/partner-logos/8-nambiar-logo-color.svg' },
  { name: 'DSR Infra', logo: '/partner-logos/9-dsrinfra.png' },
  { name: 'Distacart', logo: '/partner-logos/10-distacart.png' },
  { name: 'I Am Here', logo: '/partner-logos/12-iamhere.svg' },
];

export function PartnerMarquee() {
  return (
    <div className="w-full py-10 border-t border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden">
      <p className="text-xs text-muted-foreground mb-8 text-center font-medium uppercase tracking-[0.2em]">
        Trusted by Industry Leaders
      </p>
      
      <div className="relative flex overflow-x-hidden">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <motion.div 
          className="flex whitespace-nowrap items-center gap-16 md:gap-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {/* Double the array for seamless looping */}
          {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <div 
              key={`${partner.name}-${idx}`} 
              className="flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-8 md:h-10 w-auto object-contain brightness-0 invert" 
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
