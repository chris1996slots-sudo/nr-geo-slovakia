import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MapPin, TrendingUp, Building2, Globe } from 'lucide-react'

const Markets = () => {
  const { t } = useTranslation()

  const markets = [
    {
      key: 'scandinavia',
      flag: '🇸🇪🇳🇴',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      icon: Building2,
    },
    {
      key: 'balkans',
      flag: '🇧🇦🇷🇸🇲🇰',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      icon: TrendingUp,
    },
    {
      key: 'ukraine',
      flag: '🇺🇦',
      color: 'from-yellow-400 to-blue-500',
      bgColor: 'bg-yellow-50',
      icon: MapPin,
    },
    {
      key: 'worldwide',
      flag: '🌍',
      color: 'from-primary to-orange-600',
      bgColor: 'bg-orange-50',
      icon: Globe,
    },
  ]

  return (
    <section id="markets" className="section-padding bg-white dark:bg-dark-400">
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
            Strategic Presence
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-700 dark:text-dark-50 mb-6">
            {t('markets.title')}
          </h2>
          <p className="text-lg text-dark-500 dark:text-dark-300 dark:text-dark-200">
            {t('markets.subtitle')}
          </p>
        </motion.div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {markets.map((market, index) => {
            const Icon = market.icon
            return (
              <motion.div
                key={market.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group"
              >
                <div className="card dark:bg-dark-400 dark:border-dark-600 h-full text-center hover:scale-105 transition-transform duration-300">
                  {/* Flag Emoji */}
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {market.flag}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-dark-700 dark:text-dark-50 mb-4">
                    {t(`markets.${market.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-dark-500 dark:text-dark-300 leading-relaxed">
                    {t(`markets.${market.key}.description`)}
                  </p>

                  {/* Decorative Bottom Border */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-full mx-auto bg-gradient-to-r ${market.color} transition-all duration-500 rounded-full`} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Map Visual (Placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-dark-700 to-dark-900 rounded-2xl p-8 sm:p-12 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }} />
            </div>

            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="text-primary mr-2" size={32} />
                <h3 className="text-3xl font-bold">{t('markets.globalTitle')}</h3>
              </div>
              <p className="text-lg text-white/80 mb-4 max-w-2xl mx-auto">
                {t('markets.globalDescription')}
              </p>
              <p className="text-md text-primary font-semibold mb-8">
                📍 {t('markets.globalFootnote')}
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-primary mb-1">3</div>
                  <div className="text-sm text-white/70">Key Regions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-primary mb-1">8+</div>
                  <div className="text-sm text-white/70">Active Countries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-white/70">Tunnel km</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-white/70">EU Standards</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Markets
