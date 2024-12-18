'use client'
import Image from 'next/image';
import React from 'react';
import image from '../../assests/banner.png'
import './Banner.css'

const Banner= () => {
  return (
    <div
      className={`relative h-screen   text-white`}
    >
      {/* Overlay */}
      <div className='absolute '>
        <Image src={image} className=' z-0 h-screen object-cover' alt='image'></Image>
      </div>

      {/* Content */}
      <div className="  container relative left-3 top-[50%]">
        <h1 id='text' className="lg:text-6xl md:text-4xl text-3xl font-semibold  text-color ">LIGHT UP YOUR DAY</h1>
        <p className="md:text-lg text-sm mb-6 max-w -xl ">
          Buddy’s Bodega is NYC’s premier cannabis delivery service, proudly bringing you the
          best brands and highest-quality products in the world. Using cutting-edge innovations,
          we deliver curated cannabis culture straight to your doorstep.
        </p>
        <div className="flex gap-10">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
          <button className="flex items-center gap-2 text-white border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            <span>▶</span> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
