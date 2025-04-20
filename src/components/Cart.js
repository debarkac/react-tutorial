import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart=()=>{
    //subscribing to cart using selector
    const cartItems=useSelector((store)=>store.cart.items);
    console.log("Cart items"+cartItems);
    console.log(cartItems);

    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 mx-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear cart</button>
            {cartItems.length===0 && <h1>Cart is empty</h1>}
                <ItemList items={cartItems} />
            </div>

        </div>
    )
}

export default Cart;