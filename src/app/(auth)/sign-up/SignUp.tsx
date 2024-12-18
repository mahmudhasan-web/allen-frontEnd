'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent } from 'react';
import uploadImage from '@/assests/uploadFile.png'

const SignUp = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Data Submitted:");
    };
    return (
        <div className="flex items-center justify-center  bg-white">
            <div className="w-full max-w-xl p-6  rounded-lg">
                {/* Title */}
                <h2 className="text-3xl font-semibold text-center text-gray-800">
                    Member Sign-up
                </h2>
                <p className="mt-2 mb-4 text-center text-gray-500">
                    If You Already Have An Account You Can{" "}
                    <Link href="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Grid Layout */}
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Nickname */}
                    <div>
                        <label
                            htmlFor="nickname"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Nickname
                        </label>
                        <input
                            type="text"
                            id="nickname"
                            name="nickname"
                            placeholder="Johnny"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="(123) 456-7890"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Email Account
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="********"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label
                            htmlFor="address"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="123 Main St"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* City */}
                    <div>
                        <label
                            htmlFor="city"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="New York"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* State */}
                    <div>
                        <label
                            htmlFor="state"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            State
                        </label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder="NY"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Zipcode */}
                    <div>
                        <label
                            htmlFor="zipcode"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Zipcode
                        </label>
                        <input
                            type="text"
                            id="zipcode"
                            name="zipcode"
                            placeholder="10001"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    {/* Social Media */}
                    <div>
                        <label
                            htmlFor="zipcode"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Zipcode
                        </label>
                        <div className='flex gap-2'>
                            <select name="" className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" id="">
                                <option value="facebook">Facebook</option>
                                <option value="instagram">Instagram</option>
                                <option value="twitter">Twitter</option>
                                <option value="snapchat">SnapChat</option>
                                <option value="tik-tok">Tik Tok</option>
                                <option value="linkedin">Linkedin</option>
                            </select>
                            <input
                                type="text"
                                id="zipcode"
                                name="zipcode"
                                placeholder="@your_account"
                                className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                    </div>
                    {/* Referral's Phone Number */}
                    <div>
                        <label
                            htmlFor="Referral's Phone"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Referral&apos;s Phone (optional)
                        </label>
                        <input
                            type="text"
                            id="referral-phone"
                            name="referral-phone"
                            placeholder="10001"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Upload your id photo */}
                    <div>
                        <h1 className='text-center my-10 text-lg'>State ID • Drivers License • Passport</h1>
                        <div className='flex justify-between'>
                            <div className='flex gap-5'>
                                <label
                                    htmlFor="zipcode"
                                    className="block my-auto mb-2 text-sm font-medium text-gray-700"
                                >
                                    Upload ID
                                </label>
                                <input
                                    type="file"
                                    id="idImage"
                                    name='idImage'
                                    className="hidden"
                                />
                                <Image width={90} className='cursor-pointer' onClick={() => document.getElementById("idImage")?.click()} src={uploadImage} alt='uploadImage'></Image>

                            </div>
                            <div className='flex gap-5'>
                                <label
                                    htmlFor="zipcode"
                                    className="block mb-2 my-auto text-sm font-medium text-gray-700"
                                >
                                    Upload Selfie holding ID
                                </label>
                                <input
                                    type="file"
                                    id="idWithSelfie"
                                    name='idWithSelfie'
                                    className='hidden'
                                />
                                <Image width={90} className='cursor-pointer' onClick={() => document.getElementById("idWithSelfie")?.click()} src={uploadImage} alt='uploadImage'></Image>
                            </div>
                        </div>
                    </div>

                    {/* Teams condition */}
                    <div className='my-20'>
                        <p className='text-sm text-center my-10'>By sumbitting your information you agree you&apos;ve read and accepted our User Agreement. Please see our Privacy Policy for information regarding the processing of your data.</p>
                        <p className='text-sm text-center'>We will send a code to your phone to verify your identity.</p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300 focus:outline-none"
                    >
                        Send Code
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-4 text-xs text-center text-gray-500">
                    Please use a mobile device to sign up.
                </p>
            </div >
        </div >
    );
};

export default SignUp;