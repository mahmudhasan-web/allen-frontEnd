import Button from '@/Components/Common/Button/Button';
import React from 'react';

const ContactUs = () => {
    return (
        <div className="flex items-center justify-center  ">
            <div className="w-full max-w-xl p-8 rounded-lg ">
                <h2 className="mb-2 md:text-3xl text-xl font-semibold text-center text-gray-800">
                    Contact Us
                </h2>
                <p className='text-center md:text-base text-sm'>If you have any problem , you can contact with us.</p>
                <div className='mt-5'>
                    <label
                        htmlFor="name"
                        className="block mb-2   font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="text"
                        name='text'
                        placeholder="enter your name"
                        className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-color focus:outline-none"
                    />
                </div>
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
                <div className='mt-5'>
                    <label
                        htmlFor="number"
                        className="block mb-2   font-medium text-gray-700"
                    >
                        Phone Number
                    </label>
                    <input
                        type="number"
                        id="number"
                        name='number'
                        placeholder="enter your phone number"
                        className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-color focus:outline-none"
                    />
                </div>
                <div className='mt-5'>
                    <label
                        htmlFor="mesage"
                        className="block mb-2   font-medium text-gray-700"
                    >
                        Message
                    </label>
                    <textarea  className="w-full h-36 px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-color focus:outline-none"/>
                </div>

                <div>
                    <Button className='w-full my-5'>Send</Button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;