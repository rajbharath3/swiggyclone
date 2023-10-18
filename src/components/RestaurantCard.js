import { IMG_CDN_URL } from "../constatnts";

export const RestaurantCard = ({ name, cloudinaryImageId, avgRating, cuisines }) => {

  return (
    <>
      <div className=" w-56 m-2 p-2 shadow-lg text-ellipsis hover:shadow-current">
        <img className="w-52 h-48"
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <h2 className="text-lg font-bold">{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{avgRating} stars</h4>

      </div>

    </>
  );
};

