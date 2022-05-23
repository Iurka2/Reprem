// import placeholder from "./resources/placeholder.jpg"
// import  {gsap,Power3} from 'gsap'
// import {useRef,useEffect} from 'react'
import { Link } from 'react-router-dom';






const Card = ({title, text, style,model}) => {
  


const bg = style




  return ( 
  <>
<div className="card" style={bg}  >

<h1>{title}</h1>
<p>{text}</p>
 <div className="bottom_of_card">  
<Link to='/product'> <span className="learn_more">Learn more</span> </Link>
<div className='model_container' >{model }</div>
 </div>
</div>

</>

   );
};


export default Card