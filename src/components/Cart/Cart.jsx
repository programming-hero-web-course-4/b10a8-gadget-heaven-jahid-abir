import { useEffect, useState } from "react";
import { getCartItem } from "../utility/addToDb";
import CartItem from "../CartItem/CartItem";



const Cart = () => {
    const [gadget,setGadget] = useState([])
    useEffect(()=>{
        const cartData = getCartItem()
        setGadget(cartData);
    },[])
 
    return (
        <div>
            <div className='flex items-center justify-between my-6'>
                <h3 className='font-bold text-4xl'>Cart</h3>
                <div className="flex gap-3">
                    <h3 className='font-bold text-4xl'>Total Price : </h3>
                    <button className='px-4 py-2 rounded-3xl font-bold border border-primary text-primary'>Sort by Price</button>
                    <button className='px-4 py-2 rounded-3xl font-bold border bg-primary text-white'>Purchase</button>
                </div>
            </div>
            {
            gadget.map(gadget => <CartItem gadget={gadget} key={gadget.product_id}></CartItem>)
          }
        </div>
    );
};

export default Cart;