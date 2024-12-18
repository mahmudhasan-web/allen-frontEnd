'use client'
import React from 'react';
import brand1 from '@/assests/brand1.jpeg'
import brand2 from '@/assests/brand2.jpeg'
import brand3 from '@/assests/brand3.jpeg'
import brand4 from '@/assests/brand4.jpeg'
import brand5 from '@/assests/brand5.jpeg'
import brand6 from '@/assests/brand6.jpeg'
import brand7 from '@/assests/brand7.jpeg'
import brand8 from '@/assests/brand8.jpeg'
import { motion } from 'motion/react'
import Image from 'next/image';


const Brands = () => {

    const images = [brand1, brand2, brand3, brand4, brand5, brand5, brand6, brand7, brand8]

    return (
        <div className='relative py-10 h-[700px] text-color space-y-2'>
            <div className='container relative space-y-2'>
                <h1 className='flex gap-2 justify-center relative md:text-start text-center'>Brands <hr className='md:w-48 w-20 border-color mt-auto' /></h1>
                <h1 className='text-3xl font-bold relative uppercase md:text-start text-center'>brands we carry</h1>
                <div className=' relative pt-10 flex flex-wrap md:justify-start justify-center gap-8'>
                    {
                        images.map((e, idx) =>
                            <motion.div key={idx} initial={{ rotateZ: 20, opacity: 1 }} animate={{
                                y: 10, transition: {
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 0.5,
                                    delay: .1 + ((idx + .5) / 10),
                                    ease: "easeInOut"
                                }
                            }} whileInView={{ rotateZ: 0, transition: { bounce: .7, type: "spring", duration: 1 } }} className='lg:w-80 md:w-40 w-24 bg-white h-28 border shadow-2xl rounded-xl'>
                                <motion.div initial={{ y: 0 }} animate={{

                                }} ><Image src={e} className='w-52 mx-auto  ' alt='image'></Image></motion.div>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Brands;