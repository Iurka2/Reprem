import IphoneModel from "./3dstuff/iphone_top";
import iphoneAvalable from './resources/iphoneaval.svg'
import AdroidAvalable from './resources/google-play-badge.png'

const TopPart = () => {
  return ( 
    <div className="left_side" > 
    <div className="left_side_text">
<h1>Busisness cards made simple</h1>
<p><span className="span_bold">All in one</span> app to help digitalize buisness cards</p>
<div className="avalable">
  <p>Available soon on:</p>
  <div className='img_avalable_container'>
  <img src={iphoneAvalable} alt="appstore"  className="avalable_image"></img>
  <img src={AdroidAvalable} alt="playstore" className="avalable_image2"></img>
  </div>
  </div>
</div>
<div className="canvas-container">
<IphoneModel />
</div>
    </div>
   );
}
 
export default TopPart;