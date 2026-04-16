import { motion } from 'framer-motion';
import { Droplets, HardHat, Wrench, Hammer, FileCheck, Flame, Phone, PhoneCall, ClipboardList, AlertTriangle } from 'lucide-react';

const services = [
  { icon: Droplets, title: 'Water Damage', desc: 'Extract, dry, remediate — before mold sets in.', tag: 'Emergency', accent: '#ef4444' },
  { icon: HardHat, title: 'Roofing', desc: 'Storm damage to full tear-offs. Insurance handled.', tag: 'Full Service', accent: '#fbbf24' },
  { icon: Wrench, title: 'Plumbing', desc: 'Emergency pipe stops to full re-pipes. Root cause fixed.', tag: 'Emergency', accent: '#ef4444' },
  { icon: Hammer, title: 'Structural Repairs', desc: 'Floors, framing, foundations — code-compliant.', tag: 'Restoration', accent: '#fbbf24' },
  { icon: FileCheck, title: 'Insurance Claims', desc: 'We work with adjusters directly. Every dollar covered.', tag: 'Included', accent: '#fbbf24' },
  { icon: Flame, title: 'Demo & Site Prep', desc: 'Clean demolition and debris removal before rebuild.', tag: 'Full Service', accent: '#fbbf24' },
];

const steps = [
  { number: '01', icon: PhoneCall, title: 'One Call.', desc: 'Dispatched within the hour. No runaround.' },
  { number: '02', icon: ClipboardList, title: 'We Assess.', desc: 'Full damage doc before a single dollar is spent.' },
  { number: '03', icon: Wrench, title: 'We Fix It.', desc: "Done right. You sign off. Insurance closed." },
];

export default function ServicesBento() {
  return (
    <section id="services" style={{ background: '#0a0f1a', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Bento grid: 2fr services | 1fr sidebar */}
        <div className="bento-grid">

          {/* ── LEFT: Services ── */}
          <div style={{ padding: '3rem 2.5rem 3rem 0', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
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
                <span style={{ color: '#fbbf24' }}>One Crew.</span>
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6, marginTop: '0.4rem', maxWidth: '440px' }}>
                No sub-contractor relay races. The people on your job own it start to finish.
              </p>
            </motion.div>

            {/* 3-col service card grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1px',
                background: 'rgba(255,255,255,0.05)',
              }}
              className="services-inner-grid"
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
                      padding: '1.25rem',
                      borderLeft: `3px solid ${svc.accent}`,
                      position: 'relative',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#0d1420'}
                    onMouseLeave={e => e.currentTarget.style.background = '#0a0f1a'}
                  >
                    {/* Urgency tag */}
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
                    <Icon size={20} color="#fbbf24" strokeWidth={1.5} style={{ marginBottom: '0.75rem' }} />
                    <h3 style={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: 'white',
                      letterSpacing: '-0.01em',
                      textTransform: 'uppercase',
                      marginBottom: '0.4rem',
                      lineHeight: 1.2,
                    }}>
                      {svc.title}
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.75rem', lineHeight: 1.55 }}>
                      {svc.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: Emergency CTA + Process ── */}
          <div style={{ padding: '3rem 0 3rem 2rem' }}>
            <div style={{ position: 'sticky', top: '5.5rem' }}>

              {/* Emergency card */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(251,191,36,0.2)',
                  borderTop: '3px solid #fbbf24',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.3)',
                  padding: '0.25rem 0.55rem',
                  marginBottom: '0.9rem',
                }}>
                  <AlertTriangle size={10} color="#ef4444" />
                  <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ef4444' }}>
                    24/7 Emergency
                  </span>
                </div>
                <div style={{
                  fontSize: '1.15rem',
                  fontWeight: 900,
                  color: 'white',
                  letterSpacing: '-0.03em',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                  marginBottom: '0.35rem',
                }}>
                  One Call.<br />
                  <span style={{ color: '#fbbf24' }}>We Handle It.</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.75rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                  Water doesn't wait. Neither do we. Dispatch within the hour for active damage.
                </p>
                <a
                  href="tel:3045550182"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem', padding: '0.75rem 1rem' }}
                >
                  <Phone size={14} />
                  (304) 555-0182
                </a>
                <p style={{ color: '#334155', fontSize: '0.65rem', marginTop: '0.5rem', textAlign: 'center' }}>
                  Serving Morgantown & surrounding WV
                </p>
              </motion.div>

              {/* How We Work — compact vertical list */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <p id="process" className="label-text" style={{ marginBottom: '0.75rem' }}>How We Work</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={step.number}
                        style={{
                          display: 'flex',
                          gap: '0.85rem',
                          padding: '0.85rem 0',
                          borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                          alignItems: 'flex-start',
                        }}
                      >
                        <div style={{
                          fontSize: '0.65rem',
                          fontWeight: 900,
                          color: '#fbbf24',
                          letterSpacing: '0.1em',
                          lineHeight: 1,
                          paddingTop: '2px',
                          flexShrink: 0,
                          width: '1.5rem',
                        }}>
                          {step.number}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'white', letterSpacing: '-0.01em', textTransform: 'uppercase', lineHeight: 1.2, marginBottom: '0.2rem' }}>
                            {step.title}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.5 }}>
                            {step.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 0;
        }
        .services-inner-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-grid > div:first-child {
            padding-right: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding-bottom: 2rem !important;
          }
          .bento-grid > div:last-child {
            padding-left: 0 !important;
            padding-top: 2rem !important;
          }
          .services-inner-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .services-inner-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
