'use client'
import Button from '@/Components/Common/Button/Button';
import Loader from '@/Components/Loader/Loader';
import ProductCard from '@/Components/ProductCard/ProductCard';
// import { Products } from '@/Components/UI/Products';
import { useGetProductQuery } from '@/Redux/Api/producApi';
import { ProductCardInterFace } from '@/Utlis/Interface';
// import { ProductCard } from '@/Utlis/Interface';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Product = () => {
    // const brands = [... new Set(Products.map(e => e.category))]
    const [sale, setSale] = useState(false);
    const [newProduct, setNewProduct] = useState(false);

    const { products, isLoading } = useGetProductQuery({ sale, newProduct, category: "" }, {
        selectFromResult: ({ data, isLoading }) => ({
            products: data?.result?.data,
            isLoading: isLoading
        }),
    })

    // console.log(products);


    const flower = products && products?.filter((e: { category: { categoryName: string } }) => e?.category?.categoryName.toLowerCase() == "Flowers".toLowerCase())
    const Edibles = products && products?.filter((e: { category: { categoryName: string } }) => e?.category.categoryName?.toLowerCase() == "Edibles".toLowerCase())
    const Concentrates = products && products?.filter((e: { category: { categoryName: string } }) => e?.category?.categoryName.toLowerCase() == "Concentrates".toLowerCase())
    const PreRolls = products && products?.filter((e: { category: { categoryName: string } }) => e.category.categoryName.toLowerCase() == "Pre-Rolls".toLowerCase())
    const Vapes = products && products?.filter((e: { category: { categoryName: string } }) => e.category.categoryName.toLowerCase() == "Vapes".toLowerCase())
    console.log(flower);


    return (
        <section className='my-7'>
            <div className='flex justify-end'>

                <div>
                    <input type="text" className='border-2  w-56 p-2 rounded-lg focus:border-color focus:outline-none' />
                    <Button className='ml-2'>Search</Button>
                </div>
            </div>
            <div className='space-x-3 my-8'>
                <button onClick={() => setSale(!sale)} className='w-28 py-1 rounded-lg text-color border-color border'>New Product</button>
                <button onClick={() => setNewProduct(!newProduct)} className='w-28 py-1 rounded-lg bg-color'>Sale</button>
            </div>
            <div id='card ' className='space-y-10'>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold '>Flowers</h1>
                        <Link href={'products/flowers'}><button className='flex gap-2 text-xl font-semibold'>See All <FaChevronRight className='my-auto' /></button></Link>
                    </div>
                    <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 lg:px-0 md:px-5 px-2 my-3'>
                        {
                            isLoading ?
                                <Loader></Loader>
                                :
                                flower?.length <= 0 ?
                                    <p>No products Found</p>
                                    :
                                    flower?.slice(0, 4)?.map((e: ProductCardInterFace, idx: number) => <ProductCard item={e} key={idx} />)
                        }
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold '>Edibles</h1>
                        <Link href={'products/edibles'}><button className='flex gap-2 text-xl font-semibold'>See All <FaChevronRight className='my-auto' /></button></Link>
                    </div>
                    <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 lg:px-0 md:px-5 px-2 my-3'>
                        {
                            isLoading ?
                                <Loader></Loader>
                                :
                                Edibles?.length <= 0 ?
                                    <p>No products Found</p>
                                    :
                                    Edibles?.slice(0, 4)?.map((e: ProductCardInterFace, idx: number) => <ProductCard item={e} key={idx} />)

                        }
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold '>Concentrates</h1>
                        <Link href={'products/concentrates'}><button className='flex gap-2 text-xl font-semibold'>See All <FaChevronRight className='my-auto' /></button></Link>
                    </div>
                    <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 lg:px-0 md:px-5 px-2 my-3'>
                        {
                            isLoading ?
                                <Loader></Loader>
                                :
                                Concentrates?.length <= 0 ?
                                    <p>No products Found</p>
                                    :
                                    Concentrates?.slice(0, 4)?.map((e: ProductCardInterFace, idx: number) => <ProductCard item={e} key={idx} />)

                        }
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold '>PreRolls</h1>
                        <Link href={'products/pre-rolls'}><button className='flex gap-2 text-xl font-semibold'>See All <FaChevronRight className='my-auto' /></button></Link>
                    </div>
                    <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 lg:px-0 md:px-5 px-2 my-3'>
                        {
                            isLoading ?
                                <Loader></Loader>
                                :
                                PreRolls?.length <= 0 ?
                                    <p>No products Found</p>
                                    :
                                    PreRolls?.slice(0, 4)?.map((e: ProductCardInterFace, idx: number) => <ProductCard item={e} key={idx} />)

                        }
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold '>Vapes</h1>
                        <Link href={'products/vapes'}><button className='flex gap-2 text-xl font-semibold'>See All <FaChevronRight className='my-auto' /></button></Link>
                    </div>
                    <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 lg:px-0 md:px-5 px-2 my-3'>
                        {
                            isLoading ?
                                <Loader></Loader>
                                :
                                Vapes?.length <= 0 ?
                                    <p>No products Found</p>
                                    :
                                    Vapes?.slice(0, 4)?.map((e: ProductCardInterFace, idx: number) => <ProductCard item={e} key={idx} />)

                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Product;