import React from "react";
import SolutionPage from "../Resusables/SolutionPage";

const AgriBased = () => {
  const content = {
    p1: "Cost-Effective and Energy-Efficient Solar Solutions for Agriculture with Payback Periods as Short as 2 Years.",
    p2: "Our solar water pumping systems are meticulously designed based on key factors such as water levels, delivery requirements, and utility conditions. Built to endure Pakistan’s harsh weather, our impact-resistant systems ensure reliability and efficiency. With payback periods as low as 2 years, our agricultural solar solutions provide both cost savings and energy efficiency.",
    p3: "By installing solar water pumping systems, farmers gain energy independence and significantly reduce their operating costs. Our net-metered systems allow for excess energy to be sold back to the national grid or credited against future energy bills. Embrace solar energy to achieve up to 100% savings on your water pumping expenses while contributing to climate change mitigation through renewable energy adoption.",
  };
  return (
    <div>
      <SolutionPage name={"Agri-Based "} content={content} />
    </div>
  );
};

export default AgriBased;
