/* eslint-disable react/no-unescaped-entities */
import heroImg from "../assets/heroimg.png"
const Hero = () => {
  return (
    <div className="bg-white p-10 rounded-lg flex justify-between items-center  h-[230px] my-6 w-[96%] mx-auto border">
      <div className="space-y-3">
        <h1 className="text-2xl text-[#152A16] font-medium">
          I'm Looking for Massage Therapist Near...
        </h1>
        <p className="text-[#2E3439] pb-3">
          In using this site, I agree to be bound by the{" "}
          <span className="underline text-[#156BCA] font-medium cursor-pointer">
            Terms of Service <br />
          </span>{" "}
          and{" "}
          <span className="underline text-[#156BCA] font-medium cursor-pointer">
            Privacy Policy
          </span>
        </p>
        {/* Search input */}
        <div className="relative max-w-lg">
          <input
            type="text"
            placeholder="ZIP code or city name"
            className="focus:outline-none bg-[#EEF2F5]  placeholder:text-[#c2c1c1]  px-4 py-3 rounded-lg w-full "
          />
          <button className="bg-[#156BCA] px-8 py-3 text-white rounded-lg absolute right-0">
            Go
          </button>
        </div>
          </div>
          <div>
              <img src={heroImg} alt="" />
          </div>
    </div>
  );
};

export default Hero;
