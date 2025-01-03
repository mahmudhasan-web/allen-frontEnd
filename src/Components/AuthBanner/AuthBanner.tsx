'use client'
import React from 'react';
import banner from '@/assests/image.png'
import Image from 'next/image';
const AuthBanner = ({text} : {text : string}) => {
    return (
        <div className='relative lg:h-72 md:h-56 h-48'>
            <Image src={banner} alt='banner' className='h-full object-cover'></Image>
            <p className='lg:text-4xl md:text-3xl text-xl text-white  font-semibold absolute top-1/2 text-center  w-full '>{text}</p>

        </div>
    );
};

export default AuthBanner;