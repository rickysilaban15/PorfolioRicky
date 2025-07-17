import Image from 'next/image';
import Link from 'next/link';

export default function MissionSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/67ad3b2e-2d3a-478e-b2a7-81192584727e-spacex-com/assets/images/20250815_Axiom_4_Splashdown_Stills_09316_DESKTOP_433d1c431b-2.jpg?"
          alt="Axiom 4 crew waving after splashdown"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container">
          <div className="max-w-2xl">
            {/* Mission Status Label */}
            <div className="mb-4">
              <span className="text-sm font-regular uppercase tracking-wide text-pure-white">
                COMPLETED MISSION
              </span>
            </div>

            {/* Mission Title */}
            <h2 className="mb-8 text-4xl font-bold uppercase leading-tight text-pure-white md:text-5xl lg:text-6xl">
              AX-4 RETURNS TO EARTH
            </h2>

            {/* CTA Button */}
            <Link
              href="/launches/mission/?missionId=ax-4"
              className="inline-block border border-pure-white px-8 py-3 text-sm font-regular uppercase tracking-wide text-pure-white transition-opacity hover:opacity-80"
            >
              REWATCH
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}