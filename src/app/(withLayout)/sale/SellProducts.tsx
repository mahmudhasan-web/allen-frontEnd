'use client'
import Button from '@/Components/Common/Button/Button';
// import { ProductCard } from '@/Components/InterFace/Interface';
import ProductCard from '@/Components/ProductCard/ProductCard';
import { Products } from '@/Components/UI/Products';
import { useGetProductQuery } from '@/Redux/Api/producApi';
import { ProductCardInterFace } from '@/Utlis/Interface';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const SellProducts = () => {
     const [sale] = useState(true);
        const [newProduct] = useState(false);
    const { products, isLoading } = useGetProductQuery({sale,newProduct, category: ""}, {
        selectFromResult: ({ data, isLoading }) => ({
            products: data?.result?.data,
            isLoading: isLoading
        }),
    })

    const brands = [... new Set(Products.map(e => e.category))]
    const flower = products && products?.filter((e: { category: { categoryName: string }, discountPrice: number }) => e?.category?.categoryName.toLowerCase() == "Flower".toLowerCase() && e.discountPrice > 0)
    const Edibles = products && products?.filter((e: { category: { categoryName: string }, discountPrice: number }) => e?.category.categoryName?.toLowerCase() == "Edibles".toLowerCase() && e.discountPrice > 0)
    const Concentrates = products && products?.filter((e: { category: { categoryName: string }, discountPrice: number }) => e?.category?.categoryName.toLowerCase() == "Concentrates".toLowerCase() && e.discountPrice > 0)
    const PreRolls = products && products?.filter((e: { category: { categoryName: string }, discountPrice: number }) => e.category.categoryName.toLowerCase() == "Pre-Rolls".toLowerCase() && e.discountPrice > 0)
    const Vapes = products && products?.filter((e: { category: { categoryName: string }, discountPrice: number }) => e.category.categoryName.toLowerCase() == "Vapes".toLowerCase() && e.discountPrice > 0)
    console.log(products);
    

    // const flower = Products.filter((e) => e.category == "Flowers" && e.discountPrice > 0)
    // const Edibles = Products.filter((e) => e.category == "Edibles" && e.discountPrice > 0)
    // const Concentrates = Products.filter((e) => e.category == "Concentrates" && e.discountPrice > 0)
    // const PreRolls = Products.filter((e) => e.category == "Pre-Rolls" && e.discountPrice > 0)
    // const Vapes = Products.filter((e) => e.category == "Vapes" && e.discountPrice > 0)



    return (
        <section className='my-7'>
            <div className='flex justify-between'>
                <div className='space-x-3'>
                    <select name="category" id="" className='border-2  text-lg font-semibold  px-4 py-1  rounded-lg'>
                        <option value="all">Type</option>
                        {
                            brands.map((e, idx) =>
                                <option key={idx}>{e}</option>)
                        }
                    </select>
                    <select name="category" id="" className='border-2  text-lg font-semibold  px-4 py-1  rounded-lg'>
                        <option value="all">Brand</option>
                        <option value="all">ALL</option>
                        <option value="all">ALL</option>
                        <option value="all">ALL</option>
                    </select>
                </div>
                <div>
                    <input type="text" className='border-2  w-56 p-2 rounded-lg focus:border-color focus:outline-none' />
                    <Button className='ml-2'>Search</Button>
                </div>
            </div>
            <div className='space-x-3 my-8'>
                <button className='w-28 py-1 rounded-lg text-color border-color border'>New Product</button>
                <button className='w-28 py-1 rounded-lg bg-color'>Sale</button>
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
                            "loading"
                            :
                            flower?.length <= 0 ?
                            <p>No products Found</p>
                            :
                            flower?.slice(0, 4)?.map((e : ProductCardInterFace, idx : number) => <ProductCard item={e} key={idx} />)
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
                            "loading"
                            :
                            Edibles?.length <= 0 ?
                            <p>No products Found</p>
                            :
                            Edibles?.slice(0, 4)?.map((e : ProductCardInterFace, idx : number) => <ProductCard item={e} key={idx} />)
                            
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
                            "loading"
                            :
                            Concentrates?.length <= 0 ?
                            <p>No products Found</p>
                            :
                            Concentrates?.slice(0, 4)?.map((e : ProductCardInterFace, idx : number) => <ProductCard item={e} key={idx} />)
                            
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
                            "loading"
                            :
                            PreRolls?.length <= 0 ?
                            <p>No products Found</p>
                            :
                            PreRolls?.slice(0, 4)?.map((e : ProductCardInterFace, idx : number) => <ProductCard item={e} key={idx} />)
                            
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
                            "loading"
                            :
                            Vapes?.length <= 0 ?
                            <p>No products Found</p>
                            :
                            Vapes?.slice(0, 4)?.map((e : ProductCardInterFace, idx : number) => <ProductCard item={e} key={idx} />)
                            
                    }
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SellProducts;