import Marquee from "react-fast-marquee";
import Images from "./resources/itegrations/index" 

const Integrations = () => {
 



  return (
  <Marquee speed={70} gradient={false} style={{alignItems:"baseline"}} >
    <div className="marqimg">
  <img src={Images[1]} alt='Microsoft'  style={{height:70, marginRight:50,}} ></img>
  <img src={Images[2]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[3]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[4]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[5]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[6]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[7]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[9]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[10]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[11]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[12]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[13]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[14]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[15]} alt='' style={{height:70, marginRight:50}}></img>
  <img src={Images[16]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[17]} alt='' style={{height:70, marginRight:50}}></img>
  <img src={Images[18]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[19]} alt='' style={{height:90, marginRight:50,}}></img>
  <img src={Images[20]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[21]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[22]} alt='' style={{height:70, marginRight:50,}}></img>
  <img src={Images[23]} alt='' style={{height:70, marginRight:50,}}></img>
  </div>
  </Marquee>

  )
};

export default Integrations;