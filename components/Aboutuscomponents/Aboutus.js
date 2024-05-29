"use client";
import React from "react";
import positivewomen from "../../public/Aboutusasset/positivewomen.png";
import handsmartphone from "../../public/Aboutusasset/handsmartphone.png";
import card1 from "../../public/Aboutusasset/card1.png";
import card2 from "../../public/Aboutusasset/card2.png";
import card3 from "../../public/Aboutusasset/card3.png";
import { motion } from "framer-motion";

import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";

const Aboutus = () => {
  return (
    <motion.div   initial={{opacity:0.7}}
    whileInView={{opacity:1}}
    transition={{ duration: 0.5 }} className="flex flex-col justify-center items-center w-11/12 gap-8 mx-auto ">
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration: 0.8 }}
       className="py-12 flex flex-col justify-center items-center gap-4 w-full">
        <h2 className="font-bold md:text-4xl text-2xl leading-8 capitalize">
          About <span className="text-redtheme"> BrandSaga.</span>
        </h2>
        <p className="text-sm font-medium leading-4 text-foreground-700 capitalize">
          Let’s get to know us!
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 md:gap-12 gap-4 place-content-start items-start">
        <div>
          <h6 className="text-4xl font-semibold">
            Who do we see<br></br>{" "}
            <span className="text-redtheme">ourselves</span> as?
          </h6>
        </div>
        <div>
          <p className="text-justify md:break-auto break-all font-medium text-sm">
            {` Your ultimate destination for digital promotions! We specialize in
            influencer/Celebrity marketing and social media marketing to help
            your brand reach its full potential in the digital space.`}
          </p>
        </div>
        <div>
          <p className="text-justify font-medium text-sm">
            {`  we believe that every brand has a unique story to tell, and we are
            here to help you craft a digital saga that captivates your audience
            and enhances your brand's online presence.`}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1  md:gap-12 gap-20 md:place-content-start place-content-center md:items-start items-center py-12">
        <div className="relative">
          <Image src={positivewomen} alt="positivewomen" />
          <Image
            className="md:h-32 md:w-60 w-40 h-24 absolute -bottom-12 md:-right-8 -right-3"
            src={handsmartphone}
            alt="handsmartphone"
          />
        </div>

        <div className="flex flex-col justify-start items-end gap-2">
          <Card className="lg:w-[30rem]">
            <CardBody className="flex justify-start items-center w-full flex-row gap-4 p-3">
              <div className="flex  justify-center items-center md:h-20 md:w-20 h-14 w-14 bg-greentheme rounded-full">
                <Image
                  className="md:h-12 md:w-12 h-8 w-8"
                  src={card1}
                  alt="card1"
                />
              </div>
              <div className="lg:w-2/4 w-3/4 flex flex-col justify-start items-start gap-1">
                <h6 className="font-bold text-sm capitalize">Targeted Reach</h6>
                <p className="text-xs">{`We connect businesses with influencers/Celebrities whose audiences match their target.`}</p>
              </div>
            </CardBody>
          </Card>
          <Card className="lg:w-[30rem]">
            <CardBody className="flex justify-start items-center w-full flex-row gap-4 p-3">
              <div className="flex  justify-center items-center md:h-20 md:w-20 h-14 w-14 bg-greentheme rounded-full">
                <Image
                  className="md:h-12 md:w-12 h-8 w-8"
                  src={card2}
                  alt="card1"
                />
              </div>
              <div className="md:w-2/4 w-3/4 flex flex-col justify-start items-start gap-1">
                <h6 className="font-bold text-sm capitalize">
                  Effortless Collab
                </h6>
                <p className="text-xs">{`We simplify finding, vetting, and collaborating with influencers/Celebrities, saving time and hassle.`}</p>
              </div>
            </CardBody>
          </Card>
          <Card className="lg:w-[30rem]">
            <CardBody className="flex justify-start items-center w-full flex-row gap-4 p-3">
              <div className="flex  justify-center items-center md:h-20 md:w-20 h-14 w-14 bg-greentheme rounded-full">
                <Image
                  className="md:h-12 md:w-12 h-8 w-8"
                  src={card3}
                  alt="card1"
                />
              </div>
              <div className="md:w-2/4 w-3/4 flex flex-col justify-start items-start gap-1">
                <h6 className="font-bold text-sm capitalize">Clear Results</h6>
                <p className="text-xs">{`Our analytics tools track influencer/Celebrity campaign performance for informed decisions.`}</p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 place-content-evenly gap-4  w-full py-12 mx-auto  items-center">
        <div className="flex flex-col justify-start items-start gap-2">
          <h6 className="text-3xl font-bold uppercase leading-8">100+</h6>
          <p className="text-sm font-bold leading-6 uppercase text-redtheme">
            happy clients
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <h6 className="text-3xl font-bold uppercase leading-8">200+</h6>
          <p className="text-sm font-bold leading-6 uppercase text-redtheme">
            Projects
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <h6 className="text-3xl font-bold uppercase leading-8">5.7M+</h6>
          <p className="text-sm font-bold leading-6 uppercase text-redtheme">
            Impressions
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <h6 className="text-3xl font-bold uppercase leading-8">5+</h6>
          <p className="text-sm font-bold leading-6 uppercase text-redtheme">
            years experience
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Aboutus;
