/**
 * Main Application Component
 *
 * This is the root component of the NR-GEO website.
 * It manages the overall application state and renders all major sections.
 *
 * Features:
 * - Multi-language support via react-i18next
 * - Loading state during initialization
 * - Dark/Light theme support
 * - Single Page Application with smooth scrolling
 * - Impressum/Privacy Policy page toggle
 * - Lazy loading for below-fold components
 */

import { useEffect, useState, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { LazyMotion, domAnimation } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

// Lazy load below-fold components
const Services = lazy(() => import('./components/Services'))
const Markets = lazy(() => import('./components/Markets'))
const Team = lazy(() => import('./components/Team'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const ImpressumPage = lazy(() => import('./pages/ImpressumPage'))

function App() {
  const { i18n } = useTranslation()

  // Loading state - shows spinner while i18n initializes
  const [isLoading, setIsLoading] = useState(true)

  // Impressum page state - toggles between main site and impressum/privacy page
  const [showImpressum, setShowImpressum] = useState(false)

  // Initialize app - wait for i18n to load translations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Scroll to top when switching between main site and impressum page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [showImpressum])

  // Loading screen - shown while translations are loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-700">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  // Fallback loader for lazy components
  const LazyFallback = () => (
    <div className="min-h-[200px] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  )

  // Show Impressum/Privacy Policy page when toggled
  if (showImpressum) {
    return (
      <LazyMotion features={domAnimation}>
        <Suspense fallback={<LazyFallback />}>
          <ImpressumPage onBack={() => setShowImpressum(false)} />
        </Suspense>
      </LazyMotion>
    )
  }

  // Main website structure
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white dark:bg-dark-400 transition-colors duration-300 overflow-x-hidden">
        {/* Fixed navigation bar */}
        <Navbar />

        {/* Main content sections */}
        <main id="main-content" role="main">
          <Hero />      {/* Hero section with main banner */}
          <About />     {/* About company section */}
          <Suspense fallback={<LazyFallback />}>
            <Services />  {/* Services offered */}
            <Markets />   {/* Market presence */}
            <Team />      {/* Team members */}
            <Projects />  {/* Project portfolio */}
            <Contact />   {/* Contact form */}
          </Suspense>
        </main>

        {/* Footer with company info and impressum link */}
        <Suspense fallback={<LazyFallback />}>
          <Footer onShowImpressum={() => setShowImpressum(true)} />
        </Suspense>
      </div>
    </LazyMotion>
  )
}

export default App
