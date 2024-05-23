import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { IoLogoFacebook } from "react-icons/io";
import Image from "next/image";
import Banner1 from '../../public/Portfolioasset/Banner1.png'


const Customizesocialcard = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8 place-content-center justify-items-center py-8 h-auto  w-full">
      {/* <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 500: 2, 800: 3, 900: 3 }}
      >
        <Masonry gutter="20px"> */}
         
          <Card className="max-w-[340px] ring-1 ring-facebook">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="/avatars/avatar-1.png"
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    Zoey Lang
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    @zoeylang
                  </h5>
                </div>
              </div>
              <div
          
        >
         <IoLogoFacebook size={40} className="text-facebook"/>
        </div>
            </CardHeader>
            <CardBody className="px-3 py-0 h-auto p-4 gap-4 text-small text-default-400">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding
                adventure!
              </p>
              <span className="pt-2">
                #FrontendWithZoey
                <span className="py-2" aria-label="computer" role="img">
                  💻
                </span>
              </span>

              <Image className="h-44 wfull rounded-2xl "  src={Banner1} alt="Banner1"/>
            </CardBody>
           
          </Card>
          <Card className="max-w-[340px] ring-1 ring-facebook">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="/avatars/avatar-1.png"
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    Zoey Lang
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    @zoeylang
                  </h5>
                </div>
              </div>
              <div
          
        >
         <IoLogoFacebook size={40} className="text-facebook"/>
        </div>
            </CardHeader>
            <CardBody className="px-3 py-0 h-auto p-4 gap-4 text-small text-default-400">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding
                adventure!
              </p>
              <span className="pt-2">
                #FrontendWithZoey
                <span className="py-2" aria-label="computer" role="img">
                  💻
                </span>
              </span>

              <Image className="h-44 wfull rounded-2xl "  src={Banner1} alt="Banner1"/>
            </CardBody>
           
          </Card>
          <Card className="max-w-[340px] ring-1 ring-facebook">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="/avatars/avatar-1.png"
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    Zoey Lang
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    @zoeylang
                  </h5>
                </div>
              </div>
              <div
          
        >
         <IoLogoFacebook size={40} className="text-facebook"/>
        </div>
            </CardHeader>
            <CardBody className="px-3 py-0 h-auto p-4 gap-4 text-small text-default-400">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding
                adventure!
              </p>
              <span className="pt-2">
                #FrontendWithZoey
                <span className="py-2" aria-label="computer" role="img">
                  💻
                </span>
              </span>

              <Image className="h-44 wfull rounded-2xl "  src={Banner1} alt="Banner1"/>
            </CardBody>
           
          </Card>
         
          
        {/* </Masonry>
      </ResponsiveMasonry> */}
    </div>
  );
};

export default Customizesocialcard;
