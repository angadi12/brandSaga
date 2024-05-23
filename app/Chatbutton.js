"use client"
import { Button } from '@nextui-org/react'
import React from 'react'
import { BsChatDots } from "react-icons/bs";


const Chatbutton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 hidden md:block">
    <Button className="bg-greentheme font-medium    rounded-full text-center text-white"><BsChatDots/> Chat with us!</Button>
  </div>)
}

export default Chatbutton