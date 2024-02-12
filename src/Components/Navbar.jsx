import { useDispatch } from "react-redux";
import { setSearch } from "../app/food/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb10">
      <div className="header-content">
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Flavoro Foods</h1>
      </div>
      <div className="header-input mt-3">
        <input
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="off"
          className="p-3 border border-gray-400 text-sm outline-none rounded-lg w-full lg:w-[25vw]"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Navbar;
