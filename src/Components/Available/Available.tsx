'use client'
import React from 'react';
import image1 from '@/assests/image (9).png'
import image2 from '@/assests/image (10).png'
import image3 from '@/assests/image (11).png'
import image4 from '@/assests/image (12).png'
import image5 from '@/assests/image (13).png'
import image6 from '@/assests/image (14).png'
import image7 from '@/assests/image (15).png'
import image8 from '@/assests/image (16).png'
import image9 from '@/assests/image (17).png'
import Image from 'next/image';
import { motion } from 'motion/react'

const Available = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]
    return (
        <div className='relative py-10 h-[700px] my-28  text-white space-y-2'>
            <div className='bg-color w-full h-full md:rotate-6 rotate-3 md:rounded-[100px] rounded-3xl left-0 top-0 absolute'>

            </div>
            <div className='container relative'>
                <h1 className='flex gap-2 relative md:ml-10 ml-8'>New Drops <hr className='md:w-48 w-20 mt-auto' /></h1>
                <h1 className='md:text-3xl text-xl md:ml-10 ml-8 font-bold relative'>Available Now!</h1>
                <div className=' relative mt-10 flex  justify-center  flex-wrap gap-7'>
                    {
                        images.map((e, idx) =>
                            <motion.div key={idx} initial={{ rotateZ: 20, opacity: 1 }} animate={{
                                y: 10, transition: {
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 0.5,
                                    delay: .1 + ((idx+.5)/10),
                                    ease: "easeInOut"
                                }
                            }} whileInView={{ rotateZ: 0, transition: { bounce: .7, type: "spring", duration: 1 } }} className='lg:w-80 md:w-40 w-24  bg-white h-28 rounded-xl'>
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

export default Available;