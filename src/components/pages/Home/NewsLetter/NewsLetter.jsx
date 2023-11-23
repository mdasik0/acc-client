const NewsLetter = () => {
  return (
    <div className="max-w-[80%] mx-auto flex flex-col justify-center items-center bg-stone-100 rounded-[40px] my-20 p-20">
      <h1 className="text-5xl font-extrabold text-center ">
        Need Our Latest Update?
      </h1>
      <p className="font-semibold text-center mt-3 w-2/4 mx-auto">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <button
        className="bg-[#2F7CE3] text-white mt-6 py-3 px-10 rounded-full text-center "
      >
        Sign up for Newsletter
      </button>
    </div>
  );
};

export default NewsLetter;
