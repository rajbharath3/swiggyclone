import { useDispatch, useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    console.log(cartItems);
    return (
        <div>
            <h1 className="text-3xl font-bold p-3 m-5">Cart Items-{cartItems.length}</h1>
            <button className="bg-orange-200 font-bold w-36 m-5  p-3 rounded text-xl" onClick={() => handleClearCart()}>Clear Cart</button>
            <div className="flex m-5 p-2 flex-wrap">
                {cartItems.map((item) => (
                    <FoodItemCard {...item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Cart;