import AuthBanner from '@/Components/AuthBanner/AuthBanner';
import React from 'react';
import VerifyOTP from './VerifyOTp';

const page = () => {
    return (
        <div>
          <AuthBanner text='Verify your OTP'></AuthBanner>  
          <VerifyOTP></VerifyOTP>
        </div>
    );
};

export default page