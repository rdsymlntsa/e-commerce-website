import { Link } from "react-router-dom";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import SearchBar from "./SearchBar";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import CartDrawer from "../Layout/CartDrawer";
import { IoIosClose } from "react-icons/io";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) ||
    0;

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
          <Link
            to="/collections/all?gender=Men"
            className="text-gray-900 hover:text-black uppercase"
          >
            MEN
          </Link>

          <Link
            to="/collections/all?gender=Women"
            className="text-gray-900 hover:text-black uppercase"
          >
            WOMEN
          </Link>
          <Link
            to="/collections/all?category=Top Wear"
            className="text-gray-900 hover:text-black uppercase"
          >
            TOP WEAR
          </Link>
          <Link
            to="/collections/all?category=Bottom Wear"
            className="text-gray-900 hover:text-black uppercase"
          >
            BOTTOM WEAR
          </Link>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="bg-black text-sm block text-white rounded px-2"
            >
              Admin
            </Link>
          )}
          <Link to="/profile" className=" hover:text-black">
            <CgProfile className="text-gray-600 h-6 w-6" />
          </Link>
          <button onClick={toggleCartDrawer} className="relative">
            <IoBagOutline className="text-gray-700 h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="-top-1 right-0 bg-red-500 rounded-full py-0.5 px-1 absolute text-white text-xs">
                {cartItemCount}
              </span>
            )}
          </button>
          <SearchBar></SearchBar>
          <button
            onClick={toggleNavDrawer}
            className="md:hidden hover:text-black"
          >
            <HiOutlineBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer
        drawerOpen={drawerOpen}
        toggleCartDrawer={toggleCartDrawer}
      ></CartDrawer>
      <div
        className={`fixed w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white top-0 left-0 flex flex-col shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div onClick={toggleNavDrawer} className="flex justify-end p-4">
          <IoIosClose className="h-6 w-6 text-gray-600" />
        </div>
        <nav className="space-x-4">
          <h3 className="text-xl p-4 font-semibold">Menu</h3>
          <Link
            to="/collections/all?gender=Men"
            onClick={toggleNavDrawer}
            className="p-4 block text-gray-600 hover:text-black"
          >
            Men
          </Link>
          <Link
            to="/collections/all?gender=Women"
            onClick={toggleNavDrawer}
            className="p-4 block text-gray-600 hover:text-black"
          >
            Women
          </Link>
          <Link
            to="/collections/all?category=Top Wear"
            onClick={toggleNavDrawer}
            className="p-4 block text-gray-600 hover:text-black"
          >
            Top Wear
          </Link>
          <Link
            to="/collections/all?category=Bottom Wear"
            onClick={toggleNavDrawer}
            className="p-4 block text-gray-600 hover:text-black"
          >
            Bottom Wear
          </Link>
        </nav>
      </div>
    </>
  );
};
export default NavBar;
