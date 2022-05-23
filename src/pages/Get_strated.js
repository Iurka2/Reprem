import IphoneModel from './3dstuff/iphone_top';
import iphoneAvalable from './resources/iphoneaval.svg'
import AdroidAvalable from './resources/google-play-badge.png'

const GetStared = () => {
  return (  
    <>
    <div className="left_side" > 
    <div className="left_side_text">
<h1>Get started <span className='now'>now</span></h1>
<ul className='list_side'>
  <li className='list_item'>No paper business cards</li>
  <li className='list_item'>Connect easily with anyone</li>
  <li className='list_item'>Have everything in one place</li>
</ul>  
<div className="avalable2">
  <p>Available soon on:</p>
  <div className='img_avalable_container'>
  <img src={iphoneAvalable} alt="appstore"  className="avalable_image"></img>
  <img src={AdroidAvalable} alt="playstore" className="avalable_image2"></img>
  </div>
  </div>
</div>
<div className="canvas-container2">
<IphoneModel />
</div>
    </div>
</>
  );
}
 
export default GetStared;