import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesBento from './components/ServicesBento';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import CTABand from './components/CTABand';
import Footer from './components/Footer';
import ServicePage from './pages/ServicePage';

function HomePage() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/:slug" element={<ServicePage />} />
    </Routes>
  );
}
