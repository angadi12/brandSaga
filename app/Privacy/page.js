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
          Privacy Policy
        </h2>
        <p className="text-sm text-center font-medium leading-6 text-foreground-700 capitalize">
          {`At BrandSaga we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, `}
          <br></br>
          {`and safeguard your information when you visit our website and use our services. By accessing or using BrandSaga,`}
          <br></br>
          {`you agree to the terms of this Privacy Policy.`}
        </p>
      </motion.div>

      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
        <h6 className="md:text-3xl text-2xl font-bold md:text-right">
            Information We<br className="hidden md:block lg:block"></br>&nbsp;Collect
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <div className="flex flex-col justify-center items-start gap-2">
            <h6 className="text-sm font-bold">Personal Information</h6>
            <p className="font-medium text-sm leading-7">{`We may collect personal information that you voluntarily provide to us, including:`}</p>
            <li className="font-medium text-sm leading-7">Name</li>
            <li className="font-medium text-sm leading-7">Email address</li>
            <li className="font-medium text-sm leading-7">Phone number</li>
            <li className="font-medium text-sm leading-7">
              Payment information
            </li>
            <li className="font-medium text-sm leading-7">
              Social media handles
            </li>
            <li className="font-medium text-sm leading-7">
              Other information relevant to your use of our services
            </li>
          </div>

          <div className="flex flex-col justify-center items-start gap-2">
            <h6 className="text-sm font-bold">Non-Personal Information</h6>
            <p className="font-medium text-sm leading-7">{`We may also collect non-personal information automatically when you visit our site, such as:`}</p>
            <li className="font-medium text-sm leading-7">IP address</li>
            <li className="font-medium text-sm leading-7">
              Browser type and version
            </li>
            <li className="font-medium text-sm leading-7">Pages you view</li>
            <li className="font-medium text-sm leading-7">
              Time and date of your visit
            </li>
            <li className="font-medium text-sm leading-7">Referring website</li>
          </div>

          <Divider className="mt-4" />
        </div>
      </div>

      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
        <h6 className="md:text-3xl text-2xl font-bold md:text-right">
            Use of <br className="hidden md:block lg:block"></br>Information
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <div className="flex flex-col justify-center items-start gap-2">
            <h6 className="text-sm font-bold">{`We use the information we collect to:`}</h6>
            <li className="font-medium text-sm leading-7">
              Provide and manage our services
            </li>
            <li className="font-medium text-sm leading-7">
              Process transactions
            </li>
            <li className="font-medium text-sm leading-7">
              Communicate with you about your account or services
            </li>
            <li className="font-medium text-sm leading-7">{`Send promotional materials, newsletters, and other information (you can opt-out at any time)`}</li>
            <li className="font-medium text-sm leading-7">
              Improve our website and services
            </li>
            <li className="font-medium text-sm leading-7">
              Respond to your inquiries and provide customer support
            </li>
            <li className="font-medium text-sm leading-7">
              Analyze usage trends and measure the effectiveness of our
              marketing
            </li>
          </div>
          <Divider className="mt-4" />
        </div>
      </div>

      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
        <h6 className="md:text-3xl text-2xl font-bold md:text-right">
            Sharing of <br className="hidden md:block lg:block"></br>Information
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <p className="font-medium text-sm leading-7">
            We do not sell or rent your personal information to third parties.
          </p>
          <div className="flex flex-col justify-center items-start gap-2">
            <h6 className="text-sm font-bold">{`We may share your information with:`}</h6>
            <li className="font-medium text-sm leading-7">{`Service providers who assist us in operating our website and conducting our business`}</li>
            <li className="font-medium text-sm leading-7">{`Third parties when you have provided your explicit consent`}</li>
            <li className="font-medium text-sm leading-7">{`Law enforcement or regulatory agencies if required by law`}</li>
            <li className="font-medium text-sm leading-7">{`In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business`}</li>
          </div>
          <Divider className="mt-4" />
        </div>
      </div>

      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
          <h6 className="text-3xl font-bold text-right">Data Security</h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <p className="font-medium text-sm leading-7">{`We implement a variety of security measures to protect your personal information from unauthorized access, use, or disclosure. However, please note that no data transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.`}</p>

          <Divider className="mt-4" />
        </div>
      </div>

      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
        <h6 className="md:text-3xl text-2xl font-bold md:text-right">
            Cookies &<br className="hidden md:block lg:block"></br>Tracking
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <p className="font-medium text-sm leading-7">{`We use cookies and similar tracking technologies to enhance your experience on our site. Cookies are small data files stored on your device. You can choose to disable cookies through your browser settings, but doing so may affect the functionality of our website.`}</p>

          <Divider className="mt-4" />
        </div>
      </div>

      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
          <h6 className="text-3xl font-bold text-right">Your Rights</h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <p className="font-medium text-sm leading-7">{`Depending on your location, you may have certain rights regarding your personal information, including:`}</p>
          <div>
            <li className="font-medium text-sm leading-7">
              The right to access the personal information we hold about you
            </li>
            <li className="font-medium text-sm leading-7">
              The right to request correction of inaccurate information
            </li>
            <li className="font-medium text-sm leading-7">
              The right to request deletion of your personal information
            </li>
            <li className="font-medium text-sm leading-7">
              The right to object to or restrict the processing of your
              information
            </li>
            <li className="font-medium text-sm leading-7">
              The right to withdraw consent at any time
            </li>
          </div>

          <Divider className="mt-4" />
        </div>
      </div>

      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
        <h6 className="md:text-3xl text-2xl font-bold md:text-right">
            Third-Party<br className="hidden md:block lg:block"></br>&nbsp;Links
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <p className="font-medium text-sm leading-7">{`Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.`}</p>

          <Divider className="mt-4" />
        </div>
      </div>

      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
        <h6 className="md:text-3xl text-2xl font-bold md:text-right">
           {`Children's`}<br className="hidden md:block lg:block"></br> Privacy
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <p className="font-medium text-sm leading-7">{`Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information from our records.`}</p>

          <Divider className="mt-4" />
        </div>
      </div>

      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row justify-center items-start mx-auto md:gap-16 gap-2 py-8">
        <div className="flex-[0.3] justify-end flex items-end">
        <h6 className="md:text-3xl text-2xl font-bold md:text-right">
         Changes to <br className=" hidden md:block lg:block"></br> This Policy
          </h6>
        </div>
        <div className="flex-[0.7] justify-center flex flex-col items-start gap-4">
          <p className="font-medium text-sm leading-7">{`We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on our website. Your continued use of the Site after any changes constitutes your acceptance of the new terms.`}</p>

          <Divider className="mt-4" />
        </div>
      </div>


      <p className="w-full text-center font-semibold tracking-wide text-md py-8">{`By using BrandSaga, you acknowledge that you have read and understand this Privacy Policy.`}<br></br> {`If you do not agree with the terms, please do not use our services.`}</p>


    </div>
  );
}

export default Page;
