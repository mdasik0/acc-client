import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="bg-stone-100 flex flex-col   items-center p-16 rounded-3xl ">
      <h3 className="text-3xl font-bold my-2">{product?.name}</h3>
      <p className="my-3">{product?.modelNo}</p>
      <Link className="text-blue-500 font-semibold mb-6">View Details &gt;</Link>
      <div className="h-[250px] w-full">
        <img className="w-full h-full object-contain" src={product.image} alt="" />
      </div>
    </div>
  );
};

export default Product;
