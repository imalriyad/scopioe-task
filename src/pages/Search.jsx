import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import locationIcon from "../assets/Location.png";
import carIcon from "../assets/car.png";
import { Link } from "react-router-dom";
const Search = () => {
    const { searchedResult } = useContext(AuthContext);
    console.log(searchedResult);
    
  return (
    <div className="grid lg:grid-cols-4 gap-6 p-6 md:grid-cols-2 grid-cols-1">
      {searchedResult?.map((item) => (
        <div key={item.id} className="border border-[#E7E7E7] rounded-lg ">
          <img src={item?.profile_picture} className="p-3 w-full" alt="" />
          <div className="pl-3 space-y-2">
            <h1 className=" text-[#152A16] font-medium">{item?.name}</h1>
            <span className="flex text-[#5C635A] items-center text-xs gap-2">
              <img src={locationIcon} className="w-[14px] h-[14px]" alt="" />
              {item?.city}
            </span>
            <span className="flex pb-3 text-[#5C635A] items-center text-xs gap-2">
              <img src={carIcon} className="w-[12px] h-[12px]" alt="" />
              Mobile & In-Studio
            </span>
          </div>
          <Link to={`/details/:${item.id}`}>
            <button className="hover:bg-[#156BCA] bg-[#D4E9FF] text-[#152A16] text-sm underline py-3 px-4 rounded-b-lg w-full hover:text-white ">
              See Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Search;
