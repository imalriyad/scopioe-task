import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Cities = () => {
  const { therapists } = useContext(AuthContext);

  return (
    <>
      <h1 className="text-lg -mt-[23px] my-3 font-medium pl-3 lg:pl-0 2xl:text-xl 2xl:pl-10 ">
        Popular Cities
      </h1>{" "}
      <div>
        <div className="h-auto   bg-white py-4 md:px-8 px-4 rounded-lg border text-[#156BCA] underline decoration-[#156BCA] lg:text-base text-sm">
          <div className="text-center gap-6 grid grid-cols-3 align-middle items-center ">
            {therapists?.map((city) => (
              <>
                <h1 className="border-b">{city.city}</h1>
              </>
            ))}

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Cities;
