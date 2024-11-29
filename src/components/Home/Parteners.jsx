import React from "react";
import Benefits from "../Resusables/Benefits";
import { GrFlag } from "react-icons/gr";

const Parteners = () => {
  return (
    <div>
      <div
        className="top h-[20vh] md:h-[40vh] transition-all relative"
        style={{
          backgroundImage: `url('https://zerocarbon.com.pk/wp-content/themes/solatec/assets/images/bg-image01.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <div
          className="overlay absolute top-0 w-full h-full flex justify-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          }}
        >
          <h1 className="text-2xl md:text-4xl font-bold md:pt-16 pt-10">
            Technology Partners
          </h1>
        </div>
      </div>
      <div className="main p-5 sm:py-20 sm:p-10 lg:pr-0  lg:common-padding  flex gap-10 lg:gap-10 xl:gap-20 flex-col justify-center lg:flex-row items-center">
        <div className=" flex flex-col justify-between flex-[0.4] space-y-3 lg:space-y-6 ">
          <p className="text-primary font-bold text-lg leading-tight  lg:text-2xl xl:text-3xl">
            Accelerating a shift towards a greener and cleaner Pakistan
          </p>
          <h1 className="text-3xl lg:text-5xl xl:text-[3.5rem] leading-none text-gray-800 font-bold lg:font-semibold">
            Fastest Solar Installation in Pakistan
          </h1>
          <p className="lg:text-lg tracking-tight font-thin leading-snug py-10">
            From free survey to installation, Hyper Solar Solutions offers the
            fastest solar installation in Pakistan. We provide a 2-year free
            service to industrial customers and a 1-year free service to
            residential customers.
          </p>
          <div className="video">
            <img
              src="https://zerocarbon.com.pk/wp-content/uploads/2023/01/sollar-installation-video-img.webp"
              alt=""
              className="rounded-lg"
            />
            <div className="icons"></div>
          </div>
        </div>
        <div className="benfits flex-[0.5] grid  sm:grid-cols-2 gap-5 lg:gap-10 px-5 ">
          <Benefits
            link={
              "https://zerocarbon.com.pk/wp-content/uploads/2023/02/icon-01-sollar-installation.webp"
            }
            heading={"Save Your Money"}
            para={
              "Solar pays back its own cost in 4 years by selling excess electricity to the national grid."
            }
          />
          <Benefits
            link={
              "https://zerocarbon.com.pk/wp-content/uploads/2023/02/icon-04-sollar-installation.webp"
            }
            heading={"5-star customer service"}
            para={
              "A combo of the fastest installation and no hidden charges ensures you get 5-Star customer service."
            }
          />
          <Benefits
            link={
              "https://zerocarbon.com.pk/wp-content/uploads/2023/02/icon-02-sollar-installation.webp"
            }
            heading={"Our App"}
            para={
              "Access, control, and monitor your smart solar energy system from anywhere."
            }
          />
          <Benefits
            link={
              "https://zerocarbon.com.pk/wp-content/uploads/2023/02/icon-05-sollar-installation.webp"
            }
            heading={"Book Your Free Survey"}
            para={
              "Become energy independent & save up to 100% on your electricity bills."
            }
          />
          <Benefits
            link={
              "https://zerocarbon.com.pk/wp-content/uploads/2023/02/icon-03-sollar-installation.webp"
            }
            heading={"Certified Engineers"}
            para={
              "With a team of certified and qualified engineers, Hyper Solar is your smartest solar partner in Pakistan."
            }
          />
          <div className="bg-primary w-full cursor-pointer h-full text-white p-10 md:px-8 xl:px-10 space-y-5 rounded-lg relative group">
            <h1 className="xl:text-3xl font-bold">Awards & Milestones</h1>
            <p>Benefiting from nearly 03 years of experience</p>
            <div className="absolute text-sm xl:text-base -bottom-5 right-1 opacity-50 group-hover:-bottom-2 transition-all duration-500">
              <GrFlag size={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parteners;
