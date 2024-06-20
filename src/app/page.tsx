import React from "react";

import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Banner from "@/components/Banner";
import Roadmap from "@/components/Roadmap";
import PlanCards from "@/components/PlanCards";
import ClientsSay from "@/components/ClientsSay";
import TeamMembers from "@/components/TeamMembers";
import AboutCompany from "@/components/AboutCompany";
import DesignService from "@/components/DesignService";

import heroImage from "../../public/Images/Home2.jpg";

import { FaRocket, FaArrowRight } from "react-icons/fa";

const page = () => {
  const buttonData = [
    {
      text: "Get Started",
      mainClass:
        "hover:scale-90 bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-400 text-center flex gap-4 flex-row-reverse py-1 rounded-[50px] px-5 w-max transition ease-linear delay-150 hover:bg-gradient-to-tl from-purple-600 to-blue-500",
      textClass: "font-bold text-sm",
      icon: <FaRocket />,
      iconClass: "w-[10px]",
      link: "",
    },
    {
      text: "Learn More",
      mainClass:
        "hover:scale-90 text-center flex gap-2 py-2 rounded-[50px] px-5 w-max transition ease-linear delay-150",
      textClass: "font-bold text-sm",
      icon: <FaArrowRight />,
      iconClass: "w-[10px]",
      link: "",
    },
  ];

  const heading = "We Offer Best Vector Artworks";
  const paragraph =
    "It is an image-cleaning technique in which the artist demonstrates their abilities by transforming a low-resolution image into a high-resolution image or a live image into a cartoon character.";
  return (
    <div className="flex py-10 flex-col gap-16">
      <Hero
        heading={heading}
        paragraph={paragraph}
        buttonData={buttonData}
        Img={heroImage}
      />
      <WhyUs />
      <AboutCompany />
      <DesignService />
      <ClientsSay />
      <TeamMembers />
      <Roadmap />
      <PlanCards />
      <Banner />
    </div>
  );
};

export default page;
