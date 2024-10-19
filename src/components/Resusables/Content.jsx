import React from "react";
import Actionbtn from "./Actionbtn";
import ActionButton from "./ActionButton";
import { Navigate, useNavigate } from "react-router-dom";

const Content = ({ content, name }) => {
  const naviagte = useNavigate();
  const residential = name.includes("Residential");
  return (
    <div className="lg:px-28 p-5  py-28  lg:py-40 max-md:text-sm space-y-10 lg:space-y-16 font-thin ">
      <h1 className="text-bold text-2xl  lg:text-3xl  font-bold">
        {name} Solar Solutions
      </h1>
      <p>{content.p1}</p>
      <ActionButton
        action={"Book A Free Survey"}
        fn={() => {
          naviagte("/contact");
        }}
      />
      <h1 className="text-bold text-2xl lg:text-3xl  font-bold">
        Why Hyper {name} Solar Solutions?
      </h1>
      <ActionButton
        action={`${name} Projects`}
        fn={() => {
          naviagte("/projects");
        }}
      />
      <div className="space-y-5">
        <p>{content.p2}</p>
        <p>{content.p3}</p>
      </div>
      {residential && (
        <div className="space-y-5">
          <h1 className="text-bold text-2xl lg:text-3xl  font-bold">
            Your Three-Step Path to Energy Independence:
          </h1>
          <ul
            className="space-y-1 
        "
          >
            <li className="list-disc pt-1 ml-10">
              Schedule Your Free Assessment
            </li>
            <li className="list-disc pt-1 ml-10">
              Receive a Customized Package
            </li>
            <li className="list-disc pt-1 ml-10">
              Complete Project Installation
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Content;
