import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/hero/HeroSection';
import { PartnerMarquee } from '../components/home/PartnerMarquee';
import { Recognition } from '../components/home/Recognition';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { EcosystemOrbit } from '../components/home/EcosystemOrbit';
import { PowerfulFeatures } from '../components/home/PowerfulFeatures';
import { VoiceDemo } from '../components/home/VoiceDemo';
import { UseCases } from '../components/home/UseCases';
import { JourneyScroll } from '../components/journey/JourneyScroll';
import { Testimonials } from '../components/home/Testimonials';
import { FAQ } from '../components/home/FAQ';
import { FinalCTA } from '../components/home/FinalCTA';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar />
      
      <main>
        <HeroSection />
        <PartnerMarquee />
        <Recognition />
        <WhyChooseUs />
        <EcosystemOrbit />
        <PowerfulFeatures />
        <VoiceDemo />
        <UseCases />
        <JourneyScroll />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
