import React, { useEffect, useState } from 'react';
import { getWishlistCard } from '../utility/addToDb';
import CartItem from '../CartItem/CartItem';

const Wishlist = () => {
    const [wishlist,setWishlist] = useState([])
    useEffect(() =>{
        const wishlistData = getWishlistCard()
        setWishlist(wishlistData)
    },[])
    return (
        <div>
           <h3 className='font-bold text-3xl mt-6'>Wishlist</h3>
           {
            wishlist.map(gadget => <CartItem gadget={gadget} key={gadget.product_id}></CartItem>)
           }
        </div>
    );
};

export default Wishlist;