import React from "react";

import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Banner from "@/components/Banner";
import ImgGallery from "@/components/ImgGallery";

import HeroImage from "../../../../public/Images/Vector Art work Page/Front.jpg";
import heroImage from "../../../../public/Images/Vector Art work Page/Vector Art Hero.jpg";

const page = () => {
  const features = [
    "Budget-friendly prices",
    "Expert artists checkup",
    "Premium Support (24/7)",
  ];

  const preHeading = "Amazing Artworks";
  const heading = "We Offer Best Custom Patches";

  const paragraph =
    " Our accomplished artists harness the power of vector graphics to craft designs that are not only visually appealing but also infinitely scalable. Experience the finesse of vector art with our adept professionals.";

  const gallery = [
    { src: "/Images/Vector Art work Page/View Vector Art Gallery/1 (1).jpeg" },
    { src: "/Images/Vector Art work Page/View Vector Art Gallery/1 (11).jpeg" },
    { src: "/Images/Vector Art work Page/View Vector Art Gallery/1 (13).jpeg" },
    { src: "/Images/Vector Art work Page/View Vector Art Gallery/1 (14).jpeg" },
    { src: "/Images/Vector Art work Page/View Vector Art Gallery/1 (15).jpeg" },
    { src: "/Images/Vector Art work Page/View Vector Art Gallery/1 (16).jpeg" },
    { src: "/Images/Vector Art work Page/View Vector Art Gallery/1 (17).jpeg" },
    { src: "/Images/Vector Art work Page/View Vector Art Gallery/1 (18).jpeg" },
    { src: "/Images/Vector Art work Page/View Vector Art Gallery/1 (19).jpeg" },
    { src: "/Images/Vector Art work Page/View Vector Art Gallery/1 (21).jpeg" },
    {
      src: "/Images/Vector Art work Page/View Vector Art Gallery/Vector Art (1).jpeg",
    },
    {
      src: "/Images/Vector Art work Page/View Vector Art Gallery/Vector Art (2).jpeg",
    },
    {
      src: "/Images/Vector Art work Page/View Vector Art Gallery/Vector Art (3).jpeg",
    },
    {
      src: "/Images/Vector Art work Page/View Vector Art Gallery/Vector Art (4).jpeg",
    },
    {
      src: "/Images/Vector Art work Page/View Vector Art Gallery/Vector Art (5).jpeg",
    },
    {
      src: "/Images/Vector Art work Page/View Vector Art Gallery/Vector Art (6).jpeg",
    },
    {
      src: "/Images/Vector Art work Page/View Vector Art Gallery/Vector Art (7).jpeg",
    },
    {
      src: "/Images/Vector Art work Page/View Vector Art Gallery/Vector Art (8).jpeg",
    },
    {
      src: "/Images/Vector Art work Page/View Vector Art Gallery/Vector Art (9).jpeg",
    },
    {
      src: "/Images/Vector Art work Page/View Vector Art Gallery/Vector Art (10).jpeg",
    },
    {
      src: "/Images/Vector Art work Page/View Vector Art Gallery/Vector Art (11).jpeg",
    },
  ];
  const modalImages = [
    { src: "/Images/Vector Art work Page/Vector Art/CMYK.png" },
    {
      src: "/Images/Vector Art work Page/Vector Art/Colorseparation.png",
    },
    {
      src: "/Images/Vector Art work Page/Vector Art/Graphics.jpg",
    },
    {
      src: "/Images/Vector Art work Page/Vector Art/Halftones.jpg",
    },
    {
      src: "/Images/Vector Art work Page/Vector Art/Illustration.jpg",
    },
  ];
  const services = [
    {
      service: "Illustration",
      description:
        "Illustrations are more than just drawings; they're stories waiting to be told. Whether for advertising, editorial, or personal projects, our illustrations are crafted with precision and flair, adding a unique touch to your visuals. We make them detailed and dynamic, providing a clear blueprint for your project.",
    },
    {
      service: "Color-Separation",
      description:
        "Precision in every shade. Our color-separation techniques ensure your prints are vibrant and true to your brand's colors. We'll make your colors pop just right resulting in stunning and true-to-life prints.",
    },
    {
      service: "Half-Tones",
      description:
        "Create depth and texture with halftone effects. Our designs add visual interest, making your prints stand out from the crowd. Let us expertly incorporate them into your branding.",
    },
    {
      service: "Graphic Designing",
      description:
        "Transform ideas into visuals that speak louder than words, making your brand stand out in a sea of ordinary. Our graphic wizards will turn ideas into visual masterpieces. Let’s paint your brand's narrative across digital and print landscapes with creativity that captivates.",
    },
    {
      service: "CMYK Design",
      description:
        "Unlock the full spectrum of color for your print materials with our CMYK expertise. From subtle shades to bold hues, we'll make your designs pop off the page. Let's bring your designs to life with a splash of colors, ensuring your prints are not just seen but felt.",
    },
  ];

  return (
    <div className="flex py-10 flex-col gap-16 ">
      <Main sectionTag="Vector Artwork" backgroundImage={heroImage} />
      <Hero
        heading={heading}
        paragraph={paragraph}
        features={features}
        preHeading={preHeading}
        Img={HeroImage}
        imageClass="!rounded-none"
        modalImages={gallery}
      />
      <ImgGallery
        gallery={modalImages}
        heading="Vector Artwork Services"
        services={services}
      />
      <Banner />
    </div>
  );
};

export default page;
