"use client";

import Image from "next/image";
import React, { useState } from "react";

import ReuseButton from "../common/ReuseBtn";
import { FaArrowRight } from "react-icons/fa";
import Modal from "@/common/Modal";
import ModalComponent from "@/common/Modal";

interface Props {
  buttonData?: any;
  features?: any;
  preHeading?: string;
  heading?: string;
  paragraph?: string;
  Img: any;
  imageClass?: string;
  modalImages?: any;
}

const Hero = ({
  buttonData,
  features,
  preHeading,
  heading,
  paragraph,
  Img,
  imageClass,
  modalImages,
}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);
  return (
    <div
      className={`flex justify-between relative   items-center gap-10 md:0 flex-col  md:flex-row ${
        !features ? "hero" : ""
      }`}
    >
      <div className="md:w-[45%] flex flex-col gap-3">
        {preHeading && (
          <p className="text-base text-start  gradient-text ">{preHeading}</p>
        )}
        <div className="flex gap-5 flex-col">
          {!features ? (
            <div className="flex gap-5 flex-col">
              <div className="home ">
                <h1 className="md:text-5xl text-4xl relative font-bold  ">
                  Welcome to
                  <span className="gradient-text"> Dynamo Stitches </span>
                </h1>
              </div>
              <p className="text-base font-normal  break-words ">
                This Designing Firm is your gateway to a world of digitizing and
                vectorizing.
              </p>
            </div>
          ) : (
            <div className="flex gap-5 flex-col">
              <h1 className="md:text-5xl text-4xl  font-bold  ">{heading}</h1>
              <p className="text-base font-normal  break-words ">{paragraph}</p>
            </div>
          )}
        </div>
        <div className="flex gap-5 flex-col"></div>
        {features && (
          <ul role="list" className=" space-y-4 text-left">
            {features.map((feature: any, idx: number) => (
              <li
                key={idx}
                className="flex items-center space-x-3 transform duration-500 hover:translate-x-2 transition-all navbarLi"
              >
                <div className="border-aqua p-1 rounded-full border">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-aqua"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {buttonData && (
          <div className="flex my-3 gap-5">
            {buttonData?.map((button: any, index: number) => (
              <ReuseButton
                key={index}
                mainClass={button.mainClass}
                text={button.text}
                textClass={button.textClass}
                icon={button.icon}
                iconClass={button.iconClass}
                link={button.Link}
                handleClick={button?.handleClick}
              />
            ))}
          </div>
        )}
        {modalImages && (
          <ReuseButton
            mainClass={
              " hover:scale-95 bg-gradient-to-br mt-4 from-purple-600 via-blue-500 to-indigo-400 text-center flex gap-4  py-3 rounded-2xl px-8 w-max transition ease-linear delay-150 hover:bg-gradient-to-tl from-purple-600 to-blue-500"
            }
            text={"View Gallery"}
            textClass={"font-bold text-sm"}
            icon={<FaArrowRight />}
            iconClass={"w-[10px]"}
            handleClick={() => setShowModal(!showModal)}
          />
        )}

        {!features && (
          <div className="flex gap-12">
            <div className="w-[20%]">
              <h2 className="gradient-text mb-4">32K+</h2>
              <h5>Project Completed</h5>
            </div>
            <div className="w-[20%]">
              <h2 className="gradient-text mb-4">32K+</h2>
              <h5>Happy Clients</h5>
            </div>
            <div className="w-[20%]">
              <h2 className="gradient-text mb-4">32K+</h2>
              <h5>Language supports</h5>
            </div>
          </div>
        )}
      </div>
      <div className="mx-auto md:w-[45%]">
        <Image
          src={Img}
          alt="image"
          className={`md:h-[70vh] md:w-full  clip-polygon  ${imageClass}`}
        />
      </div>
      <ModalComponent
        isOpen={showModal}
        handleToggleModal={handleModal}
        modalImages={modalImages}
      />
    </div>
  );
};

export default Hero;
