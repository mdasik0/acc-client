import {
  RiCodeSSlashFill,
  RiDeleteBin6Line,
  RiExpandUpDownFill,
  RiItalic,
} from "react-icons/ri";
import image from "../../../assets/products/television.png";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate, MdPhotoCameraBack } from "react-icons/md";
const AddProductPage = () => {
  return (
    <>
      {/* product is section */}
      <div className="bg-stone-100 p-10 rounded-3xl">
        <h3 className="text-2xl font-bold">Product is</h3>
        <br />
        <hr className="border-stone-400" />
        <br />
        <div className="flex  gap-6">
          <div className="border-2 relative border-black rounded-lg py-2 w-fit px-2">
            <span className="bg-stone-100 absolute -top-2 px-1 text-xs">
              Product Name
            </span>
            <input
              placeholder="product name"
              type="text"
              className="outline-none w-[300px] border-none bg-transparent"
            />
          </div>
          <div className="border-2 relative border-black rounded-lg py-2 w-fit px-2">
            <span className="bg-stone-100 absolute -top-2 px-1 text-xs">
              Price
            </span>
            <input
              placeholder="Price"
              type="text"
              className="outline-none border-none bg-transparent"
            />
          </div>
        </div>
        <div className="flex  gap-6 mt-6">
          <div className="border-2 relative border-black rounded-lg py-2 w-fit px-2">
            <span className="bg-stone-100 absolute -top-2 px-1 text-xs">
              Short Bio (Max 8 words)
            </span>
            <input
              placeholder="Enter your short bio"
              type="text"
              className="outline-none w-[300px] border-none bg-transparent"
            />
          </div>
          <div className="border-2 relative border-black rounded-lg py-2 w-fit px-2">
            <span className="bg-stone-100 absolute -top-2 px-1 text-xs">
              Category
            </span>
            <select
              placeholder="Price"
              type="text"
              className="outline-none border-none bg-transparent"
            >
              <option selected>Television</option>
              <option value="saab">Refrigerator</option>
              <option value="mercedes">Washing Mechine</option>
              <option value="audi">Air Conditionar</option>
            </select>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="mt-6 bg-stone-100 p-10 flex gap-10 rounded-3xl">
        <div className="w-3/4">
          <h3 className="text-2xl font-bold mb-2">Add Image</h3>
          <p className="w-[481px]">
            Share your product image. Image should be PNG and maximum size 1 Mb
          </p>
          <br />
          <hr className="border-stone-400" />
          <br />
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white w-fit p-6 rounded-xl">
                <img src={image} className="h-10" alt="" />
              </div>
              <p className="font-bold text-xl">1240 X 1240</p>
            </div>
            <div className="flex gap-6">
              <div className="bg-[#2F7CE3] text-white w-fit p-2 rounded text-2xl">
                <FaRegEdit />
              </div>
              <div className="text-white w-fit p-2 rounded text-2xl bg-[#BD2626]">
                <RiDeleteBin6Line />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <img
            className="h-full w-full bg-white p-10 rounded-2xl"
            src={image}
            alt="product image"
          />
        </div>
      </div>
      {/* product description */}

      <div className="bg-stone-100 rounded-2xl mt-6 p-10">
        <h1 className="text-2xl font-bold mb-8">Product Description</h1>
        <div>
          <h3 className="text-xl font-bold">Add Feature Details</h3>
          <p>
            Share your product image. Image should be PNG and maximum size 1 Mb
          </p>
          <div className="mt-3 border border-black rounded-xl">
            <div className="p-2 flex items-center justify-between w-[400px]">
              <p className="flex items-center">
                Normal <RiExpandUpDownFill />
              </p>
              <span className="font-extrabold">B</span>
              <span>
                <RiItalic />
              </span>
              <span className="underline">U</span>
              <span className="">
                <MdPhotoCameraBack />
              </span>
              <span className="">
                <RiCodeSSlashFill />
              </span>
            </div>
            <hr className="border-black" />
            <div className="p-2 h-36">
              <p>Event Details</p>
            </div>
          </div>
        </div>

        <hr className="border-stone-400 my-10" />
        <div className="font-semibold ">
          <button className="text-white py-3 px-10 rounded-xl mr-10 bg-[#2F7CE3]">
            Add Category +
          </button>
          <button className=" py-3 px-10 rounded-xl  bg-stone-200">
            Add SubCategory +
          </button>
        </div>
        <hr className="border-stone-400 my-10" />
        <div>
          <h3 className="text-xl font-bold">Add Image Gallery</h3>
          <p>
            Share your product image. Image should be PNG and maximum size 1 Mb
          </p>
          <div className="flex gap-3 items-center py-3 px-6 mt-6 font-bold rounded-xl w-fit bg-stone-200">
            <MdOutlineAddPhotoAlternate />
            Add Photo
          </div>
        </div>
        <hr className="border-stone-400 my-10" />
        <div>
          <h3 className="text-xl font-bold">Add Support Details</h3>
          <p>
            Share your product image. Image should be PNG and maximum size 1 Mb
          </p>
          <div className="mt-3 border border-black rounded-xl">
            <div className="p-2 flex items-center justify-between w-[400px]">
              <p className="flex items-center">
                Normal <RiExpandUpDownFill />
              </p>
              <span className="font-extrabold">B</span>
              <span>
                <RiItalic />
              </span>
              <span className="underline">U</span>
              <span className="">
                <MdPhotoCameraBack />
              </span>
              <span className="">
                <RiCodeSSlashFill />
              </span>
            </div>
            <hr className="border-black" />
            <div className="p-2 h-36">
              <p>Event Details</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-end mt-10">
        <button className="px-3 py-2 rounded-lg text-white bg-[#BD2626]">Save & Exit</button>
        <button className="px-3 py-2 rounded-lg text-white bg-[#2F7CE3]">Publish</button>
      </div>
    </>
  );
};

export default AddProductPage;
