import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import aboutimag from "../../public/Homeasset/Aboutsagaimg.png";
import Bookmark from "../../public/Homeasset/Bookmark.png";
import Heart from "../../public/Homeasset/Heart.png";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Aboutsaga = () => {
  const router=useRouter()

  return (
    <div className="w-11/12 py-20 mx-auto flex lg:flex-row flex-col-reverse justify-center items-start gap-12">
      <div className="flex flex-col justify-start items-start gap-8 lg:w-[46%]">
        <h6 className="text-xl font-semibold">
          About <span className="text-redtheme">BrandSaga!</span>
        </h6>
        <p className="text-start  text-sm font-medium leading-7 lg:w-[32rem]">{`BrandSaga is a team of digital marketing experts who are passionate about helping brands succeed in the ever-evolving digital world. With a focus on innovation, creativity, and strategic thinking, we partner with brands to create impactful digital campaigns that drive results.`}</p>
        <div className="flex flex-row justify-between md:gap-24 gap-2 items-center">
          <div className="flex flex-col justify-start items-start gap-4">
            <span className="flex flex-row items-center gap-2 text-sm font-bold capitalize"><FaCheckCircle className="text-greentheme text-xl"/>Build Trust</span>
            <span className="flex flex-row items-center gap-2 text-sm font-bold capitalize"><FaCheckCircle className="text-greentheme text-xl"/>more conversion</span>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
          <span className="flex flex-row items-center gap-2 text-sm font-bold capitalize"><FaCheckCircle className="text-greentheme text-xl"/>expanded reach</span>
          <span className="flex flex-row items-center gap-2 text-sm font-bold capitalize"><FaCheckCircle className="text-greentheme text-xl"/>high engagement</span>
          </div>
        </div>
        <Button
          onPress={()=>router.push('/Aboutus')}
          variant="solid"
          className="bg-redtheme rounded-full mt-4 w-60 text-white"
        >
          Learn More
        </Button>
      </div>
      <div className="md:w-full lg:w-[45%] relative">
        <div>
          <Image className="lg:w-[32rem] w-full " src={aboutimag} alt="aboutimg" />
        </div>
        <div>
          <Image className="absolute right-4 -top-6 md:w-24 md:h-[5rem] h-16 w-20" src={Bookmark} alt="savedimage" />
          <Image className="absolute right-10 -top-4 md:w-12 md:h-12 w-8 h-8" src={Heart} alt="heart"/>
        </div>
      </div>
    </div>
  );
};

export default Aboutsaga;
