import { MdOutlineShoppingCart } from "react-icons/md";
import React, { createContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { addToCart, addToWishlist } from "../utility/addToDb";
export const cartItemContext = createContext()

const GadgetDetails = () => {
    const { productId } = useParams()
    const loadData = useLoaderData()
    const [gadget, setGadget] = useState([])
    useEffect(() => {
        const gadgetData = loadData.find(gadget => gadget.product_id == productId)
        setGadget(gadgetData)
    }, [productId, loadData])

    const { product_title, product_image, price, description, Specification, rating, availability } = gadget;

    const handleAddToCart = (gadget) =>{
        addToCart(gadget)
    }
    const handleAddToWishlist = (gadget) =>{
        addToWishlist(gadget)
    }
    return (
        <div>
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
                                <div>
                                    <span className='font-bold text-xl'>Specification:</span>
                                    <ul>
                                        {Array.isArray(Specification) ? (
                                            Specification.map((speck, idx) => <li key={idx}>{speck}</li>)
                                        ) : (
                                            <li>No specifications available</li>
                                        )}
                                    </ul>
                                </div>
                                <h3 className='font-bold text-xl'>Rating : {rating}</h3>
                                <div className="rating rating-lg rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" defaultChecked />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                </div>
                                <div className="flex gap-5">
                                    <button onClick={()=> handleAddToCart(gadget)} className='flex items-center gap-3 px-4 py-2 rounded-2xl bg-primary text-white font-bold'><MdOutlineShoppingCart /> Add To Card</button>
                                    <button onClick={() => handleAddToWishlist(gadget)} className="px-3 py-3 rounded-full border-2"> <FaRegHeart /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;