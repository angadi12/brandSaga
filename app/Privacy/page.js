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
         Privacy Policy
        </h2>
        <p className="text-sm text-center font-medium leading-6 text-foreground-700 capitalize">
           {`At BrandSaga we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, `}<br></br>{`and safeguard your information when you visit our website and use our services. By accessing or using BrandSaga,`}<br></br>{`you agree to the terms of this Privacy Policy.`}
        </p>
      </motion.div>




      </div>
  )
}

export default Page