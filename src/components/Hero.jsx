import React from 'react'
import heroImage from '../assets/Hero.png'
import activityCard from '../assets/Frame115.png'
import balanceCard from '../assets/Frame116.png'
import useBreakpoint from '../hooks/useBreakpoint'

const NAV_ITEMS = ['SOLUTIONS', 'RESOURCES', 'ABOUT US']
const BRANDS = ['SHELLS', 'SmartFinder', 'Zoomerr', 'ArtVenue', 'kontrast', 'WavesMarathon']

function ActionButton({ variant = 'primary', children, className = '' }) {
  return (
    <button className={`hero-btn hero-btn-${variant} ${className}`.trim()}>
      {children}
    </button>
  )
}

function NavMenu({ compact }) {
  if (compact) return null

  return (
    <ul className="hero-nav-list" aria-label="Site sections">
      {NAV_ITEMS.map((item) => (
        <li key={item} className="hero-nav-item">
          {item}
          {item !== 'ABOUT US' && <span className="hero-nav-caret" aria-hidden>⌄</span>}
        </li>
      ))}
    </ul>
  )
}

function TrustedBrands() {
  return (
    <div className="hero-trusted" aria-label="Trusted by brands">
      <p className="hero-trusted-label">Trusted By:</p>
      <div className="hero-brand-row">
        {BRANDS.map((brand) => (
          <span key={brand} className="hero-brand-item">
            {brand}
          </span>
        ))}
      </div>
    </div>
  )
}

function MediaShowcase({ mobile }) {
  return (
    <div className="hero-media-wrap" aria-hidden>
      <div className="hero-media-glow" />
      <div className="hero-media-frame">
        <img src={heroImage} alt="Woman using digital banking app on laptop and phone" className="hero-media-image" />
      </div>

      <img
        src={activityCard}
        alt="Recent activity card"
        className={`hero-floating-card hero-card-activity ${mobile ? 'is-mobile' : ''}`}
      />

      <img
        src={balanceCard}
        alt="Account balance card"
        className={`hero-floating-card hero-card-balance ${mobile ? 'is-mobile' : ''}`}
      />
    </div>
  )
}

export default function Hero() {
  const { isMobile, isTablet } = useBreakpoint()
  const compactNav = isMobile
  const stackedCtas = isMobile
  const showTrusted = !isMobile || isTablet

  return (
    <header className="hero-root" role="banner">
      <div className="hero-shell">
        <nav className="hero-nav" aria-label="Main navigation">
          <div className="hero-logo">N7</div>
          <NavMenu compact={compactNav} />
          <ActionButton variant="ghost">REQUEST DEMO</ActionButton>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">The new foundation of modern banking</h1>
            <p className="hero-subtitle">
              We drive innovation and growth, provide seamless customer experience and operational excellence
            </p>

            <div className={`hero-actions ${stackedCtas ? 'stacked' : ''}`} role="group" aria-label="Primary actions">
              <ActionButton>REQUEST DEMO</ActionButton>
              <ActionButton variant="outline">CONTACT US</ActionButton>
            </div>

            {showTrusted && <TrustedBrands />}
          </div>

          <div className="hero-visual">
            <MediaShowcase mobile={isMobile} />
          </div>
        </section>
      </div>
    </header>
  )
}
