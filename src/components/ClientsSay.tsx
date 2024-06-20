import React from "react";
import Image from "next/image";

import member from "../../public/Images/members.webp";
const ClientsSay = () => {
  const TESTIMONIALS = [
    {
      id: 1,
      img: member,
      author: "Sarah Johnson",
      desc: "Client reviews provide invaluable insight into the quality of products or services. They offer authentic feedback from customers, helping others make informed decisions. Positive reviews build trust and credibility, while constructive criticism highlights areas for improvement.",
      position: "Marketing Director",
    },
    {
      id: 2,
      img: member,
      author: "Mark Smith",
      desc: "Client reviews provide invaluable insight into the quality of products or services. They offer authentic feedback from customers, helping others make informed decisions. Positive reviews build trust and credibility, while constructive criticism highlights areas for improvement.",
      position: "CEO",
    },
    {
      id: 3,
      img: member,
      author: "Emily White",
      desc: "Client reviews provide invaluable insight into the quality of products or services. They offer authentic feedback from customers, helping others make informed decisions. Positive reviews build trust and credibility, while constructive criticism highlights areas for improvement.",
      position: "Founder",
    },
    {
      id: 4,
      img: member,
      author: "Alex Lee",
      desc: "Client reviews provide invaluable insight into the quality of products or services. They offer authentic feedback from customers, helping others make informed decisions. Positive reviews build trust and credibility, while constructive criticism highlights areas for improvement.",
      position: "Product Manager",
    },
    {
      id: 5,
      img: member,
      author: "David Brown",
      desc: "Client reviews provide invaluable insight into the quality of products or services. They offer authentic feedback from customers, helping others make informed decisions. Positive reviews build trust and credibility, while constructive criticism highlights areas for improvement.",
      position: "Founder & CEO",
    },
  ];

  return (
    <section className="x-spacing bg-primary  text-center">
      <div className="text-center flex flex-col gap-5 mb-6">
        <p className="text-base text-center  gradient-text">Our Testimonials</p>
        <h1 className="font-bold text-center md:text-3xl text-2xl">
          What Our Clients Say About Our Work
        </h1>
      </div>
      <div className="space-y-8">
        {TESTIMONIALS.map(({ id, author, desc, position, img }, index) => (
          <div
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            key={id}
          >
            <div
              className={`flex w-full flex-col p-5 overflow-hidden rounded-lg bg-gradient-to-tl from-purple-600 to-blue-500 text-white shadow-lg md:w-3/5`}
            >
              <Image
                src={img}
                alt={author}
                className="!w-20 !h-20 mb-5 mx-auto rounded-full"
              />
              <div className="flex flex-1 flex-col justify-between px-6 py-2">
                <p className="text-sm text-white italic">"{desc}"</p>
                <div className="mt-4">
                  <p className="text-medium font-bold text-indigo-100">
                    {author}
                  </p>
                  <p className="text-xs text-indigo-200">{position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSay;
