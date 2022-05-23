import CardProduct from "./cards/cards_prodcut";
import CardProduct2 from "./cards/card_product_small";
import CardProduct3 from "./cards/card_product_small2";
import CardProduct4 from "./cards/card_product2";
import CardProduct5 from "./cards/card_product_huge";

import CompasModel from './3dstuff/compas_card';
import MessageModel from './3dstuff/messageCard';
import CalendarModel from './3dstuff/calendarCard';
import StatsModel from './3dstuff/statsCard';



const FeaturesProduct = () => {


  return ( 
    
    <div className="big_contaienr">
    
<CardProduct title="Radar" text="Find likeminded people around you and create meaningful connections."  model={<CompasModel scalable={1} place={[0,-0,0]} />}   />
<CardProduct2 title="Messanger" text="We have designed a fast and convenient chat system. " model={<MessageModel />}  />
<CardProduct3 title="Calendar" text="No more missed meetings, the calendar takes care of your schedule." model={<CalendarModel scalable={1.4}/>}  />
<CardProduct4 title="User-centred database" text="Generate business leads & opportunities." model={<StatsModel />}  />
<CardProduct5 title="Digital Business Cards" text="Have your business card always on you and impress  people with your design."   />
    </div>
    
   );
}
 
export default FeaturesProduct ;