import { IoIosClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    toggleCartDrawer();
    navigate("/checkout");
  };
  return (
    <div
      className={`fixed w-3/4 sm:w-1/2 md:w-120 h-full bg-white top-0 right-0 flex flex-col shadow-lg transform transition-transform duration-300 z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div onClick={toggleCartDrawer} className="flex justify-end p-4">
        <IoIosClose className="h-6 w-6 text-gray-600" />
      </div>

      <div className="grow overflow-y-auto p-4">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <CartContents />
      </div>

      <div className="sticky bottom-0 px-4">
        <button
          onClick={handleCheckout}
          className="w-full bg-black px-4 py-2 text-white hover:text-gray-500 rounded-lg transition"
        >
          Checkout
        </button>
        <p className="text-sm text-center mt-3 mb-3 tracking-tighter">
          Shipping , taxes and discounts calculated at checkout.
        </p>
      </div>
    </div>
  );
};
export default CartDrawer;
