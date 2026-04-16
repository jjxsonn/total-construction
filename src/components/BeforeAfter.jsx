import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';

const projects = [
  {
    label: 'Water-Damaged Living Room',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    after: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80',
  },
  {
    label: 'Storm-Damaged Roof',
    before: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    after: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80',
  },
  {
    label: 'Flooded Basement',
    before: 'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=900&q=80',
    after: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80',
  },
];

function Slider({ before, after }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e) => { dragging.current = true; updatePosition(e.clientX); };
  const onMouseMove = (e) => { if (!dragging.current) return; updatePosition(e.clientX); };
  const onMouseUp = () => { dragging.current = false; };
  const onTouchMove = (e) => { updatePosition(e.touches[0].clientX); };

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      style={{ position: 'relative', width: '100%', height: '360px', overflow: 'hidden', cursor: 'ew-resize', userSelect: 'none', background: '#0a0f1a' }}
    >
      <img src={after} alt="After" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} draggable={false} />
      <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src={before} alt="Before" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} draggable={false} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
      </div>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${position}%`, width: '2px', background: '#D42020', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: `${position}%`, transform: 'translate(-50%, -50%)', width: '38px', height: '38px', background: '#D42020', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', boxShadow: '0 0 0 3px rgba(251,191,36,0.2)' }}>
        <MoveHorizontal size={16} color="#0a0f1a" strokeWidth={2.5} />
      </div>
      <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', pointerEvents: 'none' }}>
        <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'rgba(239,68,68,0.85)', color: 'white', padding: '0.2rem 0.5rem' }}>Before</span>
      </div>
      <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', pointerEvents: 'none' }}>
        <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'rgba(34,197,94,0.85)', color: 'white', padding: '0.2rem 0.5rem' }}>After</span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [active, setActive] = useState(0);

  return (
    <section id="before-after" style={{ background: '#0f172a', padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header row — inline with tabs */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="amber-rule" />
            <p className="label-text" style={{ marginBottom: '0.3rem' }}>Real Projects</p>
            <h2 className="section-heading" style={{ color: 'white' }}>
              The Proof Is In <span style={{ color: '#D42020' }}>The Work.</span>
            </h2>
          </motion.div>

          {/* Project tabs */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {projects.map((p, i) => (
              <button
                key={p.label}
                onClick={() => setActive(i)}
                style={{
                  padding: '0.45rem 0.9rem',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  background: active === i ? '#D42020' : 'rgba(255,255,255,0.07)',
                  color: active === i ? '#0a0f1a' : '#64748b',
                  transition: 'background 0.15s, color 0.15s',
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <Slider before={projects[active].before} after={projects[active].after} />
        </motion.div>

        <p style={{ color: '#334155', fontSize: '0.68rem', marginTop: '0.5rem', textAlign: 'right' }}>
          * Placeholder photography shown for demo purposes
        </p>
      </div>
    </section>
  );
}
