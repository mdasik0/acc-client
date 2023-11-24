import { IoMdSearch } from "react-icons/io";
import logo from "../../../assets/logo/logo.png";
import appLogo from "../../../assets/logo/image 18.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="max-w-[80%] mx-auto py-10 flex justify-between items-center">
      {/* logo */}
      <Link to={"/"}>
        <img src={logo} className="h-12 cursor-pointer" alt="logo" />
      </Link>

      {/* navbar */}
      <ul className="flex gap-6 items-center border border-stone-300 w-fit rounded-full ps-6 pr-2 py-2 font-semibold">
        <li className="hover:text-stone-400 text-[#2F7CE3] duration-500 cursor-pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-stone-400 duration-500 cursor-pointer">
          <Link to={"/dashboard"}> About us </Link>
        </li>
        <li className="hover:text-stone-400 duration-500 cursor-pointer">
          <Link to={"/dashboard"}> Request Service </Link>
        </li>
        <li className="hover:text-stone-400 duration-500 cursor-pointer">
          <Link to={"/dashboard"}> Find A Store </Link>
        </li>
        <li className="hover:text-stone-400 text-xl duration-500 cursor-pointer">
          <Link to={"/dashboard"}>
            {" "}
            <IoMdSearch />{" "}
          </Link>
        </li>
        <li>
          <button className="bg-[#2F7CE3] duration-500 hover:bg-[#5498f1] text-white px-6 py-1 rounded-full">
            login
          </button>
        </li>
      </ul>

      {/* app section */}
      <div className="flex items-center font-semibold gap-3">
        <img src={appLogo} className="h-12" alt="app icon" />
        <div>
          <p>ACC InstaHome</p>
          <p className="hover:text-stone-400 duration-500 cursor-pointer">
            Download App Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
