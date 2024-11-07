import { useEffect, useState } from "react";
import { getCartItem } from "../utility/addToDb";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";



const Cart = () => {
    const navigate = useNavigate()
    const [price, setPrice] = useState(0)
    const [gadget, setGadget] = useState([])
    useEffect(() => {
        const cartData = getCartItem()
        setGadget(cartData);
        const totalPrice = cartData.reduce((acc, item) => acc + item.price, 0);
        setPrice(totalPrice);
    }, [])

    const handleSortByPrice = () => {
        const cartData = getCartItem()
        const sort = [...cartData].sort((a, b) => b.price - a.price)
        setGadget(sort)
    }

    const handlePurchase = () => {
        setGadget([])
        setPrice(0)
        localStorage.removeItem('cart-item')
        document.getElementById('my_modal_5').showModal().close()
    }
    const handleCloseModal = () => {
        document.getElementById('my_modal_5').close();
        navigate('/'); // Redirect to home page
    };
    return (
        <div>
            <div className='flex items-center justify-between my-6'>
                <h3 className='font-bold text-4xl'>Cart</h3>
                <div className="flex gap-3">
                    <h3 className='font-bold text-4xl'>Total Price : {price} </h3>
                    <button onClick={() => handleSortByPrice()} className='px-4 py-2 rounded-3xl font-bold border border-primary text-primary'>Sort by Price</button>
                    <button onClick={()=>handlePurchase()} className='px-4 py-2 rounded-3xl font-bold border bg-primary text-white'>Purchase</button>
                </div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button onClick={handleCloseModal} className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            {
                gadget.map(gadget => <CartItem gadget={gadget} key={gadget.product_id}></CartItem>)
            }
        </div>
    );
};

export default Cart;