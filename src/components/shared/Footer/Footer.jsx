import logo from "../../../assets/logo/logo-black.png";
import appleStore from "../../../assets/logo/apple.png";
import playStore from "../../../assets/logo/android.png";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[80%] mx-auto bg-stone-100 rounded-[40px]">
      <div className="flex justify-center items-start pt-20 pb-10 gap-8 ">
        {/* logo */}
        <div className="w-1/4">
          <img className="h-12" src={logo} alt="logo black" />
          <p className="text-sm font-medium mt-3 pr-3">
            ACC is a historical company founded in 1968 in the Belluno area,
            Italy. The company is recognized as one of the leaders in household
            compressor production.
          </p>
        </div>

        {/* product */}
        <div>
          <h4 className="text-lg font-bold mb-3">Product</h4>
          <ul className="">
            <li>Air Conditioner</li>
            <li>Refrigerator</li>
            <li>Television</li>
            <li>Washing Machine</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-lg font-bold mb-3">About Us</h4>
          <ul className="">
            <li>About Acc</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Social Media & contact us & Our apps */}
        <div>
          <h4 className="text-lg font-bold mb-3">Social Media</h4>
          {/* icons */}
          <div className="flex text-lg gap-2 my-3">
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaWhatsappSquare />
            <FaLinkedin />
            <FaYoutube />
          </div>
          {/* contact */}
          <h4 className="text-lg font-bold mb-3">Contact Us</h4>
          <div className="border border-stone-400 rounded-lg pl-3 pr-6 my-3 py-2 w-fit">
            <input
              type="email"
              className="outline-none bg-transparent"
              placeholder="Enter Your Email Here"
            />
          </div>

          {/* Our Apps */}
          <h4 className="text-lg font-bold mb-3">Our Apps</h4>
          <div className="flex items-center gap-3">
            <img className="h-10" src={appleStore} alt="apple store" />
            <img className="h-10" src={playStore} alt="play store" />
          </div>
        </div>
      </div>
      <hr className=" w-9/12 mx-auto border-stone-400" />
      <p className="text-center font-semibold text-stone-700 py-6">© Copyright 2023, All Rights Reserved by Walton ACC Bangladesh</p>
    </footer>
  );
};

export default Footer;
