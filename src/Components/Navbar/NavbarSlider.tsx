import React from 'react';
import { Routes } from '../UI/Routes';
import Image from 'next/image';
import Link from 'next/link';
import { FaKey, FaUser } from 'react-icons/fa';


const NavbarSlider = () => {
    return (
        <div className='space-y-3 w-fit relative'>
            {
                Routes?.map((e, idx) =>
                    <Link href={`/${e.route}`} className={`flex gap-2 text-color font-semibold text-lg ${idx+1 == 10  ? "" : ""}`} key={idx}>
                        {e.icon == null ? "" : <Image src={e.icon?.src} width={20} height={20} className='my-auto' alt={e.title} />}
                        <p>{e.title}</p>
                    </Link>
                )
            }
            <div id="Auth" className=" md:hidden  flex flex-col gap-5 ">
                    <Link href={`sign-in`}>
                        <button className="px-3 py-2 rounded-lg bg-color flex gap-2 text-white">
                            <span className="my-auto text-sm">
                                <FaKey />
                            </span>
                            Sign In
                        </button>
                    </Link>
                    <Link href={`/sign-up`}>
                        <button className="px-3 py-2 rounded-lg bg-color flex gap-2 text-white">
                            <span className="my-auto text-sm">
                                <FaUser />
                            </span>
                            Sign Up
                        </button>
                    </Link>
                </div>
        </div>
    );
};

export default NavbarSlider;