import { useEffect, useState } from "react";
import { getCartItem } from "../utility/addToDb";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import success from '../../assets/Group.png'
import { CgDollar } from "react-icons/cg";
import { Helmet } from "react-helmet";

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

    const handleCloseModal = () => {
        document.getElementById('my_modal_5').close();
        navigate('/'); // Redirect to home page
    };
    const handlePurchase = () => {
        setGadget([])
        setPrice(0)
        localStorage.removeItem('cart-item')
        document.getElementById('my_modal_5').showModal().close()
    }
    return (
        <div>
            <Helmet><title>Cart | Gadget Heaven</title></Helmet>
            <div className='flex items-center justify-between my-6'>
                <h3 className='font-bold text-4xl'>Cart</h3>
                <div className="flex gap-3">
                    <h3 className='font-bold text-4xl flex items-center'>Total Price : <CgDollar /> {price} </h3>
                    <button onClick={() => handleSortByPrice()} className='px-4 py-2 rounded-3xl font-bold border border-primary text-primary'>Sort by Price</button>
                    <button onClick={()=>handlePurchase()} className={`${price === 0 ? 'bg-gray-300 px-4 py-2 rounded-3xl cursor-not-allowed opacity-50' : 'px-4 py-2 rounded-3xl font-bold border bg-primary text-white'}`} disabled={price===0}>Purchase</button>
                </div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box space-y-5">
                        <div className="flex items-center justify-center">
                            <img src={success} alt="" />
                        </div>
                        <h3 className="font-bold text-2xl text-center">Payment Successfully!</h3>
                        <p className="py-2 text-center">Thanks for purchasing
                        From Our Shop.</p>
                        <div >
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button onClick={handleCloseModal} className="btn w-full">Close</button>
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