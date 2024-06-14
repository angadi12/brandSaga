"use client";

import React, { useState } from "react";
import { Input,Spinner } from "@nextui-org/react";
import { FaPaperPlane } from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/Newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const result = await response.json();

      if (result.error) {
        toast.error(result.message);
      } else {
        toast.success("Subscription successful!");
        setEmail("");
      }
    } catch (error) {
      toast.error("Failed to send email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col justify-center items-center bg-[#1F1F1F] md:h-[40vh] h-[70vh]">
        <div className="w-11/12 mx-auto flex md:flex-row flex-col justify-between items-start md:px-12">
          <div className="flex flex-wrap md:gap-24 gap-8 w-full items-start">
            <div className="flex flex-col gap-4 justify-start items-start text-white">
              <p className="text-redtheme font-semibold text-xl">Links</p>
              <span
                onClick={() => router.push("/Aboutus")}
                className="text-sm text-white cursor-pointer"
              >
                About Us
              </span>
              <span
                onClick={() => router.push("/Services")}
                className="text-sm text-white cursor-pointer"
              >
                Services
              </span>
              <span
                onClick={() => router.push("/Portfolio")}
                className="text-sm text-white cursor-pointer"
              >
                Portfolio
              </span>
              <span
                onClick={() => router.push("/Contactus")}
                className="text-sm text-white cursor-pointer"
              >
                Contact Us
              </span>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start text-white">
              <p className="text-redtheme font-semibold text-xl">Resources</p>
              <span
                onClick={() => router.push("/Termsandcondition")}
                className="text-sm text-white cursor-pointer"
              >
                Terms & Condition
              </span>
              <span
                onClick={() => router.push("/Privacy")}
                className="text-sm text-white cursor-pointer"
              >
                Privacy & Policy
              </span>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start text-white">
              <p className="text-redtheme font-semibold text-xl">Contact</p>
              <span className="text-sm text-white cursor-pointer">
                Info@brandsaga.co.in
              </span>
              <span className="text-sm text-white cursor-pointer">
                +91 - 6304958891
              </span>
            </div>
          </div>
          <div className="flex flex-col md:w-80 mt-4 md:mt-0 justify-start items-center gap-8">
            <div className="flex justify-start items-start gap-4 flex-col">
              <p className="text-redtheme font-semibold text-xl">
                Subscribe Newsletter
              </p>
              <span className="text-sm text-white cursor-pointer">
                Subscribe for free.
              </span>
              <form onSubmit={handleSubmit} className="flex items-center bg-[rgb(0,0,0,0.5)] rounded-md">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="rounded-none bg-[rgb(0,0,0,0.5)] outline-none h-10 p-2 text-white"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <button
                  type="submit"
                  className="text-white rounded-md bg-redtheme w-16 h-12 flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Spinner color="default"/> : <FaPaperPlane />}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>{/* dropdown */}</div>
      </div>
      <div className="w-full h-12 bg-redtheme flex justify-center items-center">
        <p className="text-center text-white md:text-sm text-xs">
          © Copyright 2024 BrandSaga. All Rights Reserved.
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default Footer;
