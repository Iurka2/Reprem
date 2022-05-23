import Card  from './cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import CompasModel from './3dstuff/compas_card';
import MessageModel from './3dstuff/messageCard';
import CalendarModel from './3dstuff/calendarCard';
import StatsModel from './3dstuff/statsCard';





const bg1 ={
  backgroundColor:"#2A2B2E",
  
}

const bg2 ={
  backgroundColor:"#001B2E"
}
const bg3 ={
  backgroundColor:"#22162B"
}



const Slider = ()  => {

  
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={2.9}
    
    >

      <SwiperSlide><Card  title="Messanger" text=" Create meaningful conversations with likeminded people" model={<MessageModel  />} link="/product" /></SwiperSlide>
      <SwiperSlide><Card  title="Calendar & events" text="A tight sequel is not an issue for our calendar" model={<CalendarModel />} style={bg1} link="/product" /></SwiperSlide>
      <SwiperSlide ><Card title="Radar" text='Find people around your town to get your networking on another level' style={bg2} model={<CompasModel />} link="/product" /></SwiperSlide>
      <SwiperSlide ><Card title="User-centred database" text="Generate business leads & opportunities." model={< StatsModel />} style={bg3}   /></SwiperSlide>
    

    </Swiper>
  );
};




export default Slider;

