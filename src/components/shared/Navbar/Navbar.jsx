import { IoMdSearch } from "react-icons/io";
import logo from "../../../assets/logo/logo.png";
import appLogo from "../../../assets/logo/image 18.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <div className="xl:max-w-[80%] max-w-[90%] xl:flex hidden mx-auto py-10  justify-between items-center">
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

      {/* mobile section */}
      <div className="xl:hidden block">
        <div className="flex flex-row-reverse items-center bgPrimary text-white justify-between px-4 py-3">
          <label htmlFor="my-drawer" className="text-2xl drawer-button">
            <MdMenu className="text-black" />
          </label>
          <div className="text-xl uppercase">
            <img className="h-full  w-[120px] py-3 pl-4" src={logo} alt="" />
          </div>
        </div>
        <div className="drawer z-50">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">{/* Page content here */}</div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full z-50 bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <div className="flex justify-between items-center  mb-6">
                <img
                  className="h-full  w-[120px] py-3 pl-4"
                  src={logo}
                  alt=""
                />
                <li className="hover:text-stone-400 text-xl duration-500 cursor-pointer">
                  <Link to={"/dashboard"}>
                    {" "}
                    <IoMdSearch />{" "}
                  </Link>
                </li>
              </div>
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
              <hr className="border-stone-600 my-6" />
              <div className="flex items-center ml-3 font-semibold gap-3">
                <img src={appLogo} className="h-12" alt="app icon" />
                <div>
                  <p>ACC InstaHome</p>
                  <p className="hover:text-stone-400 duration-500 cursor-pointer">
                    Download App Now
                  </p>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
