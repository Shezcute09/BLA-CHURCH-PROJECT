// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export function ImageSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[500]"
      >
        <SwiperSlide>
          <img
            className=" w-full h-[500]"
            src="/src/assets/worship.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" w-full h-[500]"
            src="/src/assets/bibleStudy.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" w-full h-[500]"
            src="/src/assets/prayerService.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" w-full h-[500]"
            src="/src/assets/joinUs.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
