import Button from '@/Components/Common/Button/Button';
import React from 'react';

const ForgetPassword = () => {
    return (
        <div className="flex items-center justify-center my-24 px-3">
            <div className="w-full max-w-xl p-8 rounded-lg ">
                <h2 className="mb-2 md:text-3xl text-xl font-semibold text-center text-gray-800">
                    Forget your password
                </h2>
                <p className='text-center md:text-base text-sm'>Type your email or phone number to get a temporal code.</p>
                <div className='mt-5'>
                    <label
                        htmlFor="email"
                        className="block mb-2   font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        placeholder="john@example.com"
                        className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-color focus:outline-none"
                    />
                </div>

                <div>
                    <Button className='w-full my-5'>Send otp</Button>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;