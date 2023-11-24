import { PiSquaresFourFill } from "react-icons/pi";
import { MdAddCircleOutline, MdOutlineLogout } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import logo from "../../../assets/logo/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar border-b py-6 border-stone-400">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 gap-3 px-2 mx-2">
                <div className="text-2xl bg-stone-400 text-white px-3 py-1 rounded-lg">
                  <BsArrowLeft />
                </div>
                <div className="text-2xl bg-stone-400 text-white px-3 py-1 rounded-lg">
                  <BsArrowRight />
                </div>
                <h1 className="text-2xl font-bold">Dashboard/Overview</h1>
              </div>
              <div className="flex-none hidden lg:block">
                <div className="flex items-center mr-6">
                  {/* Navbar menu content here */}
                  <span className="w-12 h-12 bg-stone-400 rounded-full"></span>
                  <div className="flex flex-col ml-2">
                    <p className="font-bold">Admin Login</p>
                    <p>Developer</p>
                  </div>
                  <MdOutlineLogout className="text-2xl ml-6" />
                </div>
              </div>
            </div>
            {/* Page content here */}
            <div className="m-6">
              <Outlet />
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="w-full ml-6 pt-4">
            <img className="object-contain h-12" src={logo} alt="logo" />
          </div>
          <br />
          <hr className="border-stone-400" />
          {/* Sidebar content here */}
          <li className=" ml-6 mr-10 ">
            <NavLink className={"py-[15px] px-[10px] mt-4"} to={"/dashboard"}>
              <PiSquaresFourFill className="text-2xl " />
              <span className="font-bold">Dashboard</span>
            </NavLink>
          </li>
          <h3 className="text-2xl font-bold ml-6 mt-6 mb-2">Pages</h3>
          <li className=" ml-6 mr-10 ">
            <NavLink
              className={"py-[10px] px-[10px]"}
              to={"/dashboard/addHeroImage"}
            >
              <IoImageOutline className="text-2xl " />
              <span className="font-bold">Add Hero Image</span>
            </NavLink>
          </li>
          <li className=" ml-6 mr-10 ">
            <NavLink
              className={"py-[10px] px-[10px]"}
              to={"/dashboard/addProduct"}
            >
              <MdAddCircleOutline className="text-2xl " />
              <span className="font-bold">Add Products</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
