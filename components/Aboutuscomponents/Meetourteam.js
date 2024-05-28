'use client'
import React, { useState } from "react";
import Rectanglebackground from "../../public/Aboutusasset/Rectanglebackground.png";
import icon1 from "../../public/Aboutusasset/icon1.png";
import icon2 from "../../public/Aboutusasset/icon2.png";
import icon3 from "../../public/Aboutusasset/icon3.png";
import icon4 from "../../public/Aboutusasset/icon4.png";
import employee from "../../public/Aboutusasset/employee.png";
import Thread from "../../public/Aboutusasset/Thread.png";
import Facebook from "../../public/Aboutusasset/Facebook.png";
import Instagram from "../../public/Aboutusasset/Instagram.png";
import Linkdin from "../../public/Aboutusasset/Linkdin.png";
import Image from "next/image";
import {Button, Card, CardBody, CardFooter, Divider} from "@nextui-org/react";
import influencerregi from "../../public/Homeasset/influencerregi.png";
import brandregi from "../../public/Homeasset/brandregi.png";
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


const InfluencerRegistrationForm = () => {

  return (
    <div>
      <div className="flex flex-col justify-start items-start md:gap-2 md:py-4 py-2">
        <h6 className="md:text-2xl font-bold leading-7">
          Hey <span className="text-redtheme">Influencer!</span>
        </h6>
        <p className="md:text-sm text-xs capitalize font-medium text-foreground-500">
          Fill out the required details.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
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
      <div className="flex flex-col justify-start items-start md:gap-2 md:py-4 py-2">
        <h6 className="md:text-2xl font-bold leading-7">
          Hey <span className="text-redtheme">Hey Brand owner!</span>
        </h6>
        <p className="md:text-sm text-xs capitalize font-medium text-foreground-500">
          Fill out the required details.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
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

const Meetourteam = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [RegistationTab, SetRegistationTab] = useState("Tab");




  const handleRegistration = () => {
    // Perform any registration logic here
    onOpenChange(false); // Close the modal after registration
  };


  return (

    <>
    <div>
      <div className="w-full relative">
        <Image className="h-[80vh] md:h-auto object-cover" src={Rectanglebackground} alt="Rectanglebackground"/>
        <div class="absolute md:top-[50%] top-[50%] flex flex-col justify-center items-center gap-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full">
            <div>
             <h6 className="text-center text-white font-bold text-2xl capitalize leading-8 ">how we ensure that we find the perfect match?</h6>
             <p className="text-center text-sm text-white">At BrandSaga, we understand the importance of selecting the right influencers/Celebrity to represent your brand.</p>
            </div>
            <div className="md:w-11/12 mx-auto grid md:grid-cols-4 grid-cols-2 items-center md:gap-12 gap-2 place-content-center">
                <Image src={icon1} alt="icon1"/>
                <Image src={icon2} alt="icon2"/>
                <Image src={icon3} alt="icon3"/>
                <Image src={icon4} alt="icon4"/>
            </div>
        </div>
      </div>
      <div className="py-16 w-11/12 mx-auto flex flex-col justify-start items-start gap-4 ">
          <h6 className="text-3xl font-bold leading-8 capitalize py-8">meet our<span className="text-redtheme"> team!</span></h6>
          <div className="w-full mx-auto grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 place-content-center justify-items-center gap-16 items-center">
          <Card shadow="sm" className="w-72 relative">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="employee"
              className="w-full object-cover h-48"
              src={employee}
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-[30%]  w-3/4 p-2 h-auto rounded-2xl bg-greentheme">
              <h6 className="text-sm uppercase text-white font-semibold leading-7 text-center">Employee Name</h6>
              <p className="text-xs text-white text-center">Campaign Strategist</p>
            </div>
          </CardBody>
          <CardFooter className="text-small justify-around mt-8">
               <Image className="h-12 w-12" src={Facebook} alt="facebook"/>
               <Image  className="h-12 w-12" src={Instagram} alt="Instagram"/>
               <Image  className="h-12 w-12" src={Linkdin} alt="Linkdin"/>
               <Image  className="h-12 w-12" src={Thread} alt="Thread"/>
          </CardFooter>
        </Card>
          <Card shadow="sm" className="w-72 relative">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="employee"
              className="w-full object-cover h-48"
              src={employee}
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-[30%]  w-3/4 p-2 h-auto rounded-2xl bg-greentheme">
              <h6 className="text-sm uppercase text-white font-semibold leading-7 text-center">Employee Name</h6>
              <p className="text-xs text-white text-center">Campaign Strategist</p>
            </div>
          </CardBody>
          <CardFooter className="text-small justify-around mt-8">
               <Image className="h-12 w-12" src={Facebook} alt="facebook"/>
               <Image  className="h-12 w-12" src={Instagram} alt="Instagram"/>
               <Image  className="h-12 w-12" src={Linkdin} alt="Linkdin"/>
               <Image  className="h-12 w-12" src={Thread} alt="Thread"/>
          </CardFooter>
        </Card>
          <Card shadow="sm" className="w-72 relative">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="employee"
              className="w-full object-cover h-48"
              src={employee}
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-[30%]  w-3/4 p-2 h-auto rounded-2xl bg-greentheme">
              <h6 className="text-sm uppercase text-white font-semibold leading-7 text-center">Employee Name</h6>
              <p className="text-xs text-white text-center">Campaign Strategist</p>
            </div>
          </CardBody>
          <CardFooter className="text-small justify-around mt-8">
               <Image className="h-12 w-12" src={Facebook} alt="facebook"/>
               <Image  className="h-12 w-12" src={Instagram} alt="Instagram"/>
               <Image  className="h-12 w-12" src={Linkdin} alt="Linkdin"/>
               <Image  className="h-12 w-12" src={Thread} alt="Thread"/>
          </CardFooter>
        </Card>
          <Card shadow="sm" className="w-72 relative">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="employee"
              className="w-full object-cover h-48"
              src={employee}
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-[30%]  w-3/4 p-2 h-auto rounded-2xl bg-greentheme">
              <h6 className="text-sm uppercase text-white font-semibold leading-7 text-center">Employee Name</h6>
              <p className="text-xs text-white text-center">Campaign Strategist</p>
            </div>
          </CardBody>
          <CardFooter className="text-small justify-around mt-8">
               <Image className="h-12 w-12" src={Facebook} alt="facebook"/>
               <Image  className="h-12 w-12" src={Instagram} alt="Instagram"/>
               <Image  className="h-12 w-12" src={Linkdin} alt="Linkdin"/>
               <Image  className="h-12 w-12" src={Thread} alt="Thread"/>
          </CardFooter>
        </Card>
          </div>
      </div>
      <div className="py-12 flex flex-col justify-center gap-4 mx-auto w-11/12 items-center">
        <Divider orientation="horizontal"/>
        <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center px-2">
          <h6 className="font-bold md:text-2xl text- md:leading-8">{`Ready to elevate your brand's digital`}<br></br> presence? Contact <span className="text-redtheme mr-2">BrandSaga</span>today to <br></br>{` start your digital saga!`}</h6>
          <Button  onPress={onOpen} variant="solid" className="w-60 rounded-full bg-redtheme text-white capitalize text-center">get started</Button>
        </div>
        <Divider orientation="horizontal"/>
      </div>
    </div>


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
              <div className="flex md:gap-24 gap-4 md:flex-row flex-col justify-center items-center ">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-sm font-bold uppercase">An Influencer</p>
                    <Image
                      onClick={() => SetRegistationTab("Influencer")}
                      className="md:h-72 md:w-72 w-40 h-40 cursor-pointer hover:ring-2 hover:rounded-lg hover:ring-greentheme"
                      src={influencerregi}
                      alt="influencerregi"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-sm font-bold uppercase">a brand</p>
                    <Image
                      onClick={() => SetRegistationTab("Brand")}
                      className="md:h-72 md:w-72 w-40 h-40 cursor-pointer hover:ring-2 hover:rounded-lg hover:ring-greentheme"
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

export default Meetourteam;
