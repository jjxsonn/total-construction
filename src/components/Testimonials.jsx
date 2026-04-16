import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Derek M.',
    location: 'Morgantown, WV',
    stars: 5,
    text: "Pipe burst on a Sunday night, flooded our first floor. On-site within 90 minutes. Water out, fans running, full damage report written before midnight. Insurance adjuster was blown away.",
    job: 'Emergency Water Extraction',
  },
  {
    name: 'Sandra K.',
    location: 'Clarksburg, WV',
    stars: 5,
    text: "Three contractors ghosted us after the storm took half our roof. Total Construction quoted same day, started two days later. Done in a week, insurance handled. These guys are the real deal.",
    job: 'Full Roof Replacement',
  },
  {
    name: 'James & Tori H.',
    location: 'Bridgeport, WV',
    stars: 5,
    text: "Basement looked like a pool after spring flooding. They dried it, replaced the framing, refinished better than before. Walked us through every step. Extremely professional outfit.",
    job: 'Basement Flood Restoration',
  },
];

function StarRow({ count }) {
  return (
    <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={11} fill="#fbbf24" color="#fbbf24" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: '#0a0f1a', padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="amber-rule" />
            <p className="label-text" style={{ marginBottom: '0.3rem' }}>What WV Says</p>
            <h2 className="section-heading" style={{ color: 'white' }}>
              Real People. <span style={{ color: '#fbbf24' }}>Real Results.</span>
            </h2>
          </motion.div>

          {/* Google badge inline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
          >
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#fbbf24" color="#fbbf24" />)}
            </div>
            <span style={{ color: '#94a3b8', fontSize: '0.78rem' }}>
              <strong style={{ color: 'white' }}>4.9</strong> / 5 · 120+ Reviews
            </span>
          </motion.div>
        </div>

        {/* 3-column tight row — scrolls on mobile */}
        <div style={{ overflowX: 'auto', marginLeft: '-2rem', marginRight: '-2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(260px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.05)',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            minWidth: 'max-content',
            width: '100%',
          }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              style={{
                background: '#0a0f1a',
                borderTop: '3px solid #fbbf24',
                padding: '1.25rem 1.5rem',
                position: 'relative',
                minWidth: '260px',
              }}
            >
              <Quote
                size={22}
                color="rgba(251,191,36,0.12)"
                style={{ position: 'absolute', top: '1rem', right: '1rem' }}
              />
              <StarRow count={review.stars} />
              <p style={{
                color: '#cbd5e1',
                lineHeight: 1.65,
                fontSize: '0.82rem',
                marginBottom: '1rem',
                fontStyle: 'italic',
              }}>
                "{review.text}"
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.85rem' }}>
                <div style={{ fontWeight: 800, color: 'white', fontSize: '0.8rem' }}>{review.name}</div>
                <div style={{ color: '#64748b', fontSize: '0.72rem', marginTop: '0.1rem' }}>{review.location}</div>
                <div style={{
                  marginTop: '0.35rem',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#fbbf24',
                }}>
                  {review.job}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
