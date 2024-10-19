import React from "react";

const Benefits = ({ link, heading, para }) => {
  return (
    <div className="space-y-5">
      <img src={link} alt={heading} className="w-20" />
      <h1 className="font-bold text-lg">{heading}</h1>
      <p className="font-thin">{para}</p>
    </div>
  );
};

export default Benefits;
