'use client'
import React from "react";
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


const Meetourteam = () => {
  return (
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
          <h6 className="text-2xl font-bold leading-8 capitalize py-8">meet our<span className="text-redtheme"> team!</span></h6>
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
          <h6 className="font-bold md:text-2xl text- md:leading-8">{`Ready to elevate your brand's digital`}<br></br> presence? Contact <span className="text-redtheme">BrandSaga</span>today to <br></br>{` start your digital saga!`}</h6>
          <Button variant="solid" className="w-60 rounded-full bg-redtheme text-white capitalize text-center">get started</Button>
        </div>
        <Divider orientation="horizontal"/>
      </div>
    </div>
  );
};

export default Meetourteam;
