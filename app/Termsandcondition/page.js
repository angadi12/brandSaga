"use client";
import React from "react";
import { motion } from "framer-motion";
import { Divider } from "@nextui-org/react";

function Page() {
  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 flex flex-col justify-center items-center gap-4"
      >
        <h2 className="font-bold text-4xl leading-8 capitalize">
          Terms & Condition
        </h2>
        <p className="md:text-sm text-xs text-center font-medium leading-7 text-foreground-700 capitalize">
          {`Welcome to BrandSaga! By accessing or using our website, you agree to comply with and be bound`}
          <br></br>
          {`by the following terms and conditions. Please read them carefully.`}
        </p>
      </motion.div>

      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
          <h6 className="md:text-3xl text-2xl font-bold md:text-right">
            Acceptance of <br className="hidden md:block lg:block"></br>Terms
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <p className="font-medium text-sm leading-7">{`By using BrandSaga (referred to as "the Site"), you agree to these Terms and Conditions and our Privacy Policy. If you do not agree, please do not use the Site.`}</p>
          <Divider className="mt-4" />
        </div>
      </div>

      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
          <h6 className="md:text-3xl text-2xl font-bold md:text-right">
            Services <br className="hidden md:block"></br>Provided
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <p className="font-medium text-sm leading-7">{`BrandSaga connects brands with influencers and celebrities for digital collaborations to enhance brand value.`}</p>
          <div className="flex flex-col justify-start items-start gap-2">
            <h6 className="text-sm font-bold ">
              The services include but are not limited to:
            </h6>
            <li className="font-medium text-sm leading-7">
              Facilitating communication between brands and
              influencers/celebrities.
            </li>
            <li className="font-medium text-sm leading-7">
              Managing collaboration agreements.
            </li>
            <li className="font-medium text-sm leading-7">
              Providing tools for campaign management and analytics.
            </li>
          </div>
          <Divider className="mt-4" />
        </div>
      </div>

      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
          <h6 className="md:text-3xl text-2xl font-bold md:text-right">
            User <br className="hidden md:block lg:block"></br>Responsibilities
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <div className="flex flex-col justify-start items-start gap-2">
            <h6 className="text-sm font-bold ">Account Registration </h6>
            <li className="font-medium text-sm leading-7">
              Users must provide accurate and complete information during
              registration.
            </li>
            <li className="font-medium text-sm leading-7">
              Users are responsible for maintaining the confidentiality of their
              account information.
            </li>
            <li className="font-medium text-sm leading-7">
              Users must notify us immediately of any unauthorized use of their
              account.
            </li>
          </div>

          <div className="flex flex-col justify-start items-start gap-2">
            <h6 className="text-sm font-bold ">Content Submission </h6>
            <li className="font-medium text-sm leading-7">
              {`Users must ensure that all content submitted (including text, images, videos) is lawful and does not infringe on any third-party rights.`}
            </li>
            <li className="font-medium text-sm leading-7">
              {`Users grant BrandSaga a non-exclusive, royalty-free license to use, display, and distribute the content for the purpose of providing services.`}
            </li>
          </div>

          <Divider className="mt-4" />
        </div>
      </div>



      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
          <h6 className="md:text-3xl text-xl font-bold md:text-right">
            Collaboration <br className="hidden md:block lg:block"></br>Agreements
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <li className="font-medium text-sm leading-7">
            {`All collaboration agreements between brands and influencers/celebrities must be documented and mutually agreed upon.`}
          </li>
          <li className="font-medium text-sm leading-7">
            {`BrandSaga is not a party to these agreements and is not liable for any disputes arising from them.`}
          </li>

          <Divider className="mt-4" />
        </div>
      </div>


      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
          <h6 className="md:text-3xl text-2xl font-bold md:text-right">
            Fees and <br className="hidden md:block lg:block"></br>Payments
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <li className="font-medium text-sm leading-7">
            {`Fees for using our services will be clearly outlined on the Site.`}
          </li>
          <li className="font-medium text-sm leading-7">
            {`Payments must be made as per the agreed terms during the collaboration setup.`}
          </li>
          <li>{`Failure to make payments may result in the suspension or termination of your account.`}</li>

          <Divider className="mt-4" />
        </div>
      </div>


      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
          <h6 className="md:text-3xl text-2xl font-bold md:text-right">
            Prohibited<br className="hidden md:block lg:block"></br>&nbsp;Activities
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <li className="font-medium text-sm leading-7">
            {`Users may not use the Site for any illegal or unauthorized purpose.`}
          </li>
          <li className="font-medium text-sm leading-7">
            {`Users may not harass, abuse, or harm other users.`}
          </li>
          <li>{`Users may not engage in any activity that could harm or disrupt the Site’s functionality.`}</li>

          <Divider className="mt-4" />
        </div>
      </div>



      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
        <h6 className="md:text-3xl text-2xl font-bold md:text-right">
            Limitation of<br className="hidden md:block lg:block"></br>&nbsp;Liability
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <li className="font-medium text-sm leading-7">
            {`BrandSaga is not liable for any indirect, incidental, or consequential damages arising from the use of our services.`}
          </li>
          <li className="font-medium text-sm leading-7">
            {`We do not guarantee the accuracy, completeness, or usefulness of any information provided on the Site.`}
          </li>
          <Divider className="mt-4" />
        </div>
      </div>



      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
        <h6 className="md:text-3xl text-2xl font-bold md:text-right">
            Changes to<br className="hidden md:block lg:block"></br>&nbsp;Terms
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <li className="font-medium text-sm leading-7">
            {`We reserve the right to modify these Terms and Conditions at any time. `}
          </li>
          <li className="font-medium text-sm leading-7">
            {`Changes will be posted on this page, and your continued use of the Site signifies your acceptance of the updated terms.`}
          </li>
          <Divider className="mt-4" />
        </div>
      </div>





    <p className="w-full text-center font-semibold tracking-wide text-md py-8">{`By using BrandSaga, you agree to these Terms and Conditions. If you do not agree, please refrain from using our services.`}</p>
    </div>
  );
}

export default Page;
