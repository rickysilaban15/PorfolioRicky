"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalImage, setModalImage] = useState(null);

  const categories = [
    { id: 'all', name: 'Semua Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'desktop', name: 'Desktop Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Library Information System',
      category: 'web',
      description: 'Sistem manajemen perpustakaan lengkap dengan autentikasi pengguna dan pelacakan buku',
      tech: ['PHP', 'MySQL', 'Bootstrap'],
      link: 'https://ricky-perpustakaan.kesug.com',
      image: '/images/Library-Information-System.png',
    },
    {
      id: 2,
      title: 'Coffee Shop Landing Page',
      category: 'web',
      description: 'Halaman landing responsif modern untuk bisnis kedai kopi',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://rickysilaban15.github.io/clone-ngopi',
      image: '/images/cofffe-shop.png',
    },
    {
      id: 3,
      title: 'E-Commerce Website',
      category: 'web',
      description: 'Platform e-commerce berfitur lengkap dengan integrasi pembayaran',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://studio--e-commerce-storefront-viewer.us-central1.hosted.app/',
      image: '/images/E-commerce.png',
    },
    {
      id: 4,
      title: 'Restaurant Landing Page',
      category: 'web',
      description: 'Website restoran elegan dengan menu dan sistem reservasi',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://rickysilaban15.github.io/my-resto',
      image: '/images/Restaurant-Landing-Page.png',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'web',
      description: 'Portofolio pribadi yang menampilkan proyek dan keahlian',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://kive-silaban.free.nf',
      image: '/images/Portfolio-Website.png',
    },
    {
      id: 6,
      title: 'Data Mining Application',
      category: 'web',
      description: 'Aplikasi analisis clustering yang dibangun dengan Streamlit',
      tech: ['Python', 'Streamlit', 'Pandas'],
      link: 'https://clustering-datamining-ri.streamlit.app/',
      image: '/images/Data-Mining.png',
    },
    {
      id: 7,
      title: 'Library Management System',
      category: 'web',
      description: 'Manajemen perpustakaan online dengan sistem autentikasi',
      tech: ['PHP', 'MySQL', 'Bootstrap'],
      link: 'https://laban.wuaze.com/LibraryManagement/login.php',
      image: '/images/Library-Management-System.png',
    },
    {
      id: 8,
      title: 'Student Attendance System',
      category: 'desktop',
      description: 'Aplikasi desktop untuk absensi siswa menggunakan QR code dan verifikasi foto',
      tech: ['Java', 'SQLite', 'JavaFX'],
      link: '#',
      image: '/images/Student-Attendance-System.png',
    },
    {
      id: 9,
      title: 'StevenCoffe - Coffee Shop Transaction System',
      category: 'desktop',
      description: 'Sistem transaksi coffee shop lengkap dengan manajemen menu, pesanan, dan laporan penjualan menggunakan Python GUI',
      tech: ['Python', 'Tkinter', 'ttkbootstrap', 'SQLite'],
      link: '#',
      image: '/images/StevenCoffe-Coffee-Shop-Transaction-System.png',
    },
    {
  id: 10,
  title: 'Sistem Informasi Dikesag',
  category: 'web',
  description: 'Website layanan kesehatan terpadu untuk Dinas Kesehatan Desa Ag yang memuat informasi layanan, berita, dan sistem reservasi.',
  tech: ['PHP', 'MySQL', 'Bootstrap'],
  link: 'https://dikesag.kesug.com',
  image: '/images/Screenshot (318).png', // pastikan kamu punya screenshot-nya
},
{
  id: 11,
  title: 'KosApp - Aplikasi Manajemen Kos',
  category: 'mobile',
  description: 'Aplikasi mobile untuk pemilik dan penyewa kos dengan fitur manajemen kamar, pembayaran, dan notifikasi.',
  tech: ['Flutter', 'Firebase'],
  link: 'https://preview.builtwithrocket.new/kosapp-3n11y93',
  image: '/images/Screenshot 2025-07-18 024900.png'
}

  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen bg-primary-black relative py-12 sm:py-16 lg:py-20" id="projects">
      <div className="absolute inset-0 overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="https://cdn.pixabay.com/video/2017/10/22/12567-240358894_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl font-bold text-white uppercase tracking-wide">𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒅 𝑷𝒓𝒐𝒋𝒆𝒄𝒕𝒔</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 border-2 text-sm uppercase tracking-wide font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-white text-black border-white'
                    : 'text-white border-white hover:bg-white hover:text-black'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-dark-gray border border-white/10 overflow-hidden shadow-md rounded-md"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden cursor-pointer" onClick={() => setModalImage(project.image)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 hover:bg-black/60 transition-all duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white uppercase mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs text-white border border-white px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-all"
                  >
                    Lihat Project
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setModalImage(null)}>
          <div className="max-w-5xl max-h-screen overflow-auto">
            <img src={modalImage} alt="Full View" className="w-full h-auto" />
          </div>
        </div>
      )}
    </section>
  );
}
