import React from 'react';
import Hero from '../Hero/Hero';
import { NavLink } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='md:relative md:h-[1000px]'>
            <div className='bg-primary text-center space-y-4 py-10 md:h-[600px] rounded-b-2xl'>
                <h3 className='font-bold md:text-6xl text-4xl w-3/4 mx-auto text-white'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h3>
                <p className='md:w-1/2 w-3/4 mx-auto text-gray-100'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <NavLink to='/dashboard'><button className='bg-white mt-4 text-primary px-3 py-2 rounded-2xl font-bold'>Shop Now</button></NavLink>
            </div>
            <Hero></Hero>
        </div>
    );
};

export default Banner;