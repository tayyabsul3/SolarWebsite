import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ActionButton = ({ action, fn }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={
        fn
          ? fn
          : () => {
              navigate("/contact");
            }
      } 
      className="flex-normal gap-3 w-fit bg-primary p-3 px-5 rounded-md hover:bg-secondary transition-all duration-300 group "
    >
      <div className="text-white   group-hover:animate-bounce transition-all">
        <FaArrowCircleRight size={20} className="" />
      </div>
      <p className="font-medium text-white  ">{action}</p>
    </button>
  );
};

export default ActionButton;
