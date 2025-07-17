"use client"

import Image from "next/image"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    <section className="min-h-screen bg-primary-black relative flex items-center justify-center" id="about">
      {/* Background Video - Rocket Test Explosion */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted
          playsInline
        >
          <source src="https://cdn.pixabay.com/video/2022/11/14/138931-770799907_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
            <div className="text-sm sm:text-base lg:text-lg text-white/80 uppercase tracking-wide mb-3 sm:mb-4">
             𝐶𝑒𝑟𝑖𝑡𝑎 𝑃𝑒𝑟𝑠𝑜𝑛𝑎𝑙 
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide">
              𝔸𝕓𝕠𝕦𝕥 𝕄𝕖
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Personal Photo Section */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <motion.div 
                variants={itemVariants}
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 border-2 border-white bg-dark-gray relative overflow-hidden">
                  <Image
                    src="/images/final.jpg"
                    alt="Ricky Steven Silaban"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Decorative corners */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 border-2 border-white"></div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 border-2 border-white"></div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
                  Profil Personal
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed mb-4 sm:mb-6">
                  𝚂𝚊𝚢𝚊 𝚊𝚍𝚊𝚕𝚊𝚑 𝚖𝚊𝚑𝚊𝚜𝚒𝚜𝚠𝚊 𝚃𝚎𝚔𝚗𝚒𝚔 𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚝𝚒𝚔𝚊 𝚢𝚊𝚗𝚐 𝚊𝚔𝚝𝚒𝚏 𝚍𝚎𝚗𝚐𝚊𝚗 𝚖𝚒𝚗𝚊𝚝 𝚔𝚞𝚊𝚝 𝚙𝚊𝚍𝚊 𝚙𝚎𝚗𝚐𝚎𝚖𝚋𝚊𝚗𝚐𝚊𝚗 𝚙𝚎𝚛𝚊𝚗𝚐𝚔𝚊𝚝 𝚕𝚞𝚗𝚊𝚔, 𝚝𝚎𝚔𝚗𝚘𝚕𝚘𝚐𝚒 𝚠𝚎𝚋, 𝚍𝚊𝚗 𝚊𝚗𝚊𝚕𝚒𝚜𝚒𝚜 𝚍𝚊𝚝𝚊. 𝚂𝚊𝚢𝚊 𝚖𝚎𝚖𝚒𝚕𝚒𝚔𝚒 𝚙𝚎𝚗𝚐𝚊𝚕𝚊𝚖𝚊𝚗 𝚋𝚎𝚔𝚎𝚛𝚓𝚊 𝚙𝚊𝚍𝚊 𝚙𝚛𝚘𝚢𝚎𝚔 𝚒𝚗𝚍𝚒𝚟𝚒𝚍𝚞 𝚍𝚊𝚗 𝚝𝚒𝚖 𝚜𝚎𝚛𝚝𝚊 𝚏𝚊𝚖𝚒𝚕𝚒𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚋𝚎𝚛𝚋𝚊𝚐𝚊𝚒 𝚋𝚊𝚑𝚊𝚜𝚊 𝚙𝚎𝚖𝚛𝚘𝚐𝚛𝚊𝚖𝚊𝚗 𝚜𝚎𝚙𝚎𝚛𝚝𝚒 𝙹𝚊𝚟𝚊, 𝙿𝙷𝙿, 𝙿𝚢𝚝𝚑𝚘𝚗, 𝙷𝚃𝙼𝙻, 𝚍𝚊𝚗 𝙹𝚊𝚟𝚊𝚂𝚌𝚛𝚒𝚙𝚝.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
                  𝚂𝚊𝚢𝚊 𝚊𝚍𝚊𝚕𝚊𝚑 𝚙𝚎𝚖𝚒𝚔𝚒𝚛 𝚕𝚘𝚐𝚒𝚜, 𝚙𝚎𝚖𝚋𝚎𝚕𝚊𝚓𝚊𝚛 𝚌𝚎𝚙𝚊𝚝, 𝚍𝚊𝚗 𝚖𝚎𝚖𝚒𝚕𝚒𝚔𝚒 𝚖𝚒𝚗𝚊𝚝 𝚢𝚊𝚗𝚐 𝚋𝚎𝚜𝚊𝚛 𝚍𝚊𝚕𝚊𝚖 𝚖𝚎𝚗𝚐𝚒𝚔𝚞𝚝𝚒 𝚙𝚎𝚛𝚔𝚎𝚖𝚋𝚊𝚗𝚐𝚊𝚗 𝚝𝚎𝚔𝚗𝚘𝚕𝚘𝚐𝚒. 𝙱𝚎𝚛𝚔𝚘𝚖𝚒𝚝𝚖𝚎𝚗 𝚞𝚗𝚝𝚞𝚔 𝚖𝚎𝚗𝚐𝚑𝚊𝚜𝚒𝚕𝚔𝚊𝚗 𝚜𝚘𝚕𝚞𝚜𝚒 𝚍𝚒𝚐𝚒𝚝𝚊𝚕 𝚢𝚊𝚗𝚐 𝚒𝚗𝚘𝚟𝚊𝚝𝚒𝚏 𝚍𝚊𝚗 𝚋𝚎𝚛𝚖𝚊𝚗𝚏𝚊𝚊𝚝.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
                  Pendidikan
                </h3>
                <div className="border-l-2 border-white pl-4 sm:pl-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    Sarjana Teknik Informatika
                  </h4>
                  <p className="text-light-gray mb-2 text-sm sm:text-base">
                    Universitas Indraprasta PGRI
                  </p>
                  <p className="text-light-gray text-sm sm:text-base">
                    Indeks Prestasi Kumulatif: 3.31/4.00
                  </p>
                </div>
              </motion.div>

              {/* Action Button */}
              <motion.div variants={itemVariants}>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-sm sm:text-base lg:text-lg font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
