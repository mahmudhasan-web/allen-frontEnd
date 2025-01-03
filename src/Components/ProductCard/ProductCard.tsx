'use client'
import React from 'react';
import Image from 'next/image';
import Rating from '../Common/Rating/Rating';
import Button from '../Common/Button/Button';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useAddCartMutation } from '@/Redux/Api/cartApi';
import { ProductCardInterFace } from '@/Utlis/Interface';
import ShowToastify  from '@/Utlis/ShowToastify';
// import { ProductCard } from '../InterFace/Interface';

interface JwtDecode {
    id: string
}

const ProductCard = ({ item }: { item: ProductCardInterFace }) => {
    const [addCardFn] = useAddCartMutation()
    const token = Cookies.get("token")
    const decode = token && jwtDecode<JwtDecode>(token);
    // console.log(decode);
    // const id = 
    const handleCart = async () => {
        const productId = item?.id
        const customerId = decode && decode?.id as string
        const quantity = 1
        const data = { productId, customerId, quantity }
        console.log(data);
        const { data: res, error } = await addCardFn(data)
        if (error && "data" in error && typeof error.data === 'object' && error.data !== null && "message" in error.data) {
            console.log(error);
            ShowToastify({ error: String(error?.data?.message) })
        }
        if (res) {
            console.log(res);
            ShowToastify({success : "Product Added to Cart"})

        }

    }

    return (
        <div key={item.id} className='w-full p-2 border h-full rounded-lg space-y-2 border-color/30 flex flex-col overflow-hidden relative'>
            {
                item.discountPrice > 0 ?
                    <p className='bg-red-600 -rotate-45 text-white w-fit px-7 rounded-lg absolute -left-5 top-3'>Sale</p>
                    :
                    ""
            }
            <Image src={item?.productImage} width={100} height={80} alt={`${item?.category}`} className='w-full h-60 object-contain' />
            <Rating id={4} />
            <Link href={`/products/${item.category?.categoryName.toLowerCase()}/${item.id}`} className='flex-1' ><h1 className='text-lg font-semibold'>{item?.name}</h1></Link>
            <p className=' font-semibold'>${item?.mainPrice}</p>
            <h1 className=' font-semibold'>{item?.category?.categoryName}</h1>
            <Button onClick={handleCart} className='w-full'>Add Cart</Button>
            
        </div>
    );
};

export default ProductCard;