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
          <h1 className="font-bold text-2xl  lg:text-3xl">
            Residential Packages
          </h1>
          <div className="flex flex-col  items-center text-center">
            <p>Independent of load.</p>
            <p>
              Ideal for residences with no/low power outages and higher unit
              cost.
            </p>
            <p>Online monitoring, control & data-logging using the Zero App.</p>
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
              <h1 className="font-bold text-2xl  lg:text-4xl mb-5">
                Net-metering
              </h1>
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
