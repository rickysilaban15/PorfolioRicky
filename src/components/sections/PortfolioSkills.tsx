"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
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
        staggerChildren: 0.1,
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

  const hardSkills = [
    'Data Analysis',
    'Application Development',
    'APIs',
    'Blockchain',
    'Debugging',
    'Software Development',
    'Web Development',
    'Backup and Recovery Systems',
    'Microsoft Office (Word, Excel)',
    'POS (Point of Sale) Systems',
    'SQL and NOSQL Databases'
  ]

  const softSkills = [
    'Adaptability',
    'Empathy',
    'Leadership',
    'Critical Thinking',
    'Accuracy',
    'Clear Verbal Language',
    'Creativity',
    'Discipline',
    'Perseverance',
    'Positive Attitude',
    'Self-Evaluation',
    'Teamwork'
  ]

  return (
    <section className="relative py-20 bg-primary-black overflow-hidden" id="skills">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://cdn.pixabay.com/video/2023/08/19/176794-856056410_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-12 text-center uppercase tracking-wide"
          >
           𝕊𝕜𝕚𝕝𝕝𝕤 &amp; 𝔼𝕩𝕡𝕖𝕣𝕥𝕚𝕤𝕖
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide">
                𝙷𝚊𝚛𝚍 𝚂𝚔𝚒𝚕𝚕𝚜
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hardSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="border border-white p-4 hover:bg-white hover:text-primary-black transition-all duration-300"
                  >
                    <span className="text-sm font-medium uppercase tracking-wide">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide">
                𝚂𝚘𝚏𝚝 𝚂𝚔𝚒𝚕𝚕


              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="border border-white p-4 hover:bg-white hover:text-primary-black transition-all duration-300"
                  >
                    <span className="text-sm font-medium uppercase tracking-wide">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
