'use client'
import Button from '@/Components/Common/Button/Button';
import Loader from '@/Components/Loader/Loader';
import ProductCard from '@/Components/ProductCard/ProductCard';
import { Products } from '@/Components/UI/Products';
import { useGetProductQuery } from '@/Redux/Api/producApi';
import { ProductCardInterFace } from '@/Utlis/Interface';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

const ProductCategory = () => {
    const pathName = usePathname().split("/")
    // const [sale, setSale] = useState(false);
    // const [newProduct, setNewProduct] = useState(false);
    const [sale, setSale] = useState<boolean>(false);
    const [newProduct, setNewProduct] = useState<boolean>(false);
    // console.log(pathName);
    const { products, isLoading } = useGetProductQuery({ category: pathName[2].toUpperCase(), sale: sale, newProduct: newProduct }, {
        selectFromResult: ({ data, isLoading }) => ({
            products: data?.result?.data,
            isLoading: isLoading
        }),
    })

    console.log(newProduct);    





    const brands = [... new Set(Products.map(e => e.category))]

    // const productCard = Products.filter((e) => e.category.toLocaleLowerCase().includes(pathName[2]))



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
                <button onClick={() => setNewProduct(!newProduct)} className='w-28 py-1 rounded-lg text-color border-color border'>New Product</button>
                <button onClick={() => setSale(!sale)} className='w-28 py-1 rounded-lg bg-color'>Sale</button>
            </div>
            <div id='card ' className='space-y-10'>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 lg:px-0 md:px-5 px-2 my-3'>
                    {
                        isLoading ?
                            <Loader />
                            :
                            products?.map((e: ProductCardInterFace, idx: number) => <ProductCard item={e} key={idx} />)
                    }
                </div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default ProductCategory;