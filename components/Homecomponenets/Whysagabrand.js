"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Rectangle from "../../public/Homeasset/Rectangle.png";
import Influencer from "../../public/Homeasset/Influencer.png";
import Rocket from "../../public/Homeasset/Rocket.png";
import Eclipse1 from "../../public/Homeasset/Eclipse1.png";
import Eclipse2 from "../../public/Homeasset/Eclipse2.png";
import Eclipse3 from "../../public/Homeasset/Eclipse3.png";
import Eclipse4 from "../../public/Homeasset/Eclipse4.png";
import Expertise from "../../public/Homeasset/Expertise.png";
import Creativex from "../../public/Homeasset/Creativex.png";
import Resultdriven from "../../public/Homeasset/Resultdriven.png";
import Customsol from "../../public/Homeasset/Customsol.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa6";
import { Avatar, Divider } from "@nextui-org/react";
import influencerlogo from "../../public/Homeasset/influencerlogo.png";
import influencerlogo2 from "../../public/Homeasset/influencerlogo2.png";
import influencerlogo3 from "../../public/Homeasset/influencerlogo3.png";
import influencerlogo4 from "../../public/Homeasset/influencerlogo4.png";
import Client1 from '../../public/Review/Client1.jpeg'
import Client2 from '../../public/Review/Client2.jpeg'
import Client3 from '../../public/Review/Client3.jpeg'
import Client4 from '../../public/Review/Client4.jpeg'
import Client5 from '../../public/Review/Client5.jpeg'
import Brand1 from '../../public/Review/Brand1.jpeg'
import Brand2 from '../../public/Review/Brand2.jpeg'
import Brand3 from '../../public/Review/Brand3.jpeg'
import Brand4 from '../../public/Review/Brand4.jpeg'

const Whysagabrand = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);


