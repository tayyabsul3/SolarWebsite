import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const SolutionCard = ({ link, heading, para }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white transition-all cursor-pointer duration-500 text-black rounded-xl overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={link}
        alt={heading}
        className="group-hover:scale-110 transition-all w-full  duration-500"
        style={{
          clipPath: isHovered
            ? "polygon(0 0%, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0%, 100% 0, 100% 100%, 0 90%)",
        }}
      />
      <div className="flex flex-col gap-5 px-6 md:px-10 p-10 pb-10 transition-all md:pb-20">
        <h1 className="font-bold text-2xl leading-snug text-primary">
          {heading}
        </h1>
        <p className="font-thin text-lg tracking-tighter flex-[0.6]">{para}</p>
        <button className="border transition-all duration-500 min-w-[10rem] group-hover:shadow-lg w-fit rounded-lg">
          <p className="border-b-2 group-hover:border-transparent flex-normal gap-2 whitespace-nowrap p-3 w-[80%] mx-auto transition-all border-primary h-full">
            <div className="text-primary transition-all">
              <FaArrowCircleRight size={20} />
            </div>
            <span className="font-semibold">Read More</span>
          </p>
        </button>
      </div>
      <span className="absolute h-0 group-hover:h-2 transition-all duration-500 w-[80%] bg-primary bottom-0 left-7" />
    </div>
  );
};

export default SolutionCard;
