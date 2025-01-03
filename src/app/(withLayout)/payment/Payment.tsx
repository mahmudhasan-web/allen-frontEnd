'use client'
import { RootState } from '@/Redux/store';
import Image from 'next/image';
import React, { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import Button from '@/Components/Common/Button/Button';
import { useCardPaymentMutation, useCashPaymentMutation } from '@/Redux/Api/paymentApi';
import { useRouter } from 'next/navigation';
interface JWTPayload {
    id: string;
    email: string;
}

const Payment = () => {
    const checkOutOrder = useSelector((state: RootState) => state.Auth.checkOutOrder)
    const [cardCheck, setCardCheck] = useState<boolean>(false);
    const [cashCheck, setCashCheck] = useState<boolean>(false);
    const [cardPaymentFn] = useCardPaymentMutation()
    const [cashPaymentFn] = useCashPaymentMutation()
    const route = useRouter()
    // console.log(checkOutOrder?.data);
    const token = Cookies.get("token")
    const decode = token && jwtDecode<JWTPayload>(token)
    const [couponCode, setCouponCode] = useState('');
    const totalAmount = checkOutOrder && checkOutOrder?.data.reduce((a, b) => a + b.total, 0);
    const handleApplyCoupon = () => {
        console.log('Coupon Code:', couponCode);
        // Add logic to apply coupon
    };


    const handlePayment = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const fromData = new FormData(e.currentTarget);

        const client_reference_id = decode && decode?.id as string
        const customerEmail = decode && decode?.email as string
        const paymentMethodTypes = ["card"]
        const currency = "usd"
        const successUrl = "https://allen8797-frontend.vercel.app/payment-success"
        const cancelUrl = "https://allen8797-frontend.vercel.app/cancel-payment"
        const product = checkOutOrder && checkOutOrder?.data?.map((e) => {
            const id = e.productId
            const mainPrice = e.price
            const quantity = e.quantity
            // const name = e.name
            // const image = e.image
            return {
                id, mainPrice, quantity
            }
        }
        )

        const billing_address_collection = {
            firstName: fromData.get("firstName"),
            lastName: fromData.get("lastName"),
            city: fromData.get("city"),
            state: fromData.get("state"),
            zipCode: fromData.get("zipCode"),
            address: fromData.get("address"),
            phoneNumber: fromData.get("phoneNumber")
        }

        const paymentInfoCard = {
            client_reference_id,
            customerEmail,
            paymentMethodTypes,
            currency,
            successUrl,
            cancelUrl,
            product,
            billing_address_collection
        }
        const paymentInfoCash = {
            client_reference_id,
            customerEmail,
            paymentMethodTypes: ["cashIn"],
            currency,
            amount_total: totalAmount,
            successUrl,
            cancelUrl,
            product,
            billing_address_collection
        }
        console.log(paymentInfoCard);
        if (cardCheck) {
            const { data: res, error } = await cardPaymentFn(paymentInfoCard)
            if (error) {
                console.log(error);
            }
            if (res) {
                console.log(res);

                route.push(res?.result?.url)
            }

        }
        if (cashCheck) {
            const { data: res, error } = await cashPaymentFn(paymentInfoCash)
            if (error) {
                console.log(error);
            }
            if (res) {
                console.log(res);
                route.push('/payment-success')
            }
        }


    }



    return (
        <section className='pt-10 px-3'>
            <div className=' grid md:grid-cols-2 grid-cols-1 gap-10'>
                <div className=''>
                    <h1 className='text-2xl mb-5  font-semibold'>Your Order Details</h1>
                    <div className='space-y-5'>
                        {
                            checkOutOrder?.data?.map((e, idx) =>
                                <div key={idx} className='grid grid-cols-4 p-2 rounded-lg gap-x-5 px-5 border'>
                                    <Image src={e.image} alt='Image' className='border' width={50} height={50} />
                                    <p className='text-center my-auto'>{e.name}</p>
                                    <p className='text-center my-auto'>{e.quantity}</p>
                                    <p className='text-center my-auto'>{e.total}</p>
                                </div>)
                        }
                    </div>

                    <div className='my-10 space-y-2'>
                        <h1 className='text-xl font-semibold'>Choice your payment method</h1>
                        <div>
                            <input onChange={() => setCashCheck(!cashCheck)} className='mr-2' type="radio" id="cash" name="payment" value="cash" />
                            <label htmlFor="cash">Cash</label>
                        </div>
                        <div>
                            <input onChange={() => setCardCheck(!cardCheck)} className='mr-2' type="radio" id="card" name="payment" value="card" />
                            <label htmlFor="card">Card</label>
                        </div>
                    </div>

                </div>
                <div className=''>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <form onSubmit={handlePayment} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-base font-medium text-gray-700">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-base font-medium text-gray-700">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="city" className="block text-base font-medium text-gray-700">
                                        City <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="City"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="state" className="block text-base font-medium text-gray-700">
                                        State <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="state"
                                        name="state"
                                        className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    >
                                        <option value="California">California</option>
                                        <option value="New York">New York</option>
                                        <option value="Texas">Texas</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="zipCode" className="block text-base font-medium text-gray-700">
                                        Zip Code <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        name="zipCode"
                                        className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Zip Code"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber" className="block text-base font-medium text-gray-700">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Phone Number"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-base font-medium text-gray-700">
                                    Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Address"
                                />
                            </div>



                            <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="text"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        className="flex-1 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Coupon Code"
                                    />
                                    <button
                                        onClick={handleApplyCoupon}
                                        className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600"
                                    >
                                        Apply Code
                                    </button>
                                </div>
                                <div className="mt-4 text-gray-700">
                                    <p className="flex justify-between">
                                        <span>Cart Subtotal:</span> <span>${totalAmount}</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>Delivery Charge:</span> <span>$0</span>
                                    </p>
                                    <p className="flex justify-between font-bold">
                                        <span>Total:</span> <span>${totalAmount}</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <Button>Payment</Button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Payment;