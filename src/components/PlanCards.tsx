"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import ReuseButton from "@/common/ReuseBtn";

interface Props {
  filterName?: string;
}
const PlanCards = ({ filterName }: Props) => {
  const pricingOptions = [
    {
      name: "VECTOR ARTWORK",
      price: " $12 - $65+",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      name: "LINE ARTWORK",
      price: "$15 - $50+",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 10 developers",
        "Premium support: 24 months",
        "Free updates: 24 months",
      ],
    },
    {
      name: "CUSTOM Patches",
      price: "$100 - $1000+",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 100+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
    },

    {
      name: "Left Chest / Cap Digitzing",
      price: "$10 - $25",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 100+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
    },
    {
      name: "LOGO DESIGNING",
      price: "$65 - $1000",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 100+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
    },
  ];
  const getFilter = pricingOptions.filter((item) => item.name === filterName);

  return (
    <section className="flex gap-5 flex-col my-2">
      <p className="text-base text-center  gradient-text">
        Amazing Pricing Plan
      </p>
      <h1 className="font-bold text-center md:text-3xl text-2xl">
        Affordable Pricing Packages
      </h1>
      <div className="">
        <Swiper
          loop={true}
          grabCursor={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[
            // Autoplay,
            Pagination,
            Navigation,
          ]}
          className={`mySwiper ${filterName ? "feature" : ""}`}
        >
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-6 lg:space-y-0">
            {(filterName ? getFilter : pricingOptions).map((option, index) => (
              <SwiperSlide
                key={index}
                className={`flex flex-col gap-5 p-6 mx-auto max-w-lg text-center text-gray-900 !h-auto bg-transparent-white rounded-[24px] border-2 border-aqua border-opacity-10 transform duration-500 hover:scale-[0.98] transition-all  hover:border-aqua   shadow  xl:p-8  dark:text-white ${
                  filterName ? "!border-aqua" : ""
                }`}
              >
                <h3 className="text-start text-xl h-12 font-semibold gradient-text">
                  {option.name}
                </h3>
                <ReuseButton
                  mainClass="hover:scale-90 text-center my-5 flex gap-2 border border-aqua py-2 rounded-[50px] px-5 w-max transition ease-linear delay-150"
                  text={"Order Now"}
                  textClass="font-bold text-sm gradient-text"
                  iconClass="w-[10px]  "
                  icon={<FaArrowRight />}
                />
                <div className="flex justify-start items-baseline ">
                  <span className="mr-2 text-2xl font-medium my-3 border-b !text-white">
                    {option.price}
                  </span>
                </div>
                {/* List of features */}
                <ul role="list" className="mb-8 space-y-4 text-left">
                  {option.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-white space-x-3 transform duration-500 hover:translate-x-2 transition-all navbarLi cursor-pointer"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-aqua"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-light italic ">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default PlanCards;
