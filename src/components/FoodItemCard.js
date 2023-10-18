import { IMG_CDN_URL } from "../constatnts";

const FoodItemCard = (item) => {
  const { name, imageId, price, descripton } = item;

  return (
    <div className="flex">
      <div className=" w-56 m-2 p-2 shadow-lg text-ellipsis hover:shadow-current">
        <img className="w-52 h-48"
          src={
            IMG_CDN_URL +
            imageId
          }
        />
        <h2 className="text-lg font-bold">{name}</h2>

        <h1>{price}/-</h1>
        <h1>{descripton}</h1>

      </div>

    </div>
  );
};

export default FoodItemCard;