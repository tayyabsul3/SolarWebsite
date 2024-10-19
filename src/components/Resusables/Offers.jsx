import React from "react";
import { TbHeartBolt, TbSettingsUp } from "react-icons/tb";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";

const Offers = () => {
  return (
    <div className="bg-gray-100 flex-col gap-14 md:gap-28 pt-20 px-5 lg:px-20 py-28 lg:py-40 flex justify-center items-center">
      <h1 className="font-bold text-2xl lg:text-4xl  ">
        Hyper Solar Solution Offers
      </h1>
      <div className="flex gap-10  items-center flex-col md:flex-row text-center">
        <div className="font-thin flex flex-col justify-center items-center gap-5">
          <TbSettingsUp size={100} className="text-primary" />
          <h1 className="font-bold text-lg lg:text-2xl ">
            Fastest Installation ​
          </h1>
          <p className="w-[80%] text-xs">Fastest & Hassle-free installation</p>
        </div>
        <div className="font-thin  flex flex-col justify-center items-center gap-5">
          <TbHeartBolt size={100} className="text-primary" />
          <h1 className="font-bold text-lg lg:text-2xl ">
            Energy Independence​ ​
          </h1>
          <p className="w-[80%] text-xs">
            Save Up to 100% on Your Electricity Bills through Net-metering
          </p>
        </div>
        <div className="font-thin  flex flex-col justify-center items-center gap-5">
          <LiaHandHoldingUsdSolid size={100} className="text-primary" />
          <h1 className="font-bold text-lg lg:text-2xl ">
            Fastest Payback Period ​
          </h1>
          <p className="w-[80%] text-xs">Less than 4 years payback period.</p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
