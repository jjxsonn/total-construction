import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Derek M.',
    location: 'Morgantown, WV',
    stars: 5,
    text: "Pipe burst on a Sunday night and flooded our first floor. Total Construction was on-site within 90 minutes. They had the water out, fans running, and a full damage report written before midnight. Insurance adjuster was blown away by their documentation. Can't say enough.",
    job: 'Emergency Water Extraction',
  },
  {
    name: 'Sandra K.',
    location: 'Clarksburg, WV',
    stars: 5,
    text: "After the storm took out half our roof, we had three contractors ghost us. Total Construction gave us a quote the same day and started work two days later. Roof was done in a week, insurance handled, zero headaches. These guys are the real deal.",
    job: 'Full Roof Replacement',
  },
  {
    name: 'James & Tori H.',
    location: 'Bridgeport, WV',
    stars: 5,
    text: "Our basement looked like a swimming pool after spring flooding. They came in, dried everything, replaced the damaged framing, and refinished it better than before. We were skeptical at first but they walked us through every single step. Extremely professional outfit.",
    job: 'Basement Flood Restoration',
  },
];

function StarRow({ count }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: '#0a0f1a', padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
          >
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />)}
            </div>
            <span style={{ color: '#94a3b8', fontSize: '0.82rem' }}>
              <strong style={{ color: 'white' }}>4.9</strong> / 5 · 120+ Google Reviews
            </span>
          </motion.div>
        </div>

        {/* 3-column grid — stacks on mobile */}
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: '#0f172a',
                border: '1px solid rgba(255,255,255,0.07)',
                borderTop: '3px solid #fbbf24',
                padding: '2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Quote
                size={32}
                color="rgba(251,191,36,0.1)"
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}
              />
              <StarRow count={review.stars} />
              <p style={{
                color: '#cbd5e1',
                lineHeight: 1.75,
                fontSize: '0.92rem',
                fontStyle: 'italic',
                flexGrow: 1,
                marginBottom: '1.5rem',
              }}>
                "{review.text}"
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1rem' }}>
                <div style={{ fontWeight: 800, color: 'white', fontSize: '0.88rem' }}>{review.name}</div>
                <div style={{ color: '#64748b', fontSize: '0.78rem', marginTop: '0.15rem' }}>{review.location}</div>
                <div style={{
                  marginTop: '0.5rem',
                  fontSize: '0.62rem',
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

      <style>{`
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 768px) {
          .reviews-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
