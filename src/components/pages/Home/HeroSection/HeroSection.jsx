import { Swiper, SwiperSlide } from "swiper/react";
import BI from "../../../../assets/BannerImg/image 25.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="max-w-[80%] mx-auto flex justify-between items-center ">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${BI}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[500px] rounded-[40px] flex justify-center items-center text-white"
          >
            <p className="text-5xl uppercase w-[400px] leading-[60px] text-center font-extrabold">
              WELCOME TO THE WORLD OF ACC
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${BI}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[500px] rounded-[40px] flex justify-center items-center text-white"
          >
            <p className="text-5xl uppercase leading-[60px] w-[400px] text-center font-extrabold">
              WELCOME TO THE WORLD OF ACC
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${BI}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[500px] rounded-[40px] flex justify-center items-center text-white"
          >
            <p className="text-5xl uppercase leading-[60px] w-[400px] text-center font-extrabold">
              WELCOME TO THE WORLD OF ACC
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${BI}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[500px] rounded-[40px] flex justify-center items-center text-white"
          >
            <p className="text-5xl uppercase leading-[60px] w-[400px] text-center font-extrabold">
              WELCOME TO THE WORLD OF ACC
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
