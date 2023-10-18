import { useEffect, useState } from "react"
import { FETCH_MENU_URL } from "../constatnts";

const useRestaurant = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    const [items, setItems] = useState([]);
    const menu = [];



    useEffect(() => {
        getRestaurantInfo();
    }, [])


    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL + resId);
        const json = await data.json();

        setRestaurantMenu(json?.data?.cards[0]?.card?.card?.info);
        setItems(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }


    items.forEach((item) => {
        item?.card?.card?.itemCards?.forEach((it) => {
            menu.push(it.card.info);

        })
    });

    return menu;
}

export default useRestaurant;