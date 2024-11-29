import React from "react";
import Actionbtn from "./Actionbtn";
import ActionButton from "./ActionButton";
import { Link } from "react-router-dom";

const ContentReq = () => {
  return (
    <div className="lg:px-20 p-5 py-20 max-md:text-sm  lg:py-40 pt-28 space-y-6 font-thin ">
      <h1 className="pb-3 text-bold text-2xl    lg:text-3xl font-bold">
        Book Your Free Survey
      </h1>
      <p>
        To book a free survey, reach out to us at{" "}
        <Link to={""} className="text-primary font-medium px-2 text-lg">
          03365078878
        </Link>{" "}
        or fill the{" "}
        <Link
          to={"/request-a-quote"}
          className="text-primary font-medium px-2 text-lg"
        >
          {" "}
          Book your free survey Form
        </Link>
      </p>
      <h1 className="pb-3 text-bold text-2xl  lg:text-3xl font-bold">
        Get Customized/Tailored Package
      </h1>

      <p>Our engineers visit your site and offer customized packages.</p>
      <h1 className="pb-3 text-bold text-2xl  lg:text-3xl font-bold">
        Project Installation
      </h1>
      <p>
        Our certified engineers install the residential solar system and enable
        Net-metering.
      </p>
      <h1 className="pb-3 text-bold text-2xl  lg:text-3xl font-bold">
        Our App
      </h1>
      <div className="space-y-5">
        <p>
          Our App allows you to access, control, and keep an eye on your solar
          system from anywhere in the world
        </p>
        <p>Personal Dashboard</p>
        <p>Monitor Your Solar System</p>
        <p>Keep a Track of Your Savings</p>
        <p>CO2 Reduction in Tones</p>
        <p>Review Your Energy Generation</p>
      </div>
    </div>
  );
};

export default ContentReq;
