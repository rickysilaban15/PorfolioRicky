import Image from 'next/image'

export default function StarshipSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/67ad3b2e-2d3a-478e-b2a7-81192584727e-spacex-com/assets/images/Kuiper_KF_01_outsidesouthgrassh_DSC_3461_desktop_ea033c599b-3.jpg?"
          alt="Starship launch"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative z-10 flex h-full items-center">
        <div className="container">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="text-sm font-normal uppercase tracking-wide text-white">
                Recent Launch
              </span>
            </div>
            
            <h2 className="mb-12 text-white">
              Starship's Ninth Flight Test
            </h2>
            
            <div>
              <a
                href="https://www.spacex.com/launches/mission/?missionId=starship-flight-9"
                className="inline-block border border-white px-8 py-3 text-sm font-normal uppercase tracking-wide text-white transition-opacity hover:opacity-80"
              >
                Rewatch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}