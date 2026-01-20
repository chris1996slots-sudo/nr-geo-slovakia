import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const Team = () => {
  const { t } = useTranslation()

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Ing. Jozef Nemec',
      role: {
        en: 'Chief Surveyor',
        de: 'Leitender Vermessungsingenieur',
        sk: 'Hlavný geodet',
        sv: 'Cheflantmätare',
        no: 'Sjeflandmåler',
        es: 'Topógrafo Jefe',
        fr: 'Géomètre en Chef'
      },
      experience: 12,
      image: '/images/team/worker7.webp'
    },
    {
      id: 2,
      name: 'Ing. Noro Magat',
      role: {
        en: 'Chief Surveyor',
        de: 'Leitender Vermessungsingenieur',
        sk: 'Hlavný geodet',
        sv: 'Cheflantmätare',
        no: 'Sjeflandmåler',
        es: 'Topógrafo Jefe',
        fr: 'Géomètre en Chef'
      },
      experience: 10,
      image: '/images/team/worker2.webp'
    },
    {
      id: 3,
      name: 'Mgr. Miroslav Kudlicka',
      role: {
        en: 'Surveyor',
        de: 'Vermessungsingenieur',
        sk: 'Geodet',
        sv: 'Lantmätare',
        no: 'Landmåler',
        es: 'Topógrafo',
        fr: 'Géomètre'
      },
      experience: 16,
      image: '/images/team/worker1.webp'
    },
    {
      id: 4,
      name: 'Andrej Horkovy',
      role: {
        en: 'Surveyor',
        de: 'Vermessungsingenieur',
        sk: 'Geodet',
        sv: 'Lantmätare',
        no: 'Landmåler',
        es: 'Topógrafo',
        fr: 'Géomètre'
      },
      experience: 11,
      image: '/images/team/worker3.webp'
    },
    {
      id: 5,
      name: 'Andrej Gladis',
      role: {
        en: 'Surveyor',
        de: 'Vermessungsingenieur',
        sk: 'Geodet',
        sv: 'Lantmätare',
        no: 'Landmåler',
        es: 'Topógrafo',
        fr: 'Géomètre'
      },
      experience: 12,
      image: '/images/team/worker6.webp'
    },
    {
      id: 6,
      name: 'Erik Fidrik',
      role: {
        en: 'Surveyor',
        de: 'Vermessungsingenieur',
        sk: 'Geodet',
        sv: 'Lantmätare',
        no: 'Landmåler',
        es: 'Topógrafo',
        fr: 'Géomètre'
      },
      experience: 6,
      image: '/images/team/worker5.webp'
    },
    {
      id: 7,
      name: 'Richard Kubik',
      role: {
        en: 'Surveyor',
        de: 'Vermessungsingenieur',
        sk: 'Geodet',
        sv: 'Lantmätare',
        no: 'Landmåler',
        es: 'Topógrafo',
        fr: 'Géomètre'
      },
      experience: 7,
      image: '/images/team/worker4.webp'
    }
  ]

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-white to-dark-50 dark:from-dark-400 dark:to-dark-500">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
            {t('team.title')}
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            {t('team.subtitle')}
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white dark:bg-dark-500 border border-dark-100 dark:border-dark-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Name & Role */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-dark-700 dark:text-dark-50 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary dark:text-primary-300 font-semibold text-sm">
                      {member.role[t('nav.home') === 'Home' ? 'en' :
                               t('nav.home') === 'Start' ? 'de' :
                               t('nav.home') === 'Hem' ? 'sv' :
                               t('nav.home') === 'Hjem' ? 'no' :
                               t('nav.home') === 'Inicio' ? 'es' :
                               t('nav.home') === 'Accueil' ? 'fr' : 'sk']}
                    </p>
                  </div>

                  {/* Experience Badge */}
                  <div className="flex items-center gap-2 p-2 bg-primary-50 dark:bg-dark-600 rounded-lg border border-primary-100 dark:border-dark-600">
                    <Award className="text-primary dark:text-primary-300 flex-shrink-0" size={16} />
                    <span className="text-dark-700 dark:text-dark-100 font-semibold text-sm">
                      {member.experience}+ {t('team.yearsExperience')}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
