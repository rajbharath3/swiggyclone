import { useEffect, useState } from "react";
import { restaurantList } from "../constatnts";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useContext } from "react";


function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
  );
  return !searchInput ? restaurants : filterData;
}



const Body = () => {

  const [searchInput, setsearchInput] = useState();
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [allrestaurants, setAllRestaurants] = useState([]);
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.823718594372178&lng=83.34554269909859&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      if (!data.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await data.json();
      console.log(jsonData.data);
      let i = 0;
      while (!(jsonData?.data?.cards[i]?.card?.card?.id === "restaurant_grid_liosting")) {
        i++;
      }
      setAllRestaurants(jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestaurants(jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (e) {
      console.log(e);
    }

  }

  const isOnline = useOnline();

  if (!allrestaurants) return null;

  if (!isOnline)
    return (
      <h1>You are offline....please check your internet connection....</h1>
    );

  return allrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center ">
        <input
          type="text"
          className="m-5  border-black border-2 w-60 rounded-md hover:bg-gray-200"
          placeholder="  search for restuarants"
          value={searchInput}
          onChange={(e) => {
            setsearchInput(e.target.value);
          }}
        ></input>
        <button
          className="bg-orange-500 w-20 h-10 m-5 ml-1 rounded-md"
          onClick={() => {
            const data = filterData(searchInput, allrestaurants);
            setfilteredRestaurants(data);
          }}
        >
          search
        </button>
        <input
          value={user.name}
          onChange={(e) => setUser({
            ...user,
            name: e.target.value
          })}
        ></input>
        <input
          value={user.email}
          onChange={(e) => setUser({
            ...user,
            email: e.target.value
          })}
        ></input>
      </div>
      <div className="flex flex-wrap m-24 mt-0 ml-32">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.info.id}>
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            </Link>
          )
        })}
      </div>
    </>
  );
};

export default Body;
