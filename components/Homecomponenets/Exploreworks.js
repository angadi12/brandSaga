"use client";
import { Button } from "@nextui-org/react";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Video from "next-video";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePause } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";
import { FaPlay } from "react-icons/fa";


const Exploreworks = () => {
  const [selectedtab, Setselecttab] = useState("Top Rated");
  const [fillterData, SetFillterData] = useState([]);
  const [Hoverindex,Sethoverindex]=useState(null)

  const videoRefs = useRef([]);

  // Function to handle play action
  const handlePlay = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  // Function to handle pause action
  const handlePause = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
    }
  };

  const activetab =
    "md:px-8 m-0 md:w-60 text-xs md:text-sm rounded-md text-white bg-redtheme font-semibold capitalize";
  const unactivetab =
    "md:px-8 m-0 md:w-60 text-xs md:text-sm rounded-md text-foreground-700 font-semibold capitalize";

  const evenitem = "flex-col";
  const odditem = "md:flex-col-reverse flex-col";

  const tabelement = [
    "Top Rated",
    "food blogger",
    "Events",
    "E-commerce",
    "PUB & BAR",
    "movie promotions",
    "lifestyle",
    "content creators",
    "fitness",
    "Couple",
    "mom blogger",
    "more",
  ];

  const data = [
    {
      videolink:
        "https://res.cloudinary.com/dipr7y36n/video/upload/v1714141292/BRAND-SAGA/Herosection/Videos/zm2zhhouhfjkwm9ykjio.mp4",
      tag: "#trending #insta",
      username: "",
      category: "food blogger",
      style: "flex-col",
    },
    {
      videolink:
        "https://res.cloudinary.com/dipr7y36n/video/upload/v1714141292/BRAND-SAGA/Herosection/Videos/zm2zhhouhfjkwm9ykjio.mp4",
      tag: "#trending #insta",
      username: "",
      category: "Top Rated",
      style: "flex-col",
    },
    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1715844655/BRAND-SAGA/FOOD/WhatsApp_Video_2024-05-06_at_5.12.57_PM_qtnpiv.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "food blogger",
      style: "flex-col",
    },
    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1715844602/BRAND-SAGA/FOOD/WhatsApp_Video_2024-05-06_at_5.12.56_PM_a4n31l.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "food blogger",
      style: "flex-col",
    },
    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1715844602/BRAND-SAGA/FOOD/WhatsApp_Video_2024-05-06_at_5.12.56_PM_a4n31l.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "Top Rated",
      style: "flex-col",
    },
    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1715844528/BRAND-SAGA/FOOD/WhatsApp_Video_2024-05-06_at_5.12.56_PM_r0egk4.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "food blogger",
      style: "flex-col",
    },
    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1715845963/BRAND-SAGA/Event/VID-20240516-WA0003_wgxc8d.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "Events",
      style: "flex-col",
    },
    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1715845963/BRAND-SAGA/Event/VID-20240516-WA0003_wgxc8d.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "Top Rated",
      style: "flex-col",
    },
    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1714141967/BRAND-SAGA/Herosection/Videos/z3oee6ryt9eymjyrukrq.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "Events",
      style: "flex-col",
    },

    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1715845483/BRAND-SAGA/E-commerce/WhatsApp_Video_2024-05-06_at_5.15.14_PM_hia9gx.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "E-commerce",
      style: "flex-col",
    },
    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1715845483/BRAND-SAGA/E-commerce/WhatsApp_Video_2024-05-06_at_5.15.14_PM_hia9gx.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "Top Rated",
      style: "flex-col",
    },
    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1715845435/BRAND-SAGA/E-commerce/WhatsApp_Video_2024-05-06_at_5.15.13_PM_evbbvk.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "E-commerce",
      style: "flex-col",
    },
    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1715845405/BRAND-SAGA/E-commerce/WhatsApp_Video_2024-05-06_at_5.15.11_PM_dqwepa.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "E-commerce",
      style: "flex-col",
    },
    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1715845356/BRAND-SAGA/PUB-BAR/VID-20240516-WA0002_zmufny.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "PUB & BAR",
      style: "flex-col",
    },
    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1715845181/BRAND-SAGA/PUB-BAR/WhatsApp_Video_2024-05-06_at_5.13.52_PM_bg40ja.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "PUB & BAR",
      style: "flex-col",
    },
    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1715845124/BRAND-SAGA/PUB-BAR/VID-20240516-WA0001_hxbldg.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "PUB & BAR",
      style: "flex-col",
    },
    {
      videolink: `https://res.cloudinary.com/dipr7y36n/video/upload/v1715846022/BRAND-SAGA/Movie-promotion/WhatsApp_Video_2024-05-07_at_10.29.41_AM_mgrcn5.mp4`,
      tag: "#trending #insta",
      username: "",
      category: "movie promotions",
      style: "flex-col",
    },

    {
      videolink:
        "https://res.cloudinary.com/dipr7y36n/video/upload/v1714127690/BRAND-SAGA/Herosection/Videos/qobrb5god6tcxnc240nt.mp4",
      tag: "#trending #insta",
      username: "",
      category: "lifestyle",
      style: "md:flex-col-reverse flex-col",
    },
  ];

  useEffect(() => {
    if (selectedtab) {
      const filteredData = data.filter((item) => item.category === selectedtab);
      SetFillterData(filteredData);
    } else {
      // If no tab is selected, show all data
      SetFillterData(data);
    }
  }, [selectedtab]);

  return (
    <div className="flex flex-col w-11/12 mx-auto mt-4">
      <div>
        <h6 className="text-3xl font-bold leading-8 capitalize ">
          explore our <span className="text-redtheme">works</span> by
          categories!
        </h6>

        <Carousel
          opts={{
            align: "start",
          }}
          className="lg:w-full md:w-11/12 mx-auto mt-4"
        >
          <CarouselContent>
            {tabelement.map((element, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/6 basis-1/3 lg:basis-1/8"
              >
                <div className="">
                  <Card className="border-none lg:w-48 md:w-[8rem] w-28 ">
                    <CardContent className="flex items-center gap-0 justify-center p-1 capitalize">
                      <Button
                        onPress={() => Setselecttab(element)}
                        className={
                          selectedtab === element ? activetab : unactivetab
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
      </div>
      <div className="w-full h-auto py-12">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 500: 2, 800: 3, 900: 4 }}
        >
          <Masonry gutter="30px">
            {fillterData.map((value, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? evenitem : odditem
                } flex justify-center items-start gap-2`}
              >
                <div  className="ring-2 ring-redtheme rounded-lg relative flex justify-center items-center">
                  <video
                    className="rounded-md"
                    src={value.videolink}
                    ref={(el) => (videoRefs.current[index] = el)}
                  ></video>
                  <div onClick={()=>Sethoverindex(index)} onMouseLeave={()=>Sethoverindex(null)}  className="absolute w-16 h-16 bg-white rounded-full flex justify-center items-center">
                  {videoRefs.current[index] && videoRefs.current[index].paused ? (
                    <FaPlay size={20} className="text-greentheme" onClick={() => handlePlay(index)} />
                  ) : (
                    <IoMdPause size={20} className="text-redtheme" onClick={() => handlePause(index)} />
                  )}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold capitalize">
                    {value.username}
                  </p>
                  {/* <span className="text-xs text-greentheme">{value.tag}</span> */}
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Exploreworks;
