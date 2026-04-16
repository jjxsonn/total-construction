import { motion } from 'framer-motion';
import { Phone, ArrowRight, AlertTriangle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        paddingBottom: '5rem',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(10,15,26,0.97) 45%, rgba(10,15,26,0.5) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,15,26,1) 0%, transparent 55%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          paddingTop: '5rem',
          width: '100%',
        }}
      >
        {/* Emergency badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(239,68,68,0.12)',
            border: '1px solid rgba(239,68,68,0.35)',
            borderRadius: '2px',
            padding: '0.3rem 0.65rem',
            marginBottom: '0.9rem',
          }}
        >
          <AlertTriangle size={11} color="#ef4444" />
          <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ef4444' }}>
            24/7 Emergency Response — Morgantown, WV
          </span>
        </motion.div>

        {/* Headline — two rows instead of four, tighter */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="hero-headline"
          style={{ color: 'white', margin: '0', maxWidth: '680px' }}
        >
          Perfect Execution
          <br />
          <span style={{ color: '#D42020' }}>In Every Project.</span>
          <br />
          <span style={{ color: '#94a3b8' }}>Equipped For Anything</span>
          <br />
          <span style={{ color: '#94a3b8' }}>At A Moment's Notice.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{
            color: '#94a3b8',
            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            lineHeight: 1.6,
            maxWidth: '460px',
            margin: '0.75rem 0 1.25rem',
          }}
        >
          Commercial &amp; residential construction, project management, and emergency restoration. Fully insured. One call.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a href="tel:3046856419" className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.75rem 1.5rem' }}>
            <Phone size={14} />
            304.685.6419
          </a>
          <a href="#services" className="btn-outline" style={{ fontSize: '0.8rem', padding: '0.75rem 1.5rem' }}>
            Our Services
            <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Trust micro-line */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{
            color: '#334155',
            fontSize: '0.7rem',
            letterSpacing: '0.05em',
            marginTop: '0.75rem',
          }}
        >
          Licensed & Insured · Serving Harrison, Monongalia & surrounding WV counties
        </motion.p>
      </div>
    </section>
  );
}
