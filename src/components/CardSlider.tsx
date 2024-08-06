"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { MdEvent } from "react-icons/md";
import { convertDateTime } from "@/utils/convertDateTime";
import Link from "next/link";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

// Define the Slide interface
interface Slide {
  id: number;
  img_event: string;
  title_img: string;
  description: string;
  dateEvent: string;
  createdAt: string;
  updatedAt: string;
}

// Define the CardSliderProps interface
interface CardSliderProps {
  slides: Slide[];
}

// Use the correct syntax for defining a React functional component
const CardSlider: React.FC<CardSliderProps> = ({ slides }) => {
  return (
    <div className="text-white">
      <Swiper
        className="mt-4"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          400: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="p-4 border border-[#034AFF]">
            <div className="flex flex-col text-gray-300">
              <img src={`http://localhost:9000/${slide.img_event}`} className="w-full h-56 object-cover" alt="" />
              <div className="flex items-center gap-2 mt-2">
                <MdEvent />
                <p className="text-xs font-semibold">{convertDateTime(slide.dateEvent)}</p>
              </div>
              <h1 className="text-3xl font-bold tracking-[2px]">{slide.title_img}</h1>
              <p className="text-gray-300 text-sm">{slide.description}</p>
              <Link href={`/event/${slide.id}`} className="mt-4 font-bold">
                READ MORE
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
