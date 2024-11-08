import React from 'react';
import { Helmet } from 'react-helmet';

const Statistics = () => {
    return (
        <div>
            <Helmet>
            <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <div className='bg-primary text-center space-y-4 py-10 my-16 rounded-2xl'>
                <h3 className='font-bold text-6xl w-3/4 mx-auto text-white'>Statistics</h3>
                <p className='w-1/2 mx-auto text-gray-100'>Explore cutting-edge trends and detailed insights into the latest gadgets, powered by real-time statistics. Stay ahead of the tech curve with data-driven comparisons and performance metrics, helping you make informed decisions!</p>
            </div>
        </div>
    );
};

export default Statistics;