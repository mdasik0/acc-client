const AddProductPage = () => {
  return (
    <>
    {/* product is section */}
      <div className="bg-stone-100 p-10 rounded-3xl">
        <h3 className="text-2xl font-bold">Product is</h3>
        <br />
        <hr />
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
    </>
  );
};

export default AddProductPage;
