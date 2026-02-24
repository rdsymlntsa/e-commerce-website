import TopBar from "../Layout/TopBar";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <header className="border-b border-gray-200">
      {/* TopBar */}
      <TopBar></TopBar>
      {/* NavBar */}
      <NavBar></NavBar>
    </header>
  );
};
export default Header;
