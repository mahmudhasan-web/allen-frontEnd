import Button from '@/Components/Common/Button/Button';
import React from 'react';

const VerifyOTP = () => {
    return (
        <div className="flex items-center justify-center my-24 ">
            <div className="w-full max-w-xl p-8 rounded-lg ">
                <h2 className="mb-2 text-3xl font-semibold text-center text-gray-800">
                    Verify your otp
                </h2>
                <p className='text-center'>Type temporal code which you get in your email.</p>
                <div className='mt-5'>
                    <label
                        htmlFor="email"
                        className="block mb-2   font-medium text-gray-700"
                    >
                        OTP
                    </label>
                    <input type="text" className='w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-color focus:outline-none' />
                </div>

                <div>
                    <Button className='w-full my-5'>Send otp</Button>
                </div>
            </div>
        </div>
    );
};

export default VerifyOTP;