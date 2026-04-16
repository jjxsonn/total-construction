import { Phone, MapPin, Mail, Share2, Camera } from 'lucide-react';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#before-after' },
  { label: 'Reviews', href: '#testimonials' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#060c17', borderTop: '1px solid rgba(251,191,36,0.15)', padding: '4rem 0 2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.02em', color: 'white', textTransform: 'uppercase', lineHeight: 1 }}>
                Total
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#fbbf24', textTransform: 'uppercase', lineHeight: 1 }}>
                Construction
              </div>
            </div>
            <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '240px' }}>
              Wide-ranging contractor servicing water-damaged properties, roofing, plumbing, and more throughout WV.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a href="#" style={{ width: '34px', height: '34px', background: 'rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(251,191,36,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
              >
                <Share2 size={15} />
              </a>
              <a href="#" style={{ width: '34px', height: '34px', background: 'rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(251,191,36,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
              >
                <Camera size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="label-text" style={{ marginBottom: '1.25rem' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.15s' }}
                  onMouseEnter={e => e.target.style.color = '#fbbf24'}
                  onMouseLeave={e => e.target.style.color = '#94a3b8'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-text" style={{ marginBottom: '1.25rem' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href="tel:3045550182"
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fbbf24'}
                onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
              >
                <Phone size={14} />
                (304) 555-0182
              </a>
              <a
                href="mailto:info@totalconstructionwv.com"
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fbbf24'}
                onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
              >
                <Mail size={14} />
                info@totalconstructionwv.com
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#475569', fontSize: '0.875rem' }}>
                <MapPin size={14} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Morgantown, WV<br />Serving Harrison, Monongalia & surrounding counties</span>
              </div>
            </div>
          </div>

          {/* License */}
          <div>
            <h4 className="label-text" style={{ marginBottom: '1.25rem' }}>Credentials</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                'WV Contractor License #WV-044821',
                'Fully Insured — General Liability',
                'Workers\' Comp Coverage',
                '24/7 Emergency Response',
                'Insurance Claims Specialist',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.8rem' }}>
                  <div style={{ width: '4px', height: '4px', background: '#fbbf24', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            color: '#334155',
            fontSize: '0.75rem',
          }}
        >
          <span>© 2025 Total Construction LLC. All rights reserved. Morgantown, WV.</span>
          <span>Demo site — placeholder content only</span>
        </div>
      </div>
    </footer>
  );
}
