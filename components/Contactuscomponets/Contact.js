"use client";

import React, { useState } from "react";
import Image from "next/image";
import Conatcticon from "../../public/Contactusasset/Conatcticon.png";
import Mailicon from "../../public/Contactusasset/Mailicon.png";
import Location from "../../public/Contactusasset/Location.png";
import { Card, CardBody, Input } from "@nextui-org/react";
import { Select, SelectItem, Textarea, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    serviceRequired: "",
    message: "",
  });

  const services = [
    { key: "service1", label: "Service 1" },
    { key: "service2", label: "Service 2" },
    { key: "service3", label: "Service 3" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceChange = (selectedKeys) => {
    const selectedKey = Array.from(selectedKeys)[0];
    const selectedLabel = services.find(service => service.key === selectedKey).label;
    setFormData({
      ...formData,
      serviceRequired: selectedLabel,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.mobileNumber ||
      !formData.email ||
      !formData.serviceRequired
    ) {
      toast.error("Please fill out all required fields");
      return;
    }

    const sendForm = async () => {
      const response = await fetch("/api/Contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormData({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        serviceRequired: "",
        message: "",
      });
    };

    toast.promise(sendForm(), {
      loading: "Sending message...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    });
  };

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

      <div className="flex lg:flex-row flex-col md:w-11/12 w-full justify-center items-center gap-4 mx-auto">
        <Card className="md:w-[30rem] w-11/12">
          <CardBody className="flex justify-start items-center w-full flex-row gap-4 p-3">
            <div className="flex justify-center items-center h-16 w-16 bg-greentheme rounded-full">
              <Image className="h-10 w-10" src={Conatcticon} alt="card1" />
            </div>
            <div className="w-2/4 flex flex-col justify-start items-start gap-1">
              <h6 className="font-bold text-sm capitalize">call us</h6>
              <p className="text-xs">
                6304958891 <br />
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="md:w-[30rem] w-11/12">
          <CardBody className="flex justify-start items-center w-full flex-row gap-4 p-3">
            <div className="flex justify-center items-center h-16 w-16 bg-greentheme rounded-full">
              <Image className="h-10 w-10" src={Mailicon} alt="card1" />
            </div>
            <div className="w-2/4 flex flex-col justify-start items-start gap-1">
              <h6 className="font-bold text-sm capitalize">e-mail</h6>
              <p className="text-xs">
                Info@brandsaga.co.in <br />
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="md:w-[30rem] w-11/12">
          <CardBody className="flex justify-start items-center w-full flex-row gap-4 p-3">
            <div className="flex justify-center items-center h-16 w-16 bg-greentheme rounded-full">
              <Image className="h-10 w-10" src={Location} alt="card1" />
            </div>
            <div className="w-2/4 flex flex-col justify-start items-start gap-1">
              <h6 className="font-bold text-sm capitalize">address</h6>
              <p className="text-xs">{`Address : kakatiya hills, pragati nagar, Kukatpally-500090`}</p>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="flex lg:flex-row flex-col w-full justify-between items-start gap-4 mx-auto py-12">
        <div className="flex flex-col gap-4 justify-start items-start lg:w-2/4">
          <h6 className="capitalize md:text-3xl text-xl font-bold text-start">
            {`We're here to assist you. If you have any inquiries, feel free to ask!`}
          </h6>
          <div className="flex flex-col w-full justify-start items-start gap-4">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 place-content-center justify-between items-start">
                <Input
                  type="text"
                  name="firstName"
                  variant="bordered"
                  radius="sm"
                  className="w-full rounded-none"
                  size="lg"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastName"
                  variant="bordered"
                  radius="sm"
                  className="w-full rounded-none"
                  size="lg"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="mobileNumber"
                  variant="bordered"
                  radius="sm"
                  className="w-full rounded-none"
                  size="lg"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="email"
                  variant="bordered"
                  radius="sm"
                  className="w-full rounded-none"
                  size="lg"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full mt-4">
                <Select
                  name="serviceRequired"
                  label="Service Required"
                  variant="bordered"
                  size="md"
                  radius="sm"
                  className="w-full mx-auto"
                  selectedKeys={new Set([formData.serviceRequired])}
                  onSelectionChange={handleServiceChange}
                >
                  <SelectItem key="">Select a service</SelectItem>
                  {services.map((service) => (
                    <SelectItem key={service.key}>{service.label}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="w-full mt-4">
                <Textarea
                  name="message"
                  variant="bordered"
                  placeholder="Your message (Optional)"
                  className="w-full"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex justify-center items-center mt-4">
                <Button
                  type="submit"
                  className="w-60 rounded-full bg-redtheme text-white text-center"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-col gap-4 justify-center items-center lg:w-2/4 hidden lg:flex w-full">
          <iframe
            src={location}
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
      <Toaster />
    </motion.div>
  );
};

export default Contact;
