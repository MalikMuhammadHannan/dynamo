import React from "react";
import Image from "next/image";

import heroImage from "../../public/Images/3.png";

const DesignService = () => {
  const projectStages = [
    {
      type: "Left Chest / Hat Digitizing",
      description:
        "Immerse yourself in the world of finely crafted digitized designs, meticulously tailored for the left chest and hats. With a quick turnaround, our professional designers bestow elegance, forging connections between style and substance.",
    },
    {
      type: "Puff Digitizing",
      description:
        "Elevate your designs with a 3D effect that pops. Creating dimensionality is an art, and our designers are masters of it. They expertly enhance designs with puff digitizing, adding depth and allure to your embroidered creations.",
    },
    {
      type: "Appliqué Digitizing",
      description:
        "The art of appliqué is taken to new heights by our designers who seamlessly merge fabrics and thread, resulting in designs that are a fusion of elegance and innovation. With a deep understanding of fabric interaction, they create applique effects that catch the eye.",
    },
    {
      type: "Patch Digitizing",
      description:
        "Patches carry stories, and our designers ensure those stories are told flawlessly through their digitization skills. From intricate logos to meaningful symbols, our designers excel in translating every detail into dynamic patches.",
    },
    {
      type: "Vector Artwork",
      description:
        "Breathe life into your visions through vector artwork, producing scalable designs that retain their beauty and clarity across all platforms. Transform your concepts into crisp, versatile vector designs, amplifying your artistic visions with our designers' mastery over lines and curves.",
    },
    {
      type: "Towel Digitizing",
      description:
        "Towels transform into canvases of luxury under the skilled hands of our designers. With a deep understanding of textures and materials, we turn your visions into towel masterpieces that are not only visually stunning but also tactilely engaging.",
    },
    {
      type: "Sleeves Digitizing",
      description:
        "The curve of a sleeve presents a unique canvas. Our designers skillfully adapt your designs to the constraints of sleeve contours, resulting in a harmonious blend of aesthetics and functionality.",
    },
    {
      type: "Bag Digitizing",
      description:
        "Our designers' expertise shines through in every bag digitization, as they masterfully adapt designs to suit the unique shape and characteristics of each bag, leaving no detail overlooked.",
    },
  ];

  return (
    <div className=" flex w-full flex-col items-start justify-between gap-5 break-words md:flex-row md:gap-24">
      <div className="md:sticky md:top-24 md:w-[40%] ">
        <h2 className="mb-4 md:text-4xl text-3xl font-bold text-white">
          Feeling Invisible in a Crowded Market and Need a Design Savior?
        </h2>
        <p className="mb-6 text-base font-normal italic text-white">
          "With a years of expertise and a powerhouse team of creative minds,
          we're geared up to elevate your brand like never before. Our passion?
          Crafting designs that not only catch eyes but also speak directly to
          your ideal customers. Let's team up today for a design journey that
          promises to go above and beyond your expectations."
        </p>
      </div>
      <div className="flex  flex-col gap-5 w-full md:w-[40%]">
        {projectStages?.map((data, index) => {
          return (
            <div
              key={index}
              className="  bg-primary p-4 shadow-xl 
              rounded-[24px]  border-2  border-opacity-10 
              transform duration-500  transition-all
              sticky top-0 border-aqua"
              style={{ zIndex: index + 1, top: (index + 1) * 20 }}
            >
              <Image src={heroImage} alt="img" className="w-12 mb-5" />
              <a href="#">
                <h5 className="mb-2 text-lg font-semibold tracking-tight text-white">
                  {data.type}
                </h5>
              </a>
              <p className="mb-3 font-light text-sm text-[#d1cccc]">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesignService;
