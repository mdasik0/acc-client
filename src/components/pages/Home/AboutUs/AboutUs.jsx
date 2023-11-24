import sideImg from "../../../../assets/BannerImg/about.png";
const AboutUs = () => {
  return (
    <div className="xl:max-w-[80%] max-w-[90%] mx-auto flex flex-col xl:flex-row justify-center items-center bg-stone-100 rounded-[40px] my-10 xl:my-20 xl:p-20 p-6 m-6">
      <div className="xl:w-1/2 w-full">
        <img
          src={sideImg}
          className="xl:h-[383px] md:h-[300px]  h-full"
          alt="about us image"
        />
      </div>
      <div className="xl:w-1/2 w-full">
        <h1 className="xl:text-5xl text-3xl mt-4 font-extrabold ">About Us</h1>
        <p className="font-semibold my-6 w-full xl:w-[450px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
        <button className="bg-[#2F7CE3] text-white xl:mt-6 py-3 px-10 rounded-full ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
