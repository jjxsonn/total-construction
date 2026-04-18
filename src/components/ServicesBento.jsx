import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { categories, GROUPS } from '../data/categories';

const restoration = categories.filter(c => c.group === GROUPS.RESTORATION);
const trades = categories.filter(c => c.group === GROUPS.TRADES);

function ServiceCard({ cat }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#0f1729' : '#060c17',
        border: '1px solid rgba(255,255,255,0.06)',
        borderLeft: `3px solid ${hovered ? '#D42020' : 'rgba(212,32,32,0.3)'}`,
        padding: '1.25rem',
        cursor: 'default',
        transition: 'background 0.2s ease, border-left-color 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        minWidth: 0,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', minWidth: 0 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ marginBottom: '0.35rem' }}>
            <span style={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#D42020',
              background: 'rgba(212,32,32,0.1)',
              border: '1px solid rgba(212,32,32,0.25)',
              padding: '0.15rem 0.4rem',
              display: 'inline-block',
            }}>
              {cat.tag}
            </span>
          </div>
          <h3 style={{ color: 'white', fontWeight: 800, fontSize: '0.88rem', margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase', wordBreak: 'break-word' }}>
            {cat.title}
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
      <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.6, margin: 0 }}>
        {cat.short}
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
            {/* Sub-services list */}
            <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#475569', marginBottom: '0.5rem' }}>
                Includes
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {cat.subServices.map((sub) => (
                  <div key={sub} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '3px', height: '3px', background: '#D42020', flexShrink: 0, borderRadius: '50%' }} />
                    <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              {cat.included.slice(0, 3).map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle size={11} color="#D42020" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ color: '#64748b', fontSize: '0.75rem', lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>

            <Link
              to={`/services/${cat.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#D42020',
                textDecoration: 'none',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginTop: '0.75rem',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#ff3333'}
              onMouseLeave={e => e.currentTarget.style.color = '#D42020'}
            >
              Full Details
              <ArrowRight size={12} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesBento() {
  return (
    <section id="services" style={{ background: '#0a0f1a', padding: '4rem 0 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 var(--px)' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
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
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="category-divider">
            <div style={{ width: '3px', height: '1.4rem', background: '#D42020', flexShrink: 0 }} />
            <span className="category-label">
              Restoration &amp; Mitigation
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          </div>

          <div className="services-grid">
            {restoration.map((cat) => (
              <ServiceCard key={cat.slug} cat={cat} />
            ))}
          </div>
        </div>

        {/* ── TRADES ── */}
        <div>
          <div className="category-divider">
            <div style={{ width: '3px', height: '1.4rem', background: '#D42020', flexShrink: 0 }} />
            <span className="category-label">
              Construction Trades
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          </div>

          <div className="services-grid">
            {trades.map((cat) => (
              <ServiceCard key={cat.slug} cat={cat} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .category-divider {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          min-width: 0;
        }
        .category-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #D42020;
          white-space: nowrap;
          flex-shrink: 0;
        }
        @media (max-width: 480px) {
          .category-label {
            font-size: 0.6rem;
            letter-spacing: 0.1em;
          }
        }
      `}</style>
    </section>
  );
}
