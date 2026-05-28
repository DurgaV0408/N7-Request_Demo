import { useEffect, useState } from 'react'

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
}

export default function useBreakpoint() {
  const getWidth = () => (typeof window === 'undefined' ? 1440 : window.innerWidth)
  const [width, setWidth] = useState(getWidth)

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return {
    width,
    isMobile: width <= BREAKPOINTS.mobile,
    isTablet: width > BREAKPOINTS.mobile && width <= BREAKPOINTS.tablet,
    isDesktop: width > BREAKPOINTS.tablet,
  }
}
