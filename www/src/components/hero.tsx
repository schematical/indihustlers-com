import Image from 'next/image'
import Link from 'next/link'

import HeroImage from '@/public/images/hero-image.png'

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-hkgrotesk mb-6" data-aos="fade-up">
              Welcome To A Community of Solo or Independent Hackers and Hustlers
            </h1>
            <p className="text-xl text-slate-500 mb-10" data-aos="fade-up" data-aos-delay="100">
              Join a community of like minded
            </p>
            <div
                className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                data-aos="fade-up"
                data-aos-delay="200"
            >
              <div>
                <Link className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group"
                      href="/signup">
                  Get Started Free{' '}
                  <span
                      className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>

            </div>
          </div>
          {/* Hero image */}
          <div className="pt-16 md:pt-20" data-aos="fade-up" data-aos-delay="300">
            {/*<Image className="mx-auto" src={HeroImage} width={920} height={518} alt="Hero"/>*/}
            <iframe className="mx-auto" width={920} height={518}
                    src="https://www.youtube.com/embed/nHrWqwRRpHo?si=8aJP1wy1ZOKpjI28"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}