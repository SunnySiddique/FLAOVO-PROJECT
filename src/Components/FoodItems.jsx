import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import FoodData from "../data/FoodData";
import FoodCard from "./FoodCard";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);

  const search = useSelector((state) => state.search.search);

  const handleToast = (name) => toast.success(`Added ${name} `);
  return (
    <>
      <Toaster position="top-center" reversOrder={false} />
      <div className="flex flex-wrap gap-5 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc.slice(0, 50)}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
