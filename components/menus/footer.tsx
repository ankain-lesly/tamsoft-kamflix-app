import Link from "next/link";
import { Section } from "../wrappers/section";
import Image from "next/image";
import { AppLogo } from "@/public/assets";

export const Footer = () => {
  return (
    <div className="bg-bg py-10 border-t-2 border-black">
      <Section>
        <div className="flex flex-wrap md:flex-nowrap gap-10 justify-between text-white">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src={AppLogo}
                height={40}
                alt="Kamflix Logo"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold">Kamflix</span>
            </Link>
            <p className="text-light-main/70 md:max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
              maxime qui ad earum maiores nobis!
            </p>
          </div>
          <div className="flex-1 pb-3.5 sm:pb-0">
            <h3 className="text-lg lg:leading-7 font-bold mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              Discover
            </h3>
            <ul className="text-sm flex flex-col space-y-3">
              <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/">
                  Home
                </a>
              </li>
              <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/about-us">
                  About Us
                </a>
              </li>
              <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/contact">
                  Contact Us
                </a>
              </li>
              <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/trending">
                  Trending Movies
                </a>
              </li>
              <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/blog">
                  Blog
                </a>
              </li>
              <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 pb-3.5 sm:pb-0">
            <h3 className="text-lg lg:leading-7 font-bold mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              Top Categories
            </h3>
            <ul className="text-sm flex flex-col space-y-3">
              <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/">
                  Action
                </a>
              </li>
              <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/">
                  Romantic
                </a>
              </li>
              <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/">
                  Drama
                </a>
              </li>
              <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/">
                  Historical
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 pb-3.5 sm:pb-0">
            <h3 className="text-lg lg:leading-7 font-bold mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              My Account
            </h3>
            <ul className="text-sm flex flex-col space-y-3">
              <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/">
                  Dashboard
                </a>
              </li>
              <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/">
                  My Favorites
                </a>
              </li>
              {/* <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/">
                  Profile
                </a>
              </li> */}
              <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/">
                  Terms of Service
                </a>
              </li>
              <li className="flex items-baseline">
                <a
                  className="inline-block w-full hover:text-white hover:font-bold text-white/80"
                  href="/">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3 hidden">
            <a href="/">
              <h3 className="text-lg lg:leading-7 font-bold mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                Kamflix
              </h3>
            </a>
            <p className="leading-7 text-sm text-border mt-3">
              <span>
                Lorem 196 Andrew Road, Suite 200, <br /> New York, NY 10007
              </span>
              <br />
              <span>Tell: +000 000 000 000</span>
              <br />
              <span>Email: info@zpunet.com</span>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};
