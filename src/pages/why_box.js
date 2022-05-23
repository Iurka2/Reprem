import { Link } from "react-router-dom";


const WhyBox = ({why_titile, body_text, image}) => {
  return ( 
    <div className='why_container'>
      <div className='why_grid_container'>  </div>
      <img src={image} alt='why_image' className="why_image"></img>
      <h1 className="why_h1">{why_titile}</h1>
      <p className="why_p">{body_text}</p>
      <Link to='/price' className="learn_why"><span className="learn_why2">Learn more</span></Link> 
    
    </div>
   );
}
 
export default WhyBox;