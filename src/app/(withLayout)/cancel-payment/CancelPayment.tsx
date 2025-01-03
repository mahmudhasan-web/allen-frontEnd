'use client'
import Lottie from 'lottie-react';
import React from 'react';

import cancelPayment from '@/assests/payment-unsuccessful.json';

const CancelPayment = () => {
    return (
        <section className='mt-5'>
            <Lottie animationData={cancelPayment} className='w-[650px] mx-auto'></Lottie>
            <h1 className='text-2xl font-semibold text-center my-5 relative -top-10'>Your payment is Successful</h1>
        </section>
    );
};

export default CancelPayment;