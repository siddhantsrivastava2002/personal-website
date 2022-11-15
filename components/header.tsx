import React from 'react'
import {SocialIcon} from 'react-social-icons'
import { motion } from "framer-motion"


type Props = {}

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
    <motion.div 
    initial={{
         opacity: 0,
          x: -500,
          scale: 0.5
         }}
         animate={{
          opacity: 1,
            x: 0,
            scale: 1.0
         }}
            transition={{
                duration: 1.5,
            }}
    className='flex flex-row items-center'>
    <SocialIcon 
    url="https://www.linkedin.com/in/siddhant-srivastava-2a5257202/"
    fgColor="gray"
     bgColor='transparent' />

        <SocialIcon 
        url="https://twitter.com/sidtexh"
        fgColor="gray"
        bgColor='transparent' />
            <SocialIcon 
             url="https://www.youtube.com/@genzlytical"
           fgColor="gray"
            bgColor='transparent' />
            <SocialIcon 
             url="https://github.com/siddhantsrivastava2002"
           fgColor="gray"
            bgColor='transparent' />
         </motion.div>
         <motion.div
          initial={{
            opacity: 0,
             x: 500,
             scale: 0.5
            }}
            animate={{
             opacity: 1,
               x: 0,
               scale: 1.0
            }}
               transition={{
                   duration: 1.0,
               }}
         
         className='flex flex-row items-center text-gray-400 cursor-pointer'>
            <SocialIcon
            network='email'
            fgColor='gray'
            bgColor='transparent' />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-600 "> GET IN TOUCH</p>


         </motion.div>
    </header>
  )
}

export default Header