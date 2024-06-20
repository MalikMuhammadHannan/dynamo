"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

interface Props {
  gallery: { src: any }[];
  heading: string;
  services?: { service: string; description: string }[];
}

const ImgGallery = ({ gallery, heading, services }: Props) => {
  return (
    <div>
      <div className="my-6">
        <h1 className="font-light  text-center my-2 text-sm  text-white">
          What We Provides
        </h1>
        <h1 className="font-bold  text-center md:text-3xl  gradient-text">
          {heading}
        </h1>
      </div>
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
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper "
        >
          <div className="flex flex-wrap text-start justify-center">
            {gallery?.map((img: any, index: number) => (
              <SwiperSlide
                key={index}
                className=" mx-auto w-[50%] "
                style={{ height: "470px" }}
              >
                <div className="rounded xl overflow-hidden flex flex-col  mx-auto">
                  <Image
                    className=" !h-[380px] !object-fill rounded-xl  "
                    src={img?.src}
                    alt="Gallery Image"
                    width={10}
                    height={100}
                    layout="responsive"
                  />
                  {services && services[index] && (
                    <div className="relative text-start -mt-16 px-5 pt-5 pb-10 bg-primary text-white m-6 shadow-xl rounded-xl border-aqua transform duration-500 transition-all break-words border-2">
                      <p className="font-semibold text-lg peer gradient-text transition duration-500 ease-in-out inline-block mb-2">
                        {services[index]?.service}
                      </p>
                      <p className="border-t pt-2 text-white border-aqua peer-hover:block transition-all transform duration-500 hidden text-sm font-light">
                        {services[index]?.description}
                      </p>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ImgGallery;
