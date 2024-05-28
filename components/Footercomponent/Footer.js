'use client'
import { Input } from '@nextui-org/react'
import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import { useRouter } from 'next/navigation';


const Footer = () => {
    const router=useRouter()


  return (
    <div className='w-full flex flex-col '>
        <div className='flex flex-col justify-center items-center bg-[#1F1F1F] md:h-[40vh] h-[70vh]'>
            <div className='w-11/12 mx-auto flex md:flex-row flex-col justify-between items-start md:px-12'>

            <div className='flex flex-wrap md:gap-24 gap-8 w-full items-start'>
                <div className='flex flex-col gap-4 justify-start items-start text-white'>
                    <p className='text-redtheme font-semibold text-xl'>Links</p>
                    <span onClick={()=>router.push('/Aboutus')} className='text-sm text-white cursor-pointer'>About Us</span>
                    <span  onClick={()=>router.push('/Services')} className='text-sm text-white cursor-pointer'>Services</span>
                    <span  onClick={()=>router.push('/Portfolio')} className='text-sm text-white cursor-pointer'>Portfolio</span>
                    <span onClick={()=>router.push('/Contactus')} className='text-sm text-white cursor-pointer'>Contact Us</span>
                </div>
                <div className='flex flex-col gap-4 justify-start items-start text-white'>
                <p className='text-redtheme font-semibold text-xl'>Resources</p>
                    <span  className='text-sm text-white cursor-pointer'>Terms & Condition</span>
                    <span  className='text-sm text-white cursor-pointer'>Privacy & Policy</span>
                </div>
                <div className='flex flex-col gap-4 justify-start items-start text-white'>
                <p className='text-redtheme font-semibold text-xl'>Contact</p>
                    <span  className='text-sm text-white cursor-pointer'>Info@brandsaga.co.in

</span>
                    <span  className='text-sm text-white cursor-pointer'>+91 - 6304958891</span>
                  
                </div>
            </div>
            <div className='flex flex-col md:w-80 mt-4 md:mt-0 justify-start items-center gap-8'>
                <div className='flex justify-start items-start gap-4 flex-col'>
                    <p className='text-redtheme font-semibold text-xl'>Subscribe Newsletter</p>
                    <span  className='text-sm text-white cursor-pointer'>Subscribe for free.</span>
                    <div className='flex items-center bg-[rgb(0,0,0,0.5)] rounded-md'>
                        <input placeholder='Enter Email' className='rounded-none bg-[rgb(0,0,0,0.5)] outline-none h-10 p-2'/>
                        <span className='text-white rounded-md bg-redtheme w-16 h-12 flex justify-center items-center'><FaPaperPlane/></span>
                    </div>
                </div>
            </div>
            </div>

            <div>
              {/* dropdown */}
            </div>
        </div>
        <div className='w-full h-12 bg-redtheme flex justify-center items-center'>
             <p className='text-center text-white md:text-sm text-xs '>© Copyright 2024 BrandSaga. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer