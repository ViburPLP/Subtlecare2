import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import PricingSection from '../components/PricingSection';
import MaternityPlanner from '../components/MaternityPlanner';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import GetStarted from '../components/GetStarted';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function SinglePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <About />
      <Services />
      <HowItWorks />
      <PricingSection />
      <MaternityPlanner />
      <SocialProof />
      <FAQ />
      <GetStarted />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
