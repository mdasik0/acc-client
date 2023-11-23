import sideImg from "../../../../assets/BannerImg/about.png";
const AboutUs = () => {
  return (
    <div className="max-w-[80%] mx-auto flex justify-center items-center bg-stone-100 rounded-[40px] my-20 p-20">
      <div className="w-1/2">
        <img src={sideImg} className="h-[383px]" alt="about us image" />
      </div>
      <div className="w-1/2">
        <h1 className="text-5xl font-extrabold ">About Us</h1>
        <p className="font-semibold my-6 w-[450px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
        <button className="bg-[#2F7CE3] text-white mt-6 py-3 px-10 rounded-full ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
