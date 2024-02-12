import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/food/CartSlice";

// eslint-disable-next-line react/prop-types
const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const diaptch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex-col rounded-lg gap-2">
      <img
        src={img}
        className="w-96 h-[130px] overflow-hidden hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        alt=""
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">${price}</span>
      </div>
      <p className="text-sm font-normal">{desc}</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            diaptch(
              addToCart({
                id,
                name,
                price,
                rating,
                img,
                qty: 1,
              })
            );
            handleToast(name);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
