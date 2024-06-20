import React from "react";

import ReuseButton from "../common/ReuseBtn";

import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-gradient-to-br items-center rounded-[24px] flex sm:justify-between justify-start gap-6 sm:gap-0  flex-col md:flex-row from-purple-600 via-blue-500 to-indigo-400 sm:py-6 p-4 sm:px-10 md:py-12 md:px-20 ">
      <div className="flex flex-col gap-3">
        <h1 className="sm:text-xl text-base ">Any Queries?</h1>
        <h1 className="sm:text-3xl text-lg font-bold">
          We’re ready to collaborate with you!
        </h1>
        <div className="flex items-center gap-2">
          <div className="rounded-full border-2 md:p-5 sm:p-3 p-2">
            <FaPhoneAlt />
          </div>
          <div>
            <h1>HotLine</h1>
            <a href="callto:+1 303-800-6098">+1 303-800-6098</a>
          </div>
        </div>
      </div>
      <div className="">
        <ReuseButton
          link={"/contact"}
          mainClass=" text-center  flex gap-4 
              rounded-[50px] py-3  px-5 w-max 
              transition ease-linear delay-150  bg-primary"
          text={"Contact Us"}
          textClass="font-bold gradient-text text-sm "
          icon={<FaArrowRight />}
          iconClass="w-[10px] !text-black "
        />
      </div>
    </div>
  );
};

export default Banner;
