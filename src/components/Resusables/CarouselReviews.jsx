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
      location: "Peshawar",
      clienttype: "Residential Client",
      power: "15kW",
    },
    {
      name: "Ahmed Khan",
      comment:
        "“The team at Hyper Solar Solutions was outstanding. They provided us with excellent guidance during the entire installation process. Their professionalism and attention to detail were exceptional. We are grateful for their support and thrilled with the results.”",
      location: "Islamabad",
      clienttype: "Residential Client",
      power: "20kW",
    },
    {
      name: "Sana Bibi",
      comment:
        "“We couldn’t be more pleased with the service provided by Hyper Solar Solutions. The installation was seamless, and the system has been performing above expectations. Their team went above and beyond to ensure everything was perfect.”",
      location: "Lahore",
      clienttype: "Commercial Client",
      power: "50kW",
    },
    {
      name: "Zahid Hussain",
      comment:
        "“Hyper Solar Solutions delivered on all their promises. From consultation to installation, their professionalism was impressive. The system is working efficiently, and we’ve seen a noticeable reduction in energy costs.”",
      location: "Karachi",
      clienttype: "Residential Client",
      power: "10kW",
    },
    {
      name: "Mariam Ali",
      comment:
        "“It was a pleasure working with Hyper Solar Solutions. Their team was friendly, knowledgeable, and worked tirelessly to get our solar system up and running smoothly. The savings on electricity have been significant.”",
      location: "Rawalpindi",
      clienttype: "Residential Client",
      power: "25kW",
    },
    {
      name: "Usman Javed",
      comment:
        "“I highly recommend Hyper Solar Solutions. Their work is impeccable, and the team was always available to answer questions and provide support. The solar system is efficient, and we are already seeing the benefits of our investment.”",
      location: "Multan",
      clienttype: "Industrial Client",
      power: "100kW",
    },
    {
      name: "Farida Malik",
      comment:
        "“We were impressed with the professionalism of the team at Hyper Solar Solutions. They provided us with a comprehensive solution and ensured that the installation was done without a hitch. We’re enjoying the reduced electricity bills.”",
      location: "Faisalabad",
      clienttype: "Residential Client",
      power: "18kW",
    },
    {
      name: "Asad Farooq",
      comment:
        "“The team at Hyper Solar Solutions is top-notch. From the initial consultation to the final installation, they exceeded all expectations. The system is delivering great results, and the savings on energy are already visible.”",
      location: "Sialkot",
      clienttype: "Commercial Client",
      power: "30kW",
    },
    {
      name: "Salma Aziz",
      comment:
        "“Hyper Solar Solutions provided excellent service from start to finish. Their team was knowledgeable, efficient, and ensured a smooth installation. Our new solar system is working perfectly, and we are already saving on electricity bills.”",
      location: "Quetta",
      clienttype: "Residential Client",
      power: "12kW",
    },
    {
      name: "Shahzad Qureshi",
      comment:
        "“We are very pleased with the service from Hyper Solar Solutions. They completed the installation on time and with great attention to detail. Our solar system is running efficiently, and we are confident in our decision to go solar.”",
      location: "Gujranwala",
      clienttype: "Industrial Client",
      power: "80kW",
    },
    {
      name: "Ayesha Jamil",
      comment:
        "“Hyper Solar Solutions made the entire process so easy for us. Their team was professional and provided excellent customer support throughout. The solar panels are already helping us save on energy costs, and we are very happy with the results.”",
      location: "Bahawalpur",
      clienttype: "Residential Client",
      power: "14kW",
    },
    {
      name: "Imran Shah",
      comment:
        "“The experience with Hyper Solar Solutions has been amazing. They took the time to explain the entire process and ensured that the installation went smoothly. Our solar system is efficient, and we are already noticing a reduction in our energy bills.”",
      location: "Hyderabad",
      clienttype: "Commercial Client",
      power: "40kW",
    },
    {
      name: "Nida Tariq",
      comment:
        "“I highly appreciate the service from Hyper Solar Solutions. The team was punctual, professional, and did an excellent job installing the solar system. The system has already started saving us money on our electricity bills.”",
      location: "Gujrat",
      clienttype: "Residential Client",
      power: "16kW",
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
                  <div className="w-20 shadow-sm">
                    <img
                      src="./logo.png"
                      alt=""
                      className="my-5 scale-150 
                    "
                    />
                  </div>
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
