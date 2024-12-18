'use client'
import React from 'react';
import image1 from '@/assests/image (3).png'
import image2 from '@/assests/image (4).png'
import image3 from '@/assests/image (5).png'
import image4 from '@/assests/image (6).png'
import image5 from '@/assests/image (7).png'
import image6 from '@/assests/image (8).png'
import flower from '@/assests/Mask group.png'
import Edibles from '@/assests/chocolate-bar.png'
import Vapes from '@/assests/Mask group (2).png'
import Concentrates from '@/assests/Mask group (3).png'
import PreRolls from '@/assests/Mask group (4).png'
import Accessories from '@/assests/Mask group (5).png'
import Image from 'next/image';

const Experience = () => {

    const types = [
        {
            photo: image1,
            title: "flower",
            icon: flower
        },
        {
            photo: image2,
            title: "Edibles",
            icon: Edibles
        },
        {
            photo: image3,
            title: "Vapes",
            icon: Vapes
        },
        {
            photo: image4,
            title: "Concentrates",
            icon: Concentrates
        },
        {
            photo: image5,
            title: "PreRolls",
            icon: PreRolls
        },
        {
            photo: image6,
            title: "Accessories",
            icon: Accessories
        },
    ]

    return (
        <div className='my-10 container space-y-5'>
            <h1 className='text-center fredericka-the-great-regular text-color text-4xl '>START YOUR EXPERIENCE</h1>
            <div className='flex lg:gap-x-32 md:gap-x-20 gap-x-10 gap-y-5 mx-auto items-center lg:px-20 flex-wrap'>
                {
                    types.map((e, idx) =>
                        <div key={idx} className='w-fit md:mx-0  mx-auto p-2'>
                            <div className='flex gap-2 mb-2 justify-center'>
                                <Image src={e.icon} className='w-8' alt={e.title} />
                                <h1 className='text-lg font-semibold my-auto text-color'>{e.title}</h1>
                            </div>
                            <Image src={e.photo} className='w-48' alt={e.title}></Image>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Experience;