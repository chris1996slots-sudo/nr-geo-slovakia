import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sanitizeInput = (input) => {
    // Basic sanitization: remove potentially harmful characters
    return input
      .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers like onclick=
      .trim()
  }

  const handleChange = (e) => {
    const sanitized = sanitizeInput(e.target.value)
    setFormData({
      ...formData,
      [e.target.name]: sanitized,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Additional validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.')
      return
    }

    if (formData.message.length < 10) {
      alert('Please provide a more detailed message (minimum 10 characters).')
      return
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form: ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'N/A'}\n\n` +
      `Message:\n${formData.message}`
    )

    // Open email client
    window.location.href = `mailto:info@nr-geo.sk?subject=${subject}&body=${body}`

    // Show success message
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.address'),
      value: 'NR-GEO s.r.o., Renáta Rehánková, J.Hanulu 841/51, 052 01 Spišská Nová Ves, Slovakia',
      link: null,
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: ['SK: +421 910 500 038', 'EN: +421 948 634 081'],
      links: ['tel:+421910500038', 'tel:+421948634081'],
    },
    {
      icon: Mail,
      label: t('contact.emailLabel'),
      value: 'info@nr-geo.sk',
      link: 'mailto:info@nr-geo.sk',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark-400">
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
            Get in Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-700 dark:text-dark-50 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-dark-500 dark:text-dark-300">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card dark:bg-dark-600 dark:border-dark-600">
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-700 dark:text-dark-50 mb-3">Message Sent!</h3>
                  <p className="text-dark-500 dark:text-dark-300">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark-700 dark:text-dark-50 mb-2">
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-dark-200 dark:border-dark-600 dark:bg-dark-600 dark:text-white placeholder:text-dark-400 dark:placeholder:text-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark-700 dark:text-dark-50 mb-2">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-dark-200 dark:border-dark-600 dark:bg-dark-600 dark:text-white placeholder:text-dark-400 dark:placeholder:text-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-dark-700 dark:text-dark-50 mb-2">
                      {t('contact.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-dark-200 dark:border-dark-600 dark:bg-dark-600 dark:text-white placeholder:text-dark-400 dark:placeholder:text-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-dark-700 dark:text-dark-50 mb-2">
                      {t('contact.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-dark-200 dark:border-dark-500 dark:bg-dark-500 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <span>{t('contact.send')}</span>
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Info Title */}
            <div>
              <h3 className="text-2xl font-bold text-dark-700 dark:text-dark-50 mb-4">
                {t('contact.info')}
              </h3>
              <p className="text-dark-500 dark:text-dark-300 leading-relaxed">
                Reach out to discuss your project requirements. We're here to provide precision engineering solutions for your infrastructure needs.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="card dark:bg-dark-600 dark:border-dark-600 flex items-start space-x-4 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-dark-400 mb-1">
                        {item.label}
                      </div>
                      {Array.isArray(item.value) ? (
                        <div className="space-y-1">
                          {item.value.map((phone, idx) => (
                            <a
                              key={idx}
                              href={item.links[idx]}
                              className="block text-dark-700 dark:text-dark-50 font-medium hover:text-primary transition-colors"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      ) : item.link ? (
                        <a
                          href={item.link}
                          className="text-dark-700 dark:text-dark-50 font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-dark-700 dark:text-dark-50 font-medium">{item.value}</div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Map Placeholder */}
            <div className="card dark:bg-dark-600 dark:border-dark-600 p-0 overflow-hidden">
              <div className="relative h-64 bg-dark-100">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/images/hero/hero-1.jpg')`,
                  }}
                />
                <div className="absolute inset-0 bg-dark-900/40 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin size={48} className="mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-lg">Spišská Nová Ves, Slovakia</p>
                    <p className="text-sm text-white/80">J.Hanulu 841/51, 052 01</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
