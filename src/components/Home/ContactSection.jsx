import React, { useState } from "react";
import ActionButton from "../Resusables/ActionButton";
import Actionbtn from "../Resusables/Actionbtn";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    solarSolution: "",
    terms: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    alert(JSON.stringify(formData, null, 2)); // Alert the entered data in JSON format
  };
  return (
    <div
      style={{
        backgroundImage: `url('./request-a-quote-bg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
      }}
      className=""
    >
      <div
        className="overlay p-5 md:common-padding w-full h-full  flex justify-center flex-col  items-center "
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        }}
      >
        <div className="top mt-10">
          <p className="text-lg md:text-xl mb-5 pr-5">
            Tailored Solutions for Your Unique Electricity Needs
          </p>
          <div className="flex justify-between  flex-col  gap-10 lg:flex-row  ">
            <div className="flex flex-col  flex-[0.45] gap-10">
              <h1 className="text-3xl md:text-5xl tracking-tighter  font-semibold text-primary leading-tight">
                Complete Suite of Solar Power Systems From Free Survey to
                Installation
              </h1>
              <p
                className="font-thin tracking-tight text-lg
              "
              >
                Be it industrial solutions, commercial solutions, residential
                solutions, or agri-based solutions, Hyper Solar Solutions Solar
                provides a complete suite of Solar Power systems.
              </p>
              <p
                className="font-thin tracking-tight text-lg
              "
              >
                How it Works
              </p>

              <div className="flex gap-5 md:items-center   flex-col md:flex-row">
                <div>
                  <img src="./req1.webp" alt="" />
                  <p
                    className="font-thin tracking-tight text-lg
               w-40 "
                  >
                    Book your Free Survey
                  </p>
                </div>
                <div>
                  <img src="./req2.webp" alt="" />
                  <p
                    className="font-thin tracking-tight text-lg
               w-40 "
                  >
                    Get a Customized Package
                  </p>
                </div>
                <div>
                  <img src="./req3.webp" alt="" className="h-17" />
                  <p
                    className="font-thin tracking-tight text-lg
               w-20 "
                  >
                    Project Installation
                  </p>
                </div>
              </div>
            </div>
            <div
              className="
        md:space-y-10 space-y-5 flex flex-col justify-center  flex-[0.45] bg-white rounded-2xl p-6 text-sm md:text-base   md:p-14 text-black"
            >
              <h2 className=" text-2xl md:text-3xl font-bold md:mb-6 text-primary">
                Request a Quote
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-3 font-thin hover:shadow-md border outline-none hover:border hover:border-primary  rounded-lg"
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-3 font-thin hover:shadow-md border outline-none hover:border hover:border-primary  rounded-lg"
                  />
                </div>
                <div className="">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-3 font-thin hover:shadow-md border outline-none hover:border hover:border-primary  rounded-lg"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-6 py-3 font-thin hover:shadow-md border outline-none hover:border hover:border-primary  rounded-lg"
                  />
                </div>
                <div className="">
                  <h1 className="my-2 mt-3 text-primary text-sm font-semibold">
                    Solar Solutions
                  </h1>
                  <select
                    name="solarSolution"
                    value={formData.solarSolution}
                    onChange={handleChange}
                    className="w-full px-6 py-3 font-thin hover:shadow-md border outline-none hover:border hover:border-primary  rounded-lg"
                  >
                    <option value="">Select solar system type</option>
                    <option value="Type 1">Type 1</option>
                    <option value="Type 2">Type 2</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="form-checkbox accent-primary"
                  />
                  <span className="ml-2  max-sm:text-xs">
                    I agree to the Terms and Conditions
                  </span>
                </label>
              </div>
              <Actionbtn action={"Submit a request"} fn={handleSubmit} />
            </div>
          </div>
        </div>
        <div className="cards grid grid-cols-4 gap-5 mt-20"></div>
      </div>
    </div>
  );
};

export default ContactSection;
