import React from "react";

import Main from "@/components/Main";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import ImgGallery from "@/components/ImgGallery";

import heroImage from "../../../../public/Images/CustomPatches/Front.jpg";
import HeroImage from "../../../../public/Images/CustomPatches/Custom Patches Hero.webp";

const page = () => {
  const features = [
    "Budget-friendly prices",
    "Expert artists checkup",
    "Premium Support (24/7)",
  ];

  const gallery = [
    { src: "/Images/CustomPatches/View Patches Gallery/Patches (1).jpeg" },
    { src: "/Images/CustomPatches/View Patches Gallery/Patches (1).jpg" },
    { src: "/Images/CustomPatches/View Patches Gallery/Patches (1).webp" },
    { src: "/Images/CustomPatches/View Patches Gallery/Patches (2).jpg" },
    { src: "/Images/CustomPatches/View Patches Gallery/Patches (2).webp" },
    { src: "/Images/CustomPatches/View Patches Gallery/Patches (3).jpg" },
    { src: "/Images/CustomPatches/View Patches Gallery/Patches (4).jpg" },
    { src: "/Images/CustomPatches/View Patches Gallery/Patches (5).jpg" },
    { src: "/Images/CustomPatches/View Patches Gallery/Patches (6).jpg" },
    { src: "/Images/CustomPatches/View Patches Gallery/Patches (7).jpg" },
  ];
  const modalImages = [
    { src: "/Images/CustomPatches/Patches/Embroidery Patches.jpg" },
    { src: "/Images/CustomPatches/Patches/Leather Patches.jpg" },
    { src: "/Images/CustomPatches/Patches/Woven Patches.jpg" },
  ];

  const services = [
    {
      service: "Embroidery Patches",
      description:
        "Wear your brand with pride. Our embroidered patches are crafted with care, adding a touch of professionalism to your apparel. Add a tactile element to your brand that leaves an unforgettable impression.",
    },
    {
      service: "Woven Patches",
      description:
        "Quality that's woven into every thread. For a tactile branding experience, choose our woven patches. These durable patches offer a high-quality, textured look that adds a unique touch to your products.",
    },
    {
      service: "Leather Patches",
      description:
        "Add a touch of sophistication and durability to your branding with custom leather patches. Our leather patches are stylish and sophisticated, making a lasting impression on your audience.",
    },
  ];

  const preHeading = "Amazing Custom Patches  ";
  const heading = "We Offer Best Custom Patches  ";

  const paragraph =
    "Elevate your brand or style with our custom patches that bear the mark of craftsmanship. From intricate designs to flawless execution, our team ensures your patches are a testament to our dedication.";
  return (
    <div className="flex py-10 flex-col gap-16">
      <Main sectionTag="Custom Patches" backgroundImage={HeroImage} />
      <Hero
        heading={heading}
        paragraph={paragraph}
        features={features}
        preHeading={preHeading}
        Img={heroImage}
        imageClass="!rounded-none"
        modalImages={gallery}
      />
      <ImgGallery
        gallery={modalImages}
        heading="Custom Patches Services"
        services={services}
      />
      <Banner />
    </div>
  );
};

export default page;
