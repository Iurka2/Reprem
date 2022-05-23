import { Swiper, SwiperSlide } from "swiper/react";
import WhyBox from './why_box'
import dashbord from "./resources/dashbord.png"
import integ from './resources/integ.png'
import plans from './resources/plans.png'
import sus from './resources/sus.png'
import "swiper/css";
import "swiper/css/pagination";




// import required modules
import { Pagination } from "swiper";

const WhySlider = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><WhyBox why_titile="Integrate the tools you already use" body_text="Connect your essential business tools to Wrike and make it your project control center. Google, Microsoft, Adobe® Creative Cloud®, Box, GitHub, JIRA, and many more.​" image={integ} /></SwiperSlide>
        <SwiperSlide><WhyBox why_titile="We are sustanable !" body_text="Forget about paper cards. With E-cult you are creating a better environment and eliminate the need to cut wood for a paper cards. ​" image={sus} /></SwiperSlide>
        <SwiperSlide><WhyBox why_titile="Chose the plan that suits you" body_text="We have created price plans for any individual. Don’t know which one fits you best? Hop on our price page to read more about it..​" image={plans} /></SwiperSlide>
        <SwiperSlide><WhyBox why_titile="Get access to our Dashboard" body_text="Dashboard is a powerful tool to organize your company. Create sequels, have access to useful analytics and manage your business cards all in one place." image={dashbord} /></SwiperSlide>
      
      </Swiper>
    </>
  );
}

export default WhySlider