'use client'
import Button from '@/Components/Common/Button/Button';
// import type { MyCart } from '@/Components/InterFace/Interface';
import { useGetCartQuery } from '@/Redux/Api/cartApi';
import type { MyCart } from '@/Utlis/Interface';
import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { checkOutOrder } from '@/Redux/ReduxFunction';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

interface JWTPayload {
    id: string;
}


const MyCart = () => {
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
    const router = useRouter()
    const token = Cookies.get("token")
    const decode = token && jwtDecode<JWTPayload>(token)
    const dispatch = useDispatch();
    const { result, isLoading } = useGetCartQuery({}, {
        selectFromResult: ({ data, isLoading }) => ({
            result: data?.result,
            isLoading: isLoading
        })
    })

    console.log(result);

    const handleQuantityChange = (productId: string, delta: number) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: Math.max(0, (prevQuantities[productId] || 1) + delta),
        }));
    };


    const handleCheckOut = () => {
        const id = decode && decode?.id as string

        const checkoutData = result.map((item: MyCart) => {
            const productId = item.product.id;
            const quantity = quantities[productId] ?? 1;
            const price = item.product.discountPrice > 0
                ? item.product.discountPrice
                : item.product.mainPrice;

            return {
                productId,
                name: item.product.name,
                price,
                quantity,
                image: item?.product?.productImage,
                total: price * quantity,
            };
        });

        dispatch(checkOutOrder({ id, checkoutData }));
        // console.log(id);
        router.push('/payment')


        // console.log(decode?.id);

    }




    return (
        <section>
            <h1 className='text-3xl  text-center font-semibold my-10'>Order your all added product</h1>
            <div className="overflow-x-auto overflow-hidden min-h-96">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border">Serial</th>
                            <th className="px-4 py-2 border">Image</th>
                            <th className="px-4 py-2 border">Product Name</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Quantity</th>
                            {/* <th className="px-4 py-2 border">Amount</th> */}
                            {/* <th className="px-4 py-2 border">Purchase Date</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ?
                            <tr>
                                <td colSpan={7} className='text-center'>
                                    {/* <Loader className={`w-36`}></Loader> */}
                                    loading
                                </td>
                            </tr>
                            :
                            result?.length <= 0 ?
                                <tr>
                                    <td colSpan={5} className='text-center font-semibold text-lg'>No product add your card</td>
                                </tr>
                                :
                                result?.map((item: MyCart, index: number) => (
                                    <tr key={item?.product?.id} className="border-b text-center">
                                        <td className="px-4 text-nowrap py-2">{index + 1}</td>
                                        <td className="px-4 text-nowrap py-2"><Image src={item?.product?.productImage} width={50} height={50} alt='Image' /></td>
                                        <td className="px-4 text-nowrap py-2">{item?.product?.name}</td>
                                        <td className="px-4 text-nowrap py-2">{item?.product?.discountPrice > 0 ? item?.product?.discountPrice : item?.product?.mainPrice}</td>
                                        <td className="px-4 py-2 flex justify-center gap-2">
                                            <button
                                                onClick={() => handleQuantityChange(item?.product?.id, -1)}
                                                className="my-auto h-fit font-extrabold p-1"
                                            >
                                                -
                                            </button>
                                            <p className="my-auto h-fit">{quantities[item?.product?.id] || 1}</p>
                                            <button
                                                onClick={() => handleQuantityChange(item?.product?.id, 1)}
                                                className="my-auto font-extrabold p-1"
                                            >
                                                +
                                            </button>
                                        </td>
                                        {/* <td className="px-4 text-nowrap py-2"><button onClick={() => handleStatus(item?.id)} className='px-4 py-1 hover:scale-105 transition-transform font-semibold rounded-lg bg-[#83008A] text-white'>{item.user_status == "BLOCKED" ? "Active" : "Block"}</button></td> */}


                                        {/* <td className="px-4 py-2">{item.createdAt.split("T")[0]}</td> */}
                                    </tr>
                                ))}
                    </tbody>
                </table>
            </div>

            <div className='flex justify-center my-10'>
                <Button disabled={result?.length <= 0 ? true : false} onClick={handleCheckOut}>Check Out</Button>
            </div>

        </section>
    );
};

export default MyCart;