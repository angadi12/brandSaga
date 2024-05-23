'use client'
import React from 'react'
import Customservicecard from './Customservicecard'
import influencersocial from '../../public/Servicesasset/influencersocial.png'
import talkingabout from '../../public/Servicesasset/talkingabout.png'
import peopleworking from '../../public/Servicesasset/peopleworking.png'
import peoplecleaning from '../../public/Servicesasset/peoplecleaning.png'
import { Divider,Button } from '@nextui-org/react'
import {motion} from 'framer-motion'

const Service = () => {

const Customdata=[
    {
    tittle:"Influencer/Celebrity Marketing",
    description:"Are you looking to boost your brand's presence through influencer/Celebrity collaborations? Our team at BrandSaga will help you connect with the perfect people who resonate with your brand and target audience.",
    CTA1:"choose service",
    CTA2:"View Breakdown",
    Image:influencersocial,
    className:"lg:flex-row flex-col-reverse"
},
    {
    tittle:"Content Creation",
    description:"Need eye-catching content for your brand? Our team of creatives will tailor content that speaks directly to your audience and amplifies your brand message.",
    CTA1:"choose service",
    CTA2:"View Breakdown",
    Image:talkingabout,
    className:"lg:flex-row-reverse flex-col-reverse"
},
    {
    tittle:"Digital Campaign Management",
    description:"Let us handle your digital campaigns from start to finish. Our expertise in campaign strategy, execution, and optimization will ensure maximum ROI for your brand.",
    CTA1:"choose service",
    CTA2:"View Breakdown",
    Image:peopleworking,
    className:"lg:flex-row flex-col-reverse"
},
    {
    tittle:"Social Media Marketing",
    description:"Elevate your social media game with our strategic and creative social media marketing solutions. From content creation to community management, we've got you covered to make your brand stand out.",
    CTA1:"choose service",
    CTA2:"View Breakdown",
    Image:peoplecleaning,
    className:"lg:flex-row-reverse flex-col-reverse"
},
]


  return (
    <motion.div   initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{ duration: 0.5 }} className="flex flex-col justify-center items-center w-11/12 gap-8 mx-auto">
      <motion.div   initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration: 0.8 }} className="py-12 flex flex-col justify-center items-center gap-4">
        <h2 className="font-bold text-4xl leading-8 capitalize">
        our <span className="text-redtheme"> services!</span>
        </h2>
        <p className="text-sm text-center font-medium leading-4 text-foreground-700 capitalize">
        Discover our range of services designed to propel you towards success.
        </p>
      </motion.div>

      <div className='flex flex-col justify-center items-center gap-8 md:w-11/12 mx-auto'>

        {Customdata.map((value,index)=>(
        <Customservicecard key={index} value={value}/>

        ))}
      </div>

      <div className="py-12 flex flex-col justify-center gap-4 mx-auto w-full items-center">
        <Divider orientation="horizontal"/>
        <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center px-2">
          <h6 className="font-bold md:text-2xl md:leading-8">{`Ready to elevate your brand's digital`}<br></br> presence? Contact <span className="text-redtheme">BrandSaga</span>today to <br></br>{` start your digital saga!`}</h6>
          <Button variant="solid" className="w-60 rounded-full bg-redtheme text-white capitalize text-center">get started</Button>
        </div>
        <Divider orientation="horizontal"/>
      </div>
      </motion.div>
  )
}

export default Service