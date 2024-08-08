import { useLoaderData, useParams } from "react-router-dom";
import locationIcon from "../assets/Location.png";
const Detailspage = () => {
  const data = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const clickedItem = data?.find((item) => item.id === parseInt(id));

console.log(clickedItem);

  return (
    <>
      <div className="flex 2xl:gap-8 gap-4 border rounded-lg p-2 2xl:p-8 md:gap-6 mt-6">
        <img src={clickedItem?.profile_picture} className="w-[30%]" alt="" />
        <div className="space-y-2 2xl:space-y-4 w-[70%]">
          <span className="flex text-[#5C635A] items-center  md:text-sm text-[10px] 2xl:text-2xl gap-2">
            <img src={locationIcon} className="w-[14px] h-[14px]" alt="" />
            {clickedItem?.city}
          </span>

          <h1 className=" text-[#152A16] md:text-base 2xl:text-4xl text-xs font-medium">
            Healing Bodywork <span className="text-[#156BCA]">by Cort</span>
          </h1>

          <p className="text-[#5C635A] md:text-sm 2xl:text-2xl text-[10px] ">
            Cort’s healing bodywork massage was absolutely transformative. Their
            intuitive touch and deep understanding of...
            <span className="text-[#156BCA] underline">Read More</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Detailspage;
