import { motion } from 'framer-motion';
import { Droplets, HardHat, Wrench, Hammer, FileCheck, Flame } from 'lucide-react';

const services = [
  { icon: Droplets, title: 'Water Damage', desc: 'Extract, dry, remediate — before mold sets in.', tag: 'Emergency', accent: '#ef4444' },
  { icon: HardHat, title: 'Roofing', desc: 'Storm damage to full tear-offs. Insurance handled.', tag: 'Full Service', accent: '#D42020' },
  { icon: Wrench, title: 'Plumbing', desc: 'Emergency pipe stops to full re-pipes. Root cause fixed.', tag: 'Emergency', accent: '#ef4444' },
  { icon: Hammer, title: 'Structural Repairs', desc: 'Floors, framing, foundations — code-compliant.', tag: 'Restoration', accent: '#D42020' },
  { icon: FileCheck, title: 'Insurance Claims', desc: 'We work with adjusters directly. Every dollar covered.', tag: 'Included', accent: '#D42020' },
  { icon: Flame, title: 'Demo & Site Prep', desc: 'Clean demolition and debris removal before rebuild.', tag: 'Full Service', accent: '#D42020' },
];

export default function ServicesBento() {
  return (
    <section id="services" style={{ background: '#0a0f1a', borderTop: '1px solid rgba(255,255,255,0.04)', padding: '3rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <span className="amber-rule" />
          <p className="label-text" style={{ marginBottom: '0.4rem' }}>What We Do</p>
          <h2 className="section-heading" style={{ color: 'white' }}>
            Every Trade.{' '}
            <span style={{ color: '#D42020' }}>One Crew.</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6, marginTop: '0.4rem', maxWidth: '480px' }}>
            No sub-contractor relay races. The people on your job own it start to finish.
          </p>
        </motion.div>

        {/* Full-width 3-col service grid */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gap: '1px',
            background: 'rgba(255,255,255,0.05)',
          }}
        >
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                style={{
                  background: '#0a0f1a',
                  padding: '1.5rem',
                  borderLeft: `3px solid ${svc.accent}`,
                  position: 'relative',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#0d1420'}
                onMouseLeave={e => e.currentTarget.style.background = '#0a0f1a'}
              >
                {svc.tag === 'Emergency' && (
                  <div style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#ef4444',
                    background: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    padding: '0.15rem 0.4rem',
                  }}>
                    {svc.tag}
                  </div>
                )}
                <Icon size={20} color="#D42020" strokeWidth={1.5} style={{ marginBottom: '0.75rem' }} />
                <h3 style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: 'white',
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  marginBottom: '0.4rem',
                  lineHeight: 1.2,
                }}>
                  {svc.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: 1.55 }}>
                  {svc.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-grid { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 400px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
