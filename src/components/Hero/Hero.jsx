import React from 'react';
import banner from '../../assets/banner.jpg'
const Hero = () => {
    return (
        <>
        <div className='md:w-2/3 md:h-[600px] mx-auto md:absolute top-[63%] transform md:-translate-y-1/2 left-64'>
            <img src={banner} alt=""  className='w-full rounded-2xl h-full'/>
        </div>
        </>
    );
};

export default Hero;