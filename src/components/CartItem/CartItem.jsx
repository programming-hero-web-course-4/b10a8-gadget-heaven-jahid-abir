import React from 'react';

const CartItem = ({gadget}) => {
    const { product_title, product_image, price, description } = gadget;
    return (
        <div className='space-y-6 my-12'>
            <div className="flex items-center gap-6 p-4 border rounded-xl bg-white">
                <img src={product_image} alt="" className='h-60 w-80' />
                <div className="">
                    <h3 className='text-3xl font-bold'>{product_title}</h3>
                    <p>{description}</p>
                    <p>Price : {price}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;