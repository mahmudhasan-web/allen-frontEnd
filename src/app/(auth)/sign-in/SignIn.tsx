"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import './Style.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const SignIn = () => {
    const [showPass, setShowPass] = useState(false);
    return (
        <div className="flex items-center justify-center ">
            <div className="w-full max-w-xl p-8 rounded-lg ">
                <h2 className="mb-2 text-3xl font-semibold text-center text-gray-800">
                    Member Sign-in
                </h2>
                <p className="mb-6 text-sm text-center text-gray-500">
                    Not A Member?{" "}
                    <Link href="/signup" className="text-blue-500 font-semibold hover:underline">
                        Sign Up Now.
                    </Link>
                </p>

                <form className="space-y-4">
                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            placeholder="john@example.com"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={`${showPass == false ? "password" : "text"}`}
                                id="password"
                                name='password'
                                placeholder="********"
                                className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                            <button type='button' onClick={() => setShowPass(!showPass)} className="absolute inset-y-0 right-3 flex items-center text-gray-800">
                                {
                                    showPass == false ? <FaEye /> : <FaEyeSlash />
                                }
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-color font-semibold rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300 focus:outline-none"
                    >
                        Log in
                    </button>
                </form>

                {/* Forgot Password */}
                <div className="mt-4 text-center">
                    <Link href="/forgot-pass" className="text-sm font-semibold text-blue-500 hover:underline">
                        Forgot Password
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;