import React from "react";
import Hero from "./Hero";
import Parteners from "./Parteners";
import Solutions from "./Solutions";
import ContactSection from "./ContactSection";
import Portfolio from "./Portfolio";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Portfolio />
      <Parteners />
      <Solutions />
      <Reviews />
      <ContactSection />
    </div>
  );
};

export default Home;
