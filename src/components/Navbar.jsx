import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Services', href: 'services' },
  { label: 'Process', href: 'process' },
  { label: 'Projects', href: 'before-after' },
  { label: 'Reviews', href: 'testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleNavClick(e, sectionId) {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 120);
    }
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
        background: scrolled ? 'rgba(10,15,26,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,32,32,0.15)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 var(--px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1, gap: '1px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.03em', color: '#D42020', fontFamily: 'inherit', textTransform: 'uppercase', lineHeight: 1 }}>T</span>
              <span style={{ fontSize: '1.25rem', lineHeight: 1, display: 'inline-block', margin: '0 -1px' }}>😎</span>
              <span style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.03em', color: '#D42020', fontFamily: 'inherit', textTransform: 'uppercase', lineHeight: 1 }}>TAL</span>
            </div>
            <div style={{ fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.28em', color: 'white', textTransform: 'uppercase', lineHeight: 1 }}>
              Construction
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden-mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:3046856419"
              className="btn-primary"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem' }}
            >
              <Phone size={14} />
              304.685.6419
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none', padding: '0.5rem' }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: '#0f172a',
              borderTop: '1px solid rgba(212,32,32,0.2)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1.5rem var(--px)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:3046856419" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                <Phone size={14} /> 304.685.6419
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
