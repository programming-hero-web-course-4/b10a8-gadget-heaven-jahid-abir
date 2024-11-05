import React from 'react';

const Gadget = ({gadget}) => {
    const {product_title,product_image,price} =gadget;
    return (
        <div>
            <div className="card shadow-xl border">
                <figure className="px-8 pt-8">
                    <img
                        src={product_image}
                        alt={product_title}
                        className="rounded-xl w-full h-80 " />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price :{price}</p>
                    <div className="card-actions">
                        <button className="text-primary font-bold px-3 py-2 rounded-2xl border hover:text-white hover:bg-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;