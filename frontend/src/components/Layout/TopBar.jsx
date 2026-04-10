import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="bg-green-600">
      <div className="container mx-auto flex justify-between p-3 px-6">
        <div className="hidden md:flex justify-evenly gap-4">
          <a href="#" className="hover:text-gray-300">
            <FaMeta className="text-white h-4 w-4" />{" "}
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram className="text-white h-4 w-4" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaSquareXTwitter className="text-white h-4 w-4" />
          </a>
        </div>
        <div>
          <p className="text-white grow text-center text-sm">
            We ship worldwide-Fast and reliable shipping!
          </p>
        </div>
        <div className="hidden md:block">
          <a href="#" className="text-white">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
