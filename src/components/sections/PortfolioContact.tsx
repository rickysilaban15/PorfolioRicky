"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Github, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `*Halo Bg Ricky Ganteng*
    
*Nama:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Subjek:* ${formData.subject}
*Pesan:* ${formData.message}`
    
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=6287818894504&text=${encodeURIComponent(whatsappMessage)}&type=phone_number&app_absent=0`
    window.open(whatsappUrl, '_blank')
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="min-h-screen bg-primary-black relative flex items-center justify-center" id="contact">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted
          playsInline
        >
          <source src="https://cdn.pixabay.com/video/2016/11/13/6358-191453143_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-8 uppercase tracking-wide">
             ℂ𝕠𝕟𝕥𝕒𝕔𝕥 𝕄𝕖
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto px-4">
              𝙼𝚊𝚛𝚒 𝚍𝚒𝚜𝚔𝚞𝚜𝚒𝚔𝚊𝚗 𝚙𝚛𝚘𝚢𝚎𝚔 𝚊𝚝𝚊𝚞 𝚔𝚎𝚜𝚎𝚖𝚙𝚊𝚝𝚊𝚗 𝚔𝚘𝚕𝚊𝚋𝚘𝚛𝚊𝚜𝚒 𝚜𝚎𝚕𝚊𝚗𝚓𝚞𝚝𝚗𝚢𝚊
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="NAMA DEPAN"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white text-white placeholder-white/70 focus:border-blue-accent focus:outline-none uppercase tracking-wide text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="NAMA BELAKANG"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white text-white placeholder-white/70 focus:border-blue-accent focus:outline-none uppercase tracking-wide text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="ALAMAT EMAIL"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white text-white placeholder-white/70 focus:border-blue-accent focus:outline-none uppercase tracking-wide text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="SUBJEK"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white text-white placeholder-white/70 focus:border-blue-accent focus:outline-none uppercase tracking-wide text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="PESAN ANDA"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white text-white placeholder-white/70 focus:border-blue-accent focus:outline-none resize-none uppercase tracking-wide text-sm sm:text-base"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-sm sm:text-base lg:text-lg font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300"
                >
                  𝐾𝑖𝑟𝑖𝑚 𝑘𝑒 𝑊ℎ𝑎𝑡𝑠𝐴𝑝𝑝
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
                  𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒔𝒊 𝑲𝒐𝒏𝒕𝒂𝒌
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                    <span className="text-white text-sm sm:text-base">Jakarta Timur, Kramat Jati</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                    <span className="text-white text-sm sm:text-base">+62 878 1889 4504</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                    <span className="text-white text-sm sm:text-base break-all">rickysilaban384@gmail.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
                  𝑰𝒌𝒖𝒕𝒊 𝑺𝒂𝒚𝒂
                </h3>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <a 
                    href="https://github.com/rickysilaban15" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white hover:text-blue-accent transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-sm sm:text-base uppercase tracking-wide">GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ricky-steven-44a8a0292/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white hover:text-blue-accent transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-sm sm:text-base uppercase tracking-wide">LinkedIn</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/stev_ky_silaban/?__pwa=1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white hover:text-blue-accent transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-sm sm:text-base uppercase tracking-wide">Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}