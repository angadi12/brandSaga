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
            <p className="text-sm font-medium ">{`BrandSaga connects businesses with trusted influencers and celebrities to boost brand visibility and drive sales. The platform streamlines the process to ensure authentic partnerships tailored to the specific needs of each business.`}</p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Will I get unlimited generations?"
            title=<p className="text-sm font-medium ">
             Can I collaborate with influencers on specific platforms?
            </p>
          >
            <p className="text-sm font-medium ">{`Yes, BrandSaga allows businesses to collaborate with influencers on various platforms based on their marketing goals and target audience.`}</p>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Can I upload linktree in the URL?"
            title=<p className="text-sm font-medium ">
             What are the costs associated with using your platform?
            </p>
          >
            <p className="text-sm font-medium ">{`The costs for using BrandSaga's platform vary depending on the specific requirements and scale of the campaign. For detailed pricing, businesses are encouraged to contact BrandSaga directly.`}</p>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Can I track the number of click?"
            title=<p className="text-sm font-medium ">
             What is influencer marketing?
            </p>
          >
            <p className="text-sm font-medium ">{`Influencer marketing involves partnering with influential individuals on social media to promote products or services. This strategy leverages the influencers' reach and credibility to drive brand awareness and engagement.`}</p>
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
