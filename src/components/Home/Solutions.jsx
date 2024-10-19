import React from "react";
import ActionButton from "../Resusables/ActionButton";
import SolutionCard from "../Resusables/SolutionCard";

const Solutions = () => {
  return (
    <div
      style={{
        backgroundImage: `url('./iot-based-bg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
      className="h-fit "
    >
      <div
        className="overlay p-5 lg:p-20 pb-10 lg:px-16  w-full h-full items-center  flex justify-center flex-col"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        }}
      >
        <div className="top space-y-10 mt-10">
          <p className="text-lg lg:text-2xl xl:text-3xl">
            One-Window Customer Solutions
          </p>
          <div className="flex justify-between flex-col  md:flex-row gap-5   ">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl tracking-tighter flex-[0.5] font-semibold text-primary leading-tight">
              IoT-based digital systems provide monitoring, control, and digital
              reports.
            </h1>
            <div
              className="
            space-y-10 flex-[0.4]"
            >
              <p className="text-lg font-thin lg:font-normal">
                From residential to agri-based, and from commercial to
                industrial, our energy-efficient turnkey solutions provide the
                best value to meet the growing needs of balancing electricity in
                Pakistan
              </p>
              <ActionButton action={"Book Your Free Survey"} />
            </div>
          </div>
        </div>
        <div className="cards grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-5 mt-20">
          <SolutionCard
            link={
              "https://zerocarbon.com.pk/wp-content/uploads/2023/01/iot-post-img-1.webp"
            }
            heading={"Insdustrial Solar Solutions"}
            para={
              "High-Efficiency Inverters, Solar Panels, Power Management Units, and an optional PV-Diesel Solution installation"
            }
          />
          <SolutionCard
            link={
              "https://zerocarbon.com.pk/wp-content/uploads/2023/01/iot-post-img-2.webp"
            }
            heading={"Commercial Solar Solutions"}
            para={
              "Comes with Net-Metered Systems. Sell excess units to national grid power"
            }
          />
          <SolutionCard
            link={
              "https://zerocarbon.com.pk/wp-content/uploads/2023/01/iot-post-img-3.webp"
            }
            heading={"Residential Solar Solutions"}
            para={
              "Customized range of off-grid, on-grid, and hybrid net-metered solar solutions"
            }
          />
          <SolutionCard
            link={
              "https://zerocarbon.com.pk/wp-content/uploads/2023/01/iot-post-img-4.webp"
            }
            heading={"Agri-Based Solar Solutions"}
            para={
              "Custom-designed & impact-resistant water pumping systems designed to stand extreme weather conditions"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
