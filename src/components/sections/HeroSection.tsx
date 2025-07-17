"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Download, Eye, MessageCircle } from 'lucide-react'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = [
  '𝚁𝙸𝙲𝙺𝚈 𝚂𝚃𝙴𝚅𝙴𝙽 𝚂𝙸𝙻𝙰𝙱𝙰𝙽',
  '𝙵𝚄𝙻𝙻𝚂𝚃𝙰𝙲𝙺 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁',
  '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙲𝚂 𝙴𝙽𝙶𝙸𝙽𝙴𝙴𝚁',
];

  

  useEffect(() => {
    const currentWordText = words[currentWord]
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentWordText.length) {
          setDisplayedText(currentWordText.slice(0, displayedText.length + 1))
          setTypingSpeed(150)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
          setTypingSpeed(50)
        } else {
          setIsDeleting(false)
          setCurrentWord((prev) => (prev + 1) % words.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentWord, typingSpeed, words])

  const handleCVDownload = () => {
    const cvUrl = '/files/CV_RICKY_STEVEN SILABAN.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'CV-Ricky-Steven-Silaban.pdf'
    link.click()
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="/video/background/your-video.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2020/11/14/56376-479358463_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide leading-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
          >
            𝙼𝚎𝚖𝚋𝚊𝚗𝚐𝚞𝚗 𝚜𝚘𝚕𝚞𝚜𝚒 𝚍𝚒𝚐𝚒𝚝𝚊𝚕 𝚒𝚗𝚘𝚟𝚊𝚝𝚒𝚏 𝚞𝚗𝚝𝚞𝚔 𝚖𝚊𝚜𝚊 𝚍𝚎𝚙𝚊𝚗 𝚢𝚊𝚗𝚐 𝚕𝚎𝚋𝚒𝚑 𝚋𝚊𝚒𝚔
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-white text-white text-sm sm:text-base lg:text-lg font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
              style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              Lihat Projects
            </button>

            <button
              onClick={handleCVDownload}
              className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white text-black text-sm sm:text-base lg:text-lg font-medium uppercase tracking-wide hover:bg-transparent hover:text-white hover:border-white border-2 border-transparent transition-all duration-300 flex items-center justify-center gap-2"
              style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Unduh CV
            </button>

            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-white text-white text-sm sm:text-base lg:text-lg font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
              style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Hubungi Saya
            </button>
          </motion.div>

          {/* Highlight Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="text-center py-4 sm:py-0">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-xs sm:text-sm uppercase tracking-wide text-white/80">Projects Selesai</div>
            </div>
            <div className="text-center py-4 sm:py-0">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">3.31</div>
              <div className="text-xs sm:text-sm uppercase tracking-wide text-white/80">Prestasi IPK</div>
            </div>
            <div className="text-center py-4 sm:py-0">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">2+</div>
              <div className="text-xs sm:text-sm uppercase tracking-wide text-white/80">Tahun Pengalaman</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
