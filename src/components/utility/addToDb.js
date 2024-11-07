import toast from 'react-hot-toast'

//get all gadget from local storage
const getCartItem = () =>{
   const getItem = localStorage.getItem('cart-item')
   if(getItem){
    return JSON.parse(getItem)
   }
   else{
    return []
   }
}

//add gadget local storage
const addToCart = (gadget) => {
   const cartItem = getCartItem()
   const isExist = cartItem.find(item => item.product_id == gadget.product_id)
   if(isExist) return toast.error('This is already exist!');
   cartItem.push(gadget)
   localStorage.setItem('cart-item',JSON.stringify(cartItem))
   toast.success('Successfully Added!');
}

//add wishlist gadget from local storage
const getWishlistCard = () =>{
    const getWishlist = localStorage.getItem('wish-list')
    if(getWishlist){
       return JSON.parse(getWishlist)
    }
    else{
        return []
    }
}

const addToWishlist = (gadget) =>{
    const wishlist = getWishlistCard()
    const isExist = wishlist.find(item => item.product_id == gadget.product_id)
    if(isExist) return toast.error('This is already exist!');
    wishlist.push(gadget)
    localStorage.setItem('wish-list',JSON.stringify(wishlist))
    toast.success('Successfully Added To Wishlist!');
}
export { addToCart,getCartItem,getWishlistCard,addToWishlist }
