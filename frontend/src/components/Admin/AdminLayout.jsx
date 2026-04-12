import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="relative flex flex-col md:flex-row min-h-screen">
      <div className="flex p-4 md:hidden bg-gray-900 text-white z-20">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-gray-500 bg-opacity-50 md:hidden
        "
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`bg-gray-900 text-white w-64 min-h-screen 
      absolute md:relative transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300  md:translate-x-0 md:static md:block z-20`}
      >
        <AdminSidebar />
      </div>
      <div className="grow overflow-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
