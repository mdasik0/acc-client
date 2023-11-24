import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";


const ProductSection = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("/products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    })
  return (
    <div className="bg-stone-100 p-10 rounded-3xl mt-6">
      <div className="flex items-center mb-6 justify-between">
        <h1 className="text-2xl font-bold">Product</h1>
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
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            products.map(product =>  <tr key={product._id}>
                <td>
                  <img className="h-20 w-fit" src={product.image} alt="product image" />
                </td>
                <td>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {product.name}
                    </h3>
                    <p>{product.modelNo}</p>
                  </div>
                </td>
                <td className="text-lg font-bold">${product?.price}</td>
                <td>
                  <div className="text-2xl flex items-center gap-6">
                    <FaRegEdit className="cursor-pointer" />
                    <RiDeleteBin6Line className="cursor-pointer" />
                  </div>
                </td>
              </tr>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSection;
