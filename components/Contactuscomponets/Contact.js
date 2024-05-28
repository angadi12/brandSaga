"use client";
import React from "react";
import Image from "next/image";
import Conatcticon from "../../public/Contactusasset/Conatcticon.png";
import Mailicon from "../../public/Contactusasset/Mailicon.png";
import Location from "../../public/Contactusasset/Location.png";
import { Card, CardBody, Input } from "@nextui-org/react";
import { Select, SelectItem, Textarea, Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const Contact = () => {
  const locationname = "kakatiya hills, pragati nagar,Kukatpally-500090";
  const location = `https://maps.google.com/maps?q=${locationname}&t=k&z=10&ie=UTF8&iwloc=&output=embed`;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center w-11/12 gap-8 mx-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 flex flex-col justify-center items-center gap-4"
      >
        <h2 className="font-bold text-4xl leading-8 capitalize">
          contact <span className="text-redtheme"> us!</span>
        </h2>
        <p className="text-sm text-center font-medium leading-4 text-foreground-700 capitalize">
          let’s get started! reach out to us, we will get the work done.
        </p>
      </motion.div>

      <div className="flex lg:flex-row flex-col md:w-11/12 w-full  justify-center items-center gap-4 mx-auto">
        <Card className="md:w-[30rem] w-11/12">
          <CardBody className="flex justify-start items-center w-full flex-row gap-4 p-3">
            <div className="flex  justify-center items-center h-16 w-16 bg-greentheme rounded-full">
              <Image className="h-10 w-10" src={Conatcticon} alt="card1" />
            </div>
            <div className="w-2/4 flex flex-col justify-start items-start gap-1">
              <h6 className="font-bold text-sm capitalize">call us</h6>
              <p className="text-xs">
                6304958891 <br></br>
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="md:w-[30rem] w-11/12">
          <CardBody className="flex justify-start items-center w-full flex-row gap-4 p-3">
            <div className="flex  justify-center items-center h-16 w-16 bg-greentheme rounded-full">
              <Image className="h-10 w-10" src={Mailicon} alt="card1" />
            </div>
            <div className="w-2/4 flex flex-col justify-start items-start gap-1">
              <h6 className="font-bold text-sm capitalize">e-mail</h6>
              <p className="text-xs">
                Info@brandsaga.co.in <br></br>
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="md:w-[30rem] w-11/12">
          <CardBody className="flex justify-start items-center w-full flex-row gap-4 p-3">
            <div className="flex  justify-center items-center h-16 w-16 bg-greentheme rounded-full">
              <Image className="h-10 w-10" src={Location} alt="card1" />
            </div>
            <div className="w-2/4 flex flex-col justify-start items-start gap-1">
              <h6 className="font-bold text-sm capitalize">address</h6>
              <p className="text-xs">{`Address : kakatiya hills, pragati nagar, Kukatpally-500090`}</p>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="flex lg:flex-row flex-col w-full  justify-between items-start gap-4 mx-auto py-12">
        <div className="flex flex-col gap-4 justify-start items-start lg:w-2/4">
          <h6 className="capitalize md:text-3xl text-xl font-bold text-start">
            {` We're here to assist you. If you have any inquiries, feel free to
            ask!`}
          </h6>
          <div className="flex flex-col w-full justify-start items-start gap-4">
            <div className="w-full  grid lg:grid-cols-2 grid-cols-1 gap-4 place-content-center justify-between items-start">
              <Input
                type="text"
                variant="bordered"
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                placeholder="First Name"
              />
              <Input
                type="text"
                variant="bordered"
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                placeholder="Last Name"
              />
              <Input
                type="text"
                variant="bordered"
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                placeholder="mobile Number"
              />
              <Input
                type="text"
                variant="bordered"
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                placeholder="Email address"
              />
            </div>
            <div className="w-full  ">
              <Select
                label="service required"
                variant="bordered"
                size="md"
                radius="sm"
                className=" w-full mx-auto"
              >
                <SelectItem></SelectItem>
              </Select>
            </div>
            <div className="w-full ">
              <Textarea
                isReadOnly
                variant="bordered"
                placeholder="your message (Optional)"
                className="w-full"
              />
            </div>
            <div className="w-full flex justify-center items-center mt-4 ">
              <Button className="w-60 rounded-full bg-redtheme text-white text-center">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className=" flex-col gap-4 justify-center items-center lg:w-2/4 hidden lg:flex w-full">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="520px"
                height="520px"
                id="gmap_canvas"
                src={location}
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
              />
              <br />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden md:hidden mx-auto  flex-col gap-4 justify-center items-enter md:w-2/4 w-full ">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="340px"
                height="520px"
                id="gmap_canvas"
                src={location}
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
              />
              <br />
            </div>
          </div>
        </div>
        <div className=" hidden lg:hidden md:flex flex-col gap-4 mx-auto justify-center items-enter  w-full ml-2">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="720px"
                height="520px"
                id="gmap_canvas"
                src={location}
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
              />
              <br />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
