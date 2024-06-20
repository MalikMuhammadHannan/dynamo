import React from "react";
import Image, { StaticImageData } from "next/image";

interface MainProps {
  sectionTag: string;
  backgroundImage: StaticImageData;
}

const Main: React.FC<MainProps> = ({ sectionTag, backgroundImage }) => {
  return (
    <section className="relative bg-center w-full lg:w-[75vw] h-full lg:h-[64vh] bg-gray-700 bg-blend-multiply">
      <Image
        src={backgroundImage}
        alt={sectionTag}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 px-4 mx-auto max-w-screen-xl text-center py-16  lg:py-36">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {sectionTag}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Home &gt;{" "}
          <span className="border-b border-aqua pb-1 gradient-text">
            {sectionTag}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Main;
