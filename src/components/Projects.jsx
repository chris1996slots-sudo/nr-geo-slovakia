import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowRight, CheckCircle2, ChevronDown, Calendar, Users, Award, Target, Image as ImageIcon } from 'lucide-react'
import ImageLightbox from './ImageLightbox'

const Projects = () => {
  const { t } = useTranslation()
  const [expandedProject, setExpandedProject] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const projects = [
    {
      key: 'forbifart',
      image: '/images/projects/forbifart/forbifart-3.jpg',
      images: [
        '/images/projects/forbifart/forbifart-1.jpg',
        '/images/projects/forbifart/forbifart-2.jpg',
        '/images/projects/forbifart/forbifart-3.jpg',
        '/images/projects/forbifart/forbifart-4.jpg',
        '/images/projects/forbifart/5-min.jpg',
        '/images/projects/forbifart/6-min.jpg',
        '/images/projects/forbifart/7-min.jpg',
        '/images/projects/forbifart/8-min.jpg',
        '/images/projects/forbifart/9-min.jpg',
        '/images/projects/forbifart/389f43f4-d202-4b35-8eff-997370943134-min.jpg',
        '/images/projects/forbifart/69b44901-02da-4a31-b089-afa0d79e6101-min.jpg',
        '/images/projects/forbifart/6a4da999-55ff-4f67-bc8c-793eaf016a9d-min.jpg',
        '/images/projects/forbifart/7b78f08d-c90f-40c2-b091-88bde6a23988-min.jpg',
        '/images/projects/forbifart/8a39b0ae-28e4-4a53-9deb-8173a1ca7d1a-min.jpg',
        '/images/projects/forbifart/9550c631-b3b7-4fb4-abac-3f823eeef709-min.jpg',
        '/images/projects/forbifart/9aba8de2-802b-4b04-88bf-d748c761ba35-min.jpg',
        '/images/projects/forbifart/9c09a03f-cbd3-49e9-a558-f28c2b3fc15c-min.jpg',
        '/images/projects/forbifart/a5b211be-a9dc-4e4a-84ab-b415b00f4701-min.jpg',
        '/images/projects/forbifart/d1e67a54-e2bf-457b-b1cb-beaf6c32cbbd-min.jpg',
        '/images/projects/forbifart/d4d4fbf6-cae3-44bd-a845-13732365c183-min.jpg',
        '/images/projects/forbifart/FSE-209-kontur_page-0001-min-scaled.jpg',
      ],
      stats: ['21 km', '2015-2026', 'TBM Operations'],
      details: {
        overview: 'Förbifart Stockholm is one of Europe\'s largest infrastructure projects - a 21 km bypass route with 18 km of tunnel beneath the Swedish capital. NR-GEO provided comprehensive surveying and monitoring services throughout the entire construction phase.',
        scope: [
          'TBM guidance for 4 tunnel boring machines',
          'Continuous deformation monitoring of existing infrastructure',
          'Underground control network establishment and maintenance',
          'Real-time positioning for excavation equipment',
          'As-built documentation and quality control',
          'Coordination with Swedish Transport Administration'
        ],
        achievements: [
          'Zero incidents related to surveying precision',
          'Maintained millimeter accuracy over 21 km route',
          'Successfully monitored 200+ buildings above tunnel route',
          'Delivered all milestones on schedule'
        ],
        client: 'Swedish Transport Administration',
        duration: '2015-2026',
        teamSize: '8-12 specialists on-site'
      }
    },
    {
      key: 'brenner',
      image: '/images/projects/oslo/oslo-1.jpg',
      images: [
        '/images/projects/oslo/oslo-1.jpg',
        '/images/projects/oslo/oslo-2.jpg',
        '/images/projects/oslo/oslo-3.jpg',
        '/images/projects/oslo/IMG_20220126_113022-–-kópia-min.jpg',
        '/images/projects/oslo/IMG_20220201_091657-min.jpg',
        '/images/projects/oslo/IMG_20220201_091705-–-kópia-min.jpg',
        '/images/projects/oslo/IMG_20220201_095231-min.jpg',
        '/images/projects/oslo/IMG_20220201_160842-min.jpg',
        '/images/projects/oslo/IMG_20220201_161735-min.jpg',
        '/images/projects/oslo/Situacia.png',
        '/images/projects/oslo/metro_pristupovka.png',
        '/images/projects/oslo/pristupovka-1.png',
        '/images/projects/oslo/pristupovka-2.png',
      ],
      stats: ['64 km', 'Alpine Tunnel', 'Precision Survey'],
      details: {
        overview: 'The Brenner Base Tunnel is the world\'s longest underground railway tunnel, connecting Austria and Italy through the Alps. NR-GEO contributed specialized surveying expertise for this engineering masterpiece.',
        scope: [
          'High-precision alpine surveying under extreme conditions',
          'Cross-border geodetic network alignment',
          'Temperature-compensated measurements for alpine environment',
          'Integration with Italian and Austrian survey systems',
          'Tunnel breakthrough precision planning',
          'Continuous monitoring of mountain deformation'
        ],
        achievements: [
          'Contributed to successful tunnel breakthrough with <1cm deviation',
          'Maintained accuracy despite 1800m mountain above',
          'Coordinated international survey teams (AT/IT)',
          'Established innovative alpine monitoring systems'
        ],
        client: 'BBT SE (Brenner Basistunnel)',
        duration: '2017-2024',
        teamSize: '4-6 specialists'
      }
    },
    {
      key: 'railBaltica',
      image: '/images/projects/hammarby/hammarby-1.jpg',
      images: [
        '/images/projects/hammarby/hammarby-1.jpg',
        '/images/projects/hammarby/hammarby-2.jpg',
        '/images/projects/hammarby/hammarby-3.jpg',
        '/images/projects/hammarby/20220420_141123-min.jpg',
        '/images/projects/hammarby/Service-H-3421-3445_page-0001.jpg',
        '/images/projects/hammarby/Service-H-Grout-3421-3446-omg1_page-0001.jpg',
        '/images/projects/hammarby/Snímek-obrazovky-2022-04-20-104700-min.png',
        '/images/projects/hammarby/Snímek-obrazovky-2022-04-21-081410-min.png',
        '/images/projects/hammarby/Snímek-obrazovky-2022-04-21-082134-min.png',
      ],
      stats: ['870 km', '3 Countries', 'Railway Integration'],
      details: {
        overview: 'Rail Baltica is a transformative railway project connecting the Baltic states (Estonia, Latvia, Lithuania) with the European railway network. NR-GEO provides ongoing surveying services for this strategically important infrastructure.',
        scope: [
          'Cross-border geodetic network establishment',
          'Railway alignment surveying for European gauge',
          'Bridge and viaduct construction monitoring',
          'Integration with existing Baltic infrastructure',
          'Environmental monitoring during construction',
          'BIM model creation for infrastructure management'
        ],
        achievements: [
          'Harmonized survey standards across 3 countries',
          'Delivered first digital twin models for Baltic railway',
          'Supporting EU\'s Trans-European Transport Network',
          'Pioneering sustainable construction monitoring'
        ],
        client: 'RB Rail AS',
        duration: '2019-ongoing',
        teamSize: '6-10 specialists across Baltic region'
      }
    },
    {
      key: 'jarfalla',
      image: '/images/projects/jarfalla/jarfalla-2.jpeg',
      images: [
        '/images/projects/jarfalla/jarfalla-1.jpeg',
        '/images/projects/jarfalla/jarfalla-2.jpeg',
        '/images/projects/jarfalla/jarfalla-3.jpg',
        '/images/projects/jarfalla/jarfalla-4.jpg',
        '/images/projects/jarfalla/IMG-20220410-WA0001-min.jpg',
        '/images/projects/jarfalla/IMG-20220410-WA0002-min.jpg',
        '/images/projects/jarfalla/Pro_petu_2_page-0001.jpg',
        '/images/projects/jarfalla/Pro_petu_2_page-0002.jpg',
        '/images/projects/jarfalla/received_1002543013833417-min.jpeg',
        '/images/projects/jarfalla/received_1046756916140738-min.jpeg',
        '/images/projects/jarfalla/received_108134951505947-min.jpeg',
        '/images/projects/jarfalla/received_145435384320861-min.jpeg',
        '/images/projects/jarfalla/received_1465647870485877-min.jpeg',
        '/images/projects/jarfalla/received_161496576002734-min.jpeg',
        '/images/projects/jarfalla/received_1973464216151423-min.jpeg',
        '/images/projects/jarfalla/received_226526676054509-min.jpeg',
        '/images/projects/jarfalla/received_251053693367402-min.jpeg',
        '/images/projects/jarfalla/received_276711023785535-min.jpeg',
        '/images/projects/jarfalla/received_355183726220080-min.jpeg',
        '/images/projects/jarfalla/received_4354188401286387-min.jpeg',
        '/images/projects/jarfalla/received_510689603331739-min.jpeg',
        '/images/projects/jarfalla/received_548816559801734-min.jpeg',
        '/images/projects/jarfalla/received_899816034303176-min.jpeg',
      ],
      stats: ['4.7 km', 'Järfälla Tunnel', 'Sweden'],
      details: {
        overview: 'Järfällatunnel 4713 is a critical section of the Stockholm bypass system, requiring precision underground surveying and mining geodesy expertise. NR-GEO provided comprehensive measurement services for tunnel excavation and structural monitoring.',
        scope: [
          'Underground control network for tunnel construction',
          'Mining surveying and geological documentation',
          'Laser scanning of tunnel profiles and as-built conditions',
          'Deformation monitoring during excavation',
          'Real-time data processing and reporting',
          'Integration with main Förbifart Stockholm project'
        ],
        achievements: [
          'Maintained sub-centimeter accuracy in challenging geology',
          'Successfully documented complex rock formations',
          'Provided 24/7 surveying support during critical phases',
          'Established new standards for tunnel profile documentation'
        ],
        client: 'Swedish Transport Administration',
        duration: '2018-2023',
        teamSize: '4-6 specialists'
      }
    },
  ]

  const toggleProject = (key) => {
    setExpandedProject(expandedProject === key ? null : key)
  }

  const openLightbox = (images, index = 0) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white to-dark-50 dark:from-dark-400 dark:to-dark-400">
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
            Portfolio
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-700 dark:text-dark-50 mb-6">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-dark-500 dark:text-dark-300">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.key

            return (
              <motion.div
                key={project.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group"
              >
                {/* Project Card */}
                <div className={`card p-0 overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'shadow-2xl border-2 border-primary' : 'hover:shadow-xl'
                }`}>
                  {/* Project Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={t(`projects.${project.key}.title`)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent" />

                    {/* Location Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 text-sm font-semibold text-dark-700 dark:text-dark-50">
                      <MapPin size={16} className="text-primary" />
                      <span>{t(`projects.${project.key}.location`)}</span>
                    </div>

                    {/* Title and Description on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {t(`projects.${project.key}.title`)}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 max-w-2xl">
                        {t(`projects.${project.key}.description`)}
                      </p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-2">
                        {project.stats.map((stat, idx) => (
                          <span
                            key={idx}
                            className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30"
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div
                    onClick={() => toggleProject(project.key)}
                    className="p-6 bg-white dark:bg-dark-400 hover:bg-dark-50 transition-colors cursor-pointer border-t border-dark-100"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary font-semibold group-hover:text-primary-600 transition-colors">
                        <span>View Details</span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className={`w-10 h-10 rounded-full bg-dark-50 flex items-center justify-center transition-all duration-300 ${
                        isExpanded ? 'bg-primary text-white rotate-180' : 'group-hover:bg-primary group-hover:text-white'
                      }`}>
                        <ChevronDown size={24} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="card dark:bg-dark-400 dark:border-dark-600 mt-4 bg-gradient-to-br from-white to-dark-50 border-2 border-primary/20">
                        {/* Project Overview */}
                        <div className="mb-8">
                          <h4 className="text-2xl font-bold text-dark-700 dark:text-dark-50 mb-4">Project Overview</h4>
                          <p className="text-lg text-dark-600 dark:text-dark-200 leading-relaxed">
                            {project.details.overview}
                          </p>
                        </div>

                        {/* Project Images Gallery */}
                        {project.images && project.images.length > 0 && (
                          <div className="mb-8">
                            <h4 className="text-xl font-bold text-dark-700 dark:text-dark-50 mb-4 flex items-center">
                              <ImageIcon className="text-primary mr-2" size={24} />
                              Project Gallery ({project.images.length} images)
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                              {project.images.slice(0, 4).map((img, idx) => (
                                <div
                                  key={idx}
                                  onClick={() => openLightbox(project.images, idx)}
                                  className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
                                >
                                  <img
                                    src={img}
                                    alt={`${t(`projects.${project.key}.title`)} - Image ${idx + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                    <ImageIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                                  </div>
                                  {/* Show +X more badge on last thumbnail if there are more images */}
                                  {idx === 3 && project.images.length > 4 && (
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                      <div className="text-white text-2xl font-bold">
                                        +{project.images.length - 4}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                          {/* Scope of Work */}
                          <div>
                            <h4 className="text-xl font-bold text-dark-700 dark:text-dark-50 mb-4 flex items-center">
                              <Target className="text-blue-500 mr-2" size={24} />
                              Scope of Work
                            </h4>
                            <ul className="space-y-2">
                              {project.details.scope.map((item, idx) => (
                                <li key={idx} className="flex items-start text-dark-600 dark:text-dark-200">
                                  <span className="text-primary mr-2 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Key Achievements */}
                          <div>
                            <h4 className="text-xl font-bold text-dark-700 dark:text-dark-50 mb-4 flex items-center">
                              <Award className="text-green-500 mr-2" size={24} />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {project.details.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start text-dark-600 dark:text-dark-200">
                                  <CheckCircle2 className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Project Info Cards */}
                        <div className="grid sm:grid-cols-3 gap-4">
                          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                            <div className="flex items-center gap-2 mb-2">
                              <Users className="text-blue-600" size={20} />
                              <span className="text-sm font-semibold text-blue-900">Client</span>
                            </div>
                            <p className="text-blue-700 font-medium">{project.details.client}</p>
                          </div>

                          <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="text-purple-600" size={20} />
                              <span className="text-sm font-semibold text-purple-900">Duration</span>
                            </div>
                            <p className="text-purple-700 font-medium">{project.details.duration}</p>
                          </div>

                          <div className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                            <div className="flex items-center gap-2 mb-2">
                              <Users className="text-primary-600" size={20} />
                              <span className="text-sm font-semibold text-primary-900">Team Size</span>
                            </div>
                            <p className="text-primary-700 font-medium">{project.details.teamSize}</p>
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

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-dark-400 rounded-2xl p-8 sm:p-12 shadow-lg border border-dark-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-dark-700 dark:text-dark-50 mb-3">
                Certified Excellence
              </h3>
              <p className="text-dark-500 dark:text-dark-300">
                Meeting the highest European standards for precision and reliability
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'ISO 9001:2015',
                'EN 13670',
                'Eurocodes Compliance',
                'BIM Level 2 Ready'
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 p-4 bg-dark-50 rounded-xl"
                >
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={24} />
                  <span className="font-medium text-dark-700 dark:text-dark-50">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <ImageLightbox
            images={lightboxImages}
            initialIndex={lightboxIndex}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
