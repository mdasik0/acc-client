import { useEffect, useState } from "react";
import "./ProductTab.css";
import Product from "./Product/Product";
const ProductTab = () => {
  const [toggle, setToggle] = useState(1);
  const [products, setProducts] = useState([]);

  const television = products.filter((product) => product.name == "Television");
  const fridge = products.filter((product) => product.name == "Refrigerator");
  const washingMechine = products.filter((product) => product.name == "Washing Mechine");
  const AirConditioner = products.filter((product) => product.name == "Air Conditioner");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-[80%] mx-auto">
      <ul className="flex justify-center items-center gap-20 text-lg my-8 font-bold">
        <li
          onClick={() => setToggle(1)}
          className={`${
            toggle === 1 ? "tabActive" : ""
          } cursor-pointer hover:text-blue-500 duration-300 relative`}
        >
          Overview
        </li>
        <li
          onClick={() => setToggle(2)}
          className={`${
            toggle === 2 ? "tabActive" : ""
          } cursor-pointer hover:text-blue-500 duration-300 relative`}
        >
          Air Conditioner
        </li>
        <li
          onClick={() => setToggle(3)}
          className={`${
            toggle === 3 ? "tabActive" : ""
          } cursor-pointer hover:text-blue-500 duration-300 relative`}
        >
          Refrigerator
        </li>
        <li
          onClick={() => setToggle(4)}
          className={`${
            toggle === 4 ? "tabActive" : ""
          } cursor-pointer hover:text-blue-500 duration-300 relative`}
        >
          Television
        </li>
        <li
          onClick={() => setToggle(5)}
          className={`${
            toggle === 5 ? "tabActive" : ""
          } cursor-pointer hover:text-blue-500 duration-300 relative`}
        >
          Washing Mechine
        </li>
      </ul>
      {/* tab item */}
      <div
        className={`${
          toggle === 1 ? "block" : "hidden"
        } grid-container grid gap-10`}
      >
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <div className={`${toggle === 2 ? "block" : "hidden"} grid-container grid gap-10`}>
        {AirConditioner.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <div className={`${toggle === 3 ? "block" : "hidden"} grid-container grid gap-10`}>
      {fridge.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <div className={`${toggle === 4 ? "block" : "hidden"} grid-container grid gap-10`}>
      {television.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <div className={`${toggle === 5 ? "block" : "hidden"} grid-container grid gap-10`}>
      {washingMechine.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductTab;
