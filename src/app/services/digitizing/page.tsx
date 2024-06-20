import React from "react";

import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Banner from "@/components/Banner";
import Roadmap from "@/components/Roadmap";
import ImgGallery from "@/components/ImgGallery";
import DesignService from "@/components/DesignService";

import heroImage from "../../../../public/Images/Digitizing Page/Digitizing Hero.jpg";
import HeroImage from "../../../../public/Images/Digitizing Page/Front.jpg";

const page = () => {
  const gallery = [
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (1).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (2).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (3).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (4).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (5).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (6).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (7).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (8).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (9).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (10).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (11).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (12).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (13).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (14).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (15).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (16).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (17).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (18).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (19).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (20).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (21).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (22).JPG" },
    { src: "/Images/Digitizing Page/Digitizing Gallery/Digitizing (23).JPG" },
  ];

  const preHeading = "Amazing Embroidery Digitizing  ";
  const heading = "We Offer Best Embroidery Digitizing  ";

  const paragraph =
    "With over 20 years of experience and 850+ employees board, Our focus is on delivering exceptional designs that not only look great but also resonate with your target clients. Partner with us today for a design experience that's sure to exceed your expectations.";

  const features = [
    "Budget-friendly prices",
    "Expert artists checkup",
    "Premium Support (24/7)",
  ];

  return (
    <div className="flex py-10 flex-col gap-16">
      <Main sectionTag="Embroidery Digitizing" backgroundImage={heroImage} />
      <Hero
        heading={heading}
        paragraph={paragraph}
        features={features}
        preHeading={preHeading}
        Img={HeroImage}
        imageClass="!rounded-none"
        modalImages={gallery}
      />
      <Roadmap />
      <DesignService />
      <ImgGallery gallery={gallery} heading="Embroidery Digitizing Services" />
      <Banner />
    </div>
  );
};

export default page;
