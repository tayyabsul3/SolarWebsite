import React from "react";

const ProjectCard = ({ link, name, type, animation }) => {
  return (
    <div
      className={`group rounded-xl overflow-hidden bg-white ${
        animation ? "scale-50 opacity-0 " : ""
      }  transition-all hover:bg-primary   hover:text-white `}
    >
      <img src={link} alt={name} className=" object-cover" />
      <div className="sm:p-10 p-5 py-5">
        <p className="font-thin text-primary max-sm:text-sm group-hover:text-white ">
          {type}
        </p>
        <h2 className="font-semibold sm:text-xl">{name}</h2>
      </div>
    </div>
  );
};

export default ProjectCard;
