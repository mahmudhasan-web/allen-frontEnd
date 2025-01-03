'use client'
import Lottie from 'lottie-react';
import React from 'react';
import success from "@/assests/Success.json"

const PaymentSuccess = () => {
    return (
        <section>
            <Lottie animationData={success} className='w-[650px] mx-auto'></Lottie>
            <h1 className='text-2xl font-semibold text-center my-5 relative -top-10'>Your payment is Successful</h1>
        </section>
    );
};

export default PaymentSuccess;