"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import toast, { Toaster } from 'react-hot-toast';


const Chatbutton = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill out all required fields");
      return;
    }
      try {
        const response = await toast.promise(
          saveFormData(formData),
          {
            loading: 'Sending message...',
            success: <b>Message sent successfully!</b>,
            error: <b>Failed to send message. Please try again.</b>,
          }
        );
        if (response.ok) {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      } catch (error) {
        console.error("Error occurred:", error);
        toast.error("Failed to send message. Please try again.");
      }
  };

  const saveFormData = async (data) => {
    try {
      const response = await fetch("/api/Contactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      return response;
    } catch (error) {
      throw error;
    }
  };

  // const saveFormData = async (data) => {
  //   try {
  //     const response = await fetch("/api/Contactform", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     return response;
  //   } catch (error) {
  //     throw error;
  //   }
  // };


  return (
    <>
    <div className="fixed bottom-4 right-4 z-50 hidden md:block">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-greentheme font-medium    rounded-full text-center text-white">
            <BsChatDots /> Chat with us!
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {/* <SheetTitle>Contact <span className='text-buttoncolor'>us</span></SheetTitle> */}
            <SheetDescription>
              <form onSubmit={handleSubmit}>
                <div className="w-full justify-center items-start gap-4 ">
                  <div>
                    <h6 className="font-bold text-xl text-redtheme ">
                      Let’s <span className="text-greentheme">talk!</span>
                    </h6>
                    <p className="text-xs font-medium text-gray-500">
                      Provide the necessary details.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 w-full mt-4 ">
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
                      <form className="w-full">
                        <div className="grid gap-6 mb-6 md:grid-cols-2 w-full">
                          <div className="w-full">
                            <label
                              htmlFor="first_name"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              First Name{" "}
                            </label>
                            <input
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              type="text"
                              id="first_name"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-greentheme focus:border-greentheme block w-full p-2.5  "
                              placeholder=" First Name"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="last_name"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Last Name
                            </label>
                            <input
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              type="text"
                              id="last_name"
                              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5  "
                              placeholder=" Last Name"
                            />
                          </div>
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your Email
                          </label>
                          <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 "
                            placeholder="Enter Your Email"
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Related Subject{" "}
                          </label>
                          <input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            type="text"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 d "
                            placeholder=" Related Subject"
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your Message{" "}
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            type="text"
                            id="email"
                            className="bg-gray-50 border items-start  border-gray-300 text-gray-900 text-sm h-24 rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5  "
                            placeholder="Type something here..."
                          />
                        </div>

                        <Button
                       
                          onClick={handleSubmit}
                          className="text-white  bg-redtheme  font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center "
                        >
                          SEND MESSAGE
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </form>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
   <Toaster/>
    </>
  );
};

export default Chatbutton;
