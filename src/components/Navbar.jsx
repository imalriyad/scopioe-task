/* eslint-disable no-unused-vars */
import profilePic from "../assets/dp.png";
import bellIcon from "../assets/notification.png";
import logoutIcon from "../assets/logout.png";
import menuIcon from "../assets/menu.png";
import bigProfile from "../assets/bigdp.png";
import closeIcon from "../assets/icons8-close-window-100.png"
import homeIcon from "../assets/home.png";
import peopleIcon from "../assets/people.png";
import searchIcon from "../assets/searchicon.png";
import aboutIcon from "../assets/about.png";
import heartIcon from "../assets/heart.png";
import helpIcon from "../assets/help.png";
import settingIcon from "../assets/setting.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* Mobile side menu */}
      <div
        className={`min-h-screen absolute top-0 right-0 w-[260px] block lg:hidden ${isOpenMenu?"block":"hidden"}`}
      >
        <div className="flex justify-between bg-[#156BCA]">
          {/* This div is needed */}
          <div>
            <img src={closeIcon} onClick={()=> setOpenMenu(false)} className="w-[40px]" alt="" />
          </div>
          <div className=" text-right pr-4 py-6">
            <img src={bigProfile} className="mx-auto pl-10" alt="" />
            <h1 className="text-2xl text-white pt-4">AL Riyad</h1>
            <p className="text-[#1A2634] text-xs pt-1">imalriyad@gmqil.com</p>
          </div>
        </div>
        {/* NavItem */}
        <div className="list-none text-left text-[#5C635A] space-y-2">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              `flex items-center gap-4 py-3 px-6 ${
                isActive ? "text-[#152a16] bg-[#d4e9ff] px-6" : " "
              }`
            }
          >
            <img src={homeIcon} alt="" />
            Home
          </NavLink>

          <NavLink
            to={"/new-listing"}
            className={({ isActive, isPending }) =>
              `flex items-center gap-4 py-3 px-6${
                isActive ? "text-[#152a16] bg-[#d4e9ff] px-6" : " "
              }`
            }
          >
            <img src={peopleIcon} alt="" />
            New Listing{" "}
          </NavLink>

          <NavLink
            to={"/search"}
            className={({ isActive, isPending }) =>
              `flex items-center gap-4 py-3 px-6 ${
                isActive ? "text-[#152a16] bg-[#d4e9ff] px-6" : " "
              }`
            }
          >
            <img src={searchIcon} alt="" /> Search
          </NavLink>

          <NavLink
            to={"/about"}
            className={({ isActive, isPending }) =>
              `flex items-center gap-4 py-3 px-6 ${
                isActive ? "text-[#152a16] bg-[#d4e9ff] px-6" : " "
              }`
            }
          >
            <img src={aboutIcon} alt="" /> About
          </NavLink>
          <NavLink
            to={"/favorites"}
            className={({ isActive, isPending }) =>
              `flex items-center gap-4 py-3 px-6 ${
                isActive ? "text-[#152a16] bg-[#d4e9ff] px-6" : " "
              }`
            }
          >
            <img src={heartIcon} alt="" /> Favorites
          </NavLink>
          <hr className="py-1" />
          <NavLink
            to={"/help"}
            className={({ isActive, isPending }) =>
              `flex items-center gap-4 py-3 px-6 ${
                isActive ? "text-[#152a16] bg-[#d4e9ff] px-6" : " "
              }`
            }
          >
            <img src={helpIcon} alt="" /> Help Center
          </NavLink>
          <NavLink
            to={"/setting"}
            className={({ isActive, isPending }) =>
              `flex items-center gap-4 py-3 px-6 ${
                isActive ? "text-[#152a16] bg-[#d4e9ff] px-6" : " "
              }`
            }
          >
            <img src={settingIcon} alt="" /> Settings
          </NavLink>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="w-full border-b-[1px] border-b-[#E7E7E7] lg:px-8 px-4 items-center flex justify-between lg:h-20 h-16">
          {/* Mobile navbar */}
          <div>
            <h1 className="text-[#4285F3] text-3xl font-poorRich uppercase font-medium ">
              Logo
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <img src={bellIcon} className="w-[30px]" alt="" />
            <img src={menuIcon} onClick={()=> setOpenMenu(true)} className="w-[25px]" alt="" />
          </div>
        </div>
      </div>

      {/* desktop navbar */}
      <div className="lg:block hidden">
        <div className="w-full border-b-[1px] border-b-[#E7E7E7] px-8 items-center flex justify-between h-20">
          <div className="flex items-start gap-3">
            <img src={profilePic} alt="" />
            <span className="flex flex-col ">
              <h1 className="font-medium text-[#152a16]">Al Riyad</h1>
              <p className="text-xs text-[#5C635A]">imalriyad@gmail.com</p>
            </span>
          </div>

          <div className="flex gap-8 items-center">
            <img src={bellIcon} alt="" />
            <span className="flex items-center gap-2 font-medium text-[#F15E4A]">
              Log Out
              <img src={logoutIcon} alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
