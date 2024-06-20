import React from "react";

import Banner from "@/components/Banner";
import AboutUs from "@/components/AboutUs";
import ClientsSay from "@/components/ClientsSay";
import TeamMembers from "@/components/TeamMembers";

const page = () => {
  return (
    <div className="flex py-10 flex-col gap-16">
      <AboutUs />
      <ClientsSay />
      <TeamMembers />
      <Banner />
    </div>
  );
};

export default page;
