'use client'
import { DeliveryArea } from '@/Components/UI/DeliveryArea';
import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { RiCalendarScheduleFill } from 'react-icons/ri';


const Collapse = ({
  title,
  children,
  isOpen,
  onToggle,
  // index,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {

  return (
    <div
      className="mb-4 bg-white w-[550px] rounded-xl transition-transform"
    >
      <div
        className="px-4  rounded-lg flex transition-transform justify-between  cursor-pointer"
        onClick={onToggle}
      >
        <h2 className="md:text-xl text-lg font-semibold">{title} </h2>
      </div>
      <div className={` transition-all flex flex-wrap overflow-hidden gap-2 rounded-lg  text-wrap ${isOpen ? `h-full p-4` : "h-0 "}`}>
      <h1 className=''>Zip Codes</h1>
        {children}
      </div>
    </div>
  );
};


const DeliveryPage = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleCollapse = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index)); // Toggle the state
  };

  return (
    <div className="flex flex-col lg:flex-row my-20 justify-between px-8 py-6 ">
      {/* Left Section */}
      <div className="lg:w-2/3">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">General Hours</h2>
          <p className="text-lg mt-1 flex items-center">
            <span className="material-icons text-black mr-2"><FaClock /></span>
            10am - 10pm <span className="mx-2"><RiCalendarScheduleFill /></span> Mon - Sun
          </p>
          <p className="text-sm text-gray-500 mt-2">
            *Hours may vary by zone, see details below
          </p>
        </div>

        {/* Delivery Guidelines */}
        <div className="mb-8">
          <h3 className="text-xl font-bold">Delivery Guidelines</h3>
          <ul className="mt-4 space-y-2 list-disc">
            {[
              "Manhattan, Brooklyn, Bronx, Queens",
              "Yonkers/Mt Vernon/New Rochelle",
              "Far Rockway",
              "Staten Island",
              "West Nassau County",
              "Long Island City",
              "New Jersey",
            ].map((item, index) => (
              <li key={index} className="ml-5">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Delivery Zones */}
        <div>
          <h3 className="text-xl font-bold">Delivery Zones</h3>
          <ul className="mt-4 text-wrap space-y-2">
            {DeliveryArea.map((zone, index) => (
              <Collapse
                key={index}
                title={zone.location}
                isOpen={openIndex === index}
                onToggle={() => toggleCollapse(index)}
                index={index}
              >
                {zone.zipCodes.map((e,idx)=> <p key={idx}>{e}</p>)}
              </Collapse>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 lg:pl-8">
        <h3 className="text-xl font-bold">Pickups</h3>
        <div className="mt-4 p-4 rounded-md">
          <h4 className="font-bold bg-gray-200 px-2 mb-4">NO MINIMUM</h4>
          <ul className="grid grid-cols-2 list-disc gap-2">
            {[
              "Manhattan",
              "Brooklyn",
              "Queens",
              "Bronx",
              "Long Island",
              "New Jersey",
              "Staten Island",
            ].map((pickup, index) => (
              <li key={index} className=" ml-7">
                {pickup}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
