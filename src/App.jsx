import React from 'react'
import Hero from './components/Hero'
import SolutionsSection from './components/SolutionsSection'
import CloudCoreSection from './components/CloudCoreSection'
import CoreEfficiencySection from './components/CoreEfficiencySection'
import PaperlessCtaSection from './components/PaperlessCtaSection'

export default function App() {
  return (
    <div>
      <Hero />
      <SolutionsSection />
      <CloudCoreSection />
      <CoreEfficiencySection />
      <PaperlessCtaSection />
    </div>
  )
}
