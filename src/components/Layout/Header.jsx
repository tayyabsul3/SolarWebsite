import React, { useEffect, useState } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { FaClock, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { IoLocationSharp, IoMail, IoMenu, IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";

import { PiPhoneThin } from "react-icons/pi";
import Actionbtn from "../Resusables/Actionbtn";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import ActionButton from "../Resusables/ActionButton";

const Header = () => {
  const location = useLocation();
  const [isAboutPage, setIsAboutPage] = useState(false);

  useEffect(() => {
    setIsAboutPage(location.pathname.includes("about"));
  }, [location]);

  const [active, setactive] = useState(false);
  const [activeNav, setactiveNav] = useState(null);
  const [modileMenu, setmodileMenu] = useState(false);

  return (
    <div className="relative">
      {!isAboutPage && (
        <div className="top hidden lg:flex justify-between items-center gap-10 px-10 p-3 w-full bg-white border-b">
          <div className="flex items-center justify-between lg:flex-1  font-extralight">
            <button className="mail flex-normal gap-1">
              <IoMail size={18} className="mt-1" />
              <p>yourmail@gmail.com</p>
            </button>
            <button className="phone flex-normal gap-1">
              <PiPhoneThin />
              <p>+92 999 9999999</p>
            </button>
            <div className="flex-normal gap-1">
              <FaClock />
              <p>Mon-Fri: 9am – 6pm</p>
            </div>
            <button className="directions flex-normal gap-1">
              <IoLocationSharp size={20} className="text-primary" />
              <p>Get Directions</p>
            </button>
          </div>
          <div className="flex-normal gap-5 ">
            <form>
              <div className="flex-normal gap-1">
                <label htmlFor="search">
                  <IoSearch size={20} className="text-primary" />
                </label>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Type Search Words here"
                  className="bg-tra w-48 p-1 text-sm italic"
                />
              </div>
            </form>
            <div className="socials xl:flex items-center  gap-4 hidden">
              <a
                href="#"
                className="bg-black p-1 rounded-full hover:bg-primary text-white"
              >
                <FaWhatsapp />
              </a>
              <a
                href="#"
                className="bg-black p-1 rounded-full hover:bg-primary text-white"
              >
                <BiLogoFacebook />
              </a>
              <a
                href="#"
                className="bg-black p-1.5 rounded-full hover:bg-primary text-white"
              >
                <ImLinkedin2 size={13} />
              </a>
              <a
                href="#"
                className="bg-black p-1 rounded-full hover:bg-primary text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="main flex justify-between">
        <Link
          onClick={() => {
            setactiveNav(null);
          }}
          to="/"
          className="lg:border-r p-3 px-8 w-36 lg:w-48 overflow-hidden"
        >
          <img src="./logo2.png" alt="" className="object-cover   scale-150" />
        </Link>
        <button
          onClick={() => {
            setmodileMenu(!modileMenu);
          }}
          className="menu lg:hidden flex justify-center items-center px-5"
        >
          {!modileMenu ? <IoMenu size={25} /> : <MdClose size={25} />}
        </button>
        <div
          className={`modal lg:hidden absolute transition-all duration-500 ${
            !modileMenu ? "top-40 opacity-0 " : "opacity-100 top-24 "
          } z-10
         bg-white w-full h-[90vh] `}
        >
          <ul className="p-5 flex flex-col gap-5 font-semibold">
            <Link
              onClick={() => {
                setmodileMenu(false);
              }}
              to={"/about"}
              className="hover:text-primary transition-all duration-300"
            >
              About Us
            </Link>
            <details>
              <summary className="hover:text-primary cursor-pointer transition-all duration-300">
                {" "}
                Solutions
              </summary>
              <ul className="p-2 px-5  font-medium flex flex-col gap-2">
                <Link
                  onClick={() => {
                    setmodileMenu(false);
                  }}
                  to={"/industrial"}
                  className="border-b border-gray-200 w-fit transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  Industrial Solutions
                </Link>
                <Link
                  onClick={() => {
                    setmodileMenu(false);
                  }}
                  to={"/commercial"}
                  className="border-b border-gray-200 w-fit transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  Commercial Solutions
                </Link>
                <Link
                  onClick={() => {
                    setmodileMenu(false);
                  }}
                  to={"/residential"}
                  className="border-b border-gray-200 w-fit transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  Residential Solutions
                </Link>
                <Link
                  onClick={() => {
                    setmodileMenu(false);
                  }}
                  to={"/agribased"}
                  className="border-b border-gray-200 w-fit transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  Agri-Based Solutions
                </Link>
              </ul>
            </details>
            <Link
              onClick={() => {
                setmodileMenu(false);
              }}
              to={"/projects"}
              className="hover:text-primary transition-all duration-300"
            >
              Projects
            </Link>
            <Link
              onClick={() => {
                setmodileMenu(false);
              }}
              to={"/contact"}
              className="hover:text-primary transition-all duration-300"
            >
              Contact Us
            </Link>
            <ActionButton action={"Request A Quote"} />
          </ul>
        </div>
        <div className="naviagtions hidden flex-1 border-r w-fit p-3 px-10 lg:flex justify-center items-center">
          <ul className="flex-between gap-10 xl:gap-20">
            <li>
              <Link
                onClick={() => {
                  setactiveNav(0);
                }}
                to="/about"
                className={`font-semibold hover:text-primary transition-all duration-200 hover:border-primary pb-5 ${
                  activeNav === 0
                    ? "text-primary border-primary "
                    : "border-transparent text-black"
                } border-b-2`}
              >
                About Us
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => {
                setactive(true);
              }}
              onMouseLeave={() => {
                setactive(false);
              }}
            >
              <span
                className={`font-semibold cursor-pointer hover:text-primary transition-all duration-200 hover:border-primary pb-5 ${
                  activeNav === 1
                    ? "text-primary border-primary "
                    : "border-transparent text-black"
                } border-b-2`}
              >
                <span>Solutions </span>
                <span>
                  <RiArrowDropDownLine size={20} className="inline mb-1" />
                </span>
              </span>
              <div
                className={`absolute -left-10 transition-all duration-500   ${
                  active ? "opacity-100 mt-5" : "opacity-0 mt-10"
                } shadow-2xl text-sm font-thin px-10  z-20 bg-white p-5 rounded-lg whitespace-nowrap`}
              >
                <ul className="flex flex-col gap-2">
                  <Link
                    onClick={() => {
                      setactiveNav(1);
                    }}
                    to={"/industrial"}
                    className=" hover:border-primary hover:text-primary border-transparent transition-all duration-300 border-b mb-1 pb-1"
                  >
                    Industrial Solutions
                  </Link>
                  <Link
                    onClick={() => {
                      setactiveNav(1);
                    }}
                    to={"/commercial"}
                    className=" hover:border-primary hover:text-primary border-transparent transition-all duration-300 border-b mb-1 pb-1"
                  >
                    Commercial Solutions
                  </Link>
                  <Link
                    onClick={() => {
                      setactiveNav(1);
                    }}
                    to={"/residential"}
                    className=" hover:border-primary hover:text-primary border-transparent transition-all duration-300 border-b mb-1 pb-1"
                  >
                    Residential Solutions
                  </Link>
                  <Link
                    onClick={() => {
                      setactiveNav(1);
                    }}
                    to={"/agribased"}
                    className=" hover:border-primary hover:text-primary border-transparent transition-all duration-300 border-b mb-1 pb-1"
                  >
                    Agri-Based Solutions
                  </Link>
                </ul>
              </div>
            </li>
            <li>
              <Link
                onClick={() => {
                  setactiveNav(2);
                }}
                to="/projects"
                className={`font-semibold hover:text-primary transition-all duration-200 hover:border-primary pb-5 ${
                  activeNav === 2
                    ? "text-primary border-primary "
                    : "border-transparent text-black"
                } border-b-2`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setactiveNav(3);
                }}
                to="/contact"
                className={`font-semibold hover:text-primary transition-all duration-200 hover:border-primary pb-5 ${
                  activeNav === 3
                    ? "text-primary border-primary "
                    : "border-transparent text-black"
                } border-b-2`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="action p-5 px-10 hidden lg:flex justify-center items-center">
          <Actionbtn action={"Request a Quote"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
