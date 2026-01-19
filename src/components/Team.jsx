import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Award, Briefcase } from 'lucide-react'

const Team = () => {
  const { t } = useTranslation()

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Miroslav Kudlicka',
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
      skills: {
        en: ['Tunnel Surveying', 'TBM Guidance', '3D Scanning'],
        de: ['Tunnelvermessung', 'TBM-Steuerung', '3D-Scanning'],
        sk: ['Tunelové meranie', 'TBM vedenie', '3D skenovanie'],
        sv: ['Tunnelmätning', 'TBM-styrning', '3D-skanning'],
        no: ['Tunnelmåling', 'TBM-styring', '3D-skanning'],
        es: ['Topografía de túneles', 'Guía TBM', 'Escaneo 3D'],
        fr: ['Levé de tunnels', 'Guidage TBM', 'Balayage 3D']
      },
      image: '/images/team/worker1.jpeg'
    },
    {
      id: 2,
      name: 'Noro Magat',
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
      skills: {
        en: ['GNSS Networks', 'Deformation Monitoring', 'BIM Integration'],
        de: ['GNSS-Netzwerke', 'Deformationsüberwachung', 'BIM-Integration'],
        sk: ['GNSS siete', 'Monitorovanie deformácií', 'BIM integrácia'],
        sv: ['GNSS-nätverk', 'Deformationsövervakning', 'BIM-integration'],
        no: ['GNSS-nettverk', 'Deformasjonsovervåking', 'BIM-integrasjon'],
        es: ['Redes GNSS', 'Monitoreo de deformación', 'Integración BIM'],
        fr: ['Réseaux GNSS', 'Surveillance des déformations', 'Intégration BIM']
      },
      image: '/images/team/worker2.jpeg'
    },
    {
      id: 3,
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
      experience: 12,
      skills: {
        en: ['Underground Networks', 'Quality Control', 'Precision Measurement'],
        de: ['Unterirdische Netzwerke', 'Qualitätskontrolle', 'Präzisionsmessung'],
        sk: ['Podzemné siete', 'Kontrola kvality', 'Presné meranie'],
        sv: ['Underjordiska nätverk', 'Kvalitetskontroll', 'Precisionsmätning'],
        no: ['Underjordiske nettverk', 'Kvalitetskontroll', 'Presisjonsmåling'],
        es: ['Redes subterráneas', 'Control de calidad', 'Medición de precisión'],
        fr: ['Réseaux souterrains', 'Contrôle qualité', 'Mesure de précision']
      },
      image: '/images/team/worker3.jpeg'
    },
    {
      id: 4,
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
      experience: 12,
      skills: {
        en: ['Cadastral Surveys', 'Legal Documentation', 'CAD Systems'],
        de: ['Katastervermessung', 'Rechtliche Dokumentation', 'CAD-Systeme'],
        sk: ['Katastrálne meranie', 'Právna dokumentácia', 'CAD systémy'],
        sv: ['Fastighetsmätning', 'Juridisk dokumentation', 'CAD-system'],
        no: ['Katastralmåling', 'Juridisk dokumentasjon', 'CAD-systemer'],
        es: ['Topografía catastral', 'Documentación legal', 'Sistemas CAD'],
        fr: ['Levés cadastraux', 'Documentation juridique', 'Systèmes CAO']
      },
      image: '/images/team/worker4.jpeg'
    },
    {
      id: 5,
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
      experience: 12,
      skills: {
        en: ['Monitoring Systems', 'Data Analysis', 'Geotechnical Surveys'],
        de: ['Überwachungssysteme', 'Datenanalyse', 'Geotechnische Vermessung'],
        sk: ['Monitorovacie systémy', 'Analýza dát', 'Geotechnické meranie'],
        sv: ['Övervakningssystem', 'Dataanalys', 'Geoteknisk mätning'],
        no: ['Overvåkingssystemer', 'Dataanalyse', 'Geoteknisk måling'],
        es: ['Sistemas de monitoreo', 'Análisis de datos', 'Estudios geotécnicos'],
        fr: ['Systèmes de surveillance', 'Analyse de données', 'Levés géotechniques']
      },
      image: '/images/team/worker5.jpeg'
    },
    {
      id: 6,
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
      skills: {
        en: ['Digital Twins', 'Point Cloud Processing', '3D Modeling'],
        de: ['Digitale Zwillinge', 'Punktwolkenverarbeitung', '3D-Modellierung'],
        sk: ['Digitálne dvojčatá', 'Spracovanie mračna bodov', '3D modelovanie'],
        sv: ['Digitala tvillingar', 'Punktmolnbearbetning', '3D-modellering'],
        no: ['Digitale tvillinger', 'Punktskybehandling', '3D-modellering'],
        es: ['Gemelos digitales', 'Procesamiento de nubes de puntos', 'Modelado 3D'],
        fr: ['Jumeaux numériques', 'Traitement de nuages de points', 'Modélisation 3D']
      },
      image: '/images/team/worker6.jpeg'
    },
    {
      id: 7,
      name: 'Jozef Nemec',
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
      skills: {
        en: ['As-Built Surveys', 'Construction Support', 'Technical Documentation'],
        de: ['Bestandsvermessung', 'Bauunterstützung', 'Technische Dokumentation'],
        sk: ['As-built meranie', 'Podpora výstavby', 'Technická dokumentácia'],
        sv: ['Relationshandlingar', 'Byggstöd', 'Teknisk dokumentation'],
        no: ['As-built målinger', 'Byggstøtte', 'Teknisk dokumentasjon'],
        es: ['Planos según obra', 'Apoyo a la construcción', 'Documentación técnica'],
        fr: ['Plans de récolement', 'Support de construction', 'Documentation technique']
      },
      image: '/images/team/worker7.jpeg'
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
                    className="w-full h-full object-cover"
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
                  <div className="flex items-center gap-2 mb-3 p-2 bg-primary-50 dark:bg-dark-600 rounded-lg border border-primary-100 dark:border-dark-600">
                    <Award className="text-primary dark:text-primary-300 flex-shrink-0" size={16} />
                    <span className="text-dark-700 dark:text-dark-100 font-semibold text-sm">
                      {member.experience}+ {t('team.yearsExperience')}
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="mb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="text-primary dark:text-primary-300" size={16} />
                      <h4 className="font-bold text-dark-700 dark:text-dark-100 text-sm">{t('team.skills')}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills[t('nav.home') === 'Home' ? 'en' :
                                    t('nav.home') === 'Start' ? 'de' :
                                    t('nav.home') === 'Hem' ? 'sv' :
                                    t('nav.home') === 'Hjem' ? 'no' :
                                    t('nav.home') === 'Inicio' ? 'es' :
                                    t('nav.home') === 'Accueil' ? 'fr' : 'sk'].map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-dark-100 dark:bg-dark-600 text-dark-700 dark:text-dark-100 border border-dark-200 dark:border-dark-600 rounded-full text-xs font-medium hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors cursor-default"
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
