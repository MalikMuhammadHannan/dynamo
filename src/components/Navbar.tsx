"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

import ReuseButton from "@/common/ReuseBtn";

import logo from "../../public/Images/logo.png";

const Navbar = () => {
  const pathname = usePathname().slice(1);
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar, lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };

  const menuItems = [
    { text: "Home", href: "/" },
    { text: "Pricing Plan", href: "/pricing" },

    {
      text: "Services",
      href: "#",
      dropdownItems: [
        { text: "Digitizing", href: "/services/digitizing" },
        { text: "Vector Artwork", href: "/services/vector-artwork" },
        { text: "Logo Designing", href: "/services/logo-designing" },
        { text: "Line Artwork", href: "/services/line-artwork" },
        { text: "Custom Patches", href: "/services/custom-patches" },
      ],
    },
    { text: "About Us", href: "/about" },
  ];

  return (
    <nav
      className={`py-4 bg-[#050828]  z-50 lg:px-40 sticky top-0 w-full  transition-transform duration-300  border-b-2 border-white border-opacity-10  px-5  ${
        !isVisible ? "-translate-y-full" : ""
      }`}
    >
      <div className=" bg-transparent  flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white font-bold uppercase">
            <Image src={logo} alt="logo" width={100} />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-5 text-white">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.dropdownItems ? (
                  <div
                    className="relative inline-block text-left"
                    onMouseLeave={toggleDropdown}
                  >
                    <button
                      id="dropdownHoverButton"
                      type="button"
                      className="text-white  font-medium rounded-lg text-sm  text-center inline-flex items-center navbarLi"
                      onMouseEnter={toggleDropdown}
                      onClick={toggleDropdown}
                    >
                      {item.text}
                      <svg
                        className="w-2.5 h-2.5 ms-3 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {dropDown && (
                      <div
                        id="dropdownHover"
                        className={`
                        absolute z-10  left-[-50px] divide-y divide-gray-100 rounded-lg shadow w-44 border overflow-hidden bg-primary border-aqua *:
                        
                        `}
                      >
                        <ul className=" text-sm text-white ">
                          {item.dropdownItems.map((dropdownItem, index) => (
                            <li
                              key={index}
                              className={` ${
                                pathname === dropdownItem.href.slice(1) &&
                                "bg-gradient-to-tl from-purple-600 to-blue-500"
                              }`}
                              onClick={toggleDropdown}
                            >
                              <Link
                                href={dropdownItem.href}
                                className={`block px-4 py-2 hover:bg-gradient-to-tl from-purple-600 to-blue-500 `}
                              >
                                {dropdownItem.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`navbarLi ${
                      pathname === item.href.slice(1) && "active"
                    }`}
                  >
                    {item.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-5">
          <ReuseButton
            mainClass="
                  
            bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-400
              text-center flex gap-4 flex-row-reverse
              py-1 rounded-[50px]   px-5 w-max
              transition ease-linear delay-150  hover:bg-gradient-to-tl from-purple-600 to-blue-500"
            text={"Contact Us"}
            textClass="font-bold text-sm "
            link={"/contact"}
          />
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`md:hidden container  ${
            isOpen ? "slide-in" : "slide-out"
          }`}
        >
          <ul className="flex gap-2   flex-col text-white">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b w-full border-aqua">
                {item.dropdownItems ? (
                  <div
                    className="relative inline-block text-left"
                    onMouseLeave={toggleDropdown}
                  >
                    <button
                      id="dropdownHoverButton"
                      type="button"
                      className="text-white  font-medium rounded-lg text-sm  text-center inline-flex items-center navbarLi"
                      onMouseEnter={toggleDropdown}
                      onClick={toggleDropdown}
                    >
                      {item.text}
                      <svg
                        className="w-2.5 h-2.5 ms-3 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {dropDown && (
                      <div
                        id="dropdownHover"
                        className="relative z-10   divide-y divide-gray-100 rounded-lg shadow w-full transition-transform duration-300"
                      >
                        <ul className=" text-sm text-white ">
                          {item.dropdownItems.map((dropdownItem, index) => (
                            <li
                              key={index}
                              className={`w-full
                              
                              ${
                                pathname === dropdownItem.href.slice(1) &&
                                "gradient-text"
                              }
                              `}
                              onClick={() => {
                                toggleMenu();
                                toggleDropdown();
                              }}
                            >
                              <Link
                                href={dropdownItem.href}
                                className="block px-4 py-2 w-full navbarLi  "
                              >
                                {dropdownItem.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`navbarLi ${
                      pathname === item.href.slice(1) && "active"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
