import React from "react";
import { CarouselPlugin } from "../Resusables/CarouselReviews";

const Reviews = () => {
  return (
    <div className="min-h-[100vh] px-5 p-10 md:common-padding">
      <h1 className="w-full md:my-10 my-5 text-center font-bold text-2xl md:text-3xl ">
        Our Customers Share Their Experiences
      </h1>
      <div className="flex justify-center">
        <CarouselPlugin />
      </div>
    </div>
  );
};

export default Reviews;
