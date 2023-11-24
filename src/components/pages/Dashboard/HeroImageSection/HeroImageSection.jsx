import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import banner from "../../../../assets/BannerImg/image 25.png"
const HeroImageSection = () => {
    return (
        <div className="bg-stone-100 p-10 rounded-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Hero Image</h1>
          <button className="px-6 py-2 cursor-pointer bg-[#2F7CE3] text-white rounded-lg">
            Add New
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl font-bold text-black border-stone-400">
                <th>Image</th>
                <th>Head Text</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                    <img className="h-20 w-fit" src={banner} alt="" />
                </td>
                <td>
                    <div>
                        <h3 className="text-xl font-bold mb-2">WELCOME TO THE WORLD OF ACC</h3>
                        <p>Upload Date: February 24, 2023</p>
                    </div>
                </td>
                <td>
                    
                    <div className="text-2xl flex items-center gap-6">
                    <FaRegEdit className="cursor-pointer" />
                    <RiDeleteBin6Line className="cursor-pointer" />
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default HeroImageSection;