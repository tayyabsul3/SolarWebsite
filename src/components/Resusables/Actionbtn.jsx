import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const Actionbtn = ({ action, fn }) => {
  return (
    <button
      onClick={
        fn
          ? fn
          : () => {
              // navigate("/contact");
              alert("comming soon");
            }
      }
      className="flex-normal gap-3 bg-primary p-3 px-5 rounded-md hover:bg-secondary transition-all duration-300 group "
    >
      <p className="font-medium text-white whitespace-nowrap">{action}</p>
      <div className="text-white group-hover:animate-bounce transition-all">
        <FaArrowCircleRight size={20} className="" />
      </div>
    </button>
  );
};

export default Actionbtn;
