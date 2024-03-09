import { PostHog } from 'posthog-node'
import Link from "next/link";
import {getDistinctId, PH_COOKIE} from "@/src/app/util";
import {headers} from "next/headers";


export default async function Hero() {
    const client = new PostHog(
        'phc_IZDtUbEzXkOgZIy2YJUdUDIyIbRJ7xJ1BusooosFOhM',
        { host: 'https://app.posthog.com' }
    );
    const headersList = headers();
    // console.log("HeadersList:", headersList, headersList.get(PH_COOKIE));
    const distinct_id: string = headersList.get(PH_COOKIE) || getDistinctId();
    console.log("distinct_id", distinct_id);
    const flag: string = await client.getFeatureFlag('ih-h1-title', distinct_id) as string;
    console.log("flag", flag);
    let h1Text = "Welcome To A Community of Solo or Independent Hackers and Hustlers";
    switch (flag) {
        case("test_group_1"):
            h1Text = "Welcome To Our Community of Solo Entrepreneurs";
            break;
        case("test_group_2"):
            h1Text = "Join Our Community of Independent Hackers and Hustlers";
            break;
        case("test_group_3"):
            h1Text = "Discover A Community of Solo Innovators and Creators";
            break;
    }

    return (
        <section className="relative">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 md:pt-40">
                    {/* Hero content */}
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="h1 font-hkgrotesk mb-6" data-aos="fade-up">
                            {h1Text}
                        </h1>
                        <p className="text-xl text-slate-500 mb-10" data-aos="fade-up" data-aos-delay="100">
                            Join a community of like minded individuals that get together daily to share the ups and downs of their entrepreneurial journey.
                        </p>
                        <div
                            className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div>
                                <Link
                                    className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group"
                                    href="/signup">
                                    Apply Now{' '}
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
    );
}