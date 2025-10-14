import Hero from '../components/Hero';
import ValueStrip from '../components/ValueStrip';
import HowItWorks from '../components/HowItWorks';
import SocialProof from '../components/SocialProof';
import CTABand from '../components/CTABand';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueStrip />
      <HowItWorks />
      <SocialProof />
      <CTABand />
      <Footer />
    </div>
  );
}
