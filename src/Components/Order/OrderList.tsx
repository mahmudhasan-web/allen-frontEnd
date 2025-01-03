'use client'
import { useGetUserOrdersQuery } from '@/Redux/Api/orderApi';
import type { OrderList } from '@/Utlis/Interface';
import Image from 'next/image';
// import { useMyOrderQuery } from '@/Redux/Api/producApi';
import React from 'react';
import Loader from '../Loader/Loader';

const OrderList = () => {
    const { result, isLoading } = useGetUserOrdersQuery({}, {
        selectFromResult: ({ data, isLoading }) => ({
            result: data?.result,
            isLoading: isLoading
        })
    })

    console.log(result);
    


    return (
        <section className=''>
            <h1 className='text-xl font-semibold mb-2'>Your Order List</h1>
            <div className='space-y-3'>

                {
                    result?.map((orders: OrderList, index: number) => (
                        <div key={index} className='space-y-3'>
                            {
                                isLoading ?
                                    <Loader></Loader>
                                    :
                                    orders?.OrderProducts?.map((product, productIndex) => (
                                        <div key={productIndex} className='border min-h-20 px-2 grid grid-cols-5 gap-x-5 '>
                                            <Image width={70} height={45} className='my-auto object-cover' src={product?.product?.productImage} alt='Image' key={productIndex}></Image>
                                            <p className='text-sm w-full my-auto'>{product?.product?.name}</p>
                                            <p className='my-auto text-center'><span className='text-lg font-semibold'>Quantity</span> <br />{product?.productQuantity}</p>
                                            <p className='my-auto text-center'><span className='text-lg font-semibold'>price</span><br /> {product?.product?.discountPrice > 0 ? product?.product?.discountPrice : product?.product?.mainPrice}</p>
                                            <p className='my-auto text-center text-sm'><span className='text-lg font-semibold'>Status</span> <br />{orders?.status}</p>
                                        </div>
                                    ))
                            }
                           
                        </div>
                    ))
                }
                {/* {orderHistory?.length > 0 ? (
                    orderHistory
                ) : (
                    <p>No orders found.</p>
                )} */}
            </div>
        </section>
    );
};

export default OrderList;