import { Link } from "react-router-dom";
import { FaMeta } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="border-t py-12 mx-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 lg:px-8">
        <div>
          <h3 className="mb-4 text-lg text-gray-800">Newsletter</h3>
          <p className="mb-4 text-gray-500">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="mb-6 text-gray-600 text-sm font-medium">
            Sign up and get 10% off on your first order.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex p-3 border-l border-b border-t rounded-l-md border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-sm rounded-r-md px-6 py-3 text-white hover:bg-gray-500 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h3 className="mb-4 font-medium text-gray-800">Shop</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-medium text-gray-800">Support</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg mb-4 text-gray-600">Follow Us</h3>
          <div className="flex items-center mb-6 space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 "
            >
              <FaMeta className="h-5 w-5" />
            </a>
             <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
             <FaSquareInstagram className="h-5 w-5" />
            </a>
             <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
          </div>
          <p>Call Us</p>
          <p>
<LuPhoneCall className="inline-block mr-2" />
0123-456-789
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-0 border-t border-gray-300 mt-12">
        <p className="text-center text-gray-500 tracking-tighter text-sm">
          © 2026, CompileTab. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
