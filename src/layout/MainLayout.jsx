import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex ">
      <div className="w-[20%] lg:block hidden">
        <Sidebar />
      </div>
      <div className="flex flex-col lg:w-[80%] w-full ">
        <Navbar></Navbar>
        <span className="bg-[#EEF2F5] ">
          <Outlet></Outlet>
        </span>
      </div>
    </div>
  );
};

export default MainLayout;
