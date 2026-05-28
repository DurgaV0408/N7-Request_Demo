import React from 'react'
import amlDashboardImage from '../assets/image 3.png'
import useBreakpoint from '../hooks/useBreakpoint'

function SectionButton({ children, variant = 'primary' }) {
  return <button className={`hero-btn cloud-btn cloud-btn-${variant}`}>{children}</button>
}

export default function CloudCoreSection() {
  const { isMobile, isTablet } = useBreakpoint()
  const compact = isMobile || isTablet

  return (
    <section className="cloud-root" aria-labelledby="cloud-core-title">
      <div className="cloud-shell">
        <span className="cloud-watermark" aria-hidden>
          CB7
        </span>

        <div className="cloud-grid">
          <div className="cloud-copy">
            <h2 id="cloud-core-title" className="cloud-title">
              A complete cloud-based core banking.
            </h2>

            <p className="cloud-subtitle">Faster time to market with our cloud-based core banking services</p>

            <div className={`cloud-actions ${compact ? 'stacked' : ''}`}>
              <SectionButton>REQUEST DEMO</SectionButton>
              <a className="cloud-learn-link" href="#" aria-label="Learn more about cloud core banking">
                LEARN MORE
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          <div className="cloud-visual-wrap">
            <div className="cloud-image-frame" role="region" aria-label="Scrollable dashboard preview">
              <div className="cloud-image-scroll" tabIndex={0}>
                <img src={amlDashboardImage} alt="AML Dashboard analytics panel" className="cloud-image" loading="lazy" />
              </div>
            </div>
            <span className="cloud-image-base" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
