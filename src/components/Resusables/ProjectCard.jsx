import React from "react";

const ProjectCard = ({ project, animation }) => {
  const { link, name, type, address, location, capacity } = project;
  return (
    <div
      className={`group rounded-xl h-full overflow-hidden bg-white ${
        animation ? "scale-50 opacity-0 " : ""
      }  transition-all hover:bg-primary   hover:text-white `}
    >
      <img src={link} alt={name} className=" object-cover h-60 w-full" />
      <div className="sm:p-10 p-5 py-5">
        <p className="font-thin text-primary max-sm:text-sm group-hover:text-white ">
          {type}
        </p>
        <h2 className="font-semibold sm:text-xl">{name}</h2>
        <p className="font-medium">{address}</p>
        <p className="font-medium">{location}</p>
        <p className="font-medium">{capacity + "kW "}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
