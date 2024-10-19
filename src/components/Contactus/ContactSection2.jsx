import React, { useState } from "react";
import Actionbtn from "../Resusables/Actionbtn";

const ContactSection2 = () => {
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
      className="
        md:space-y-10 space-y-5 mx-auto md:w scale-110    flex flex-col justify-center  flex-[0.45]  rounded-2xl  sm:p-8 p-5   md:p-14 text-black"
    >
      <h2 className="md:text-4xl text-2xl font-bold text-black">
        Request a Quote
      </h2>
      <p className="font-thin">
        To get in touch with our representative, please complete the following
        form:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-6 py-3 font-thin hover:shadow-md border outline-none hover:border hover:bg-white bg-transparent transition-all duration-300 hover:border-primary  rounded-lg"
          />
        </div>
        <div className="">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-6 py-3 font-thin hover:shadow-md border outline-none hover:border hover:bg-white bg-transparent transition-all duration-300 hover:border-primary  rounded-lg"
          />
        </div>
        <div className="">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-6 py-3 font-thin hover:shadow-md border outline-none hover:border hover:bg-white bg-transparent transition-all duration-300 hover:border-primary  rounded-lg"
          />
        </div>
        <div className="">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-6 py-3 font-thin hover:shadow-md border outline-none hover:border hover:bg-white bg-transparent transition-all duration-300 hover:border-primary  rounded-lg"
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
            className="w-full px-6 py-3 font-thin hover:shadow-md border outline-none hover:border hover:bg-white bg-transparent transition-all duration-300 hover:border-primary  rounded-lg"
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
            className="accent-lime-500 form-checkbox"
          />
          <span className="ml-2 max-sm:text-xs">
            I agree to the Terms and Conditions
          </span>
        </label>
      </div>
      <Actionbtn action={"Submit a request"} fn={handleSubmit} />
    </div>
  );
};

export default ContactSection2;
