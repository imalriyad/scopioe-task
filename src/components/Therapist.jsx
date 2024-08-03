// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import slide1 from "../assets/slide1.png";
import locationIcon from "../assets/Location.png";
import carIcon from "../assets/car.png";

const Therapist = () => {
  return (
    <>
      <div className="my-4">
        <h1 className="text-lg font-medium pl-6 2xl:text-xl 2xl:pl-10">Featured Therapist</h1>
        <div className="h-auto bg-white md:p-10 md:px-10  p-6 rounded-lg my-4 w-[96%] mx-auto border">
          <Swiper
            navigation={true}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
                navigation: false,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            modules={[Navigation]}
            className="mySwiper"
          >
            {/* slide 1 */}
            <SwiperSlide>
              <div className="border border-[#E7E7E7] rounded-lg ">
                <img src={slide1} className="p-3 w-full" alt="" />
                <div className="pl-3 space-y-2">
                  <h1 className=" text-[#152A16] font-medium">
                    Alexander Cort
                  </h1>
                  <span className="flex text-[#5C635A] items-center text-xs gap-2">
                    <img
                      src={locationIcon}
                      className="w-[14px] h-[14px]"
                      alt=""
                    />
                    123 Elm Street, New York
                  </span>
                  <span className="flex pb-3 text-[#5C635A] items-center text-xs gap-2">
                    <img src={carIcon} className="w-[12px] h-[12px]" alt="" />
                    Mobile & In-Studio
                  </span>
                </div>
                <button className="hover:bg-[#156BCA] bg-[#D4E9FF] text-[#152A16] text-sm underline py-3 px-4 rounded-b-lg w-full hover:text-white ">
                  See Details
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="border border-[#E7E7E7] rounded-lg ">
                <img src={slide1} className="p-3 w-full" alt="" />
                <div className="pl-3 space-y-2">
                  <h1 className=" text-[#152A16] font-medium">
                    Alexander Cort
                  </h1>
                  <span className="flex text-[#5C635A] items-center text-xs gap-2">
                    <img
                      src={locationIcon}
                      className="w-[14px] h-[14px]"
                      alt=""
                    />
                    123 Elm Street, New York
                  </span>
                  <span className="flex pb-3 text-[#5C635A] items-center text-xs gap-2">
                    <img src={carIcon} className="w-[12px] h-[12px]" alt="" />
                    Mobile & In-Studio
                  </span>
                </div>
                <button className="hover:bg-[#156BCA] bg-[#D4E9FF] text-[#152A16] text-sm underline py-3 px-4 rounded-b-lg w-full hover:text-white ">
                  See Details
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="border border-[#E7E7E7] rounded-lg ">
                <img src={slide1} className="p-3 w-full" alt="" />
                <div className="pl-3 space-y-2">
                  <h1 className=" text-[#152A16] font-medium">
                    Alexander Cort
                  </h1>
                  <span className="flex text-[#5C635A] items-center text-xs gap-2">
                    <img
                      src={locationIcon}
                      className="w-[14px] h-[14px]"
                      alt=""
                    />
                    123 Elm Street, New York
                  </span>
                  <span className="flex pb-3 text-[#5C635A] items-center text-xs gap-2">
                    <img src={carIcon} className="w-[12px] h-[12px]" alt="" />
                    Mobile & In-Studio
                  </span>
                </div>
                <button className="hover:bg-[#156BCA] bg-[#D4E9FF] text-[#152A16] text-sm underline py-3 px-4 rounded-b-lg w-full hover:text-white ">
                  See Details
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border border-[#E7E7E7] rounded-lg ">
                <img src={slide1} className="p-3 w-full" alt="" />
                <div className="pl-3 space-y-2">
                  <h1 className=" text-[#152A16] font-medium">
                    Alexander Cort
                  </h1>
                  <span className="flex text-[#5C635A] items-center text-xs gap-2">
                    <img
                      src={locationIcon}
                      className="w-[14px] h-[14px]"
                      alt=""
                    />
                    123 Elm Street, New York
                  </span>
                  <span className="flex pb-3 text-[#5C635A] items-center text-xs gap-2">
                    <img src={carIcon} className="w-[12px] h-[12px]" alt="" />
                    Mobile & In-Studio
                  </span>
                </div>
                <button className="hover:bg-[#156BCA] bg-[#D4E9FF] text-[#152A16] text-sm underline py-3 px-4 rounded-b-lg w-full hover:text-white ">
                  See Details
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border border-[#E7E7E7] rounded-lg ">
                <img src={slide1} className="p-3 w-full" alt="" />
                <div className="pl-3 space-y-2">
                  <h1 className=" text-[#152A16] font-medium">
                    Alexander Cort
                  </h1>
                  <span className="flex text-[#5C635A] items-center text-xs gap-2">
                    <img
                      src={locationIcon}
                      className="w-[14px] h-[14px]"
                      alt=""
                    />
                    123 Elm Street, New York
                  </span>
                  <span className="flex pb-3 text-[#5C635A] items-center text-xs gap-2">
                    <img src={carIcon} className="w-[12px] h-[12px]" alt="" />
                    Mobile & In-Studio
                  </span>
                </div>
                <button className="hover:bg-[#156BCA] bg-[#D4E9FF] text-[#152A16] text-sm underline py-3 px-4 rounded-b-lg w-full hover:text-white ">
                  See Details
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Therapist;
