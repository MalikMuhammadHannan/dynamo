import React from "react";

import Main from "@/components/Main";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import ImgGallery from "@/components/ImgGallery";

import HeroImage from "../../../../public/Images/Logo Designing Page/Front.jpg";
import heroImage from "../../../../public/Images/Logo Designing Page/Logo Desiogning Hero.jpeg";

const page = () => {
  const features = [
    "Budget-friendly prices",
    "Expert artists checkup",
    "Premium Support (24/7)",
  ];

  const preHeading = "Amazing Logo Designing";
  const heading = "We Offer Best Logo Designing";

  const paragraph =
    "A logo is the face of your identity, and our designers understand its significance. With an arsenal of innovative ideas, they craft logos that encapsulate your essence, leaving a lasting impact.";

  const gallery = [
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/2 (2).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/2 (3).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/2 (4).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/2 (5).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/2 (6).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/2 (7).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/2 (8).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/Dik-Diks.jpg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/Logo Designing (1).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/Logo Designing (2).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/Logo Designing (3).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/Logo Designing (4).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/Logo Designing (5).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/Logo Designing (6).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/Logo Designing (7).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/Logo Designing (8).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/Logo Designing (9).jpeg",
    },
    {
      src: "/Images/Logo Designing Page/View Logo Designing Gallery/2 (1).jpeg",
    },
  ];

  const services = [
    {
      service: "Brand Identity Design",
      description:
        "Crafting a brand identity is like composing a symphony—each element harmonizing to create a unique and memorable melody. We blend design and strategy to craft an identity that resonates with your audience, ensuring your brand sings its story loud and clear.",
    },
    {
      service: "Corporate Design",
      description:
        "Your logo is the face of your business, the visual cue that sparks recognition and connection. Let's create your ambassador—your logo that conveys your brand's essence with elegance and impact, making a lasting impression.",
    },
    {
      service: "Illustrated Design",
      description:
        "Illustrations breathe life into your brand, transforming concepts into captivating visual stories. We craft illustrated logos that are not only visually striking but also deeply meaningful, telling your brand's story in a way that resonates with your audience.",
    },
    {
      service: "Typography Design",
      description:
        "Typography is the voice of your brand, speaking volumes about its personality and values. Our custom typography designs are crafted with care and creativity, ensuring they not only look great but also convey your brand's message with clarity and style.",
    },
    {
      service: "Iconography Design",
      description:
        "Icons are the visual shorthand of modern communication, distilling complex ideas into simple, memorable images. Our icons are crafted with precision and creativity, ensuring they convey your brand's message with clarity and charm, leaving a lasting impression on your audience.",
    },
    {
      service: "Calligraphy Design",
      description:
        "Turn words into art with our calligraphy designs, where every stroke tells a story. Let us create stunning visuals that capture the essence of your message, adding a touch of elegance to your brand.",
    },
    {
      service: "Symbolic Design",
      description:
        "Symbols have the power to transcend language, conveying universal truths and emotions. Our symbolic logos are crafted with care and creativity, ensuring they represent your brand's values and vision with clarity and impact.",
    },
    {
      service: "Monogram Design",
      description:
        "A monogram is the ultimate personalization of your brand, a symbol of its unique identity. We create monograms that are elegant and timeless, reflecting the essence of your brand in a single, memorable mark.",
    },
    {
      service: "Fashion Design",
      description:
        "Express your brand through fashion. Our designs are trendy and on-brand, ensuring you stand out in the world of fashion. Through innovative and stylish apparel designs, you will leave a lasting impression.",
    },
    {
      service: "Trademark Design",
      description:
        "Crafting trademarks that are not just symbols but stories, ensuring your brand is not just noticed but remembered. We craft distinctive marks that not only secure your brand but also tell its unique story.",
    },
    {
      service: "Minimalist Design",
      description:
        "Sometimes less is more. Our minimalist logos are simple yet striking, making a bold statement with their clean design and showcasing your brand's essence with simplicity and elegance.",
    },
    {
      service: "3D Design",
      description:
        "Add depth and dimension to your brand with a 3D logo. Our designs pop off the page, creating a visual experience that's hard to forget. Let’s create a 3D logo that grabs attention and leaves a lasting impression.",
    },
    {
      service: "Mascot Design",
      description:
        "Give your brand a face. Our mascot designs are fun, friendly, and full of character, creating a memorable brand personality. Let us create one that embodies your brand's character.",
    },
    {
      service: "Animated Design",
      description:
        "Bring your brand to life with animation. Our designs are captivating and engaging, helping you connect with your audience on a deeper level. We help you map out your ideas, ensuring a smooth and efficient production process.",
    },
    {
      service: "Comic Art Design",
      description:
        "Bring your narratives to life with our dynamic comic art designs, where every panel is a masterpiece. Our artwork will not only captivate your audience but also leave a lasting impression, making your stories unforgettable.",
    },
    {
      service: "Tattoo Artwork Design",
      description:
        "Express your individuality with our custom tattoo artwork designs, crafted to reflect your unique style and personality. Let our artists create a design that is as meaningful as it is visually stunning, ensuring your tattoo is a work of art that resonates with you.",
    },
  ];
  const modalImages = [
    { src: "/Images/Logo Designing Page/Logo Design/3d.jpg" },
    { src: "/Images/Logo Designing Page/Logo Design/Animated.jpeg" },
    { src: "/Images/Logo Designing Page/Logo Design/Brand identity.jpg" },
    { src: "/Images/Logo Designing Page/Logo Design/Calligrappy.jpg" },
    { src: "/Images/Logo Designing Page/Logo Design/Comic Art.png" },
    { src: "/Images/Logo Designing Page/Logo Design/Corporate.jpg" },
    { src: "/Images/Logo Designing Page/Logo Design/Fashion.jpg" },
    { src: "/Images/Logo Designing Page/Logo Design/Iconograpgy.jpg" },
    { src: "/Images/Logo Designing Page/Logo Design/illustrated.jpeg" },
    { src: "/Images/Logo Designing Page/Logo Design/Mascot.jpeg" },
    { src: "/Images/Logo Designing Page/Logo Design/MNinimalist.jpg" },
    { src: "/Images/Logo Designing Page/Logo Design/Monogram.jpg" },
    { src: "/Images/Logo Designing Page/Logo Design/Symbolic.jpg" },
    { src: "/Images/Logo Designing Page/Logo Design/Tattoo.jpg" },
    { src: "/Images/Logo Designing Page/Logo Design/TradeMark.jpg" },
    { src: "/Images/Logo Designing Page/Logo Design/Typography.jpg" },
  ];

  return (
    <div className="flex py-10 flex-col gap-16">
      <Main sectionTag="LOGO Designing" backgroundImage={heroImage} />
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
        heading="Logo Designing Services"
        services={services}
      />
      <Banner />
    </div>
  );
};

export default page;
