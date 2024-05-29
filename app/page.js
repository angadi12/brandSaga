"use client";
import Aboutsaga from "@/components/Homecomponenets/Aboutsaga";
import Aboutservice from "@/components/Homecomponenets/Aboutservice";
import Exploreworks from "@/components/Homecomponenets/Exploreworks";
import FAQ from "@/components/Homecomponenets/FAQ";
import Herosection from "@/components/Homecomponenets/Herosection";
import Socialmedia from "@/components/Homecomponenets/Socialmedia";
import Whysagabrand from "@/components/Homecomponenets/Whysagabrand";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{opacity:0.8}}
      whileInView={{opacity:1}}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Herosection />
      {/* <Divider orientation="horizontal" className="w-11/12 mx-auto" /> */}
      <Aboutsaga />
      <Aboutservice />
      <Divider orientation="horizontal" className="w-11/12 mx-auto" />
      <Exploreworks />
      <Divider orientation="horizontal" className="w-11/12 mx-auto" />
      <Whysagabrand />
      <Socialmedia />
    </motion.main>
  );
}
