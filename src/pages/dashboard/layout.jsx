import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className=" bg-transwhite flex">
      <Sidebar />
      <div className="px-12 py-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
