import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesBento from './components/ServicesBento';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import CTABand from './components/CTABand';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesBento />
        <BeforeAfter />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
