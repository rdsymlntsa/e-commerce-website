import { IoIosClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();

  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const userId = user ? user._id : null;

  const handleCheckout = () => {
    toggleCartDrawer();
    if (!user) {
      navigate("/login?redirect=checkout");
    } else {
      navigate("/checkout");
    }
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
        {cart && cart?.products?.length > 0 ? (
          <CartContents cart={cart} userId={userId} guestId={guestId} />
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <div className="sticky bottom-0 px-4">
        {cart && cart?.products?.length > 0 && (
          <>
            <button
              onClick={handleCheckout}
              className="w-full bg-black px-4 py-2 text-white hover:text-gray-500 rounded-lg transition"
            >
              Checkout
            </button>
            <p className="text-sm text-center mt-3 mb-3 tracking-tighter">
              Shipping , taxes and discounts calculated at checkout.
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default CartDrawer;
