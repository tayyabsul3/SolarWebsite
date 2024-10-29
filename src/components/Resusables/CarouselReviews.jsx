import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const data = [
    {
      name: "Rehan Masud",
      comment:
        "“I would like to take this opportunity to thank Hyper Solar Solutions for their excellent services and tremendous support throughout the installation procedure of Solar System at our premises. They have provided us excellent workmanship and we are very satisfied with their overall performance.”",
      location: "peshawar",
      clienttype: "Residential Client",
      power: "15kW",
    },
    {
      name: "Rehan Masud",
      comment:
        "“I would like to take this opportunity to thank Hyper Solar Solutions for their excellent services and tremendous support throughout the installation procedure of Solar System at our premises. They have provided us excellent workmanship and we are very satisfied with their overall performance.”",
      location: "peshawar",
      clienttype: "Residential Client",
      power: "15kW",
    },
    {
      name: "Rehan Masud",
      comment:
        "“I would like to take this opportunity to thank Hyper Solar Solutions for their excellent services and tremendous support throughout the installation procedure of Solar System at our premises. They have provided us excellent workmanship and we are very satisfied with their overall performance.”",
      location: "peshawar",
      clienttype: "Residential Client",
      power: "15kW",
    },
    {
      name: "Rehan Masud",
      comment:
        "“I would like to take this opportunity to thank Hyper Solar Solutions for their excellent services and tremendous support throughout the installation procedure of Solar System at our premises. They have provided us excellent workmanship and we are very satisfied with their overall performance.”",
      location: "peshawar",
      clienttype: "Residential Client",
      power: "15kW",
    },
    {
      name: "Rehan Masud",
      comment:
        "“I would like to take this opportunity to thank Hyper Solar Solutions for their excellent services and tremendous support throughout the installation procedure of Solar System at our premises. They have provided us excellent workmanship and we are very satisfied with their overall performance.”",
      location: "peshawar",
      clienttype: "Residential Client",
      power: "15kW",
    },
    {
      name: "Rehan Masud",
      comment:
        "“I would like to take this opportunity to thank Hyper Solar Solutions for their excellent services and tremendous support throughout the installation procedure of Solar System at our premises. They have provided us excellent workmanship and we are very satisfied with their overall performance.”",
      location: "peshawar",
      clienttype: "Residential Client",
      power: "15kW",
    },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index} className="min-h-[20vh]">
            <div className="p-1 min-h-[20vh] ">
              <Card className="rounded-3xl shadow-md ">
                <CardContent className="flex flex-col  items-center justify-center p-6  rounded-3xl">
                  <div className="img flex pt-10 pb-5">
                    {["", "", "", "", ""].map((_, index) => (
                      <img
                        key={index}
                        src="https://zerocarbon.com.pk/wp-content/themes/solatec/assets/images/star.png"
                        alt=""
                        className="w-10"
                      />
                    ))}
                  </div>
                  <p className="font-thin leading-tight  text-gray-800">
                    {item.comment}
                  </p>
                  <img
                    src="https://zerocarbon.com.pk/wp-content/uploads/2024/05/testimonials-avatar.png"
                    alt=""
                    className="my-5 w-20
                    "
                  />
                  <p className="text-lg font-bold text-gray-600">{item.name}</p>
                  <div className=" sm:whitespace-nowrap text-center">
                    <span>{item.location + " | "}</span>
                    <span>{item.clienttype + " | "}</span>
                    <span>{item.power}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
