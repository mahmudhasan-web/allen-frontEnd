"use client";
import { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaKey, FaUser } from "react-icons/fa";
import Link from "next/link";
import NavbarSlider from "./NavbarSlider";
import { motion } from 'motion/react'
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import Image from "next/image";
import Button from "../Common/Button/Button";
import { logOut } from "@/Redux/ReduxFunction";
import profileImage from "@/assests/no-face.png"
import logo from "@/assests/logo.png"
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const Navbar = () => {
    const patheName = usePathname()
    const [modal, setModal] = useState("hidden");
    const [isScrolled, setIsScrolled] = useState(false);
    const [sideNav, setSideNav] = useState(false);
    const { name } = useSelector((state: RootState) => state.Auth)
    const token = Cookies.get("token");
    // console.log(token);


    const dispatch = useDispatch()
    useEffect(() => {

        const tokenDetails = token ? jwtDecode(token as string) : null;
        const currentTime = Math.floor(Date.now() / 1000);
        console.log(tokenDetails);


        // Check if the token is expired
        if (tokenDetails && tokenDetails.exp && tokenDetails.exp > currentTime) {
            console.log("The token is still valid.");
        } else {
            console.log("The token has expired.");
            dispatch(logOut())
            Cookies?.remove("token")
        }
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




    }, [dispatch, token]);

    const handleLogOut = () => {
        Cookies?.remove("token")
        dispatch(logOut())
    }

    return (
        <section
            className={`fixed w-full top-0 z-50  py-6 ${isScrolled || patheName !== "/" ? "bg-background" : "bg-transparent"
                } transition-all duration-300 ease-in-out  text-white`}
        >
            <div className="flex justify-between container mx-auto px-4">
                <button onClick={() => setSideNav(!sideNav)} className="text-3xl">
                    <TiThMenu />
                </button>
                <div id="logo">
                    <Link href={`/`}><Image src={logo} width={120} height={100} className="object-cover fixed -mt-3" alt="logo"></Image></Link>
                </div>
                {
                    name ?
                        <div className="flex gap-2 relative">
                            <Image onMouseEnter={() => setModal("absolute")} onMouseLeave={() => setModal("hidden")} src={profileImage} alt="image" width={10} height={10} className="rounded-full my-auto w-10 h-10 object-cover"></Image>
                            <h1 className="my-auto font-semibold text-lg">{name}</h1>
                            <div onMouseEnter={() => setModal("absolute")} onMouseLeave={() => setModal("hidden")} className={` bg-white p-3 rounded-lg flex space-y-2 w-32 flex-col top-10 -left-10 ${modal}`}>
                                <Link href="/profile" className="text-black mx-auto font-semibold hover:text-color">Profile</Link>
                                <Link href="/my-cart" className="text-black mx-auto font-semibold hover:text-color">Cart</Link>
                                <Button onClick={handleLogOut} className="text-xs ">Log Out</Button>
                            </div>
                        </div>
                        :
                        <div id="Auth" className=" md:flex hidden  gap-5 ">
                            <Link href={`/sign-in`}>
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
                }
            </div>
            <motion.div initial={{ x: -600, opacity: 0 }} animate={{ x: sideNav ? 0 : -600, opacity: sideNav ? 1 : 0, transition: { bounce: .5, duration: .9, type: "spring" } }} className={`absolute bg-white md:w-[450px] w-[300px] p-10 rounded-lg z-50`}>
                <NavbarSlider sideNav={sideNav} setSideNav={setSideNav} />
            </motion.div>
        </section>
    );
};

export default Navbar;
