import React from 'react'
import useBreakpoint from '../hooks/useBreakpoint'

function CtaButton({ variant, children }) {
  return <button className={`paperless-btn paperless-btn-${variant}`}>{children}</button>
}

export default function PaperlessCtaSection() {
  const { isMobile, isTablet } = useBreakpoint()
  const compact = isMobile || isTablet

  return (
    <section className="paperless-root" aria-labelledby="paperless-title">
      <div className="paperless-shell">
        <span className="paperless-watermark" aria-hidden>
          CB7
        </span>

        <div className={`paperless-grid ${compact ? 'stacked' : ''}`}>
          <div className="paperless-copy">
            <h2 id="paperless-title" className="paperless-title">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="paperless-subtitle">
              CB7 helps your financial institution improve the client experience, automate and optimize procedures,
              simplify banking operations
            </p>
          </div>

          <div className={`paperless-actions ${compact ? 'stacked' : ''}`}>
            <CtaButton variant="contact">CONTACT US</CtaButton>
            <CtaButton variant="demo">REQUEST DEMO</CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}
