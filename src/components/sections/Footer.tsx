export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://cdn.pixabay.com/video/2019/09/24/27203-362518512_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay gelap agar teks terlihat jelas */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Konten Footer */}
      <div className="relative z-20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white text-sm font-normal">
              Ricky Steven Silaban © 2025
            </div>
            <div className="flex space-x-8">
              {/* Tambahkan ikon sosial media atau link lainnya di sini */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
