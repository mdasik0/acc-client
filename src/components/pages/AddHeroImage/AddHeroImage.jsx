import { useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import "./AddHeroImage.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const AddHeroImage = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [headText, setHeadText] = useState("");

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files; // Fix: Change 'file' to 'files'
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages(imagesArray);

    console.log(selectedFiles);
  };

  const handleHeadText = (e) => {
    const selectedText = e.target.value;
    setHeadText(selectedText)

  }

  return (
    <>
      <div className="bg-stone-100 rounded-3xl p-10">
        <h2 className="text-2xl font-bold">Add Image</h2>
        <span>
          Share your product image. Image should be PNG and maximum size 1 Mb
        </span>
        <hr className="border-stone-400 my-6" />
        <div className="flex items-end gap-4">
          <div className="flex gap-2 cursor-pointer relative  items-center py-3 px-6 mt-6 font-bold rounded-lg w-fit bg-stone-200">
            <MdOutlineAddPhotoAlternate />
            Add Photo
            <input
              onChange={onSelectFile}
              multiple
              accept="image/png,  image/jpeg, image/webp"
              name="images"
              className="absolute opacity-0 cursor-pointer right-0  w-[150px] h-[46px]"
              type="file"
            />
          </div>

          <div className="border-2 relative border-black rounded-lg py-2 w-fit px-2">
            <span className="bg-stone-100 absolute -top-2 px-1 text-xs">
              Head Text (Maximum 8 words)
            </span>
            <input
            onChange={handleHeadText}
              placeholder="Enter Your Head Text"
              type="text"
              className="outline-none w-[300px] border-none bg-transparent"
            />
          </div>
        </div>
        <div className="my-10 flex gap-10">
          {selectedImages.map((image, index) => (
            <div className="h-20 relative rounded-lg" key={index}>
              <img
                className="h-full w-full object-contain"
                src={image}
                alt=""
              />
              <RxCross2
                onClick={() =>
                  setSelectedImages(selectedImages.filter((e) => e !== image))
                }
                className="p-1 text-2xl text-white bg-red-500 rounded-full absolute -top-2 -right-3 cursor-pointer hover:bg-red-400 duration-300"
              />
            </div>
          ))}
        </div>

                {
                  selectedImages.length > 1 ? <p className="my-10">Show Preview</p> : ""
                }

        <div>
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {
          selectedImages.map((image, index) => <SwiperSlide key={index}>
          <div
            style={{
              backgroundImage: `url('${image}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full md:h-[400px] xl:h-[500px] bg-stone-900 h-fit rounded-2xl md:rounded-[40px] flex justify-center items-center text-white"
          >
            <p className="md:text-5xl text-2xl uppercase py-6 md:py-0 md:leading-[60px] w-[400px] text-center font-extrabold">
        {headText}
            </p>
          </div>
        </SwiperSlide>)
        }
      </Swiper>
        </div>
      </div>
      <div className="flex gap-2 justify-end mt-10">
        <button className="px-3 py-2 rounded-lg text-white bg-[#BD2626]">
          Save & Exit
        </button>
        <button className="px-3 py-2 rounded-lg text-white bg-[#2F7CE3]">
          Publish
        </button>
      </div>
    </>
  );
};

export default AddHeroImage;
