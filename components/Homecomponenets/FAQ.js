"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { GoArrowDown } from "react-icons/go";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FAQ = () => {
  const router=useRouter()

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="flex justify-center md:items-start items-center md:gap-32 gap-8 py-16 w-11/12 mx-auto flex-col-reverse lg:flex-row h-auto">
      <div className="gap-4 flex flex-col justify-start  mx-auto mt-4 h-auto lg:w-2/4 w-full">
        <h6 className="md:text-3xl font-bold md:w-[23rem] leading-9">
          Frequently Asked Questions{" "}
        </h6>
      <Button onPress={()=>router.push('/Contactus')} className="rounded-full w-60 bg-redtheme text-white">Contact us</Button>
        <div className="flex  items-center ">
          <Button className="rounded-sm w-auto bg-buttoncolor text-white font-medium">
            <Link href={"/Contactus"}>Contact us</Link>
          </Button>
        </div>
      </div>

      <div className="lg:w-9/12 w-full">
        <Accordion selectionMode="single" variant="light">
          <AccordionItem
            key="1"
            aria-label="Will I get a refund after 7 days?"
            title=<p className="text-sm font-medium ">
            How does your platform work?
            </p>
          >
            <p className="text-sm font-medium ">{defaultContent}</p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Will I get unlimited generations?"
            title=<p className="text-sm font-medium ">
             Can I collaborate with influencers on specific platforms?
            </p>
          >
            <p className="text-sm font-medium ">{defaultContent}</p>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Can I upload linktree in the URL?"
            title=<p className="text-sm font-medium ">
             What are the costs associated with using your platform?
            </p>
          >
            <p className="text-sm font-medium ">{defaultContent}</p>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Can I track the number of click?"
            title=<p className="text-sm font-medium ">
             What is influencer marketing?
            </p>
          >
            <p className="text-sm font-medium ">{defaultContent}</p>
          </AccordionItem>
        </Accordion>
        <div className="flex justify-end items-center px-1 gap-2">
          {/* <Button variant="light">
            <p className="text-redtheme text-sm">See more questions</p>
            <GoArrowDown className="text-redtheme text-sm" />
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
