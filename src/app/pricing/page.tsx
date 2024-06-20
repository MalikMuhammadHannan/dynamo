import React from "react";

import Main from "@/components/Main";
import Banner from "@/components/Banner";
import PlanCards from "@/components/PlanCards";
import heroImage from "../../../public/Images/3.png";

const page = () => {
  return (
    <div className="flex py-10 flex-col gap-16">
      <Main sectionTag="Price Package" backgroundImage={heroImage} />
      <PlanCards />
      <Banner />
    </div>
  );
};

export default page;
