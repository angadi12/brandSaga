'use client'
import React from 'react'
import { motion } from "framer-motion";

function Page() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 flex flex-col justify-center items-center gap-4"
      >
        <h2 className="font-bold text-4xl leading-8 capitalize">
          Terms & Condition
        </h2>
        <p className="text-sm text-center font-medium leading-7 text-foreground-700 capitalize">
           {`Welcome to BrandSaga! By accessing or using our website, you agree to comply with and be bound`}<br></br>{`by the following terms and conditions. Please read them carefully.`}
        </p>
      </motion.div>




      </div>
  )
}

export default Page