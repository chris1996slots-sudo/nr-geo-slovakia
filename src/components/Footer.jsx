import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = ({ onShowImpressum }) => {
  const { t } = useTranslation()

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { key: 'home', section: 'hero' },
    { key: 'about', section: 'about' },
    { key: 'services', section: 'services' },
    { key: 'markets', section: 'markets' },
    { key: 'projects', section: 'projects' },
    { key: 'contact', section: 'contact' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-dark-800 to-dark-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/nr-geo-logo.png"
                alt="NR-GEO Logo"
                className="h-12 w-auto object-contain mb-2 brightness-0 invert"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            {/* Direct Contact Buttons */}
            <div className="flex space-x-3">
              <a
                href="tel:+421910500038"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-primary rounded-lg transition-colors text-sm font-semibold"
                aria-label="Call us"
              >
                <Phone size={18} />
                <span>Call</span>
              </a>
              <a
                href="mailto:info@nr-geo.sk"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-primary rounded-lg transition-colors text-sm font-semibold"
                aria-label="Email us"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {t(`nav.${link.key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                >
                  {t('services.tunneling.title')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                >
                  {t('services.scanToBim.title')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                >
                  {t('services.geotechnical.title')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                >
                  {t('services.cadastral.title')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-white/70">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">NR-GEO s.r.o.</div>
                  <div className="text-primary-300 text-xs mt-0.5">Renáta Rehánková</div>
                  <div className="mt-1">J.Hanulu 841/51</div>
                  <div>052 01 Spišská Nová Ves</div>
                  <div>Slovakia</div>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <a href="tel:+421910500038" className="text-white/70 hover:text-primary transition-colors">
                      SK: +421 910 500 038
                    </a>
                  </div>
                  <div>
                    <a href="tel:+421948634081" className="text-white/70 hover:text-primary transition-colors">
                      EN: +421 948 634 081
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@nr-geo.sk" className="text-white/70 hover:text-primary transition-colors">
                  info@nr-geo.sk
                </a>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h5 className="font-bold text-sm mb-3 text-white">Business Hours</h5>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold text-white">8:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span className="font-semibold text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-white/60">
              © {currentYear} NR-GEO s.r.o. {t('footer.rights')}
            </div>

            {/* Impressum Link */}
            <div>
              <button
                onClick={onShowImpressum}
                className="text-sm text-white/60 hover:text-primary transition-colors underline"
              >
                Impressum & Privacy Policy
              </button>
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-white/40">
            <span className="bg-white/5 px-3 py-1 rounded">ISO 9001:2015 Certified</span>
            <span className="bg-white/5 px-3 py-1 rounded">Millimeter Precision</span>
            <span className="bg-white/5 px-3 py-1 rounded">Licensed Surveyors</span>
            <span className="bg-white/5 px-3 py-1 rounded">BIM Level 2</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
