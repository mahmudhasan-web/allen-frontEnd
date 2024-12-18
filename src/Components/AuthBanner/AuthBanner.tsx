'use client'
import React from 'react';
import banner from '@/assests/image.png'
import Image from 'next/image';
const AuthBanner = ({text} : {text : string}) => {
    return (
        <div className='relative'>
            <Image src={banner} alt='banner'></Image>
            <p className='text-4xl text-white  font-semibold absolute top-1/3 text-center  w-full '>{text}</p>

        </div>
    );
};

export default AuthBanner;