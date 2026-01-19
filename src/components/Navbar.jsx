import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe, ChevronDown, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const languages = [
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
]

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const { isDark, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode)
    setLangDropdownOpen(false)
  }

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[1]

  const navItems = [
    { key: 'home', section: 'hero' },
    { key: 'about', section: 'about' },
    { key: 'services', section: 'services' },
    { key: 'markets', section: 'markets' },
    { key: 'projects', section: 'projects' },
    { key: 'contact', section: 'contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-dark-500 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`flex items-center space-x-3 transition-all duration-300 rounded-lg ${
            scrolled ? 'bg-dark-300 dark:bg-dark-600 px-3 py-2' : ''
          }`}>
            <img
              src="/nr-geo-logo.png"
              alt="NR-GEO Logo"
              className={`h-10 w-auto object-contain transition-all duration-300 ${
                scrolled ? '' : 'drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]'
              }`}
              style={scrolled ? {} : { filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.8))' }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className={`font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-dark-600 dark:text-dark-100' : 'text-white'
                }`}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all ${
                scrolled
                  ? 'bg-dark-50 hover:bg-dark-100 text-dark-700 dark:bg-dark-500 dark:hover:bg-dark-600 dark:text-dark-100'
                  : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  scrolled
                    ? 'bg-dark-50 hover:bg-dark-100 text-dark-700 dark:bg-dark-500 dark:hover:bg-dark-600 dark:text-dark-100'
                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
                }`}
              >
                <Globe size={18} />
                <span className="text-sm font-medium">{currentLanguage.flag} {currentLanguage.code.toUpperCase()}</span>
                <ChevronDown size={16} className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-56 bg-white dark:bg-dark-500 rounded-xl shadow-2xl overflow-hidden border border-dark-100 dark:border-dark-700 max-h-96 overflow-y-auto"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full px-4 py-3 text-left hover:bg-primary-50 dark:hover:bg-dark-700 transition-colors flex items-center space-x-3 ${
                          i18n.language === lang.code ? 'bg-primary-50 dark:bg-dark-500 text-primary-700 dark:text-primary' : 'text-dark-700 dark:text-dark-100'
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-dark-700 dark:text-dark-100 hover:bg-dark-50 dark:hover:bg-dark-700' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white dark:bg-dark-500 rounded-xl shadow-xl overflow-hidden"
            >
              <div className="py-4">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.section)}
                    className="block w-full text-left px-6 py-3 text-dark-600 dark:text-dark-100 hover:bg-primary-50 dark:hover:bg-dark-700 hover:text-primary transition-colors"
                  >
                    {t(`nav.${item.key}`)}
                  </button>
                ))}

                {/* Mobile Theme Toggle */}
                <div className="px-6 py-3 border-t border-dark-100 mt-2">
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between px-4 py-3 bg-dark-50 hover:bg-dark-100 rounded-lg transition-colors"
                  >
                    <span className="text-sm font-medium text-dark-700">
                      {isDark ? 'Light Mode' : 'Dark Mode'}
                    </span>
                    {isDark ? <Sun size={20} className="text-dark-700" /> : <Moon size={20} className="text-dark-700" />}
                  </button>
                </div>

                <div className="px-6 py-3 border-t border-dark-100 mt-2">
                  <p className="text-xs font-semibold text-dark-400 mb-2 flex items-center">
                    <Globe size={14} className="mr-1" /> Language
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`px-3 py-2 text-left rounded-lg transition-colors flex items-center space-x-2 text-sm ${
                          i18n.language === lang.code
                            ? 'bg-primary text-white'
                            : 'bg-dark-50 text-dark-700 hover:bg-dark-100'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-xs font-medium">{lang.code.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
