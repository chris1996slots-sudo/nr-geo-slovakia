import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Target, Award, TrendingUp, Zap } from 'lucide-react'

const About = () => {
  const { t } = useTranslation()

  const values = [
    { key: 'value1', icon: Award },
    { key: 'value2', icon: Target },
    { key: 'value3', icon: TrendingUp },
    { key: 'value4', icon: Zap },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-400">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/projects/forbifart/forbifart-1.jpg"
                alt="Engineering surveying"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white dark:bg-dark-400 rounded-xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-dark-700 dark:text-dark-100">{t('about.precisionExcellence')}</span>
                </div>
                <p className="text-xs text-dark-500 dark:text-dark-300">
                  {t('about.precisionExcellenceText')}
                </p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {t('about.title')}
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-dark-700 dark:text-dark-50 mb-6">
              {t('about.heading')}
            </h2>

            <p className="text-lg text-dark-500 dark:text-dark-200 mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Mission */}
            <div className="bg-gradient-to-br from-primary-50 to-white dark:from-dark-700 dark:to-dark-600 border border-primary-100 dark:border-dark-600 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-dark-700 dark:text-dark-50 mb-3 flex items-center">
                <Target className="text-primary mr-2" size={24} />
                {t('about.mission')}
              </h3>
              <p className="text-dark-600 dark:text-dark-200">
                {t('about.missionText')}
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-xl font-bold text-dark-700 dark:text-dark-50 mb-4">{t('about.values')}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={value.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-3 p-4 rounded-lg bg-dark-50 dark:bg-dark-500 border border-dark-100 dark:border-dark-600 hover:bg-primary-50 dark:hover:bg-dark-600 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-white dark:bg-dark-400 group-hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                        <Icon className="text-primary group-hover:text-white transition-colors" size={20} />
                      </div>
                      <span className="font-medium text-dark-700 dark:text-dark-100">{t(`about.${value.key}`)}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
