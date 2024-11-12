import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-[100vh] flex justify-between flex-col lg:flex-row ">
      <div className="left hidden lg:inline-block  space-y-5 pl-5 py-20 flex-[0.7]">
        <h1 className="font-bold text-4xl">The Future is Renewable</h1>
        <div className=" flex-normal pt-40">
          {/* <img
            src="https://zerocarbon.com.pk/wp-content/themes/solatec/assets/images/achievement-map-widget/map-empty.webp"
            alt=""
            className="w-[70%]"
          /> */}
        </div>
      </div>
      <div className="right bg-slate-200 lg:py-20 py-10 flex-[0.35] lg:px-10 px-5 lg:pt-28 flex flex-col sm:flex-row gap-10 lg:flex-col">
        <div className="flex flex-col gap-10 flex-1">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            What we have Done
          </h1>
          <div className="flex flex-col gap-1  ">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">1890</h1>
            <p className="font-thin ">Projects Completed In Last 5 Years</p>
            <div className="h-1.5 bg-primary rounded-3xl w-20" />
          </div>
          <div className="flex flex-col gap-1  ">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
              3,200 kWh
            </h1>
            <p className="font-thin ">Total Capacity Installed</p>
            <div className="h-1.5 bg-primary rounded-3xl w-20" />
          </div>
          <div className="flex flex-col gap-1  ">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">9,800</h1>
            <p className="font-thin ">Co2 Reduction</p>
            <div className="h-1.5 bg-primary rounded-3xl w-20" />
          </div>
        </div>
        <div className="card max-lg:flex-1 h-full bg-black mx-auto overflow-hidden  rounded-lg text-white w-full">
          <h1 className="p-5 font-semibold w-full border-b-2 border-gray-800 text-center bg-gray-900 lg:text-xl px-3 ">
            OUR BIGGEST INSTALLATION YET
          </h1>
          <div className="logo-image bg-white ">
            <img
              decoding="async"
              src="https://zerocarbon.com.pk/wp-content/uploads/2023/10/header-logo.png"
              alt="Maple Leaf"
              className="mx-auto h-32 bg-white "
            />
          </div>
          <div className="lg:p-16 lg:py-8 p-5 space-y-10 mt-5 ">
            <div>
              <h1 className="text-primary font-semibold text-xl ">35 MW</h1>
              <p className="font-thin">Project Capacity</p>
            </div>
            <div>
              <h1 className="text-primary font-semibold text-xl ">
                19,600,000 kWh
              </h1>
              <p className="font-thin">Electricity Units Generated / Year</p>
            </div>
            <div>
              <h1 className="text-primary font-semibold text-xl ">
                11,090 tonnes
              </h1>
              <p className="font-thin">Co2 Reduction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
