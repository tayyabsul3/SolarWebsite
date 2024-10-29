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
            At Hyper Solar Solutions, we are committed to driving Pakistan's
            transition to renewable energy by delivering clean, reliable, and
            sustainable solutions to combat climate change. Our vision is to
            empower the nation towards energy independence and a low-carbon
            future, paving the way for a brighter, greener tomorrow. As an
            authorized distributor, we offer innovative and customizable energy
            products designed to meet the unique needs of residential,
            commercial, industrial, and agricultural sectors.
          </p>
          {/* <p>
            Hyper Solar Solutions holds the highest category license, ARE-VI,
            issued by the Alternative Energy Development Board (AEDB). We
            believe in a brighter and cleaner Pakistan.
          </p> */}
        </div>
      </div>
      <div className="staements font-thin">
        <div className="bg-gray-50">
          <div className="flex items-center  p-10 py-8 w-[75%] mx-auto gap-20  ">
            <PiCrosshairLight size={120} className="text-primary" />
            <div className="space-y-3">
              <h1 className="font-semibold text-2xl">Vision Statement</h1>
              <p className="text-sm">
                Hyper Solar Solutions envisions a Pakistan where every home,
                business and community is powered by affordable and sustainable
                solar energy. Our vision is to lead the nation towards energy
                independence, reducing reliance on imported fuels and
                alleviating the burden of energy costs on the people of
                Pakistan.
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
                Our mission at Hyper Solar Solutions is to make clean energy an
                everyday reality for communities, businesses, and industries. We
                are dedicated to improving quality of life by providing
                cost-effective, renewable energy solutions that reduce
                dependence on traditional energy sources. By promoting energy
                equity and sustainability, we are creating a healthier and more
                prosperous world for present and future generations.
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
