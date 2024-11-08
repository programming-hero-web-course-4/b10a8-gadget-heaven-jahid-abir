import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    const [active,setActive] = useState({status:true,location:'cart'})

   const handleActivePage = (location) =>{
    if(location==='cart'){
        setActive({status:true,location:'cart'})
    }
    else{
        setActive({status:false,location:'wishlist'})
    }
   }
    return (
        <div>
            <Helmet>
            <title>Dashboard | Gadget Heaven</title>
            </Helmet>
           <div className='bg-primary text-center space-y-4 py-10 h-[300px] rounded-2xl'>
                <h3 className='font-bold md:text-6xl text-4xl w-3/4 mx-auto text-white'>Dashboard</h3>
                <p className='md:w-1/2 w-3/4 mx-auto text-gray-100'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="space-x-4">
                <button onClick={() =>handleActivePage('cart')} className={`px-4 py-2 rounded-2xl font-bold border border-white ${active.status ? 'bg-white text-primary' : 'bg-primary text-white'}`}>cart</button>
                <button onClick={() => handleActivePage('wishlist')} className={`px-4 py-2 rounded-2xl font-bold border border-white ${active.status ? 'bg-primary text-white' : 'bg-white text-primary'}`}>Wishlist</button>
                </div>
            </div>
            {
                active.status ? <Cart></Cart> : <Wishlist></Wishlist>
            }
        </div>
    );
};

export default Dashboard;