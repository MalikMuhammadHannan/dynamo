import Link from "next/link";
import Image from "next/image";

import { IoIosSend } from "react-icons/io";

import logo from "../../public/Images/logo.png";

const Footer = () => {
  return (
    <footer className=" ">
      <div className="mx-auto    ">
        <div className="md:flex bg-[#040722] p-5 lg:py-5 lg:px-44">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2  sm:gap-0 md:grid-cols-4">
            <div className="flex flex-col gap-2">
              <Image src={logo} alt="logo" width={100} />

              <ul className="font-extralight ">
                <li className="mb-4 pr-4">
                  Dynamo Stitches is the designing firm which leads you to step
                  in a world full of digitizing and vectorizing!
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold uppercase  dark:text-white">
                Quick Links
              </h2>
              <ul className="font-extralight">
                <li
                  className="mb-4 hover:translate-x-2 navbarLi 
    transform duration-500  transition-all"
                >
                  <Link href="/about" className="flex items-center">
                    About Us
                  </Link>
                </li>
                <li
                  className="mb-4 hover:translate-x-2 navbarLi 
    transform duration-500  transition-all"
                >
                  <Link href="/privacy-policy" className="flex items-center">
                    Privacy Policy
                  </Link>
                </li>
                <li
                  className="mb-4 hover:translate-x-2 navbarLi 
    transform duration-500  transition-all"
                >
                  <Link href="/terms-condition" className="flex items-center">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold uppercase  dark:text-white">
                Services
              </h2>
              <ul className="font-extralight">
                <li
                  className="mb-4 hover:translate-x-2 navbarLi 
    transform duration-500  transition-all"
                >
                  <Link
                    href="/services/line-artwork"
                    className="flex items-center"
                  >
                    Line ArtWork
                  </Link>
                </li>
                <li
                  className="mb-4 hover:translate-x-2 navbarLi 
    transform duration-500  transition-all"
                >
                  <Link
                    href="/services/vector-artwork"
                    className="flex items-center"
                  >
                    Vector Artwork
                  </Link>
                </li>
                <li
                  className="mb-4 hover:translate-x-2 navbarLi 
    transform duration-500  transition-all"
                >
                  <Link
                    href="/services/logo-designing"
                    className="flex items-center"
                  >
                    Logo designing
                  </Link>
                </li>
                <li
                  className="mb-4 hover:translate-x-2 navbarLi 
    transform duration-500  transition-all"
                >
                  <Link
                    href="/services/custom-patches"
                    className="flex items-center"
                  >
                    Custom Patches
                  </Link>
                </li>
                <li
                  className="mb-4 hover:translate-x-2 navbarLi 
    transform duration-500  transition-all"
                >
                  <Link
                    href="/services/digitizing"
                    className="flex items-center"
                  >
                    Embroidery Digitizing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-lg font-bold uppercase  dark:text-white">
                News letter
              </h2>
              <ul className="font-extralight ">
                <li className="mb-4">
                  Transform your business for the digital age with our updates
                  and innovative designing solutions
                </li>
                <li className="mb-4">
                  <div className="w-full text-center">
                    <form action="#" className="">
                      <div className="flex items-center border-2 overflow-hidden rounded-2xl border-aqua border-opacity-10">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="flex-1 w-[60%] px-4 py-2 text-sm text-white bg-transparent shadow focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="w-[20%] pl-2 border-l border-white border-opacity-10"
                        >
                          <IoIosSend size={20} className="" />
                        </button>
                      </div>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center  lg:px-44 text-center md:text-start bg-[#050828]">
          <span className="text-sm  sm:text-center">
            © 2024{" "}
            <Link href="/" className="hover:underline gradient-text">
              Dynamo Stitches
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
