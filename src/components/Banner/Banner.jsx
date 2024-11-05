import React from 'react';
import Hero from '../Hero/Hero';

const Banner = () => {
    return (
        <div className='relative h-[1000px]'>
            <div className='bg-primary text-center space-y-4 py-10 h-[600px] rounded-b-2xl'>
                <h3 className='font-bold text-6xl w-3/4 mx-auto text-white'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h3>
                <p className='w-1/2 mx-auto text-gray-100'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className='bg-white text-primary px-3 py-2 rounded-2xl font-bold'>Shop Now</button>
            </div>
            <Hero></Hero>
        </div>
    );
};

export default Banner;