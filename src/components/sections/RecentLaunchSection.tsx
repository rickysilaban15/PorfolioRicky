import Image from "next/image";
import Link from "next/link";

export default function RecentLaunchSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/67ad3b2e-2d3a-478e-b2a7-81192584727e-spacex-com/assets/images/Kuiper_KF_01_outsidesouthgrassh_DSC_3461_desktop_ea033c599b-3.jpg?"
          alt="KF-01 Mission Launch"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container">
          <div className="max-w-2xl">
            {/* Recent Launch Label */}
            <div className="mb-6">
              <span className="text-sm font-normal uppercase tracking-wide text-white">
                Recent Launch
              </span>
            </div>

            {/* Mission Title */}
            <h2 className="mb-8 text-4xl font-bold uppercase text-white md:text-6xl">
              KF-01 Mission
            </h2>

            {/* Rewatch Button */}
            <Link
              href="/launches/mission/?missionId=kf-01"
              className="inline-block border border-white px-8 py-4 text-sm font-normal uppercase tracking-wide text-white transition-opacity hover:opacity-75"
            >
              Rewatch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}