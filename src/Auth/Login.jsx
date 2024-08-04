/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import AuthBanner from "../shared/AuthBanner";
import googleIcon from "../assets/google.png";
import fbIcon from "../assets/facebook.png";
import eyeIcon from "../assets/eyes.png";
import { useState } from "react";
const Login = () => {
    const [passShow,setPassShow] = useState(false)
  return (
    <>
      <div className="max-w-screen-xl mx-auto md:px-8 lg:px-14 tablet-and-mobile-bg">
        <div className="flex lg:flex-row flex-col-reverse items-center">
          <div className="py-10  lg:px-6  lg:space-y-5 flex-1 lg:w-6/12">
            <span className="flex justify-center lg:justify-between">
              {" "}
              <h1 className="text-5xl pb-2 lg:pb-0 text-[#4285F3] text-center lg:text-left font-poorRich uppercase">
                Logo
              </h1>
              <Link to={"/"}>
                {" "}
                <button className="bg-[#4285F3] lg:block hidden capitalize text-xs font-medium text-white rounded-lg px-4 py-3">
                  homepage {">"}
                </button>
              </Link>
            </span>
            <h1 className="text-[#152A16] lg:block hidden text-3xl font-medium">
              Login In To Your Account
            </h1>
            <h1 className="text-[#ffff] text-center  text-sm px-6 lg:hidden block  font-medium">
              Sign In to view all the <br /> massage therapists
            </h1>
            <p className="text-[#5C635A] lg:block hidden">
              Welcome Back! By click the sign up button, you're agree to
              Zenitood Terms and Service and acknlowledge the{" "}
              <span className="text-[#4285F3]">Privacy and Policy</span>
            </p>
            <div className="bg-white lg:bg-transparent lg:pt-0 pt-10 pb-6 px-2 lg:px-0 lg:rounded-t-0 rounded-t-3xl  lg:mt-0 mt-12">
              <h1 className="text-[#152A16] font-semibold text-center lg:hidden block text-xl ">
                Login In To Your Account
              </h1>
              <p className="text-[#5C635A] text-center text-xs lg:hidden block">
                Welcome Back! Select a method to log in:
              </p>
              <div className="flex items-center gap-4 justify-around max-w-sm py-3">
                <button className="bg-[#4285F3] flex items-center bg-gradient-to-r from-[#dedede] to-[#f4f1f1] capitalize px-8 gap-2 drop-shadow-md  font-medium text-[#152A16] rounded-lg  py-3">
                  <img src={googleIcon} className="w-[20px]" alt="" /> Google
                </button>
                <button className="bg-[#4285F3] flex items-center capitalize px-8 gap-2 drop-shadow-md  font-medium text-white rounded-lg  py-3">
                  <img src={fbIcon} className="w-[20px]" alt="" /> Facebook
                </button>
              </div>
            </div>
            <form className="slg:pace-y-4 w-full lg:max-w-sm bg-white p-4">
              <span className="flex flex-col gap-1">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Name"
                  className="focus:outline-none border  px-4 py-3 rounded-lg w-full "
                />
              </span>
              <span className="flex flex-col gap-1 relative">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  type={passShow ? "text" : "password"}
                  placeholder="Enter your password"
                  className="focus:outline-none border  px-4 py-3 rounded-lg w-full "
                />
                <img
                  src={eyeIcon}
                  onClick={() => setPassShow(!passShow)}
                  className="absolute cursor-pointer right-[10px]  top-[45px]"
                  alt=""
                />
              </span>

              <div className="flex justify-between">
                <span>
                  <input type="checkbox" name="chechBox" id="" />
                  <span className="pl-1 text-sm"> Remeber Me</span>{" "}
                </span>
                <p>
                  <span className="text-[#4285F3] lg:text-base text-xs font-medium underline">
                    {" "}
                    Forgot password?
                  </span>
                </p>
              </div>
              <br />
              <div className=" w-full text-center">
                {" "}
                <button
                  type="submit"
                  className="bg-[#4285F3] font-medium text-white rounded-lg px-16 py-3"
                >
                  Sign up
                </button>
                <Link to={"/registration"}>
                  <p className="pt-3 lg:text-base text-xs">
                    Don't Have an Account?
                    <span className="text-[#4285F3] font-medium underline">
                      {" "}
                      Create a Account
                    </span>
                  </p>
                </Link>
              </div>
            </form>
          </div>
          <div className="flex-1 w-6/12 relative lg:block hidden">
            <AuthBanner></AuthBanner>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
