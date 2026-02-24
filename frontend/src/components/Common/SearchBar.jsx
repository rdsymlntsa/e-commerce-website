import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch=(e)=>{
    e.preventDefault();
    console.log(searchTerm);
    setIsOpen(false);
  }
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 bg-white h-24 w-full z-50" : "w-auto"}`}
    >
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative flex justify-center items-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e)=>{setSearchTerm(e.target.value)}}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2  text-gray-600 hover:text-gray-800 "
            >
              <IoIosSearch className="text-gray-700 hover:text-black h-6 w-6" />
            </button>
          </div>
          <button onClick={handleSearchToggle} type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 ">
              <IoMdClose className="h-6 w-6 text-gray-600 hover:text-gray-800" />
            </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle} className="flex items-center">
          <IoIosSearch className="text-gray-700 hover:text-black h-6 w-6" />
        </button>
      )}
    </div>
  );
};
export default SearchBar;
