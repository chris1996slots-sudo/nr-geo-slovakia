import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, ScanLine } from 'lucide-react'

const Hero = () => {
  const { t } = useTranslation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const gridRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Cancel previous animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(() => {
        if (gridRef.current) {
          const rect = gridRef.current.getBoundingClientRect()
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          })
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero/hero-1.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-800/80 to-dark-700/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900/50" />
      </div>

      {/* Interactive Animated Grid Pattern */}
      <div ref={gridRef} className="absolute inset-0 z-0 opacity-20 pointer-events-none will-change-transform">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#bfdd44" strokeWidth="1.5"/>
            </pattern>
            <radialGradient id="mouseGlow">
              <stop offset="0%" stopColor="#bfdd44" stopOpacity="1"/>
              <stop offset="30%" stopColor="#bfdd44" stopOpacity="0.7"/>
              <stop offset="60%" stopColor="#bfdd44" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#bfdd44" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>

          {/* Main glow - instant follow */}
          <circle
            cx={mousePosition.x}
            cy={mousePosition.y}
            r="250"
            fill="url(#mouseGlow)"
            style={{
              filter: 'blur(60px)',
              willChange: 'transform'
            }}
          />

          {/* Trail effect - slower following circle for comet tail */}
          <circle
            cx={mousePosition.x}
            cy={mousePosition.y}
            r="300"
            fill="url(#mouseGlow)"
            style={{
              filter: 'blur(80px)',
              opacity: 0.6,
              transition: 'cx 0.8s cubic-bezier(0.4, 0, 0.2, 1), cy 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform'
            }}
          />

          {/* Second trail - even slower for longer comet tail */}
          <circle
            cx={mousePosition.x}
            cy={mousePosition.y}
            r="350"
            fill="url(#mouseGlow)"
            style={{
              filter: 'blur(100px)',
              opacity: 0.4,
              transition: 'cx 1.3s cubic-bezier(0.4, 0, 0.2, 1), cy 1.3s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform'
            }}
          />

          {/* Third trail - 1 second delayed glow effect */}
          <circle
            cx={mousePosition.x}
            cy={mousePosition.y}
            r="400"
            fill="url(#mouseGlow)"
            style={{
              filter: 'blur(120px)',
              opacity: 0.25,
              transition: 'cx 1.8s cubic-bezier(0.4, 0, 0.2, 1), cy 1.8s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform'
            }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge with Laser Scanning Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 backdrop-blur-sm border border-primary/40 rounded-full px-5 py-2.5 mb-6 overflow-hidden group"
            >
              {/* Animated laser scan line */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{ width: '50%' }}
              />

              {/* Scanning icon with animation */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <ScanLine className="text-primary w-4 h-4" />
              </motion.div>

              {/* Text with glitch effect */}
              <span className="relative text-white text-sm font-bold tracking-wide uppercase z-10">
                Slovak Engineering Excellence
                <motion.span
                  className="absolute inset-0 text-primary"
                  animate={{
                    opacity: [0, 0.5, 0],
                    x: [-2, 2, -2, 0]
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  Slovak Engineering Excellence
                </motion.span>
              </span>

              {/* Pulsing indicator */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                />
                <motion.div
                  className="absolute w-3 h-3 bg-primary/30 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {t('hero.title')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToAbout}
                className="group bg-primary hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>{t('hero.cta')}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToContact}
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>{t('hero.contact')}</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/20"
            >
              <div>
                <div className="text-4xl font-bold text-primary mb-2">9+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">23+</div>
                <div className="text-white/80 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">7+</div>
                <div className="text-white/80 text-sm">Countries Served</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
