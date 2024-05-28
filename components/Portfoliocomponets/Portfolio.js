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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,

  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

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
import influencerregi from "../../public/Homeasset/influencerregi.png";
import brandregi from "../../public/Homeasset/brandregi.png";



const InfluencerRegistrationForm = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start gap-2 py-4">
        <h6 className="text-2xl font-bold leading-7">
          Hey <span className="text-redtheme">Influencer!</span>
        </h6>
        <p className="text-sm capitalize font-medium text-foreground-500">
          Fill out the required details.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Input
          radius="sm"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Page Name"
          type="text"
          label={
            <p className="text-black font-medium">
              Page Name<span className="text-redtheme">*</span>
            </p>
          }
        />
        <Input
          radius="sm"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Number of followers"
          type="text"
          label={
            <p className="text-black font-medium">
              Number of followers<span className="text-redtheme">*</span>
            </p>
          }
        />
        <Input
          radius="sm"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Page URL"
          type="text"
          label={
            <p className="text-black font-medium">
              Page URL<span className="text-redtheme">*</span>
            </p>
          }
        />
        <Select
          labelPlacement="outside"
          variant="bordered"
          placeholder="Content Language"
          radius="sm"
          size="md"
          label={
            <p className="text-black font-medium">
              Content Language<span className="text-redtheme">*</span>
            </p>
          }
        >
          <SelectItem>optional</SelectItem>
        </Select>
        <Select
          labelPlacement="outside"
          variant="bordered"
          placeholder="Category"
          radius="sm"
          size="md"
          label={
            <p className="text-black font-medium">
              Category<span className="text-redtheme">*</span>
            </p>
          }
        >
          <SelectItem>optional</SelectItem>
        </Select>
        <Input
          radius="sm"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Phone Number"
          type="text"
          label={
            <p className="text-black font-medium">
              Phone Number<span className="text-redtheme">*</span>
            </p>
          }
        />
      </div>
    </div>
  );
};

const BrandRegistrationForm = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start gap-2 py-4">
        <h6 className="text-2xl font-bold leading-7">
          Hey <span className="text-redtheme">Hey Brand owner!</span>
        </h6>
        <p className="text-sm capitalize font-medium text-foreground-500">
          Fill out the required details.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Input
          radius="sm"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Point of contact name"
          type="text"
          label={
            <p className="text-black font-medium">
              Point of contact name<span className="text-redtheme">*</span>
            </p>
          }
        />
        <Input
          radius="sm"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Social Media Link"
          type="text"
          label={
            <p className="text-black font-medium">
              Social Media Link<span className="text-redtheme">*</span>
            </p>
          }
        />
        <Input
          radius="sm"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Website URL"
          type="text"
          label={
            <p className="text-black font-medium">
              Website URL<span className="text-redtheme">*</span>
            </p>
          }
        />
        <Select
          labelPlacement="outside"
          variant="bordered"
          placeholder="Instagram Page Link"
          radius="sm"
          size="md"
          label={
            <p className="text-black font-medium">
              Instagram Page Link<span className="text-redtheme">*</span>
            </p>
          }
        >
          <SelectItem>optional</SelectItem>
        </Select>
        <Select
          labelPlacement="outside"
          variant="bordered"
          placeholder="Category"
          radius="sm"
          size="md"
          label={
            <p className="text-black font-medium">
              Category<span className="text-redtheme">*</span>
            </p>
          }
        >
          <SelectItem>optional</SelectItem>
        </Select>
        <Input
          radius="sm"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Phone Number"
          type="text"
          label={
            <p className="text-black font-medium">
              Phone Number<span className="text-redtheme">*</span>
            </p>
          }
        />
      </div>
    </div>
  );
};

const Portfolio = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [RegistationTab, SetRegistationTab] = useState("Tab");

  const [selectedtab, Setselecttab] = useState("food bloggers");
  const [selectedState, SetselectState] = useState("Goa");
  const router=useRouter()

  const handleRegistration = () => {
    // Perform any registration logic here
    onOpenChange(false); // Close the modal after registration
  };




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

    <>
    <motion.div   initial={{opacity:0.6}}
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
              <span className="text-redtheme ml-2">Works?</span>
              {` let’s Collab!`}
            </h6>
            <Button
             onPress={onOpen}
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
    


    <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        backdrop="blur"
        onClose={() => SetRegistationTab("Tab")}
        size="4xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-8 text-center capitalize text-xl font-semibold">
              {RegistationTab === "Tab" ? "Who are you?" : "Registration"}
            </ModalHeader>
            <ModalBody>
              {RegistationTab === "Tab" ? ( // Render tab selection
                <div className="flex gap-24 justify-center items-center ">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-sm font-bold uppercase">An Influencer</p>
                    <Image
                      onClick={() => SetRegistationTab("Influencer")}
                      className="h-72 w-72 cursor-pointer hover:ring-2 hover:rounded-lg hover:ring-greentheme"
                      src={influencerregi}
                      alt="influencerregi"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-sm font-bold uppercase">a brand</p>
                    <Image
                      onClick={() => SetRegistationTab("Brand")}
                      className="h-72 w-72 cursor-pointer hover:ring-2 hover:rounded-lg hover:ring-greentheme"
                      src={brandregi}
                      alt="brandregi"
                    />
                  </div>
                </div>
              ) : // Render appropriate registration form based on tab selection
              RegistationTab === "Influencer" ? (
                <InfluencerRegistrationForm />
              ) : (
                <BrandRegistrationForm />
              )}
            </ModalBody>
            <ModalFooter className="flex justify-center items-center mt-4">
              <Button
                variant="solid"
                className="bg-redtheme text-white rounded-full w-60"
                onPress={RegistationTab === "Tab" ? "" : handleRegistration}
              >
                {RegistationTab === "Tab" ? "Proceed" : "Submit"}
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>



    </>
  );
};

export default Portfolio;
