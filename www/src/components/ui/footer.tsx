import Link from 'next/link'
import Image from "next/image";
import Logo from "@/public/images/schematical_sticker1.png";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/*<div className="md:flex md:items-center md:justify-between pb-4 md:pb-8">
          <div className="flex mb-4">
            <div className="w-1/3 h-12"></div>
            <div className="w-1/3 h-12">
              <h3>Powered By</h3>
              <Link href="https://schematical.com?utm_source=indihustlers_com" target="_blank">
                <Image src={Logo} alt={"Schematical Logo"}/>
              </Link>
            </div>
            <div className="w-1/3 h-12"></div>
          </div>

        </div>*/}
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between pb-4 md:pb-8">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <a
                    className="flex justify-center items-center text-indigo-500 hover:text-slate-300 transition duration-150 ease-in-out"
                    href="https://twitter.com/schematical"
                    aria-label="Twitter"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"/>
                  </svg>
                </a>
              </li>
            </ul>
            {/* Links */}
            <div className="text-sm text-slate-600">
              <a className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                 href="/terms">Terms</a> · <a
                className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="#0">Privacy
              Policy</a>
            </div>
          </div>
        </div>
    </footer>
)
}
