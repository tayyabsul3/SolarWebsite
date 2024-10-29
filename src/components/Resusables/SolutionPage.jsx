import React, { useState } from "react";
import PageTop from "./PageTop";
import ContactSection from "../Home/ContactSection";
import Content from "./Content";
import Offers from "./Offers";
import ContentReq from "./ContentReq";

const SolutionPage = ({ name, content }) => {
  const [residentialOption, setresidentialOption] = useState([
    {
      value: "6.5kW",
      checked: true,
      line1: "26 kWh energy generated per day",
      line2: "Ideal for up to 7 marla house",
    },

    {
      value: "11.5kW",
      checked: false,
      line1: "45 kWh energy generated per day",
      line2: "Ideal for up to 1 kanal house",
    },

    {
      value: "18kW",
      checked: false,
      line1: "72 kWh energy generated per day",
      line2: "Ideal for up to 2 kanal house",
    },
  ]);

  return (
    <div className="bg-gray-50 ">
      <PageTop name={name + " Solutions"} />
      <Content content={content} name={name} />
      {name.includes("Residential") && (
        <div className="bg-gray-100 flex-col gap-14 font-thin pt-20 p-5 lg:px-20 py-20 lg:py-40 flex justify-center max-md:text-sm items-center text-center">
          <div className="flex flex-col gap-10 lg:px-20">
            <h1 className="font-semibold text-2xl lg:text-4xl">
              Net Meetering
            </h1>
            <p>
              Net metering is a policy that enables you to generate electricity
              through solar energy for your own use, while exporting any surplus
              power back to the national grid. This allows you to offset the
              units consumed during off-peak hours, resulting in lower utility
              bills or even earning credit for the excess energy supplied. In
              2015, NEPRA introduced net metering regulations, allowing DISCOs
              across Pakistan to purchase surplus electricity produced by
              consumers and offset it against their grid consumption. Under
              these regulations, any national grid customer with a three-phase
              connection can utilize net metering, with systems ranging from 3kW
              to 1MW. Net metering offers significant benefits, including
              enhanced power generation, cost savings, and a solid return on
              investment in solar energy.
            </p>
          </div>
          {/* <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl  lg:text-3xl">
              Residential Packages
            </h1>
            <div className="flex flex-col  items-center text-center">
              <p>Independent of load.</p>
              <p>
                Ideal for residences with no/low power outages and higher unit
                cost.
              </p>
              <p>
                Online monitoring, control & data-logging using the Zero App.
              </p>
            </div>
          </div> */}
          <div className="flex flex-col gap-10">
            <h1 className="font-semibold text-2xl lg:text-4xl">
              How Do We Do Net Meetering at Hyper Solar Solutions:
            </h1>
            <div className="flex flex-col  items-center text-center">
              <p>
                {" "}
                We are dedicated to guiding you through every step of the
                net-metered installation process. It begins with the setup of a
                compliant solar power system, followed by submitting an
                application to the relevant electricity provider. After a
                thorough inspection, the electricity company issues an NOC (No
                Objection Certificate). Once approved, a formal agreement is
                signed, and a license is issued, enabling the activation of your
                net-metered solar system.
              </p>
            </div>
          </div>
          <div className="border-4 border-gray-800 rounded-full p-[0.5px]">
            {residentialOption.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setresidentialOption(
                    residentialOption.map((item, i) =>
                      i === index
                        ? { ...item, checked: !item.checked }
                        : { ...item, checked: false }
                    )
                  );
                }}
                className={`font-bold p-3 sm:p-5 sm:px-10  lg:p-5  lg:px-16  lg:text-lg transition-all duration-300 ${
                  option.checked ? "bg-black rounded-full text-white" : ""
                } `}
              >
                {option.value}
              </button>
            ))}
          </div>
          <div>
            <div>
              {residentialOption.map((option, index) =>
                option.checked ? (
                  <div key={index} className="flex flex-col gap-1">
                    <p>{option.line1}</p>
                    <p>{option.line2}</p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      )}

      {!name.includes("Residential") && <Offers />}
      <ContentReq />
      {name.includes("Residential") && <Offers />}

      <ContactSection />
    </div>
  );
};

export default SolutionPage;
