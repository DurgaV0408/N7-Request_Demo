import React from 'react'
import featureDashboard from '../assets/image 4.png'
import useBreakpoint from '../hooks/useBreakpoint'

const LEFT_POINTS = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
]

const RIGHT_POINTS = [
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
]

function BulletItem({ children }) {
  return (
    <li className="eff-list-item">
      <span className="eff-check" aria-hidden>
        ✓
      </span>
      <span>{children}</span>
    </li>
  )
}

export default function CoreEfficiencySection() {
  const { isMobile, isTablet } = useBreakpoint()
  const compact = isMobile || isTablet

  return (
    <section className="eff-root" aria-labelledby="eff-title">
      <div className="eff-shell">
        <div className="eff-grid">
          <figure className={`eff-media-wrap ${compact ? 'compact' : ''}`}>
            <div className="eff-media-frame">
              <img
                src={featureDashboard}
                alt="CKYC Dashboard with customer records and analytics"
                className="eff-media-image"
                loading="lazy"
              />
            </div>
            <span className="eff-media-base" aria-hidden />
          </figure>

          <div className="eff-copy">
            <h2 id="eff-title" className="eff-title">
              Run a more efficient, flexible,and digitally connected corebanking system
            </h2>

            <p className="eff-subhead">What you will get:</p>

            <div className={`eff-lists ${compact ? 'stacked' : ''}`}>
              <ul className="eff-list">
                {LEFT_POINTS.map((point) => (
                  <BulletItem key={point}>{point}</BulletItem>
                ))}
              </ul>
              <ul className="eff-list">
                {RIGHT_POINTS.map((point) => (
                  <BulletItem key={point}>{point}</BulletItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
