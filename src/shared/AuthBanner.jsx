import authBg from "../assets/authbg.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const AuthBanner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={authBg} alt="" />
          <div className="bg-[#152A16] z-10 absolute top-1/2 left-1/2  bg-opacity-70 transform -translate-x-1/2 -translate-y-1/2 w-[260px] p-3 py-6 rounded-lg">
            <h1 className="text-[#4285F3] text-sm text-center">
              Create Account <br />{" "}
              <span className="text-white">Fill in Your Information</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={authBg} alt="" />
          <div className="bg-[#152A16] z-10 absolute top-1/2 left-1/2  bg-opacity-70 transform -translate-x-1/2 -translate-y-1/2 w-[260px] p-3 py-6 rounded-lg">
            <h1 className="text-[#4285F3] text-sm text-center">
              Sign In{" "}
              <span className="text-white">
                to view all the <br /> massage therapists
              </span>
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AuthBanner;
