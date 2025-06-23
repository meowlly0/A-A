import { useState } from 'react';
import AnimatedLogo from './components/AnimatedLogo';
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import ContactForm from './components/ContactSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

export default function App() {
  const [showSite, setShowSite] = useState(false);

  return (
    <>


      {!showSite && <AnimatedLogo onFinish={() => setShowSite(true)} />}
      {showSite && (
        <>
          <Header />
          <InfoSection />
          <ServicesSection />
          <ContactForm />
          <Footer />
        </>
      )}
    </>
  );
}
