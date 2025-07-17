import Image from 'next/image';
import Link from 'next/link';

export default function SpacesuitSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/67ad3b2e-2d3a-478e-b2a7-81192584727e-spacex-com/assets/images/Eva_Suit_Desktop_alternate_1cf9bae18e-5.jpg?"
          alt="SpaceX EVA Suit"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full">
        <div className="container h-full flex items-center">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              ADVANCING HUMAN SPACEFLIGHT
            </h2>
            
            <Link
              href="https://www.spacex.com/updates/#eva-suit"
              className="inline-block px-8 py-3 border-2 border-white text-white text-sm font-normal uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-8 text-xs text-white uppercase">
          <Link href="https://www.spacex.com/" className="hover:underline">
            Ricky Steven Silaban © 2025
          </Link>
          <Link href="https://www.spacex.com/media/privacy_policy_spacex.pdf" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="https://www.spacex.com/supplier/" className="hover:underline">
            Suppliers
          </Link>
        </div>
      </div>
    </section>
  );
}