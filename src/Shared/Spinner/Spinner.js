import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <p className='md:text-7xl text-5xl font-thin'>L</p>
            <div className='md:w-10 md:h-10 h-7 w-7 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
            <p className='md:text-7xl text-5xl font-thin'>ading....</p>
        </div>
    );
};

export default Spinner;