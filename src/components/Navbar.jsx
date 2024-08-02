import profilePic from "../assets/dp.png";
import bellIcon from "../assets/notification.png";
import logoutIcon from "../assets/logout.png";

const Navbar = () => {
  return (
    <div className="w-full  border-b-[1px] border-b-[#E7E7E7] px-8 items-center flex justify-between h-20">
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
  );
};

export default Navbar;
