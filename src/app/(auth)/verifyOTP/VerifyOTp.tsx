'use client'
import { useVerifyOTPMutation } from "@/Redux/Api/userApi";
// import { useOtpGenerateMutation } from "@/Redux/Api/userApi";

import {  useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";

const VerificationCodeInput = () => {
  const [otp, setOtp] = useState("Verify OTP");
  const params= useSearchParams()
  const email = params.get('email')

  console.log(email);
  

  const route = useRouter()


  const [OTPFn] = useVerifyOTPMutation()


  const [code, setCode] = useState(Array(4).fill(""));

  const handleChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value.slice(-1); // Only allow one character
    setCode(newCode);

    // Automatically focus on the next input
    if (value && index < code.length - 1) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (e: { key: string }, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const nextInput = document.getElementById(`code-${index - 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleSubmit = async () => {
    setOtp("loading")
    // alert(`Verification Code: ${code.join("")}`);
    const fullCode = code.join("")
   
     
    const { data, error } = await OTPFn({ email, otp: fullCode })
    if (error) {
      console.log(error);

    }
    if (data) {
      // console.log(data);
      setOtp("Verify OTP")
      Cookies.set('token', data?.result)
      route.push('/virtual-budtender')


    }
    console.log(typeof (fullCode));

  };

  return (
    <div className="flex flex-col items-center justify-center md:py-20 py-10 px-3">
      <h1 className="text-2xl font-bold mb-4">Verification code</h1>
      <p className="text-gray-600 mb-6">
        We have sent a verification code to your registered phone number
      </p>
      <div className="flex gap-2">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`code-${index}`}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        {otp}
      </button>
    </div>
  );
};

export default VerificationCodeInput;
