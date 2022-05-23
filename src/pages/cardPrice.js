
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import TextCards from "./TextSlider";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";




 function CardPrice() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><TextCards heading='We love trees' text='Each year, 40 000 trees are wasted during the process of making business cards. ' /></SwiperSlide>
        <SwiperSlide><TextCards  heading='We love trees' text='Each year, 40 000 trees are wasted during the process of making business cards. '  /></SwiperSlide>
        <SwiperSlide><TextCards  heading='We love trees' text='Each year, 40 000 trees are wasted during the process of making business cards. ' /></SwiperSlide>
        <SwiperSlide><TextCards heading='We love trees' text='Each year, 40 000 trees are wasted during the process of making business cards. '  /></SwiperSlide>
     
      </Swiper>
    </>
  );
}
export default CardPrice