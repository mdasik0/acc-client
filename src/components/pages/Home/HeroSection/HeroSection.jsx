import { Swiper, SwiperSlide } from "swiper/react";
import BI from "../../../../assets/BannerImg/image 25.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="xl:max-w-[80%] max-w-[90%] mx-auto flex justify-between items-center ">
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
            className="w-full h-[170px] sm:h-[300px] md:h-[400px] xl:h-[500px]  rounded-2xl md:rounded-[40px] flex justify-center items-center text-white"
          >
            <p className="md:text-5xl text-2xl uppercase py-6 md:py-0 md:leading-[60px] w-[400px] text-center font-extrabold">
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
            className="w-full md:h-[400px] xl:h-[500px] h-fit rounded-2xl md:rounded-[40px] flex justify-center items-center text-white"
          >
            <p className="md:text-5xl text-2xl uppercase py-6 md:py-0 md:leading-[60px] w-[400px] text-center font-extrabold">
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
            className="w-full md:h-[400px] xl:h-[500px] h-fit rounded-2xl md:rounded-[40px] flex justify-center items-center text-white"
          >
            <p className="md:text-5xl text-2xl uppercase py-6 md:py-0 md:leading-[60px] w-[400px] text-center font-extrabold">
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
            className="w-full md:h-[400px] xl:h-[500px] h-fit rounded-2xl md:rounded-[40px] flex justify-center items-center text-white"
          >
            <p className="md:text-5xl text-2xl uppercase py-6 md:py-0 md:leading-[60px] w-[400px] text-center font-extrabold">
              WELCOME TO THE WORLD OF ACC
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
