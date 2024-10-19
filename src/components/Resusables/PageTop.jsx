import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { GoArrowDown } from "react-icons/go";
import { Link } from "react-router-dom";

const PageTop = ({ name, para }) => {
  return (
    <div
      className={`bg-gray-600 h-[60vh] relative flex ${
        para ? "gap-3" : "gap-10"
      }  justify-center flex-col items-center p-10 md:p-20 px-5 text-white`}
    >
      <h1 className="font-bold text-3xl lg:text-5xl">{name}</h1>
      {para ? (
        <p className=" text-sm w-full sm:w-[50%] text-center font-semibold">
          {para}
        </p>
      ) : (
        <div className="breadcrumb flex text-xs font-bold items-center gap-2">
          <Link to={"/"} className="hover:text-primary">
            Home
          </Link>
          <RiArrowRightSLine size={16} />
          <p>{name}</p>
        </div>
      )}
      <div
        className="button absolute  -bottom-10  "
        style={
          {
            //   transform: "translate(-50%,-50%)",
          }
        }
      >
        <div
          className=" rounded-full p-3 pulse "
          style={{
            backgroundColor: "rgba(132, 204, 22, 0.3)",
          }}
        >
          <button className="p-5 rounded-full bg-primary shadow-2xl">
            <GoArrowDown size={20} className="animate-bounce " />
          </button>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
          <span style={{ "--i": 4 }}></span>
          <span style={{ "--i": 5 }}></span>
        </div>
      </div>
    </div>
  );
};

export default PageTop;
