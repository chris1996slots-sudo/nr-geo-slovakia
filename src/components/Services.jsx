import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { CircleDot, ScanLine, Activity, ChevronDown, CheckCircle, Ruler, Cpu, TrendingUp, Shield, Clock, Users } from 'lucide-react'

const Services = () => {
  const { t } = useTranslation()
  const [expandedService, setExpandedService] = useState(null)

  const services = [
    {
      key: 'tunneling',
      icon: CircleDot,
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      detailIcons: [Ruler, CircleDot, CheckCircle]
    },
    {
      key: 'scanToBim',
      icon: ScanLine,
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      detailIcons: [ScanLine, Cpu, TrendingUp]
    },
    {
      key: 'geotechnical',
      icon: Activity,
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      detailIcons: [Activity, Shield, Clock]
    },
    {
      key: 'cadastral',
      icon: Ruler,
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      detailIcons: [Ruler, CheckCircle, Users]
    },
  ]

  const toggleService = (key) => {
    setExpandedService(expandedService === key ? null : key)
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-dark-50 to-white dark:from-dark-900 dark:to-dark-800">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            2026 Focus
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-700 dark:text-dark-50 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg text-dark-500 dark:text-dark-300">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isExpanded = expandedService === service.key

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                {/* Service Header (Clickable) */}
                <div
                  onClick={() => toggleService(service.key)}
                  className={`card dark:bg-dark-500 dark:border-dark-500 cursor-pointer transition-all duration-300 ${
                    isExpanded ? 'shadow-2xl border-2 border-primary' : 'hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 flex-1">
                      {/* Icon */}
                      <div className={`w-16 h-16 ${service.bgColor} dark:bg-dark-600 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isExpanded ? 'scale-110' : 'group-hover:scale-105'
                      } transition-transform duration-300`}>
                        <Icon className={`${service.iconColor} dark:text-primary`} size={32} />
                      </div>

                      {/* Title & Description */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-dark-700 dark:text-dark-50">
                            {t(`services.${service.key}.title`)}
                          </h3>
                        </div>
                        <p className="text-dark-500 dark:text-dark-300 leading-relaxed">
                          {t(`services.${service.key}.description`)}
                        </p>
                      </div>
                    </div>

                    {/* Expand Button */}
                    <div className={`ml-4 flex-shrink-0 w-10 h-10 rounded-full bg-dark-50 dark:bg-dark-600 flex items-center justify-center transition-all duration-300 ${
                      isExpanded ? 'bg-primary dark:bg-primary text-white rotate-180' : 'group-hover:bg-primary group-hover:text-white'
                    }`}>
                      <ChevronDown size={24} />
                    </div>
                  </div>

                  {/* Decorative Gradient Line */}
                  <div className={`absolute top-0 left-0 w-1 bg-gradient-to-b ${service.gradient} rounded-l-xl transition-all duration-500 ${
                    isExpanded ? 'h-full' : 'h-0 group-hover:h-full'
                  }`} />
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="card dark:bg-dark-500 dark:border-primary/30 mt-4 bg-gradient-to-br from-white to-dark-50 dark:from-dark-600 dark:to-dark-500 border-2 border-primary/20">
                        {/* Overview */}
                        <div className="mb-8">
                          <div className="flex items-center gap-3 mb-4">
                            {service.detailIcons.map((DetailIcon, idx) => (
                              <div key={idx} className={`w-8 h-8 ${service.bgColor} dark:bg-dark-600 rounded-lg flex items-center justify-center`}>
                                <DetailIcon className={`${service.iconColor} dark:text-primary`} size={18} />
                              </div>
                            ))}
                          </div>
                          <p className="text-lg text-dark-600 dark:text-dark-200 leading-relaxed">
                            {t(`services.${service.key}.overview`)}
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Capabilities */}
                          <div>
                            <h4 className="text-xl font-bold text-dark-700 dark:text-dark-50 mb-4 flex items-center">
                              <CheckCircle className="text-green-500 mr-2" size={24} />
                              {t('services.coreCapabilities')}
                            </h4>
                            <ul className="space-y-2">
                              {t(`services.${service.key}.capabilities`, { returnObjects: true }).map((capability, idx) => (
                                <li key={idx} className="flex items-start text-dark-600 dark:text-dark-200">
                                  <span className="text-primary mr-2 mt-1">•</span>
                                  <span>{capability}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="text-xl font-bold text-dark-700 dark:text-dark-50 mb-4 flex items-center">
                              <Cpu className="text-blue-500 mr-2" size={24} />
                              {t('services.technologiesTools')}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {t(`services.${service.key}.technologies`, { returnObjects: true }).map((tech, idx) => (
                                <span
                                  key={idx}
                                  className={`${service.bgColor} dark:bg-dark-600 ${service.iconColor} dark:text-primary text-sm font-semibold px-4 py-2 rounded-lg border-2 border-transparent hover:border-current transition-colors`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Experience Badge */}
                        <div className={`mt-8 bg-gradient-to-r ${service.gradient} text-white rounded-xl p-6`}>
                          <div className="flex items-center gap-3">
                            <TrendingUp size={28} />
                            <div>
                              <div className="text-sm font-semibold opacity-90 mb-1">{t('services.trackRecord')}</div>
                              <div className="text-lg font-bold">{t(`services.${service.key}.experience`)}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-primary-600 dark:from-primary-700 dark:to-primary-800 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-white">{t('services.ctaTitle')}</h3>
            <p className="text-lg mb-8 text-white/90 dark:text-white/80 max-w-2xl mx-auto">
              {t('services.ctaDescription')}
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                  })
                }
              }}
              className="bg-white dark:bg-dark-500 text-primary dark:text-white hover:bg-dark-50 dark:hover:bg-dark-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('services.ctaButton')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
