import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Box1 from '../../public/Homeasset/Box1.png'
import Box2 from '../../public/Homeasset/Box2.png'
import Box3 from '../../public/Homeasset/Box3.png'
import Box4 from '../../public/Homeasset/Box4.png'
import { useRouter } from "next/navigation";

const Aboutservice = () => {
  const router=useRouter()
  return (
    <div className="w-11/12 py-20 mx-auto flex lg:flex-row flex-col-reverse justify-center items-start gap-12">
      <div className="lg:w-[45%] w-full relative grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
        <Image src={Box1} alt="Box1"/>
        <Image src={Box2} alt="Box2"/>
        <Image src={Box3} alt="Box3"/>
        <Image src={Box4} alt="Box4"/>
       
      </div>
      <div className="flex flex-col justify-start items-start gap-8 lg:w-[46%] w-full">
        <h6 className="text-xl font-semibold">
          BrandSaga’s <span className="text-redtheme">Services.</span>
        </h6>
        <p className="text-justify  text-sm font-medium leading-7 lg:w-[32rem]">{`we connect businesses with trusted influencers/Celebrities to boost brand visibility and drive sales. Our platform streamlines the process, ensuring authentic partnerships tailored to your needs. Whether you're a startup or a corporation, we deliver measurable results to meet your marketing goals.`}</p>

        <Button
         onPress={()=>router.push('/Services')}
          variant="solid"
          className="bg-redtheme rounded-full mt-4 w-60 text-white"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Aboutservice;
