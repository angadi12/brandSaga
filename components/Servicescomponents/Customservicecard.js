'use  client'
import React from 'react'
import Image from 'next/image'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Card1 from '../../public/Servicesasset/Card1.png'
import Card2 from '../../public/Servicesasset/Card2.png'
import Card3 from '../../public/Servicesasset/Card3.png'
import Card4 from '../../public/Servicesasset/Card4.png'

const Customservicecard = ({value}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
    <>
    <div className={`flex justify-between px-2 ${value.className} items-start py-8 w-full`}>
      <div className="flex flex-col justify-start items-start gap-4 lg:w-[46%] ">
      <div className='flex flex-col justify-start items-start md:mt-8 lg:mt-0'>
      <h6 className='md:text-xl md:mt-0 mt-4  font-bold capitalize leading-7'>{value.tittle}</h6>
      <span className='h-1 w-24 bg-redtheme'></span>

      </div>

      <p className='text-start  text-sm font-medium leading-7 lg:w-[32rem]'>{value.description}</p>
      <div className='mt-4 flex flex-col md:flex-row w-full items-center gap-4 md:gap-8'>
        <Button variant='solid' className='text-white md:w-40 w-full  h-10 rounded-full text-center bg-redtheme'>{value.CTA1}</Button>
        <Button  onPress={onOpen} className='text-white md:w-40 w-full h-10 rounded-full text-center bg-greentheme'>{value.CTA2}</Button>
      </div>
        
    </div>
    <div className="lg:w-[45%]">

    <Image src={value.Image} alt={value.Image}/>
    </div>
    </div>


    <Modal 
        backdrop="blur" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: 20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 w-full justify-center items-center">{value.tittle}</ModalHeader>
              <ModalBody>
               {value.tittle==='Influencer/Celebrity Marketing'&& 
               <div> 
                 <Image src={Card1} alt='Card1'/>
                 <div className='flex flex-col py-4 w-full'>
                  <p className='text-sm uppercase text-redtheme font-semibold' >Breakdown:</p>
                  <li className='text-xs font-medium uppercase p-1'>Micro-Influencers (10k-50k followers): <span className='text-redtheme'>$500 - $1000</span>per post</li>
                  <li className='text-xs font-medium uppercase p-1'>Mid-Tier Influencers (50k-500k followers): <span className='text-redtheme'> $1000 - $5000</span>per post</li>
                  <li className='text-xs font-medium uppercase p-1'> Macro-Influencers (500k-1M followers): <span className='text-redtheme'>$5000 - $10,000</span>per post</li>
                  <li className='text-xs font-medium uppercase p-1'> Celebrity Influencers (1M+ followers): <span className='text-redtheme'>Custom </span>pricing</li>
                 </div>
                </div>}
               {value.tittle==='Content Creation'&& 
               <div> 
                 <Image src={Card2} alt='Card1'/>
                 <div className='flex flex-col py-4 w-full'>
                  <p className='text-sm uppercase text-redtheme font-semibold' >Breakdown:</p>
                  <li className='text-xs font-medium uppercase p-1'>Graphic Design: <span className='text-redtheme'>$50 - $200</span> per design</li>
                  <li className='text-xs font-medium uppercase p-1'>Video Production: <span className='text-redtheme'> $500 - $2000</span>per video</li>
                 </div>
                </div>}
               {value.tittle==='Digital Campaign Management'&& 
               <div> 
                 <Image src={Card3} alt='Card1'/>
                 <div className='flex flex-col py-4 w-full'>
                  <p className='text-sm uppercase text-redtheme font-semibold' >Breakdown:</p>
                  <li className='text-xs font-medium uppercase p-1'>Campaign Strategy: <span className='text-redtheme'> $1000 - $5000</span></li>
                  <li className='text-xs font-medium uppercase p-1'> Execution and Optimization: <span className='text-redtheme'>10%</span>of campaign budget</li>
                  <li className='text-xs font-medium uppercase p-1'> Reporting and Analysis: <span className='text-redtheme'>Included</span> in package</li>
                 </div>
                </div>}
               {value.tittle==='Social Media Marketing'&& 
               <div> 
                 <Image src={Card4} alt='Card1'/>
                 <div className='flex flex-col py-4 w-full'>
                  <p className='text-sm uppercase text-redtheme font-semibold' >Breakdown:</p>
                  <li className='text-xs font-medium uppercase p-1'>Monthly Social Media Management:Starting at <span className='text-redtheme'>$1500</span></li>
                  <li className='text-xs font-medium uppercase p-1'>Content Creation: <span className='text-redtheme'>$100 - $500</span>per post</li>
                  <li className='text-xs font-medium uppercase p-1'> Advertising Management: <span className='text-redtheme'> 15% </span>of ad spend</li>
                 </div>
                </div>}
              </ModalBody>
              <ModalFooter className='flex justify-center items-center w-full'>
                <Button variant='solid' className='text-white rounded-full bg-redtheme text-center' onPress={onClose}>
                choose service
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Customservicecard