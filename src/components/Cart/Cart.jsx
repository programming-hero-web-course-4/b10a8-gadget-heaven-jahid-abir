

const Cart = () => {

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
          
        </div>
    );
};

export default Cart;