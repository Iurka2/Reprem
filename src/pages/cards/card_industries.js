import Cardind from './card_template_industry'
// import Doctor from "../resources/doctor.png"
import Marquee from "react-fast-marquee";
import Women1 from '../resources/png/women1.png'
import Women2 from '../resources/png/women2.png'
import Man1 from '../resources/png/it.png'
import Man2 from '../resources/png/ceo.png'
import Man3 from '../resources/png/chef.png'
import Man4 from '../resources/png/delicery.png'
import Man5 from '../resources/png/hairdresser.png'
const CardIndustry = () => {
  return ( 
    <>
  <Marquee className='industry_marq' speed={50} gradient={false}  >

<Cardind profesion={Women1} />
<Cardind profesion={Women2} />
<Cardind profesion={Man1} />
<Cardind profesion={Man2} />
<Cardind profesion={Man3} />
<Cardind profesion={Man4} />
<Cardind profesion={Man5} />

</Marquee>
    </>
   );
}
 
export default CardIndustry;