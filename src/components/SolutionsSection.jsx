import React from 'react'
import useBreakpoint from '../hooks/useBreakpoint'

const SOLUTIONS = [
  {
    id: 'core-banking',
    title: 'Core Banking CB7',
    description:
      'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
    badge: null,
  },
  {
    id: 'digital-banking',
    title: 'Digital Banking N7',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    badge: null,
  },
  {
    id: 'open-banking',
    title: 'Open Banking',
    description:
      'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
    badge: null,
  },
  {
    id: 'loan-origination',
    title: 'Loan Origination System',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    badge: 'NBFC',
  },
  {
    id: 'loan-management',
    title: 'Loan Management System',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    badge: 'NBFC',
  },
]

function RequestButton() {
  return <button className="hero-btn hero-btn-outline solutions-cta">REQUEST DEMO</button>
}

function SolutionIcon({ index }) {
  return <span className={`solution-icon solution-icon-${index + 1}`} aria-hidden />
}

function SolutionCard({ title, description, badge, index, featured }) {
  return (
    <article className={`solution-card ${featured ? 'solution-card-featured' : ''}`}>
      <div className="solution-head">
        <SolutionIcon index={index} />
        {badge ? <span className="solution-badge">{badge}</span> : null}
      </div>
      <h3 className="solution-title">{title}</h3>
      <p className="solution-description">{description}</p>
      <a href="#" className="solution-link" aria-label={`Learn more about ${title}`}>
        LEARN MORE
        <span className="solution-link-arrow" aria-hidden>
          →
        </span>
      </a>
    </article>
  )
}

export default function SolutionsSection() {
  const { isMobile, isTablet } = useBreakpoint()
  const compact = isMobile || isTablet

  return (
    <section className="solutions-root" aria-labelledby="solutions-title">
      <div className="solutions-shell">
        <div className="solutions-left">
          <h2 id="solutions-title" className="solutions-title">
            All of our solutions are tailor-made to your needs
          </h2>
          <RequestButton />
        </div>

        <div className={`solutions-grid ${compact ? 'compact' : ''}`}>
          {SOLUTIONS.map((item, index) => (
            <SolutionCard
              key={item.id}
              title={item.title}
              description={item.description}
              badge={item.badge}
              index={index}
              featured={item.id === 'loan-management' && !compact}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
