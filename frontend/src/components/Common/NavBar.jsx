import { Link } from "react-router-dom";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import SearchBar from "./SearchBar";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import CartDrawer from "../Layout/CartDrawer";
const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="w-full mx-auto flex items-center justify-between px-1  md:px-6 py-3">
        <div>
          {" "}
          <Link to="/" className="text-2xl font-medium">
            RDSYM
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-900 hover:text-black uppercase">
            MEN
          </a>
          <a href="#" className="text-gray-900 hover:text-black uppercase">
            women
          </a>
          <a href="#" className="text-gray-900 hover:text-black uppercase">
            Top wear
          </a>
          <a href="#" className="text-gray-700 hover:text-black uppercase">
            bottom wear
          </a>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <Link to="/profile" className=" hover:text-black">
            <CgProfile className="text-gray-600 h-6 w-6" />
          </Link>
          <button onClick={toggleCartDrawer} className="relative">
            <IoBagOutline  className="text-gray-700 h-6 w-6" />
            <span className="-top-1 right-0 bg-red-500 rounded-full py-0.5 px-1 absolute text-white text-xs">
              4
            </span>
          </button>
          <SearchBar></SearchBar>
          <button className="md:hidden hover:text-black">
            <HiOutlineBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}></CartDrawer>
    </>
  );
};
export default NavBar;
