'use client'
import React, { ChangeEvent, useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

const NewPassword = () => {
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [confirmPassword, setConfirmPassword] = useState<boolean>(false)

    const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value != password) {
            setConfirmPassword(true)
        }
        else {
            setConfirmPassword(false)
        }
        if (e.target.value.length <= 0) {
            setConfirmPassword(false)
        }
    }

    return (
        <div className="flex items-center justify-center px-3">
            <div className="w-full max-w-xl p-8 rounded-lg ">
                <h2 className="mb-2 md:text-3xl text-xl font-semibold text-center text-gray-800">
                    Change Your Password
                </h2>
                <form className="space-y-4">
                    {/* password Field */}
                    <div className='relative'>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input

                            id="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                            type={showPassword == true ? 'text' : 'password'}
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                        <div className='absolute right-3 top-8'>
                            <button type='button' className='text-lg' onClick={() => setShowPassword(!showPassword)}>{showPassword == false ? <IoEyeSharp /> : <FaEyeSlash />}</button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className='relative'>
                        <label
                            htmlFor="confirmPassword"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            onChange={handleConfirmPassword}
                            placeholder="********"
                            type={showPassword == true ? 'text' : 'password'}
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                        <div className='absolute right-3 top-8'>
                            <button type='button' className='text-lg' onClick={() => setShowPassword(!showPassword)}>{showPassword == false ? <IoEyeSharp /> : <FaEyeSlash />}</button>
                        </div>
                        <p className={confirmPassword == false ? "hidden" : "text-sm text-red-600"}>Your password doesn&#39;t match</p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-color font-semibold rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300 focus:outline-none"
                    >
                        Save
                    </button>
                </form>

                {/* Forgot Password */}

            </div>
        </div>
    );
};

export default NewPassword;