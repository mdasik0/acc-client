const NewsLetter = () => {
  return (
    <div className="xl:max-w-[80%] max-w-[90%] mx-auto flex flex-col justify-center items-center bg-stone-100 rounded-[40px] md:my-20 my-10 p-6 md:p-20">
      <h1 className="md:text-5xl text-3xl font-extrabold text-center ">
        Need Our Latest Update?
      </h1>
      <p className="font-semibold text-center mt-3 md:w-2/4 mx-auto">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <button className="bg-[#2F7CE3] text-white mt-6 py-3 px-10 rounded-full text-center ">
        Sign up for Newsletter
      </button>
    </div>
  );
};

export default NewsLetter;
