import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";

const Customizecard = ({ value }) => {
  return (
    <Card shadow="sm" className="rounded-none md:w-[23rem]">
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          width="100%"
          alt={value.Image}
          className="w-full object-cover h-[23rem]"
          src={value.Image}
        />
        <div className="bg-greentheme flex justify-center items-center">
          <p className="uppercase text-white font-semibold leading-5 p-3">
            {value.Name}
          </p>
        </div>
      </CardBody>
      <CardFooter className="justify-around items-center bg-redtheme rounded-none">
        <div>
          <p className="text-white font-bold text-xl leading-7">
            {value.Influencer}
          </p>
          <p className="uppercase text-[0.64rem] font-semibold text-white">
            Influencers
          </p>
        </div>
        <div>
          <p className="text-white font-bold text-xl leading-7">
            {value.Socialmediareach}
          </p>
          <p className="uppercase text-[0.64rem] font-semibold text-white">
            Social media reach
          </p>
        </div>
        <div>
          <p className="text-white font-bold text-xl leading-7">
            {value.Engagement}
          </p>
          <p className="uppercase text-[0.64rem] font-medium text-white">
            engagement
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Customizecard;
