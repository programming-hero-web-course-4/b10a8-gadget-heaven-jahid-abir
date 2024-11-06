import { MdOutlineShoppingCart } from "react-icons/md";
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";

const GadgetDetails = () => {
    const { productId } = useParams()
    const loadData = useLoaderData()
    const gadgetData = loadData?.find(gadget => gadget.product_id == productId)

    const { product_id, product_title, product_image, price, description, Specification, rating, availability } = gadgetData
    return (
        <div className='relative h-[1000px]'>
            <div className='bg-primary text-center space-y-4 py-10 h-[600px] rounded-b-2xl'>
                <h3 className='font-bold text-6xl w-3/4 mx-auto text-white'>Product Details</h3>
                <p className='w-1/2 mx-auto text-gray-100'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='w-2/3 h-[600px] mx-auto absolute top-[63%] transform -translate-y-1/2 left-64'>
                <div className="hero bg-white py-20 rounded-xl">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={product_image}
                            className="max-w-sm rounded-lg" />
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold">{product_title}</h1>
                            <p className="py-2">Price : {price}</p>
                            {
                                availability ? <button className='px-4 py-1 rounded-2xl bg-green-100 text-green-500'>In Stock</button> : <button className='px-4 py-1 rounded-2xl bg-red-100 text-red-500'>Out of Stock</button>
                            }
                            <p>{description}</p>
                            <div><span className='font-bold text-xl'>Specification :</span> {Specification.map(speck => <li speck={speck}>{speck}</li>)}</div>
                            <h3 className='font-bold text-xl'>Rating : {rating}</h3>
                            <div className="rating rating-lg rating-half">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500"  />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500"  defaultChecked/>
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                            </div>
                            <div className="flex gap-5">
                            <button className='flex items-center gap-3 px-4 py-2 rounded-2xl bg-primary text-white font-bold'><MdOutlineShoppingCart /> Add To Card</button>   
                            <button className="px-3 py-3 rounded-full border-2"> <FaRegHeart /></button>
                            </div>
                        </div>         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;