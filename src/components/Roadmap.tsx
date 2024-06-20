import React from "react";
import Image from "next/image";

import heroImage from "../../public/Images/3.png";

const Roadmap = () => {
  return (
    <div className="">
      <h2 className="md:text-3xl text-2xl text-white font-bold mb-12 text-center">
        Our Working Process
      </h2>
      <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <div className="flex md:contents flex-row-reverse">
          <div className="relative p-4 my-6 flex text-white  rounded-[24px] gap-2 items-center bg-transparent-white border border-aqua col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <Image src={heroImage} alt="img" className=" leading-6 w-10" />

            <h3 className="text-lg font-semibold lg:text-xl gradient-text">
              Registration
            </h3>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-[2px] h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
            </div>
            <div className="absolute  top-1/2"></div>
          </div>
        </div>

        <div className="flex md:contents ">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-[2px] h-full bg-indigo-300"></div>
            </div>
            <div className="absolute top-1/2"></div>
          </div>
          <div className="relative p-4 my-6 text-white flex gap-2 items-center  rounded-[24px] bg-transparent-white border border-aqua col-start-6 col-end-10 mr-auto">
            <Image src={heroImage} alt="img" className=" leading-6 w-10" />
            <h3 className="text-lg font-semibold lg:text-xl gradient-text">
              Quote
            </h3>
          </div>
        </div>

        <div className="flex md:contents flex-row-reverse">
          <div className="relative p-4 my-6 text-white flex gap-2  items-center  rounded-[24px] bg-transparent-white border border-aqua col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <Image src={heroImage} alt="img" className=" leading-6 w-10" />

            <h3 className="text-lg font-semibold lg:text-xl gradient-text">
              Order Placement
            </h3>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-[2px] h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
            </div>
            <div className="absolute top-1/2"></div>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-[2px] h-full bg-indigo-300"></div>
            </div>
            <div className="absolute top-1/2"></div>
          </div>
          <div className="relative p-4 my-6 text-white flex gap-2 items-center rounded-[24px] bg-transparent-white border border-aqua col-start-6 col-end-10 mr-auto">
            <Image src={heroImage} alt="img" className=" leading-6 w-10" />

            <h3 className="text-lg font-semibold lg:text-xl gradient-text">
              Delivery
            </h3>
          </div>
        </div>

        <div className="flex md:contents flex-row-reverse">
          <div className="relative p-4 my-6 text-white flex items-center gap-2  rounded-[24px] bg-transparent-white border border-aqua col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <Image src={heroImage} alt="img" className=" leading-6 w-10" />
            <h3 className="text-lg font-semibold lg:text-xl gradient-text">
              Payment
            </h3>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-[2px] h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
            </div>
            <div className="absolute  top-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
