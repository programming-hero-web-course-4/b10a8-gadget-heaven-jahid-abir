import React from 'react';
import { Helmet } from 'react-helmet';
import offer from '../../assets/mega-sale.jpg'
import { NavLink } from 'react-router-dom';

const Offers = () => {
    return (
        <div>
            <Helmet><title>Offers | Gadget Heaven</title></Helmet>
            <div className='bg-primary text-center space-y-4 py-10 rounded-2xl'>
                <h3 className='font-bold md:text-6xl text-4xl w-3/4 mx-auto text-white'>Offers</h3>
                <p className='md:w-1/2 w-3/4 mx-auto text-gray-100'>Grab the hottest deals with exclusive discounts on a wide range of products. Limited-time offers you don’t want to miss!</p>
            </div>
            <div className="hero my-16 hidden md:block">
                <div className="hero-content text-center">
                    <div className="">
                    <img src={offer} alt="" className='h-80 w-80 rounded-full'  />
                    </div>
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">MEGA SELL !!</h1>
                        <p className="py-6">
                        Don't miss out on our Mega Sell event, where top gadgets and accessories are available at unbeatable prices. Shop now and save big on your favorite tech items before the deals end!
                        </p>
                        <NavLink to='/'>
                        <button className="px-4 py-2 rounded-2xl bg-primary text-white font-bold">Buy Now</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;