import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Building2, Mail, Phone, MapPin, FileText, Shield, Cookie, ArrowLeft, Globe } from 'lucide-react'

const ImpressumPage = ({ onBack }) => {
  const { t, i18n } = useTranslation()

  const availableLanguages = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'sk', label: 'SK' }
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
              <span>Back to Home</span>
            </button>

            {/* Language Switch */}
            <div className="flex items-center gap-2">
              <Globe size={20} className="text-white/70" />
              <div className="flex gap-1 bg-white/10 rounded-lg p-1">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-4 py-2 rounded-md font-semibold transition-all ${
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
            <h1 className="text-5xl font-bold mb-4">Impressum</h1>
            <p className="text-xl text-white/80">Legal Information & Privacy Policy</p>
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
              <h2 className="text-3xl font-bold text-dark-700">Company Information</h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-dark-100 space-y-4">
              <div>
                <div className="text-sm font-semibold text-dark-500 mb-1">Company Name</div>
                <div className="text-2xl font-bold text-dark-700">NR-GEO s.r.o.</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-dark-500 mb-1">Legal Form</div>
                <div className="text-dark-700 font-medium">Spoločnosť s ručením obmedzeným (s.r.o.)</div>
                <div className="text-sm text-dark-500">Limited Liability Company</div>
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
              <h2 className="text-3xl font-bold text-dark-700">Contact Details</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-dark-100">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-bold text-dark-700 mb-2 text-lg">Registered Address</div>
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
                    <div className="font-bold text-dark-700 mb-2 text-lg">Phone</div>
                    <div className="text-dark-600 space-y-2">
                      <div>
                        <span className="text-dark-500 text-sm">Slovak:</span><br />
                        <a href="tel:+421910500038" className="hover:text-primary transition-colors font-medium">
                          +421 910 500 038
                        </a>
                      </div>
                      <div>
                        <span className="text-dark-500 text-sm">English:</span><br />
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
                    <div className="font-bold text-dark-700 mb-2 text-lg">Email</div>
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
                    <div className="font-bold text-dark-700 mb-2 text-lg">Website</div>
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
            <h2 className="text-3xl font-bold text-dark-700 mb-6">Responsible Person</h2>
            <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 rounded-xl p-8 shadow-lg">
              <div className="font-bold text-dark-700 text-2xl mb-1">Renáta Rehánková</div>
              <div className="text-dark-600 text-lg">Contact Person</div>
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
              <h2 className="text-3xl font-bold text-dark-700">Privacy Policy & Data Protection</h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-dark-100 prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-dark-700 mb-3">Data Collection and Usage</h3>
              <p className="text-dark-600 leading-relaxed mb-6">
                NR-GEO s.r.o. is committed to protecting your privacy. We collect and process personal data only to the extent necessary for providing our services and in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR).
              </p>

              <h3 className="text-xl font-bold text-dark-700 mb-3">What Data We Collect</h3>
              <ul className="list-disc pl-6 space-y-2 text-dark-600 mb-6">
                <li>Contact information (name, email, phone number) when you submit inquiries through our contact form</li>
                <li>Technical data (IP address, browser type, device information) for website functionality and security</li>
                <li>Project-related information when you engage our services</li>
              </ul>

              <h3 className="text-xl font-bold text-dark-700 mb-3">How We Use Your Data</h3>
              <ul className="list-disc pl-6 space-y-2 text-dark-600 mb-6">
                <li>To respond to your inquiries and provide requested services</li>
                <li>To improve our website and user experience</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h3 className="text-xl font-bold text-dark-700 mb-3">Your Rights Under GDPR</h3>
              <p className="text-dark-600 mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-dark-600 mb-6">
                <li>Access your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to data processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>

              <div className="bg-primary-50 border-l-4 border-primary rounded-r-lg p-4 mt-6">
                <p className="text-dark-700 font-medium">
                  For questions about data protection, please contact us at{' '}
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
              <h2 className="text-3xl font-bold text-dark-700">Cookie Policy</h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-dark-100">
              <p className="text-dark-600 text-lg leading-relaxed mb-6">
                This website uses cookies to enhance user experience and analyze website traffic.
              </p>

              <h3 className="text-xl font-bold text-dark-700 mb-4">Types of Cookies We Use</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                  <div className="font-bold text-green-900 text-lg mb-2">Essential Cookies</div>
                  <div className="text-green-800">
                    Required for basic website functionality, including language preferences and session management. These cookies cannot be disabled.
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  <div className="font-bold text-blue-900 text-lg mb-2">Analytics Cookies</div>
                  <div className="text-blue-800">
                    Help us understand how visitors interact with our website to improve user experience. You can opt-out of these cookies.
                  </div>
                </div>
              </div>

              <div className="bg-dark-50 rounded-lg p-4">
                <p className="text-dark-600">
                  You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
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
            <h2 className="text-3xl font-bold text-dark-700 mb-6">Disclaimer</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-dark-100 text-dark-600 space-y-4 leading-relaxed">
              <p>
                The content of this website has been compiled with meticulous care and to the best of our knowledge. However, NR-GEO s.r.o. cannot assume any liability for the up-to-dateness, completeness, or accuracy of the pages and information provided.
              </p>
              <p>
                NR-GEO s.r.o. is not responsible for the content of external links. The operators of the linked pages are solely responsible for their content.
              </p>
              <p>
                All information provided on this website is for general informational purposes only and does not constitute professional advice. For specific project requirements, please contact us directly.
              </p>
            </div>
          </motion.section>

          {/* Copyright */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-dark-700 mb-6">Copyright & Intellectual Property</h2>
            <div className="bg-gradient-to-br from-dark-700 to-dark-900 text-white rounded-xl p-8 shadow-2xl">
              <p className="text-lg mb-4">
                © {new Date().getFullYear()} NR-GEO s.r.o. All rights reserved.
              </p>
              <p className="text-white/80 leading-relaxed">
                All content, images, logos, and trademarks on this website are the property of NR-GEO s.r.o. or their respective owners. Reproduction, distribution, or commercial use without prior written permission is prohibited.
              </p>
            </div>
          </motion.section>

          {/* Back to Top */}
          <div className="text-center pt-8">
            <button
              onClick={scrollToTop}
              className="btn-primary"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImpressumPage
