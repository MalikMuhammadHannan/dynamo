import React from "react";

import Card from "@/common/Card";

const WhyUs = () => {
  const services = [
    {
      attribute: "Creative Excellence",
      description: "Every design is meticulously crafted to perfection.",
    },
    {
      attribute: "Timely Delivery",
      description:
        "We understand deadlines and strive to deliver on time, every time.",
    },
    {
      attribute: "Client-Centric Approach",
      description:
        "Your vision is our priority, and we work closely with you to ensure your satisfaction.",
    },
    {
      attribute: "Industry Expertise",
      description:
        "With decades of experience, we bring a wealth of knowledge to every project.",
    },
    {
      attribute: "Innovative Solutions",
      description:
        "We're constantly pushing boundaries to bring you the latest in digitizing and vectoring technology.",
    },
  ];

  return (
    <div className="">
      <h1 className="md:text-3xl text-2xl text-center font-bold my-8">
        Why Choose Dynamo Stitches?
      </h1>
      <div className="flex lg:gap-4 md:gap-8 gap-4 justify-center flex-wrap">
        {services.map((item, index) => (
          <div key={index} className="sm:w-[30%] w-full ">
            <Card item={item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
