import React from 'react';
import { Link } from 'react-router-dom';
import { CgDollar } from "react-icons/cg";
const Gadget = ({gadget}) => {
    const {product_title,product_image,price,product_id} =gadget || {};
    return (
        <div>
            <div className="card shadow-xl border bg-white">
                <figure className="px-8 pt-8">
                    <img
                        src={product_image}
                        alt={product_title}
                        className="rounded-xl w-full h-80 " />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p className='flex items-center gap-1'> Price :<CgDollar /> {price}</p>
                    <div className="card-actions">
                        <Link to={`/gadget/${product_id}`}>
                        <button className="text-primary font-bold px-3 py-2 rounded-2xl border hover:text-white hover:bg-primary">View Details</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;