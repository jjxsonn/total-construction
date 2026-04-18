import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTABand() {
  return (
    <section
      style={{
        background: '#D42020',
        padding: '2.5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Diagonal texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 1px, transparent 0, transparent 50%)',
          backgroundSize: '12px 12px',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 var(--px)', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '0.5rem',
            }}>
              Don't Wait — Damage Gets Worse by the Hour
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                textTransform: 'uppercase',
                color: 'white',
                margin: 0,
              }}
            >
              Call Total Construction.<br />Get It Fixed Today.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}
          >
            <a
              href="tel:3046856419"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: '#0a0f1a',
                color: 'white',
                fontWeight: 800,
                fontSize: '1.5rem',
                letterSpacing: '-0.02em',
                padding: '1rem 2rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#0f172a'}
              onMouseLeave={e => e.currentTarget.style.background = '#0a0f1a'}
            >
              <Phone size={22} />
              304.685.6419
            </a>
            <a
              href="#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
            >
              Or browse services <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
