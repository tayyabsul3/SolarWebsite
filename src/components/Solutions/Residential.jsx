import React from "react";
import SolutionPage from "../Resusables/SolutionPage";

const Residential = () => {
  const content = {
    p1: "Pakistan’s Premier Residential Solar Solutions Achieve Up to 100% Savings on Your Electricity Bills with Our Customized Residential Offerings",
    p2: "HYPER SOLAR SOLUTIONS collaborates with top international technology providers to deliver cutting-edge On-grid and Hybrid solar solutions. Our advanced residential solar systems include high-efficiency solar panels, inverters, and 24/7 customer support. Thanks to our partnerships with industry leaders, our systems guarantee optimal electricity production throughout their lifespan, outperforming equivalent systems. Additionally, our net-metered residential solutions allow you to sell excess energy back to the national grid, further lowering your electricity costs.",
    p3: "With our straightforward and hassle-free process, along with comprehensive post-sales maintenance services, we ensure you receive reliable, cost-effective, and sustainable solar solutions tailored to your unique residential requirements.",
  };
  return (
    <div>
      <SolutionPage name={"Residential "} content={content} />
    </div>
  );
};

export default Residential;
