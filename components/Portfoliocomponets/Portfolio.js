"use client";
import { Button, Divider } from "@nextui-org/react";
import React, { useState } from "react";
import Card1 from "../../public/Portfolioasset/Card1.png";
import Card2 from "../../public/Portfolioasset/Card2.png";
import Card3 from "../../public/Portfolioasset/Card3.png";
import Card4 from "../../public/Portfolioasset/Card4.png";
import Card5 from "../../public/Portfolioasset/Card5.png";
import Card6 from "../../public/Portfolioasset/Card6.png";

import Banner1 from "../../public/Portfolioasset/Banner1.png";
import Banner2 from "../../public/Portfolioasset/Banner2.png";
import Banner3 from "../../public/Portfolioasset/Banner3.png";
import Banner4 from "../../public/Portfolioasset/Banner4.png";
import Banner5 from "../../public/Portfolioasset/Banner5.png";

import Customizecard from "./Customizecard";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Exploreworks from "../Homecomponenets/Exploreworks";
import { useRouter } from "next/navigation";

const Portfolio = () => {
  const [selectedtab, Setselecttab] = useState("food bloggers");
  const [selectedState, SetselectState] = useState("Goa");
  const router=useRouter()

  const activetab =
  "md:px-8 m-0 md:w-60 text-xs md:text-sm rounded-md text-white bg-redtheme font-semibold";
const unactivetab =
  "md:px-8 m-0 md:w-60 text-xs md:text-sm rounded-md text-foreground-700 font-semibold";

  const tabelement = [
    "Trending",
    "lifestyle",
    "food bloggers",
    "content creators",
    "fitness",
    "Couple",
    "mom blogger",
    "more",
  ];

  const State = [
    "Tamil Nadu",
    "Andhra Pradesh",
    "Goa",
    "Karnataka",
    "Kerala",
    "Telangana",
    "Maharashtra",
    "Manipur",
  ];

  const carddata = [
    {
      Image: Card1,
      Name: "burger brand",
      Influencer: "60",
      Socialmediareach: "1.2m",
      Engagement: "48k",
    },
    {
      Image: Card2,
      Name: "mr ramen",
      Influencer: "60",
      Socialmediareach: "1.2m",
      Engagement: "48k",
    },
    {
      Image: Card3,
      Name: "cookie man",
      Influencer: "60",
      Socialmediareach: "1.2m",
      Engagement: "48k",
    },
    {
      Image: Card4,
      Name: "burger brand",
      Influencer: "60",
      Socialmediareach: "1.2m",
      Engagement: "48k",
    },
    {
      Image: Card5,
      Name: "mr ramen",
      Influencer: "60",
      Socialmediareach: "1.2m",
      Engagement: "48k",
    },
    {
      Image: Card6,
      Name: "cookie man",
      Influencer: "60",
      Socialmediareach: "1.2m",
      Engagement: "48k",
    },
  ];

  const bannerdata = [
    {
      Image: Banner1,
    },
    {
      Image: Banner2,
    },
    {
      Image: Banner3,
    },
    {
      Image: Banner4,
    },
    {
      Image: Banner5,
    },
  ];

  const unactive =
    "w-auto px-6  text-center rounded-md h-10 capitalize text-sm font-semibold text-foreground-500";
  const active =
    "w-auto px-6  text-center rounded-md h-10 capitalize text-sm font-semibold bg-redtheme text-white";

  return (
    <motion.div   initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{ duration: 0.5 }} className="flex flex-col justify-center items-center w-full gap-8 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 flex flex-col justify-center items-center gap-4"
      >
        <h2 className="font-bold text-4xl leading-8 capitalize">
          our<span className="text-redtheme"> Portfolio!</span>
        </h2>
        <p className="text-sm font-medium leading-4 text-foreground-700 capitalize">
          Explore all our fantastic works.
        </p>
      </motion.div>

     
     <div className="w-full overflow-hidden">

     <Exploreworks/>
     </div>

      <div className="flex flex-col w-11/12 mx-auto ">
        <div className="flex flex-col justify-start items-start gap-2 py-4">
          <h6 className="text-2xl font-bold leading-8 capitalize">
            <span className="text-redtheme capitalize">brands</span> who work
            with us!
          </h6>
          <p className="text-sm font-semibold text-foreground-600 capitalize">
            Explore the brands by states.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="lg:w-full md:w-11/12 w-11/12 mx-auto mt-4"
        >
          <CarouselContent>
            {State.map((element, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/6 basis-1/3 lg:basis-1/8"
              >
                <div className="p-1">
                <Card className="border-none lg:w-44 md:w-[7.5rem] w-28 ">
                <CardContent className="flex items-center gap-0 justify-center p-1 capitalize">
                      <Button
                        onPress={() => SetselectState(element)}
                        className={
                          selectedState === element ? activetab : unactivetab
                        }
                      >
                        {element}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="h-6 w-6 hidden md:flex" />
          <CarouselNext className="h-6 w-6  hidden md:flex" />
        </Carousel>

        <div className="grid md:grid-cols-3 gap-8 place-content-center items-center py-8">
          {bannerdata.map((value, index) => (
            <Image src={value.Image} key={index} />
          ))}
        </div>

        <div className="py-12 flex flex-col justify-center gap-6 mx-auto w-full items-center">
          <Divider orientation="horizontal" />
          <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center px-2">
            <h6 className="font-bold md:text-2xl text-xl leading-8">
              {`love our`}
              <span className="text-redtheme">Works?</span>
              {` let’s Collab!`}
            </h6>
            <Button
              variant="solid"
              className="w-60 rounded-full bg-redtheme text-white capitalize text-center"
            >
              get started
            </Button>
          </div>
          <Divider orientation="horizontal" />
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
