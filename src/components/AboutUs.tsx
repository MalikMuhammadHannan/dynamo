import React from "react";
import Image from "next/image";

import heroImage from "../../public/Images/home3.jpeg";

const AboutUs = () => {
  return (
    <div className="flex justify-between sm:flex-row flex-col sm:gap-0 gap-10 items-center md:mt-10 ">
      <div className="sm:w-[50%] flex flex-col sm:gap-5 gap-3">
        <h1 className="md:text-4xl text-3xl relative font-bold font-mont ">
          Digitizing Dreams, Stitching Success
        </h1>
        <p className="text-[1.2em] font-normal  break-words ">
          Welcome to Dynamo Stitches, where art meets innovation and creativity
          knows no bounds. For years, we've been weaving stories into stitches,
          turning dreams into digitized reality. Our unique blend of creativity,
          precision, and marketing savvy sets us apart, allowing us to deliver
          unparalleled digitizing and vector art services.
        </p>
      </div>
      <div className="sm:w-[40%]">
        <Image src={heroImage} alt="image" className="" />
      </div>
    </div>
  );
};

export default AboutUs;
