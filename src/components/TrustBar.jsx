import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Star, Hammer } from 'lucide-react';

const stats = [
  { icon: Hammer, value: '15+', label: 'Years in WV, PA & MD' },
  { icon: Star, value: '500+', label: 'Jobs Completed' },
  { icon: Clock, value: '< 2hr', label: 'Emergency Response' },
  { icon: ShieldCheck, value: 'A+', label: 'Licensed & Insured' },
];

export default function TrustBar() {
  return (
    <section
      style={{
        background: '#0f172a',
        borderTop: '1px solid rgba(212,32,32,0.25)',
        borderBottom: '1px solid rgba(212,32,32,0.12)',
        position: 'relative',
        zIndex: 20,
        marginTop: '-3rem',
        boxShadow: '0 -12px 40px rgba(0,0,0,0.6)',
      }}
    >
      <div
        className="trust-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 var(--px)',
          display: 'grid',
          gap: '0',
        }}
      >
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="trust-cell"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 1.25rem',
              }}
            >
              <Icon size={18} color="#D42020" strokeWidth={1.5} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.03em', color: 'white', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div className="label-text" style={{ marginTop: '0.15rem', fontSize: '0.62rem' }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        .trust-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        .trust-cell { border-right: 1px solid rgba(255,255,255,0.05); }
        .trust-cell:last-child { border-right: none; }
        @media (max-width: 640px) {
          .trust-cell { padding: 0.75rem 0.6rem; }
          .trust-cell .label-text { font-size: 0.55rem; letter-spacing: 0.08em; }
        }
      `}</style>
    </section>
  );
}
