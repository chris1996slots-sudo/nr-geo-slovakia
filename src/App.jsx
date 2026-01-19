import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Markets from './components/Markets'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ImpressumPage from './pages/ImpressumPage'

function App() {
  const { i18n } = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const [showImpressum, setShowImpressum] = useState(false)

  useEffect(() => {
    // Simulate loading while i18n initializes
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Scroll to top when impressum state changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [showImpressum])

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

  if (showImpressum) {
    return <ImpressumPage onBack={() => setShowImpressum(false)} />
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-400 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Markets />
        <Projects />
        <Contact />
      </main>
      <Footer onShowImpressum={() => setShowImpressum(true)} />
    </div>
  )
}

export default App
