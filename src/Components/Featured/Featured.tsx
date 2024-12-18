'use client'
import Image from 'next/image';
import React from 'react';
import frame1 from '@/assests/The-New-York-Times-Logo.png'
import frame2 from '@/assests/high-times-logo.png'
import frame3 from '@/assests/The-Guardian-logo.png'
import frame4 from '@/assests/Leafly_logo_2019.png'
import frame5 from '@/assests/msnbc-logo.png'
import frame6 from '@/assests/marijuana-mania.jpg'
import { motion } from 'motion/react'
const Featured = () => {

    const images = [frame1, frame2, frame3, frame4, frame5, frame6]

    return (
        <div className='lg:my-16 md:my-10 my-6 container'>
            <h1 className='text-center fredericka-the-great-regular text-color text-4xl'>Featured In</h1>
            <div className='space-y-3 my-10'>
                {
                    images.map((e, idx) =>
                        <motion.div key={idx} initial={{ x: -200 * (idx + 1), y: -200 , opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 , transition : {duration:.8}}}>
                            <Image src={e} className='md:w-60 w-40 md:mx-0 mx-auto' alt='logos' />
                        </motion.div>
                    )
                }
            </div>
        </div>
    );
};

export default Featured;