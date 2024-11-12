import React, { useState, useEffect } from "react";
import PageTop from "../Resusables/PageTop";
import ProjectCard from "../Resusables/ProjectCard";
import Actionbtn from "../Resusables/Actionbtn";

const Projects = () => {
  const navs = [
    "All",
    "Agri-Based Project",
    "Commercial Project",
    "Industrial Project",
  ];

  const projects = [
    {
      name: "Shell Pump",
      capacity: 90,
      type: "Commercial Project",
      address: "onGrid System",
      location: "near Mandra",
      link: "/images/shellpump.jpg",
    },
    {
      name: "Khwaja Brothers",
      capacity: 125,
      type: "Industrial Project",
      address: "onGrid System",
      location: "Yamaha chowk humak",
      link: "/images/pakcuisine.jpg",
    },
    {
      name: "Pakcuisine",
      capacity: 160,
      type: "Industrial Project",
      address: "onGrid System",
      location: "Rawat industrail state",
      link: "/images/nawazhardware.jpg",
    },
    {
      name: "Nawaz Hardware",
      capacity: 8.5,
      type: "Residential Project",
      address: "onGrid System",
      location: "Asghar Mall",
      link: "/images/mankiala.jpg",
    },

    {
      name: "Graceware",
      capacity: 60,
      type: "Industrial Project",
      address: "onGrid System",
      location: "Rawat Industrial State S3",
      link: "./images/khawajaTanveer.jpg",
    },
    {
      name: "Grace Plastic",
      capacity: 60,
      type: "Industrial",
      address: "",
      location: "Mankiala",
      link: "/images/yamahachowk.jpg",
    },
  ];

  const [activebtn, setActiveBtn] = useState(0);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredProjects = () => {
    if (activebtn === 0) {
      return projects;
    }
    const category = navs[activebtn];
    return projects.filter((project) => project.type === category);
  };

  const handleLoadMore = () => {
    setanimation(true);
    setVisibleCount((prevCount) => prevCount + 8); // Increase visible count by 8
    setTimeout(() => {
      setanimation(false);
    }, 300);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match the duration of your animation
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const allFilteredProjects = filteredProjects();
  const [animation, setanimation] = useState(false);

  return (
    <div className="bg-gray-100">
      <PageTop
        name={"Projects"}
        para={
          "With our innovative technologies, clear focus on the needs of our customers, and 1,210 dedicated employees, we energize society. Let’s make tomorrow different today!"
        }
      />
      <div className="flex justify-center items-center">
        <div className="projects pt-20 p-5 md:p-20 max-w-7xl">
          <div className="top flex gap-5 mt-5 justify-center text-center flex-wrap font-semibold">
            {navs.map((nav, index) => (
              <button
                key={index}
                onClick={() => {
                  setanimation(true);
                  setActiveBtn(index);
                  setVisibleCount(8);
                  setIsAnimating(true);
                  setTimeout(() => {
                    setanimation(false);
                  }, 300);
                  // Trigger animation on category change
                }}
                className={`flex flex-col gap-1 text-center w-fit ${
                  activebtn === index ? "text-primary" : "text-gray-700"
                }`}
              >
                <p className="px-1 text-center w-full">{nav}</p>
                <span
                  className={`h-1 bg-primary transition-all duration-300 ${
                    activebtn === index ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-5 mt-10">
            {allFilteredProjects
              .slice(0, visibleCount)
              .map((project, index) => (
                <div
                  key={index}
                  className={`${
                    isAnimating ? "fade-enter fade-enter-active" : ""
                  }`}
                >
                  <ProjectCard project={project} animation={animation} />
                </div>
              ))}
          </div>
          {visibleCount < allFilteredProjects.length && (
            <div className="flex justify-center items-center my-20">
              <Actionbtn action={" Load More"} fn={handleLoadMore} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
