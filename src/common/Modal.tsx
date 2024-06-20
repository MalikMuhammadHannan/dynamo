"use client";

import Image from "next/image";
import { useEffect } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCards,
  EffectCoverflow,
} from "swiper/modules";

interface Props {
  isOpen: boolean;
  handleToggleModal: () => void;
  // modalImages: { img: string; name: string }[];
  modalImages: any;
}

const ModalComponent = ({ isOpen, handleToggleModal, modalImages }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleToggleModal}>
          <div className="flex items-center justify-center !rounded-lg overflow-hidden bg-aqua  w-full h-full ">
            <div className="  bg-aqua md:p-4 p-3 !rounded-lg overflow-hidden">
              <Swiper
                navigation={true}
                loop={true}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[
                  Pagination,
                  Navigation,
                  Autoplay,
                  EffectCards,
                  EffectCoverflow,
                ]}
                style={{ width: window.innerWidth < 500 ? "300px" : "100%" }}
                className="mySwiper "
              >
                {modalImages.map((option: any, index: number) => (
                  <SwiperSlide key={index}>
                    <Image
                      className=" !h-[380px] !object-fill rounded-xl  "
                      src={option?.src}
                      alt="Gallery Image"
                      width={10}
                      height={100}
                      layout="responsive"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ModalComponent;
{
}
