import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Award, Briefcase } from 'lucide-react'

const Team = () => {
  const { t } = useTranslation()

  // Team members data - will be populated with 7 team members
  const teamMembers = [
    // Awaiting team member data
  ]

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-white to-dark-50">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-80 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Name & Role */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-dark-700 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold">
                      {member.role[t('nav.home') === 'Home' ? 'en' :
                               t('nav.home') === 'Start' ? 'de' :
                               t('nav.home') === 'Hem' ? 'sv' :
                               t('nav.home') === 'Hjem' ? 'no' :
                               t('nav.home') === 'Inicio' ? 'es' :
                               t('nav.home') === 'Accueil' ? 'fr' : 'sk']}
                    </p>
                  </div>

                  {/* Experience Badge */}
                  <div className="flex items-center gap-2 mb-4 p-3 bg-primary-50 rounded-lg">
                    <Award className="text-primary flex-shrink-0" size={20} />
                    <span className="text-dark-700 font-semibold">
                      {member.experience}+ {t('team.yearsExperience')}
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="text-primary" size={20} />
                      <h4 className="font-bold text-dark-700">{t('team.skills')}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.skills[t('nav.home') === 'Home' ? 'en' :
                                    t('nav.home') === 'Start' ? 'de' :
                                    t('nav.home') === 'Hem' ? 'sv' :
                                    t('nav.home') === 'Hjem' ? 'no' :
                                    t('nav.home') === 'Inicio' ? 'es' :
                                    t('nav.home') === 'Accueil' ? 'fr' : 'sk'].map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-dark-100 text-dark-700 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
