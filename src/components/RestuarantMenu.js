import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constatnts";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import MenuItemCard from "./MenuItemCard";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurant(resId);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("banana"));
  };

  return !menu ? (
    <Shimmer />
  ) : (
    <div className="flex">
      {/* //   <div className="p-5 m-5">
    //     <h1>Restraunt id: {resId}</h1>
    //     <h2>{restaurant?.name}</h2>
    //     <img className="w-80" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
    //     <h3>{restaurant?.city}</h3>
    //     <h3>{restaurant?.areaName}</h3>
    //     <h3>{restaurant?.avgRating} stars</h3>
    //     <h3>{restaurant?.costForTwoMsg}</h3>
    //   </div> */}
      <div className="p-5">
        <h1 className="font-bold text-3xl ml-auto">Menu</h1>

        {menu.map((item) => {
          return (
            <MenuItemCard {...item} key={item.id} />
          )
        })}


      </div>
    </div>
  );
};

export default RestaurantMenu;
