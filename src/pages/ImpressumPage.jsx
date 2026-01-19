import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Building2, Mail, Phone, MapPin, FileText, Shield, Cookie, ArrowLeft, Globe } from 'lucide-react'

const ImpressumPage = ({ onBack }) => {
  const { t, i18n } = useTranslation()

  const availableLanguages = [
    { code: 'sk', label: 'SK', flag: '🇸🇰' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'de', label: 'DE', flag: '🇩🇪' },
    { code: 'sv', label: 'SV', flag: '🇸🇪' },
    { code: 'no', label: 'NO', flag: '🇳🇴' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'fr', label: 'FR', flag: '🇫🇷' }
  ]

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-800 to-dark-900 text-white py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>{t('impressum.backToHome')}</span>
            </button>

            {/* Language Switch */}
            <div className="flex items-center gap-2">
              <Globe size={20} className="text-white/70" />
              <div className="flex flex-wrap gap-1 bg-white/10 rounded-lg p-1">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-3 py-1.5 text-sm rounded-md font-semibold transition-all ${
                      i18n.language === lang.code
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/nr-geo-logo.png"
              alt="NR-GEO Logo"
              className="h-16 w-auto object-contain mb-6 brightness-0 invert"
            />
            <h1 className="text-5xl font-bold mb-4">{t('impressum.title')}</h1>
            <p className="text-xl text-white/80">{t('impressum.subtitle')}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Company Information */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-dark-700">{t('impressum.companyInfo')}</h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-dark-100 space-y-4">
              <div>
                <div className="text-sm font-semibold text-dark-500 mb-1">{t('impressum.companyName')}</div>
                <div className="text-2xl font-bold text-dark-700">NR-GEO s.r.o.</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-dark-500 mb-1">{t('impressum.legalForm')}</div>
                <div className="text-dark-700 font-medium">{t('impressum.legalFormFull')}</div>
                <div className="text-sm text-dark-500">{t('impressum.legalFormShort')}</div>
              </div>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-dark-700">{t('impressum.contactDetails')}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-dark-100">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-bold text-dark-700 mb-2 text-lg">{t('impressum.registeredAddress')}</div>
                    <div className="text-dark-600 space-y-1">
                      <div>NR-GEO s.r.o.</div>
                      <div>J.Hanulu 841/51</div>
                      <div>052 01 Spišská Nová Ves</div>
                      <div>Slovakia</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-dark-100">
                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-bold text-dark-700 mb-2 text-lg">{t('impressum.phone')}</div>
                    <div className="text-dark-600 space-y-2">
                      <div>
                        <span className="text-dark-500 text-sm">{t('impressum.phoneSlovak')}</span><br />
                        <a href="tel:+421910500038" className="hover:text-primary transition-colors font-medium">
                          +421 910 500 038
                        </a>
                      </div>
                      <div>
                        <span className="text-dark-500 text-sm">{t('impressum.phoneEnglish')}</span><br />
                        <a href="tel:+421948634081" className="hover:text-primary transition-colors font-medium">
                          +421 948 634 081
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-dark-100">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-bold text-dark-700 mb-2 text-lg">{t('impressum.email')}</div>
                    <a href="mailto:info@nr-geo.sk" className="text-dark-600 hover:text-primary transition-colors font-medium">
                      info@nr-geo.sk
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-dark-100">
                <div className="flex items-start gap-4">
                  <FileText className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-bold text-dark-700 mb-2 text-lg">{t('impressum.website')}</div>
                    <a href="https://www.nr-geo.sk" target="_blank" rel="noopener noreferrer" className="text-dark-600 hover:text-primary transition-colors font-medium">
                      www.nr-geo.sk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Responsible Person */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-dark-700 mb-6">{t('impressum.responsiblePerson')}</h2>
            <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 rounded-xl p-8 shadow-lg">
              <div className="font-bold text-dark-700 text-2xl mb-1">Renáta Rehánková</div>
              <div className="text-dark-600 text-lg">{t('impressum.contactPerson')}</div>
            </div>
          </motion.section>

          {/* Privacy Policy */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-dark-700">{t('impressum.privacyPolicy')}</h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-dark-100 prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-dark-700 mb-3">{t('impressum.dataCollection')}</h3>
              <p className="text-dark-600 leading-relaxed mb-6">
                {t('impressum.dataCollectionText')}
              </p>

              <h3 className="text-xl font-bold text-dark-700 mb-3">{t('impressum.whatDataWeCollect')}</h3>
              <ul className="list-disc pl-6 space-y-2 text-dark-600 mb-6">
                {t('impressum.dataWeCollect', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-dark-700 mb-3">{t('impressum.howWeUseData')}</h3>
              <ul className="list-disc pl-6 space-y-2 text-dark-600 mb-6">
                {t('impressum.dataUsage', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-dark-700 mb-3">{t('impressum.yourRights')}</h3>
              <p className="text-dark-600 mb-3">{t('impressum.yourRightsIntro')}</p>
              <ul className="list-disc pl-6 space-y-2 text-dark-600 mb-6">
                {t('impressum.rights', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="bg-primary-50 border-l-4 border-primary rounded-r-lg p-4 mt-6">
                <p className="text-dark-700 font-medium">
                  {t('impressum.dataProtectionContact')}{' '}
                  <a href="mailto:info@nr-geo.sk" className="text-primary hover:underline font-bold">
                    info@nr-geo.sk
                  </a>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Cookie Policy */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-dark-700">{t('impressum.cookiePolicy')}</h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-dark-100">
              <p className="text-dark-600 text-lg leading-relaxed mb-6">
                {t('impressum.cookiePolicyIntro')}
              </p>

              <h3 className="text-xl font-bold text-dark-700 mb-4">{t('impressum.cookieTypes')}</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                  <div className="font-bold text-green-900 text-lg mb-2">{t('impressum.essentialCookies')}</div>
                  <div className="text-green-800">
                    {t('impressum.essentialCookiesDesc')}
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  <div className="font-bold text-blue-900 text-lg mb-2">{t('impressum.analyticsCookies')}</div>
                  <div className="text-blue-800">
                    {t('impressum.analyticsCookiesDesc')}
                  </div>
                </div>
              </div>

              <div className="bg-dark-50 rounded-lg p-4">
                <p className="text-dark-600">
                  {t('impressum.cookieControl')}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Disclaimer */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-dark-700 mb-6">{t('impressum.disclaimer')}</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-dark-100 text-dark-600 space-y-4 leading-relaxed">
              <p>{t('impressum.disclaimerText1')}</p>
              <p>{t('impressum.disclaimerText2')}</p>
              <p>{t('impressum.disclaimerText3')}</p>
            </div>
          </motion.section>

          {/* Copyright */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-dark-700 mb-6">{t('impressum.copyright')}</h2>
            <div className="bg-gradient-to-br from-dark-700 to-dark-900 text-white rounded-xl p-8 shadow-2xl">
              <p className="text-lg mb-4">
                © {new Date().getFullYear()} NR-GEO s.r.o. {t('impressum.copyrightText')}
              </p>
              <p className="text-white/80 leading-relaxed">
                {t('impressum.copyrightDesc')}
              </p>
            </div>
          </motion.section>

          {/* Back to Top */}
          <div className="text-center pt-8">
            <button
              onClick={scrollToTop}
              className="btn-primary"
            >
              {t('impressum.backToTop')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImpressumPage
