import { motion } from 'framer-motion';
import { Droplets, HardHat, Wrench, Hammer, FileCheck, Flame } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Water Damage Restoration',
    desc: 'Burst pipes, flooding, sewage backup — we extract, dry, and remediate before mold takes hold. Fast mitigation saves your structure and your wallet.',
    tag: 'Emergency',
    accent: '#ef4444',
  },
  {
    icon: HardHat,
    title: 'Roofing',
    desc: 'Storm damage, worn shingles, full tear-offs. We install, repair, and certify roofs that stand up to WV winters. Insurance claims handled in-house.',
    tag: 'Full Service',
    accent: '#fbbf24',
  },
  {
    icon: Wrench,
    title: 'Plumbing Repairs',
    desc: 'From emergency pipe stops to full re-pipes — no patch-and-pray fixes. We diagnose the root cause and repair it for good.',
    tag: 'Emergency',
    accent: '#ef4444',
  },
  {
    icon: Hammer,
    title: 'Structural Repairs',
    desc: 'Water-damaged floors, rotted framing, compromised foundations. We restore structural integrity so your property is safe and code-compliant.',
    tag: 'Restoration',
    accent: '#fbbf24',
  },
  {
    icon: FileCheck,
    title: 'Insurance Claims Assistance',
    desc: 'We work directly with adjusters, document everything, and make sure you get every dollar your policy covers. Less stress, more coverage.',
    tag: 'Included',
    accent: '#fbbf24',
  },
  {
    icon: Flame,
    title: 'Demo & Site Prep',
    desc: 'Selective demolition, debris removal, site clearing. If something has to come down before rebuilding, we do it clean and safe.',
    tag: 'Full Service',
    accent: '#fbbf24',
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: '#0a0f1a', padding: '7rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem' }}
        >
          <span className="amber-rule" />
          <p className="label-text" style={{ marginBottom: '0.75rem' }}>What We Do</p>
          <h2 className="section-heading" style={{ color: 'white', maxWidth: '600px' }}>
            Every Trade.<br />
            <span style={{ color: '#fbbf24' }}>One Crew.</span>
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '480px', marginTop: '1rem', lineHeight: 1.7, fontSize: '1rem' }}>
            No sub-contractor relay races. When Total Construction comes out, the people fixing your problem own it start to finish.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.5px',
            background: 'rgba(255,255,255,0.06)',
          }}
        >
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                style={{
                  background: '#0a0f1a',
                  padding: '2.5rem',
                  borderLeft: `4px solid ${svc.accent}`,
                  cursor: 'default',
                  transition: 'background 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#0f172a'}
                onMouseLeave={e => e.currentTarget.style.background = '#0a0f1a'}
              >
                {/* Tag */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: svc.accent,
                  background: `${svc.accent}18`,
                  border: `1px solid ${svc.accent}40`,
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px',
                }}>
                  {svc.tag}
                </div>

                <Icon size={28} color="#fbbf24" strokeWidth={1.5} style={{ marginBottom: '1.25rem' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '0.75rem', textTransform: 'uppercase', lineHeight: 1.2 }}>
                  {svc.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {svc.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
