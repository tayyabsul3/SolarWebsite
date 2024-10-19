import React, { useState, useEffect } from "react";
import PageTop from "../Resusables/PageTop";
import ProjectCard from "../Resusables/ProjectCard";
import Actionbtn from "../Resusables/Actionbtn";

const Projects = () => {
  const navs = [
    "All",
    "Agri-Based Projects",
    "Commercial Projects",
    "Industrial Projects",
  ];

  const projects = [
    {
      type: "Industrial Projects",
      name: "Kohinoor Textile Mills Limited",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Industrial Projects",
      name: "Hoor Oil Industries",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Industrial Projects",
      name: "Packages Convertors Powered by Zero Carbon",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Industrial Projects",
      name: "Khalid Ice Factory And Cold Storage",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Industrial Projects",
      name: "Maple Leaf Cement",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Burewala Hospital",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Bahawalpur",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Multan",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Okara",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Jaranwala",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Vehari",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Islamabad",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Capital University",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Agri-Based Projects",
      name: "Fish Farm Kasur",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Industrial Projects",
      name: "Hilbro International",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Industrial Projects",
      name: "Khalid Cold Store",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Roots Millennium",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Muslim Town Lahore",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Ferozepur Road Lahore",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Chenab Club Faisalabad",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Jhang Road",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Faisalabad",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Gagu Mandi",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Nankana SB.",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Burewala",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Lahore",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Sheikhupura",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Abdallian Lahore",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Commercial Projects",
      name: "Commercial Installation Shalimar Lahore",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
    },
    {
      type: "Agri-Based Projects",
      name: "Punjab Agri Farms",
      link: "https://zerocarbon.com.pk/wp-content/uploads/2023/05/Untitled-design-24.png",
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
        <div className="projects pt-20 p-5 md:p-20">
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
                  <ProjectCard
                    type={project.type}
                    name={project.name}
                    link={project.link}
                    animation={animation}
                  />
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
