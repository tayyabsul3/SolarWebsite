import React from "react";
import ActionButton from "../Resusables/ActionButton";

const Hero = () => {
  return (
    <div className="relative min-h-screen ">
      <video
        muted
        autoPlay
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
      >
        <source src="./video2.mp4" type="video/mp4" />
        <source src="./video2.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <div
        className="overlay w-full h-full absolute top-0 text-white flex-between"
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <div className="content w-[90%] transition-all md:w-[80%]  flex flex-col gap-5 pl-5 sm:pl-10  ">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Sustainable. Reliable. Cost-Effective Solar Solutions
          </h1>
          <p className="md:font-bold sm:text-lg md:text-xl  xl:text-2xl mb-5">
            Expediting Shift towards Carbon-Neutral Pakistan through
            sustainability.
          </p>
          <ActionButton action={"Book Your Free Survey"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
