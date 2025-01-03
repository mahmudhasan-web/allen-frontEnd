import React from 'react';

const Loader = () => {
    return (
        <div className='w-full p-2 border h-full rounded-lg space-y-2 bg-gray-200 animate-pulse relative'>
            <div className='bg-red-600 -rotate-45 text-white w-fit px-7 rounded-lg absolute -left-5 top-3'>Sale</div>
            <div className='w-full h-60 bg-gray-300'></div>
            <div className='h-4 w-2/3 bg-gray-300 self-center'></div>
            <div className='h-6 w-4/5 bg-gray-300'></div>
            <div className='h-4 w-2/5 bg-gray-300'></div>
            <div className='h-4 w-half bg-gray-300'></div>
            <div className='h-10 w-full bg-gray-300'></div>
        </div>
    );
};

export default Loader;