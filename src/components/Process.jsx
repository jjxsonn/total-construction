import { motion } from 'framer-motion';
import { PhoneCall, ClipboardList, Wrench } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'One Call.',
    desc: 'Reach us 24/7. Tell us what happened. We ask the right questions, dispatch within the hour for emergencies, and tell you exactly what comes next — no runaround.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'We Assess & Document.',
    desc: 'Our crew arrives, inspects the damage, and photographs everything for your insurance claim. You get a written scope of work before any dollar is spent.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'We Fix It. For Good.',
    desc: "Quality work, clean job sites, and a walkthrough when we're done. We don't leave until you're satisfied and the insurance paperwork is closed.",
  },
];

export default function Process() {
  return (
    <section id="process" style={{ background: '#0f172a', padding: '7rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '5rem', maxWidth: '640px' }}
        >
          <span className="amber-rule" />
          <p className="label-text" style={{ marginBottom: '0.75rem' }}>How We Work</p>
          <h2 className="section-heading" style={{ color: 'white' }}>
            No Confusion.<br />
            <span style={{ color: '#fbbf24' }}>No Surprises.</span>
          </h2>
          <p style={{ color: '#94a3b8', marginTop: '1rem', lineHeight: 1.7, fontSize: '1rem' }}>
            Most contractors leave you guessing. We built our process around keeping you informed at every step — especially when your home is on the line.
          </p>
        </motion.div>

        {/* Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '0',
            position: 'relative',
          }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.55 }}
                style={{
                  padding: '3rem 2.5rem',
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  position: 'relative',
                }}
              >
                {/* Step number */}
                <div
                  style={{
                    fontSize: '5rem',
                    fontWeight: 900,
                    color: 'rgba(251,191,36,0.07)',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    userSelect: 'none',
                  }}
                >
                  {step.number}
                </div>

                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(251,191,36,0.1)',
                    border: '1px solid rgba(251,191,36,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  <Icon size={22} color="#fbbf24" strokeWidth={1.5} />
                </div>

                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    color: 'white',
                    letterSpacing: '-0.03em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem' }}>{step.desc}</p>

                {/* Connector arrow (desktop) */}
                {i < steps.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      right: '-1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '2rem',
                      height: '2px',
                      background: 'rgba(251,191,36,0.4)',
                      zIndex: 2,
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
