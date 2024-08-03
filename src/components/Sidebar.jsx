/* eslint-disable no-unused-vars */
import homeIcon from "../assets/home.png";
import peopleIcon from "../assets/people.png";
import searchIcon from "../assets/searchicon.png";
import aboutIcon from "../assets/about.png";
import heartIcon from "../assets/heart.png";
import helpIcon from "../assets/help.png";
import settingIcon from "../assets/setting.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-h-screen text-center border-r-[1px] border-r-[#E7E7E7]">
      <div>
        <div className="py-10 px-6">
          <h1 className="text-5xl text-[#4285F3] font-poorRich uppercase">
            Logo
          </h1>
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
          <hr className="py-1"/>
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
    </div>
  );
};

export default Sidebar;

// 
// 
//  
//  