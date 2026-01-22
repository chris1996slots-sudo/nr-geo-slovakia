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
 */

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Markets from './components/Markets'
import Team from './components/Team'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ImpressumPage from './pages/ImpressumPage'

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

  // Show Impressum/Privacy Policy page when toggled
  if (showImpressum) {
    return <ImpressumPage onBack={() => setShowImpressum(false)} />
  }

  // Main website structure
  return (
    <div className="min-h-screen bg-white dark:bg-dark-400 transition-colors duration-300">
      {/* Fixed navigation bar */}
      <Navbar />

      {/* Main content sections */}
      <main>
        <Hero />      {/* Hero section with main banner */}
        <About />     {/* About company section */}
        <Services />  {/* Services offered */}
        <Markets />   {/* Market presence */}
        <Team />      {/* Team members */}
        <Projects />  {/* Project portfolio */}
        <Contact />   {/* Contact form */}
      </main>

      {/* Footer with company info and impressum link */}
      <Footer onShowImpressum={() => setShowImpressum(true)} />
    </div>
  )
}

export default App
