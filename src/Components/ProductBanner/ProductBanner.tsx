'use client'
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import banner1 from "@/assests/prouctBanner.gif";
import banner2 from "@/assests/prouctBanner2.png";
// import './ProductBanner.css'
// Import required modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductBanner = () => {
    return (
        <div>
            <Swiper navigation={{
                nextEl: ".banner-next",
                prevEl: ".banner-pre"
            }} loop modules={[Navigation]} className="mySwiper" >
                <SwiperSlide><Image src={banner1} className='w-full h-[700px] rounded-lg' alt='Banner'/></SwiperSlide>
                <SwiperSlide><Image src={banner2} className='w-full h-[700px] rounded-lg' alt='Banner'/></SwiperSlide>
            </Swiper>
            <div className='space-x-3 mt-5 container'>
                <button className='banner-pre rounded-lg text-3xl text-color border-2 p-1'><FaChevronLeft /></button>
                <button className='banner-next rounded-lg text-3xl text-color border-2 p-1'><FaChevronRight /></button>
            </div>
        </div>
    );
};

export default ProductBanner;