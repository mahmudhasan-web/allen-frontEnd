import Rating from '@/Components/Common/Rating/Rating';
import Loader from '@/Components/Loader/Loader';
import { useAddCartMutation } from '@/Redux/Api/cartApi';
import { useGetSingleProductQuery } from '@/Redux/Api/producApi';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
// import { useRouter } from 'next/router';
import React from 'react';
import { jwtDecode } from 'jwt-decode';
import ShowToastify from '@/Utlis/ShowToastify';
import { ToastContainer } from 'react-toastify';

interface JwtDecode {
  id: string
}

const ProductDetails = () => {
  const router = useRouter()
  const pathName = usePathname().split('/')[3]
  console.log(pathName);

  const [addCardFn] = useAddCartMutation()

  const { result, isLoading } = useGetSingleProductQuery(pathName, {
    selectFromResult: ({ data, isLoading }) => ({
      result: data?.result,
      isLoading: isLoading
    })
  })

  // console.log(result);

  const token = Cookies.get("token")
  const decode = token && jwtDecode<JwtDecode>(token);
  // console.log(decode);
  // const id = 


  const handleCart = async () => {
    const productId = result?.id
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
      ShowToastify({ success: "Product Added to Cart" })

    }

  }




  return (
    <section>
      <h1 className='lg:text-4xl font-semibold text-center my-5 text-color md:text-2xl text-xl'>Product Details</h1>
      {
        isLoading ?
          <Loader />
          :
          <div className='flex justify-around'>

            <div className=''>
              <Image alt='image' src={result?.productImage} width={600} height={500} className='mx-auto' />
            </div>
            <div className='min-w-96 my-auto space-y-3'>
              {/* <Loader /> */}
              <h1 className='text-2xl font-semibold '>{result?.name}</h1>
              <div className='flex justify-between'>
                <Rating id={4} />
                <p className='text-xl font-semibold'>${result?.mainPrice}</p>
              </div>
              <p className='text-lg'>{result?.details}</p>
              <div className='flex justify-around mt-10'>
                <button onClick={handleCart} className='bg-color px-4 py-1 rounded-lg font-semibold text-white'>Add Cart</button>
                <button onClick={() => router.back()} className='border rounded-lg border-color px-4 py-1  font-semibold text-color'>Continue Shopping</button>
              </div>
            </div>
          </div>
      }
      <ToastContainer />
    </section>
  );
};

export default ProductDetails;