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
              // navigate("/contact");
              alert("comming soon");
            }
      }
      className="flex-normal gap-3 w-fit bg-primary p-3 px-5 rounded-md hover:bg-secondary transition-all duration-300 group "
    >
      <div className="text-white   group-hover:-translate-x-3 group-hover:opacity-0 gorup-hover:scale-50 transition-all">
        <FaArrowCircleRight size={20} className="" />
      </div>
      <p className="font-medium text-white  ">{action}</p>
    </button>
  );
};

export default ActionButton;
