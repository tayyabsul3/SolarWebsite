import React from "react";
import PageTop from "../Resusables/PageTop";
import { PiCrosshairLight, PiTargetThin } from "react-icons/pi";
import { RxTarget } from "react-icons/rx";

const About = () => {
  return (
    <div>
      <PageTop name={"About Us"} />
      <div className="">
        <div className="w-[70%] mx-auto space-y-5 text-sm pt-32 pb-10   font-thin ">
          <p>
            Hyper Solar Solutions is Pakistan’s first renewable energy solution
            dedicated to combat climate change through the provision of clean,
            reliable and resilient energy solutions. We aim to accelerate the
            transition of the country into a low carbon and energy independent
            state, with a much greener tomorrow for generations to come. Hyper
            Solar Solutions is a certified distributer of Canadian Solar with
            technologically advanced energy solutions. Our product range is
            customized for residential, industrial, commercial and agricultural
            use
          </p>
          <p>
            Hyper Solar Solutions holds the highest category license, ARE-VI,
            issued by the Alternative Energy Development Board (AEDB). We
            believe in a brighter and cleaner Pakistan.
          </p>
        </div>
      </div>
      <div className="staements font-thin">
        <div className="bg-gray-50">
          <div className="flex items-center  p-10 py-8 w-[75%] mx-auto gap-20  ">
            <PiCrosshairLight size={120} className="text-primary" />
            <div className="space-y-3">
              <h1 className="font-semibold text-2xl">Vision Statement</h1>
              <p className="text-sm">
                To lead Pakistan’s transition into a low carbon and energy
                independent state
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="flex items-center  p-10 py-8 w-[75%] mx-auto gap-20  ">
            <RxTarget size={120} className="text-primary" />
            <div className="space-y-3">
              <h1 className="font-semibold text-2xl">Mission Statement</h1>
              <p className="text-sm">
                Our mission is to make Pakistan a carbon free state by enabling
                people to produce their own electricity through the provision of
                sustainable solar solutions
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="messages flex justify-between  common-padding w-[80%] mx-auto mt-10">
        <div className="left text-sm flex basis-1/2 flex-col gap-10 font-thin">
          <h1 className="font-bold text-3xl">Chairman's Message</h1>
          <div className="p space-y-5 leading-tight">
            <p>
              “Pakistan is the fifth most vulnerable country to climate change.
              Our climate-related vulnerabilities are rising at an unprecedented
              rate, and the only solution to address this issue is to expedite a
              shift towards a carbon-neutral Pakistan by transitioning to
              renewable energy sources.
            </p>
            <p>
              Moreover, Pakistan has experienced a significant increase in
              electricity prices. Coupled with persistent power cuts, consumers,
              including residential, commercial, and agricultural sectors, are
              consistently impacted.
            </p>
            <p>
              Working in collaboration with our partners, affiliates, and
              esteemed customers, our goal is to reduce Pakistan’s carbon
              footprint and become a global leader in clean energy at an
              accelerated pace.”
            </p>
          </div>
          <div className="reargds space-y-5">
            <img
              src="https://zerocarbon.com.pk/wp-content/uploads/elementor/thumbs/main-amir-sign-q14gyko1eyelee6vthgcas6ldx0cqmkafmu1b9pqma.webp"
              alt=""
            />
            <div>
              <h1 className="text-primary font-bold text-lg">
                Mian Amer Mahmood{" "}
              </h1>
              <p className="text-primary font-normal text-[17px]">
                {" "}
                Chairman Hyper Solar Solutions
              </p>
            </div>
          </div>
        </div>
        <div className="right flex justify-center items-center">
          <img
            className="rounded-xl shadow-2xl w-[80%] h-fit"
            src="https://zerocarbon.com.pk/wp-content/uploads/elementor/thumbs/chairman-profile-about-baner-q14gscyjsvsgd1lh99qwwrxik639rbm8v4ovc5yqkg.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
