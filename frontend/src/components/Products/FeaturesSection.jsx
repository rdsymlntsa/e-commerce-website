import { HiShoppingBag } from "react-icons/hi2";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { HiOutlineCreditCard } from "react-icons/hi";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6">
        <div className="flex flex-col items-center">
          <div className="rounded-full mb-4 p-4">
            <HiShoppingBag />
          </div>
          <h4 className="tracking-tighter mb-2">FREE INTERNATIONAL SHIPPING</h4>
          <p className="text-gray-600 text-sm">On all order above $100.00 </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full mb-4 p-4">
            <HiArrowPathRoundedSquare />
          </div>
          <h4 className="tracking-tighter mb-2">45 DAYS RETURN</h4>
          <p className="text-gray-600 text-sm">Money back guarantee </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full mb-4 p-4">
            <HiOutlineCreditCard />
          </div>
          <h4 className="tracking-tighter mb-2">SECURE CHECKOUT</h4>
          <p className="text-gray-600 text-sm">100% secure checkout process </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
