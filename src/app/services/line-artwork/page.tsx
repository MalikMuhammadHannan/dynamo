import React from "react";

import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Banner from "@/components/Banner";
import ImgGallery from "@/components/ImgGallery";

import HeroImage from "../../../../public/Images/Line-Artwork Page/Front.jpg";
import heroImage from "../../../../public/Images/Line-Artwork Page/line artwork Hero.png";

const page = () => {
  const features = [
    "Budget-friendly prices",
    "Expert artists checkup",
    "Premium Support (24/7)",
  ];

  const preHeading = "Amazing Line Artwork";
  const heading = "We Offer Best Line Artwork";

  const paragraph =
    "Our expert design team specializes in creating custom line artwork that is tailored to your embroidery needs. You can trust us to deliver line artwork that captures the essence of your brand and quality outcomes for your customers.";

  const gallery = [
    {
      src: "/Images/Line-Artwork Page/View Line Artwork gallery/Line Artwork (1).jpeg",
    },
    {
      src: "/Images/Line-Artwork Page/View Line Artwork gallery/Line Artwork (2).jpeg",
    },
    {
      src: "/Images/Line-Artwork Page/View Line Artwork gallery/Line Artwork (3).jpeg",
    },
    {
      src: "/Images/Line-Artwork Page/View Line Artwork gallery/Line Artwork (4).jpeg",
    },
    {
      src: "/Images/Line-Artwork Page/View Line Artwork gallery/Line Artwork (5).jpeg",
    },
  ];
  const services = [
    {
      service: "Custom Line Artwork",
      description:
        "Our custom line artwork is a testament to your unique vision, meticulously crafted to reflect your individuality and style. Each line is infused with meaning and purpose, creating a piece of art that is truly one-of-a-kind.",
    },
    {
      service: "Digital Line Artwork",
      description:
        "Digital line artwork combines the precision of digital technology with the creativity of hand-drawn art. Our digital line artwork is clean and crisp, with each line carefully placed to create a stunning visual impact.",
    },
    {
      service: "Technical Illustration",
      description:
        "Technical illustration is more than just drawings; it's a form of visual communication that requires precision and clarity. Our technical illustrations are expertly crafted to convey complex concepts in a way that is easy to understand and visually appealing.",
    },
    {
      service: "Pen and Ink Drawing",
      description:
        "Pen and ink drawing is an art form that requires skill and patience, and our drawings are no exception. Each stroke is carefully placed to create intricate patterns and textures, resulting in drawings that are both captivating and timeless.",
    },
    {
      service: "Sketch Drawing",
      description:
        "Sketch drawing is where ideas are born, and our sketches capture the essence of creativity in its purest form. Each sketch is a glimpse into the artist's mind, capturing fleeting moments with spontaneity and emotion.",
    },
  ];
  const modalImages = [
    { src: "/Images/Line-Artwork Page/Line Artworks/Custom Line Artwork.jpg" },
    { src: "/Images/Line-Artwork Page/Line Artworks/Digital.jpg" },
    { src: "/Images/Line-Artwork Page/Line Artworks/Pen & Ink.jpg" },
    { src: "/Images/Line-Artwork Page/Line Artworks/Sketch.jpeg" },
    { src: "/Images/Line-Artwork Page/Line Artworks/Technical.jpg" },
  ];

  return (
    <div className="flex py-10 flex-col gap-16">
      <Main sectionTag="Line Artwork" backgroundImage={heroImage} />
      <Hero
        heading={heading}
        paragraph={paragraph}
        features={features}
        preHeading={preHeading}
        Img={HeroImage}
        imageClass="!rounded-none"
        modalImages={modalImages}
      />
      <ImgGallery
        gallery={gallery}
        heading="Line Artwork Services"
        services={services}
      />
      <Banner />
    </div>
  );
};

export default page;
