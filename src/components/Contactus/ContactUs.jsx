import React from "react";
import PageTop from "../Resusables/PageTop";
import Actionbtn from "../Resusables/Actionbtn";
import ContactSection2 from "./ContactSection2";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 pb-10">
      <PageTop name={"Contact Us"} />
      <div className="flex p-5 pt-28 lg:p-20 justify-between flex-col lg:flex-row  items-center gap-10">
        <div className="left bg-primary2 flex flex-col justify-between gap-10 p-5 max-md:text-sm  lg:p-20  lg:px-16 rounded-xl font-thin flex-[0.2] ">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Our Locations</h1>
            <p>
              Lahore Office: 87 B1, off MM Alam Rd, Block B1 Block B 1 Gulberg
              III, Lahore, Punjab 54000
              <br />
              Islamabad Office: 1st Floor, Duniya News, Plot 11, Sector G-7/1,
              Islamabad.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Our Contact</h1>
            <p>
              Email: info@hypersolar.com.pk
              <br />
              Call: +92 311-1111-926
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Opening Hours</h1>
            <p>
              From Monday - Friday
              <br />9 am to 6 pm
            </p>
          </div>
          <Actionbtn action={"Request A Quote"} />
        </div>
        <div className="right flex-[0.8]  ">
          <div className="">
            <ContactSection2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
