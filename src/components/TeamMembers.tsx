"use client";
import React from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

import member from "../../public/Images/members.webp";

const TeamMembers = () => {
  const pricingOptions = [
    {
      name: "Starter",
      designation: "Administrator",
      img: member,
      linkdin: "#",
      mail: "#",
      facebook: "#",
    },
    {
      name: "Starter",
      designation: "Administrator",
      img: member,
      linkdin: "#",
      mail: "#",
      facebook: "#",
    },
    {
      name: "Starter",
      designation: "Administrator",
      img: member,
      linkdin: "#",
      mail: "#",
      facebook: "#",
    },
    {
      name: "Starter",
      designation: "Administrator",
      img: member,
      linkdin: "#",
      mail: "#",
      facebook: "#",
    },
    {
      name: "Starter",
      designation: "Administrator",
      img: member,
      linkdin: "#",
      mail: "#",
      facebook: "#",
    },
    {
      name: "Starter",
      designation: "Administrator",
      img: member,
      linkdin: "#",
      mail: "#",
      facebook: "#",
    },
  ];

  return (
    <section className="flex gap-5 flex-col my-2">
      <p className="text-base text-center  gradient-text">Team Members</p>
      <h1 className="font-bold text-center md:text-3xl text-2xl">
        Amazing Team Members
      </h1>
      <div className="">
        <Swiper
          loop={true}
          grabCursor={true}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          modules={[
            // Autoplay,
            Pagination,
            Navigation,
          ]}
          className="mySwiper"
        >
          <div className="space-y-8 lg:grid   lg:grid-cols-4 md:grid-cols-3 sm:gap-6 xl:gap-6 lg:space-y-0">
            {pricingOptions.map((option, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col gap-5  text-center text-gray-900  bg-transparent-white rounded-[24px] border-2 border-aqua border-opacity-10 p-4 transform duration-500 hover:scale-[0.98] transition-all   shadow  xl:p-8  dark:text-white"
              >
                <Image
                  src={option.img}
                  alt={option.name}
                  className="!w-20 !h-20 mb-5 mx-auto rounded-full"
                />
                <h3 className="text-center my-2 text-2xl font-semibold gradient-text">
                  {option.name}
                </h3>
                <h3 className="text-center pb-5 text-lg font-thin !text-white border-b border-aqua">
                  {option.designation}
                </h3>

                <div className="flex justify-center gap-3 mt-5 !text-white">
                  <a
                    href={option.linkdin}
                    className="rounded-full p-2 border border-aqua hover:scale-95 transform duration-200  transition-all "
                  >
                    <FaLinkedin className="" />
                  </a>
                  <a
                    href={option.mail}
                    className="rounded-full p-2 border border-aqua hover:scale-95 transform duration-200  transition-all"
                  >
                    <IoMdMail className="" />
                  </a>
                  <a
                    href={option.facebook}
                    className="rounded-full p-2 border border-aqua hover:scale-95 transform duration-200  transition-all"
                  >
                    <FaFacebookSquare className="" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default TeamMembers;
