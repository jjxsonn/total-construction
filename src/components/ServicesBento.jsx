import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { services, CATEGORIES } from '../data/services';

const restoration = services.filter(s => s.category === CATEGORIES.RESTORATION);
const trades = services.filter(s => s.category === CATEGORIES.TRADES);

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#0f1729' : '#060c17',
        border: '1px solid rgba(255,255,255,0.06)',
        borderLeft: `3px solid ${hovered ? '#D42020' : 'rgba(212,32,32,0.3)'}`,
        padding: '1.5rem',
        cursor: 'pointer',
        transition: 'background 0.2s ease, border-left-color 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: '0.4rem' }}>
            <span style={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#D42020',
              background: 'rgba(212,32,32,0.1)',
              border: '1px solid rgba(212,32,32,0.25)',
              padding: '0.15rem 0.45rem',
              whiteSpace: 'nowrap',
            }}>
              {service.tag}
            </span>
          </div>
          <h3 style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem', margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            {service.title}
          </h3>
        </div>
        <motion.div
          animate={{ x: hovered ? 3 : 0 }}
          transition={{ duration: 0.15 }}
          style={{ flexShrink: 0, paddingTop: '2px' }}
        >
          <ChevronRight size={15} color={hovered ? '#D42020' : '#334155'} />
        </motion.div>
      </div>

      {/* Short desc */}
      <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>
        {service.short}
      </p>

      {/* Hover expand */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {service.included.slice(0, 4).map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle size={12} color="#D42020" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ color: '#94a3b8', fontSize: '0.78rem', lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
              {service.included.length > 4 && (
                <div style={{ color: '#475569', fontSize: '0.72rem', paddingLeft: '1.25rem' }}>
                  +{service.included.length - 4} more included
                </div>
              )}
            </div>

            <Link
              to={`/services/${service.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#D42020',
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: '1rem',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#ff3333'}
              onMouseLeave={e => e.currentTarget.style.color = '#D42020'}
            >
              Full Details
              <ChevronRight size={13} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesBento() {
  return (
    <section id="services" style={{ background: '#0a0f1a', padding: '5rem 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="amber-rule" style={{ marginBottom: '0.75rem' }} />
          <p className="label-text">What We Do</p>
          <h2 className="section-heading" style={{ color: 'white', margin: '0.5rem 0 0.75rem' }}>
            Services
          </h2>
          <p style={{ color: '#475569', fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', maxWidth: '520px', lineHeight: 1.6 }}>
            From midnight emergencies to planned builds — one call, every trade, fully insured.
          </p>
        </motion.div>

        {/* ── RESTORATION ── */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '3px', height: '1.4rem', background: '#D42020', flexShrink: 0 }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D42020', whiteSpace: 'nowrap' }}>
              Restoration &amp; Mitigation
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <span style={{ color: '#334155', fontSize: '0.7rem', fontWeight: 700, whiteSpace: 'nowrap' }}>{restoration.length} Services</span>
          </div>

          <div className="services-grid">
            {restoration.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>

        {/* ── TRADES ── */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '3px', height: '1.4rem', background: '#D42020', flexShrink: 0 }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D42020', whiteSpace: 'nowrap' }}>
              Construction Trades
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <span style={{ color: '#334155', fontSize: '0.7rem', fontWeight: 700, whiteSpace: 'nowrap' }}>{trades.length} Services</span>
          </div>

          <div className="services-grid">
            {trades.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.04);
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
