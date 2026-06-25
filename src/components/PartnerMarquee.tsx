import React from 'react';

const logos = [
  { src: '/partner-logos/1-essem18-logo.png', alt: 'ESSEM 18 logo - Trusted partner of helllo.ai' },
  { src: '/partner-logos/2-cascade-neopolis.png', alt: 'The Cascades Neopolis logo - Trusted partner of helllo.ai' },
  { src: '/partner-logos/3-clean-fanatics-.webp', alt: 'Clean Fanatics logo - Trusted partner of helllo.ai' },
  { src: '/partner-logos/4-mednetLabs_logo.png', alt: 'MedNet Labs logo - Trusted partner of helllo.ai' },
  { src: '/partner-logos/5-delta-images.jpeg', alt: 'Delta Hospitals logo - Trusted partner of helllo.ai' },
  { src: '/partner-logos/6-gsl-college.png', alt: 'GSL College logo - Trusted partner of helllo.ai' },
  { src: '/partner-logos/7-voltran.svg', alt: 'Voltran logo - Trusted partner of helllo.ai' },
  { src: '/partner-logos/8-nambiar-logo-color.svg', alt: 'Nambiar logo - Trusted partner of helllo.ai' },
  { src: '/partner-logos/9-dsrinfra.png', alt: 'DSR Infra logo - Trusted partner of helllo.ai' },
  { src: '/partner-logos/10-distacart.png', alt: 'Distacart logo - Trusted partner of helllo.ai' },
  { src: '/partner-logos/12-iamhere.svg', alt: 'I Am Here logo - Trusted partner of helllo.ai' },
];

// Duplicate for seamless infinite scroll
const PartnerMarquee: React.FC = () => {
  return (
    <div className="w-full relative z-10 mt-8">
      <div className="w-full pt-8 pb-8" style={{ borderTop: '1px solid var(--surface-border)', background: 'linear-gradient(to bottom, rgba(10,10,15,0.8), transparent)' }}>
        <p className="text-xs mb-6 text-center font-semibold uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Trusted by Industry Leaders
        </p>
        <div
          className="partner-marquee"
          role="region"
          aria-label="Trusted partner companies"
        >
          <div className="partner-marquee-track" role="list">
            {logos.map((logo, index) => (
              <div key={`logo-${index}`} className="partner-logo-container shrink-0 px-2" role="listitem">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="partner-logo"
                  loading="lazy"
                  width={120}
                  height={60}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop - aria-hidden */}
            {logos.map((logo, index) => (
              <div key={`logo-dup-${index}`} className="partner-logo-container shrink-0 px-2" role="listitem" aria-hidden="true">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="partner-logo"
                  loading="lazy"
                  width={120}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerMarquee;
