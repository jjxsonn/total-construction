import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowLeft, CheckCircle, Wrench, ChevronRight } from 'lucide-react';
import { getServiceBySlug } from '../data/services';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABand from '../components/CTABand';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0a0f1a', color: 'white', gap: '1.5rem' }}>
          <div style={{ fontSize: '4rem', fontWeight: 900, color: '#D42020' }}>404</div>
          <div style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Service not found.</div>
          <Link to="/" style={{ color: '#D42020', textDecoration: 'none', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
          paddingBottom: '4rem',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${service.heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,15,26,0.97) 50%, rgba(10,15,26,0.55) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,15,26,1) 0%, transparent 60%)' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', paddingTop: '7rem', width: '100%' }}>
          {/* Breadcrumb */}
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show" style={{ marginBottom: '1.25rem' }}>
            <Link
              to="/"
              style={{ color: '#475569', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}
            >
              <ArrowLeft size={12} />
              All Services
            </Link>
          </motion.div>

          {/* Tag */}
          <motion.div variants={fadeUp} custom={1} initial="hidden" animate="show" style={{ marginBottom: '0.75rem' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(212,32,32,0.12)',
              border: '1px solid rgba(212,32,32,0.35)',
              color: '#D42020',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '0.25rem 0.6rem',
            }}>
              {service.tag}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            style={{ color: 'white', margin: '0 0 1rem', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.1, maxWidth: '700px' }}
          >
            {service.title}
          </motion.h1>

          {/* Long description */}
          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            style={{ color: '#94a3b8', fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', lineHeight: 1.7, maxWidth: '560px', margin: '0 0 2rem' }}
          >
            {service.long}
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} custom={4} initial="hidden" animate="show" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="tel:3046856419" className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.75rem 1.5rem' }}>
              <Phone size={14} />
              Call Now — 304.685.6419
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── METHODS ──────────────────────────────────────────────── */}
      <section style={{ background: '#0a0f1a', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ marginBottom: '3rem' }}
          >
            <div className="amber-rule" style={{ marginBottom: '0.75rem' }} />
            <p className="label-text">Our Process</p>
            <h2 className="section-heading" style={{ color: 'white', margin: '0.5rem 0 0' }}>
              How We Do It
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {service.methods.map((method, i) => (
              <motion.div
                key={method.step}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{
                  background: '#0f1729',
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: '1.75rem',
                  display: 'flex',
                  gap: '1.25rem',
                }}
              >
                <div style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.12em', color: '#D42020', flexShrink: 0, paddingTop: '3px' }}>
                  {method.step}
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'white', letterSpacing: '0.02em', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    {method.title}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>
                    {method.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCLUDED + TOOLS ─────────────────────────────────────── */}
      <section style={{ background: '#060c17', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

            {/* Included */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="amber-rule" style={{ marginBottom: '0.75rem' }} />
              <p className="label-text">What's Included</p>
              <h3 style={{ color: 'white', fontWeight: 900, fontSize: '1.4rem', margin: '0.5rem 0 1.75rem', letterSpacing: '-0.01em' }}>
                Every Job, Every Time
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {service.included.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle size={15} color="#D42020" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="amber-rule" style={{ marginBottom: '0.75rem' }} />
              <p className="label-text">Equipment & Tools</p>
              <h3 style={{ color: 'white', fontWeight: 900, fontSize: '1.4rem', margin: '0.5rem 0 1.75rem', letterSpacing: '-0.01em' }}>
                Professional Grade
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {service.tools.map((tool) => (
                  <div key={tool} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Wrench size={13} color="#475569" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#64748b', fontSize: '0.875rem' }}>{tool}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────── */}
      <section style={{ background: '#0a0f1a', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              background: '#0f1729',
              border: '1px solid rgba(255,255,255,0.06)',
              borderTop: '3px solid #D42020',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              maxWidth: '760px',
            }}
          >
            <div style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#cbd5e1', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '2rem' }}>
              "{service.testimonial.text}"
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', background: '#D42020', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.9rem', color: 'white', flexShrink: 0 }}>
                {service.testimonial.name.charAt(0)}
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '0.875rem' }}>{service.testimonial.name}</div>
                <div style={{ color: '#475569', fontSize: '0.75rem', letterSpacing: '0.05em' }}>{service.testimonial.location}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </>
  );
}
