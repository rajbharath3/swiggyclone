import { IMG_CDN_URL } from "../constatnts";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const MenuItemCard = (item) => {
    const { name, price, imageId, description, isVeg } = item

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };


    return (
        <div className="p-5 flex w-9/12 bg-stone-50 m-5 ml-48">
            <div className="mr-auto">
                <h1 className="text-xl font-semibold">{name}</h1>
                <h1>{price / 100}/-</h1>
                {isVeg ? "🟩" : "🟥"}
                <p className="text-gray-400">{description}</p>
            </div>
            <div className="flex flex-col">
                <img className="w-28 rounded-md h-24" src={IMG_CDN_URL + imageId} />
                <button
                    className="border border-black mt-3 rounded w-24 ml-2"
                    onClick={() => {
                        handleAddItem(item);
                    }}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default MenuItemCard;
