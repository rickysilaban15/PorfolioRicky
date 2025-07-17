"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Experience() {
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

  const experiences = [
    {
      title: 'Field Work Internship (PKL)',
      company: 'PT PLN (Persero) ULP Tarutung',
      period: 'February – June 2020',
      location: 'Tarutung, North Sumatra',
      description: [
        'Participated in work internship activities in PLN\'s operational environment',
        'Assisted field technicians in the maintenance and repair of electricity distribution networks',
        'Studied electrical systems, occupational safety (K3) standards, and PLN operational procedures',
        'Official PKL certificate accepted as proof of graduation and competency'
      ]
    },
    {
      title: 'Helper Operator',
      company: 'Freelance',
      period: 'July – December 2021',
      location: 'Tarutung, North Sumatra',
      description: [
        'Maintained occupational safety and ensured daily operational efficiency',
        'Conducted initial inspections, cleaning, and regular monitoring of heavy equipment',
        'Assisted the main operator in operating production equipment/industrial machinery'
      ]
    },
    {
      title: 'Website Development Projects',
      company: 'Freelance & Campus Projects',
      period: '2023 – 2025',
      location: 'Various',
      description: [
        'Worked on various website development projects for personal use, campus assignments, and assisting other students',
        'Developed projects ranging from simple websites to PHP and MySQL-based information systems',
        'Used technologies including HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, PHP, MySQL, Laravel, Node.js, and CI',
        'Utilized tools such as VS Code, XAMPP, phpMyAdmin, GitHub, and Git'
      ]
    }
  ]

  return (
    <section className="relative py-20 bg-primary-black overflow-hidden" id="experience">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://cdn.pixabay.com/video/2024/02/08/199827-911378618_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-12 text-center uppercase tracking-wide"
          >
            Experience
          </motion.h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-l-2 border-white pl-8 relative"
              >
                <div className="absolute w-4 h-4 bg-white rounded-full -left-[9px] top-0"></div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                    {exp.title}
                  </h3>
                  <p className="text-light-gray text-lg mb-1">
                    {exp.company}
                  </p>
                  <p className="text-light-gray text-sm mb-1">
                    {exp.period}
                  </p>
                  <p className="text-light-gray text-sm">
                    {exp.location}
                  </p>
                </div>
                
                <ul className="text-white space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-white mr-2 mt-2">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
