"use client";
import { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaKey, FaUser } from "react-icons/fa";
import Link from "next/link";
import NavbarSlider from "./NavbarSlider";
import { motion } from 'motion/react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [sideNav, setSideNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if user has scrolled past the banner (100vh)
            if (window.scrollY > window.innerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            className={`fixed w-full top-0 z-50 py-4 ${isScrolled ? "bg-background" : "bg-transparent"
                } transition-all duration-300 ease-in-out text-white`}
        >
            <div className="flex justify-between container mx-auto px-4">
                <button onClick={() => setSideNav(!sideNav)} className="text-3xl">
                    <TiThMenu />
                </button>
                <div id="logo">
                    <Link href={`/`}>hello</Link>
                </div>
                <div id="Auth" className=" md:flex hidden  gap-5 ">
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
            <motion.div initial={{ x: -600, opacity: 0 }} animate={{ x: sideNav ? 0 : -600, opacity: sideNav ? 1 : 0, transition: { bounce: .5, duration: .9, type: "spring" } }} className={`absolute bg-white md:w-[450px] w-[300px] p-10 rounded-lg z-50`}>
                <NavbarSlider />
            </motion.div>
        </section>
    );
};

export default Navbar;
