import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot, FaLocationPin, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8   ">
      <div className="container p-10 md:common-padding mx-auto flex gap-10 flex-col lg:flex-row  font-thin">
        <div className="flex-[0.25] flex flex-col gap-8">
          <h3 className="text-white text-xl  font-semibold">Quick Contact</h3>
          <p className="mb-2">
            If you have any questions or need help, feel free to contact our
            team.
          </p>
          <h1
            onClick={() => {
              const phoneNumber = "03365078878";

              window.open(`tel:${phoneNumber}, '_blank'`);
            }}
            className="flex-normal gap-2 w-fit text-primary font-bold hover:text-white transition-all duration-500 cursor-pointer text-2xl"
          >
            <FaPhone />
            <span>03365078878</span>
          </h1>

          <div className="locations space-y-5">
            <div className="location">
              <h1 className="font-bold text-gray-300 mb-2">Lahore Office</h1>
              <p className="">
                87 B1, off MM Alam Rd, Block B1 Block B 1 Gulberg III, Lahore,
                Punjab 54000
              </p>
            </div>
            <div className="location">
              <h1 className="font-bold text-gray-300 mb-2">Islamabad Office</h1>
              <p className="">
                1st Floor, Duniya News, Plot 11, Sector G-7/1, Hyper Point,
                Islamabad.
              </p>
            </div>
          </div>
          <h1 className="flex-normal gap-2 w-fit text-primary font-bold hover:text-white transition-all duration-500 cursor-pointer text-xl">
            <FaLocationDot />

            <span>Get Directions</span>
          </h1>
        </div>
        <div className="flex-[0.1] flex flex-col gap-8">
          <h3 className="text-white text-xl  font-semibold">Company</h3>
          <ul className="space-y-4">
            <li className="mb-2">
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/projects" className="hover:text-white">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-[0.15] flex flex-col gap-8">
          <h3 className="text-white text-xl  font-semibold">Solutions</h3>
          <ul className="flex flex-col gap-4 tracking-wide">
            <Link to={"/industrial"} className="hover:text-white">
              Industrial Solutions
            </Link>
            <Link to={"/commercial"} className="hover:text-white">
              Commercial Solutions
            </Link>
            <Link to={"/residential"} className="hover:text-white">
              Residential Solutions
            </Link>
            <Link to={"/agribased"} className="hover:text-white">
              Agri-Based Solutions
            </Link>
          </ul>
        </div>
        <div className=" h-fit flex gap-5  flex-[0.4] ">
          <a
            href="#"
            className="text-gray-400 border border-gray-600 p-3 rounded-2xl hover:text-white"
          >
            <div className="p-1 bg-primary text-black rounded-full">
              <FaFacebookF size={15} />
            </div>
          </a>
          <a
            href="#"
            className="text-gray-400 border border-gray-600 p-3 rounded-2xl hover:text-white"
          >
            <div className="p-1 bg-primary text-black rounded-full">
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href="#"
            className="text-gray-400 border border-gray-600 p-3 rounded-2xl hover:text-white"
          >
            <div className="p-1 bg-primary text-black rounded-full">
              <FaInstagram />
            </div>
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col lg:flex-row justify-between px-5 gap-5  lg:px-20   items-center border-t border-gray-700 pt-10 font-thin ">
        <div className="">
          <a href="#" className="hover:text-white ">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white ">
            - Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            - Sitemap
          </a>
        </div>
        <p>
          ©2021 Hyper Solar Solutions, All Rights Reserved. With Love by Tower
          Technologies
        </p>
      </div>
    </footer>
  );
};

export default Footer;
