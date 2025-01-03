import { useUserDetailsQuery } from '@/Redux/Api/userApi';
import Image from 'next/image';
import React from 'react';

const IdDetails = () => {
     const { result } = useUserDetailsQuery({}, {
        selectFromResult: ({ data }) => ({
            result: data?.result?.customer,
        }),
    })
    
    console.log(result);

    return (
        <section className=' space-y-5'>
            <div className='flex  justify-between'> 
                <h1 className='my-auto text-lg font-semibold'>Upload Id</h1>
                <Image src={result?.uploadId} width={100} height={100} className='rounded-xl w-28 h-28 object-cover' alt='Id image'></Image>
            </div>
            <div className='flex justify-between'>
                <h1 className='my-auto text-lg font-semibold'>Upload Id with selfie</h1>
                <Image src={result?.uploadSelfieId} width={100} height={100} className='rounded-xl w-28 h-28 object-cover' alt='Id image'></Image>
            </div>
            <p className='text-center'>Editing your id information will require you to get verified by one of our admins again. You won&lsquo;t be able to place orders while unverified.</p>
        </section>
    );
};

export default IdDetails;