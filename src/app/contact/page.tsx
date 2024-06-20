import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import GetInTouch from "@/components/GetInTouch";
import Main from "@/components/Main";
import React from "react";
import heroImage from "../../../public/Images/1.jpg";

const page = () => {
  return (
    <div className="flex py-10 flex-col gap-16">
      <Main sectionTag="Contact Us" backgroundImage={heroImage} />
      <GetInTouch />
      <ContactForm />
      <Banner />
    </div>
  );
};

export default page;
