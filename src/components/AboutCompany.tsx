import React from "react";
import Image from "next/image";

import ReuseButton from "../common/ReuseBtn";

import heroImage from "../../public/Images/Home1.webp";

import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

const AboutCompany = () => {
  return (
    <div className="flex justify-between sm:flex-row-reverse flex-col sm:gap-0 gap-10 items-center md:mt-10 ">
      <div className="sm:w-[50%] flex flex-col sm:gap-5 gap-3">
        <h2 className="gradient-text">About Company</h2>
        <h1 className="md:text-4xl text-3xl relative font-bold font-mont">
          Your Ultimate Destination for All{" "}
          <span className="gradient-text">Designing</span> Needs and Custom
          Workwear
        </h1>

        <p className="text-[1.2em] font-normal  break-words ">
          At Dynamo Stitches, Welcome to the ultimate destination for unmatched
          creativity and precision! Our team of expert designers and artists is
          poised to transform your ideas into stunning realities across a
          spectrum of services. With our team of seasoned designers, your
          designs are in the hands of experts who breathe life into every
          stitch. Impeccable detailing, quick turnaround, and budget-friendly
          rates define our commitment to excellence.
        </p>
        <div className="flex sm:my-3 flex-wrap  gap-5">
          <ReuseButton
            mainClass="
            hover:scale-90
            bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-400
            text-center flex gap-4 
            py-3 rounded-[50px]   px-5 w-max
            transition ease-linear delay-150  hover:bg-gradient-to-tl from-purple-600 to-blue-500"
            text={"Learn More"}
            textClass="font-bold text-sm "
            icon={<FaArrowRight />}
            iconClass="w-[10px]"
          />
          <a href="callto:+1 303-800-6098">
            <ReuseButton
              mainClass="
            hover:scale-90
            bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-400
            flex-row-reverse
              text-center flex gap-4 
              py-3 rounded-[50px]   px-5 w-max
              transition ease-linear delay-150  hover:bg-gradient-to-tl from-purple-600 to-blue-500"
              text={"+1 303-800-6098"}
              textClass="font-bold text-sm "
              iconClass="w-[10px]"
              icon={<FaPhoneAlt />}
            />
          </a>
        </div>
      </div>
      <div className="sm:w-[40%] ">
        <Image
          src={heroImage}
          alt="image"
          className="h-full md:h-[70vh] object-cover clip-polygon"
        />
      </div>
    </div>
  );
};

export default AboutCompany;
