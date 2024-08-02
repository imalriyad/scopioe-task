import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex ">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[80%]">
        <Navbar></Navbar>
        <span className="bg-[#EEF2F5]">
          <Outlet></Outlet>
        </span>
      </div>
    </div>
  );
};

export default MainLayout;
