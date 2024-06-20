import React from "react";

import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const GetInTouch = () => {
  const cards = [
    {
      title: "Mail",
      description: "support@example.com",
      icon: <IoMdMail />,
    },
    {
      title: "Location",
      description: "support@example.com",
      icon: <FaLocationDot />,
    },
    {
      title: "Phone / WhatsApp",
      description: "+1234567890",
      icon: <FaPhoneAlt />,
    },
  ];

  return (
    <div>
      <h1 className="text-4xl md:text-3xl tracking-tight font-bold text-center mb-5">
        GetInTouch
      </h1>
      <div className="flex md:gap-5 gap-3 flex-wrap justify-center">
        {cards.map((item, index) => {
          return (
            <div
              className="flex gap-3  items-center !break-words italic text-white w-full md:w-[30%] sm:w-[40%]  bg-transparent-white rounded-[24px] border-2 border-aqua border-opacity-10 px-5 h-28    shadow  "
              style={{ wordBreak: "break-word" }}
            >
              <div className=" bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-400 rounded-full p-3 ">
                {item.icon}
              </div>
              <div>
                <h1 className="text-lg font-normal ">{item.title}</h1>
                <h1 className="font-semibold !break-words">
                  {item.description}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetInTouch;
