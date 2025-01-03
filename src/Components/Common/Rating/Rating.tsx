'use client'
import React from 'react';
import ratingImage from '@/assests/rating.png'
import Image from 'next/image';
const Rating = ({id} : {id : number}) => {
    const button = [...Array(5).keys()];
    return (
        <div className='flex justify-center my-2'>
            {
                button.map((item,idx)=>
                <Image src={ratingImage} alt='rate' key={idx} className={`w-5 ${id <= item ? "grayscale" : ""}`} />
                )
            }
        </div>
    );
};

export default Rating;