import React from "react";
import SolutionPage from "../Resusables/SolutionPage";

const Industrail = () => {
  const content = {
    p1: "Smart Industrial Solar Solutions for Sustainable & Reliable Electrification of Your Asset-Intensive Industrial Units.",
    p2: "With electricity tariffs on the rise, medium and large-scale businesses in Pakistan face increasing challenges in competing on the global stage. For asset-intensive sectors such as petrochemicals, mining, cement & glass, and oil & gas, the need to reduce operational costs while maintaining competitiveness and minimizing environmental impact has never been greater. These challenges are further compounded by the complexities of managing a demanding asset infrastructure alongside high energy requirements",
    p3: "Hyper Solar Solution addresses these issues with cutting-edge industrial solar solutions designed for the modern energy demands of the industrial sector. Our solutions ensure sustainable, reliable, and cost-efficient power for asset-heavy businesses, backed by advanced digital technologies that enhance agility, data insights, and overall efficiency.",
  };
  return (
    <div>
      <SolutionPage name={"Industrial"} content={content} />
    </div>
  );
};

export default Industrail;
