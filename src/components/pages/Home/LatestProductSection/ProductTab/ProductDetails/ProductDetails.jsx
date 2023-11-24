import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [toggle, setToggle] = useState(1);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) =>
        setProductDetails(data.find((product) => product._id === id))
      );
  }, []);

  console.log(productDetails);

  return (
    <div className="max-w-[80%] mx-auto">
      <div className="flex gap-10 mt-10 mb-20">
        <div className="w-1/2 h-[500px] bg-stone-100 p-20 rounded-[40px]">
          <img
            className="w-full h-full object-contain"
            src={productDetails.image}
            alt=""
          />
        </div>
        <div className="w-1/2 p-6">
          <h2 className="text-4xl font-bold mb-6">{productDetails.name}</h2>
          <h2 className="w-8/12">{productDetails.description}</h2>
          {/* rating */}
          <div className="my-6 flex items-center gap-3">
            <Rating
              placeholderRating={productDetails.rating}
              emptySymbol={<FaRegStar className="text-yellow-400 text-xl" />}
              placeholderSymbol={<FaStar className="text-yellow-400 text-xl" />}
              fullSymbol={<FaStar className="text-yellow-400 text-xl" />}
              readonly
            />
            <span className=" md:text-sm  font-bold">
              {productDetails.rating} <span>(1556)</span>
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-[#2F7CE3]">
            ${productDetails.price}{" "}
            <span className="text-lg font-medium">(No discount available)</span>
          </h2>
          <div className="flex gap-6 selected-color">
            {productDetails.colors && Array.isArray(productDetails.colors) ? (
              productDetails.colors.map((color, index) => (
                <div
                  className="px-10 py-4 border rounded-xl flex flex-col items-center"
                  key={index}
                >
                  <span className={`w-8 h-8 mb-3 ${color} rounded-full`}></span>
                  <p className="font-semibold">{color}</p>
                </div>
              ))
            ) : (
              <p>No color options available</p>
            )}
          </div>
        </div>
      </div>
      <div className="mb-20">
        <h1 className="text-4xl font-bold mb-8">More Details</h1>
        <ul className="flex gap-10 text-lg font-bold my-3 items-center border-b-2 pb-2">
          <li
            onClick={() => setToggle(1)}
            className={`${
              toggle === 1 ? "DetailsTab" : ""
            } cursor-pointer hover:text-blue-500 duration-300 relative`}
          >
            Feature
          </li>
          <li
            onClick={() => setToggle(2)}
            className={`${
              toggle === 2 ? "DetailsTab" : ""
            } cursor-pointer hover:text-blue-500 duration-300 relative`}
          >
            Techincal Specification
          </li>
          <li
            onClick={() => setToggle(3)}
            className={`${
              toggle === 3 ? "DetailsTab" : ""
            } cursor-pointer hover:text-blue-500 duration-300 relative`}
          >
            Picture Gallery
          </li>
          <li
            onClick={() => setToggle(4)}
            className={`${
              toggle === 4 ? "DetailsTab" : ""
            } cursor-pointer hover:text-blue-500 duration-300 relative`}
          >
            Supports
          </li>
        </ul>
        {/* tab content */}
        <div className={`${toggle === 1 ? "block" : "hidden"} my-6`}>
          <p>{productDetails?.features?.description}</p>
        </div>
        <div
          className={`${
            toggle === 2 ? "block" : "hidden"
          } flex flex-col gap-3 font-bold text-lg`}
        >
          <h2>
            Dimensions: {productDetails?.technicalSpecification?.dimensions}
          </h2>
          <h2>
            Processor: {productDetails?.technicalSpecification?.processor}
          </h2>
          <h2>Weight: {productDetails?.technicalSpecification?.weight}</h2>
        </div>
        <div className={`${toggle === 3 ? "block" : "hidden"} flex items-center gap-6 my-10`}>
          {(productDetails?.pictureGallery)?.map((img, index) => (
            <div className="w-full h-[200px] bg-stone-100 rounded-3xl p-6" key={index}> 
            <img className="w-full h-full object-contain"  src={img} alt="product image" />
            </div>
          ))}
        </div>
        <div
          className={`${
            toggle === 4 ? "block" : "hidden"
          } text-lg font-semibold flex flex-col gap-3 text-stone-500`}
        >
          <p>Warrenty: {productDetails?.support?.warranty}</p>
          <p>Customer Service: {productDetails?.support?.customerService}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
