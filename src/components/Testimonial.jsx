import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import testi1 from "../assets/testi1.png";
import testi2 from "../assets/testi2.png";
import locationIcon from "../assets/Location.png";
import Cities from "./Cities";

const Testimonial = () => {
  return (
    <>
      {" "}
      <h1 className="text-lg block font-medium pl-6 2xl:text-xl 2xl:pl-10">
        Featured Testimonial
      </h1>{" "}
      <div className="flex lg:flex-row flex-col mx-2 lg:mx-4 2xl:mx-10 gap-4">
        <div className="h-auto bg-white md:p-6 2xl:p-14 p-2 rounded-lg my-4 border lg:w-[50%] w-full flex-1">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex 2xl:gap-8 gap-4 border rounded-lg p-2 2xl:p-8 md:gap-6">
                <img src={testi1} className="w-[30%]" alt="" />
                <div className="space-y-2 2xl:space-y-4 w-[70%]">
                  <span className="flex text-[#5C635A] items-center  md:text-sm text-[10px] 2xl:text-2xl gap-2">
                    <img
                      src={locationIcon}
                      className="w-[14px] h-[14px]"
                      alt=""
                    />
                    123 Elm Street, New York
                  </span>

                  <h1 className=" text-[#152A16] md:text-base 2xl:text-4xl text-xs font-medium">
                    Healing Bodywork{" "}
                    <span className="text-[#156BCA]">by Cort</span>
                  </h1>

                  <p className="text-[#5C635A] md:text-sm 2xl:text-2xl text-[10px] ">
                    Cort’s healing bodywork massage was absolutely
                    transformative. Their intuitive touch and deep understanding
                    of...
                    <span className="text-[#156BCA] underline">Read More</span>
                  </p>
                </div>
              </div>
              <div className="flex 2xl:gap-8 gap-4 border rounded-lg p-2 2xl:p-8 md:gap-6 mt-6">
                <img src={testi2} className="w-[30%]" alt="" />
                <div className="space-y-2 2xl:space-y-4 w-[70%]">
                  <span className="flex text-[#5C635A] items-center  md:text-sm text-[10px] 2xl:text-2xl gap-2">
                    <img
                      src={locationIcon}
                      className="w-[14px] h-[14px]"
                      alt=""
                    />
                    123 Elm Street, New York
                  </span>

                  <h1 className=" text-[#152A16] md:text-base 2xl:text-4xl text-xs font-medium">
                    Healing Bodywork{" "}
                    <span className="text-[#156BCA]">by Cort</span>
                  </h1>

                  <p className="text-[#5C635A] md:text-sm 2xl:text-2xl text-[10px] ">
                    Cort’s healing bodywork massage was absolutely
                    transformative. Their intuitive touch and deep understanding
                    of...
                    <span className="text-[#156BCA] underline">Read More</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex 2xl:gap-8 gap-4 border rounded-lg p-2 2xl:p-8 md:gap-6">
                <img src={testi1} className="w-[30%]" alt="" />
                <div className="space-y-2 2xl:space-y-4 w-[70%]">
                  <span className="flex text-[#5C635A] items-center  md:text-sm text-[10px] 2xl:text-2xl gap-2">
                    <img
                      src={locationIcon}
                      className="w-[14px] h-[14px]"
                      alt=""
                    />
                    123 Elm Street, New York
                  </span>

                  <h1 className=" text-[#152A16] md:text-base 2xl:text-4xl text-xs font-medium">
                    Healing Bodywork{" "}
                    <span className="text-[#156BCA]">by Cort</span>
                  </h1>

                  <p className="text-[#5C635A] md:text-sm 2xl:text-2xl text-[10px] ">
                    Cort’s healing bodywork massage was absolutely
                    transformative. Their intuitive touch and deep understanding
                    of...
                    <span className="text-[#156BCA] underline">Read More</span>
                  </p>
                </div>
              </div>
              <div className="flex 2xl:gap-8 gap-4 border rounded-lg p-2 2xl:p-8 md:gap-6 -pt-14">
                <img src={testi2} className="w-[30%]" alt="" />
                <div className="space-y-2 2xl:space-y-4 w-[70%]">
                  <span className="flex text-[#5C635A] items-center  md:text-sm text-[10px] 2xl:text-2xl gap-2">
                    <img
                      src={locationIcon}
                      className="w-[14px] h-[14px]"
                      alt=""
                    />
                    123 Elm Street, New York
                  </span>

                  <h1 className=" text-[#152A16] md:text-base 2xl:text-4xl text-xs font-medium">
                    Healing Bodywork{" "}
                    <span className="text-[#156BCA]">by Cort</span>
                  </h1>

                  <p className="text-[#5C635A] md:text-sm 2xl:text-2xl text-[10px] ">
                    Cort’s healing bodywork massage was absolutely
                    transformative. Their intuitive touch and deep understanding
                    of...
                    <span className="text-[#156BCA] underline">Read More</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex-1 lg:w-[50%] w-full">
          <Cities></Cities>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