const reviews=[
  
  { 
    name:'Kuchipudi Venkat',
     title:'CEO',
     pic:Client1,
     text:'As the CEO of multiple restaurant brands, working with BRANDSAGA has been a transformative experience for our marketing strategy. Their team of professionals has a profound understanding of the influencer landscape, which has been crucial in executing campaigns that resonate deeply with our target audiences.'
},
  { 
    name:'Harleys CEO Suresh Naik',
    title:"CEO",
     pic:Client2,
     text:`Partnering with BRANDSAGA has elevated our marketing initiatives to new heights. Their expertise in influencer collaboration and strategic marketing has not only enhanced our brand's visibility but has also significantly contributed to our overall business growth. I highly recommend BRANDSAGA to any business looking to forge meaningful connections with their audience through influencer marketing`
},
  { 
    name:'F cafe and Bar',
    title:"Cafe",
     pic:Client3,
     text:`The content created in collaboration with their handpicked influencers has not only been authentic and engaging but has also translated into tangible outcomes. We've seen a significant increase in our social media engagement rates and a noticeable boost in foot traffic across our locations. Their ability to track campaign performance with comprehensive metrics has allowed us to see the ROI clearly and adjust our strategies dynamically.`
},
  { 
    name:'String Metaverse',
    title:"Brand",
     pic:Client4,
     text:`Their selection of influencers was impeccable. BRANDSAGA has access to a diverse network of influencers, and they matched us with individuals who not only had significant reach but also aligned perfectly with our brand values. This alignment ensured that the promotions felt genuine and resonated strongly with potential customers, driving both engagement and conversion.`
},
  { 
    name:'Brandorigin',
    title:"Brand",
     pic:Client5,
     text:`The campaign performance was tracked meticulously, and the transparency with which data was shared helped us understand the impact of each element of the campaign. This data-driven approach was invaluable as it allowed us to iterate quickly and optimize our strategies in real time`
},

]




  const brands = [
    {
      brandimage: Client3,
    },
    {
      brandimage: Client4,
    },
    {
      brandimage: Client5,
    },
    {
      brandimage: Brand1,
    },
    {
      brandimage: Brand2,
    },
    {
      brandimage: Brand3,
    },
    {
      brandimage: Brand4,
    },
  ];

  useEffect(() => {
    if (!api) return;

    const totalItems = api.scrollSnapList().length;
    setCount(totalItems);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <div className="w-full flex justify-center items-center gap-12 overflow-hidden py-16">
        <div className="lg:w-1/2 flex flex-col justify-center items-center gap-12">
          <h2 className="font-bold text-3xl leading-8 capitalize px-2">
            why choose <span className="text-redtheme">brandSaga?</span>
          </h2>

          <div className="w-full grid md:grid-cols-2 gap-12 px-6 md:items-center items-start md:place-items-center place-content-start">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="relative flex justify-center items-center">
                <Image className="h-24 w-24" src={Eclipse1} alt="Eclipse1" />
                <Image
                  className="absolute top-6 w-12 h-12"
                  src={Expertise}
                  alt="Expertise"
                />
              </div>
              <h6 className="uppercase font-bold text-sm">Expertise</h6>
              <p className="text-center text-xs">
                Our team of experts brings years of experience and success in
                digital marketing.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <div className="relative flex justify-center items-center">
                <Image className="h-24 w-24" src={Eclipse2} alt="Eclipse2" />
                <Image
                  className="absolute top-6 w-12 h-12"
                  src={Customsol}
                  alt="Expertise"
                />
              </div>
              <h6 className="uppercase font-bold text-sm">Custom Solutions</h6>
              <p className="text-center text-xs md:w-52">{`Every brand is unique, and we tailor our strategies to suit your specific needs.`}</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <div className="relative flex justify-center items-center">
                <Image className="h-24 w-24" src={Eclipse3} alt="Eclipse3" />
                <Image
                  className="absolute top-6 w-12 h-12"
                  src={Resultdriven}
                  alt="Expertise"
                />
              </div>
              <h6 className="uppercase font-bold text-sm">Results-Driven</h6>
              <p className="text-center text-xs">{`We are committed to delivering measurable results that align with your business goals.`}</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <div className="relative flex justify-center items-center">
                <Image className="h-24 w-24" src={Eclipse4} alt="Eclipse4" />
                <Image
                  className="absolute top-6 w-12 h-12"
                  src={Creativex}
                  alt="Expertise"
                />
              </div>
              <h6 className="uppercase font-bold text-sm">
                Creative Excellence
              </h6>
              <p className="text-center text-xs md:w-52">{`From concept to execution, we bring creativity and innovation to every project.`}</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 pl-16 relative hidden md:hidden lg:block">
          <div>
            <Image className="z-0" src={Rectangle} alt="Rectangle" />
          </div>
          <div>
            <Image
              className="absolute top-20 right-20 w-[32rem] h-[32rem] z-20"
              src={Influencer}
              alt="Influencer"
            />
          </div>
          <div>
            <Image
              className="absolute top-72 right- w-[32rem] h-[32rem] z-10"
              src={Rocket}
              alt="Rocket"
            />
          </div>
        </div>
      </div>
      {/* crousel */}
      <div className="flex flex-col justify-center items-start gap-4 mt-16">
        <div className="w-11/12 mx-auto">
          <h6 className="font-bold text-3xl mt-8">
          Our Client 
            <span className="text-redtheme ml-2">Testimonials</span>{" "}
          </h6>
        </div>
      </div>
      <div className="flex justify-center items-center w-11/12  mx-auto  mt-4">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
          className=" w-full  py-4   "
        >
          <CarouselContent>
            {reviews.map((value, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-1/3 sm:basis-1/2   h-auto"
              >
                <div>
                  <Card className="rounded-lg border  border-foreground-300 flex justify-center items-start">
                    <CardContent className="flex flex-col gap-4  items-center justify-center p-5">
                      <div className="flex justify-start items-center gap-2 mr-auto">
                        <Image
                          className="w-16 h-16 rounded-full"
                          size="lg"
                          src={value.pic}
                        />
                        <div>
                          <h6 className="text-sm font-bold">{value.name}</h6>
                          <p className="text-xs text-foreground-500 font-bold">
                           {value.title}
                          </p>
                        </div>
                      </div>
                      <p className="text-justify lg:h-44 md:h-48 h-52 break-all leading-5 font-medium text-xs">{value.text}</p>
                      <Divider
                        orientation="horizontal"
                        className="w-11/12 mx-auto bg-foreground-400"
                      />
                      <div className="flex justify-center items-center gap-2 text-2xl">
                        <FaStar className="text-[#FFB300]" />
                        <FaStar className="text-[#FFB300]" />
                        <FaStar className="text-[#FFB300]" />
                        <FaStar className="text-[#FFB300]" />
                        <FaStar className="text-[#FFB300]" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-[-15px] w-full flex justify-center items-center">
            {reviews.map((value, index) => (
              <div
                key={index}
                className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
                  current === index + 1 ? "bg-buttoncolor" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>

      {/* top brands who choose us! */}

      <div className="flex flex-col w-11/12 mx-auto mt-4 py-16">
        <div>
          <h6 className="text-3xl font-bold left-8 capitalize">
            top <span className="text-redtheme">brands</span> who choose us!
          </h6>
          <div className="grid lg:grid-cols-7 md:grid-cols-7 grid-cols-2 gap-2 mt-12 overflow-hidden">
            {brands.map((Element, index) => (
              <Image
                key={index}
                src={Element.brandimage}
                className="w-60 h-40 object-fill"
                alt="brandimage"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Whysagabrand;
