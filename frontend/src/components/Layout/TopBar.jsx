import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="bg-red-500">
      <div className="containter mx-auto flex justify-between p-3 px-20">
        <div className="flex justify-evenly gap-4">
          <FaMeta className="text-white h-4 w-4" />
          <FaInstagram className="text-white h-4 w-4" />
          <FaSquareXTwitter className="text-white h-4 w-4" />
        </div>
        <div>
          <p className="text-white">
            We ship worldwide-Fast and reliable shipping!
          </p>
        </div>
        <div>
          <p className="text-white">+1 (234) 567-890</p>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
