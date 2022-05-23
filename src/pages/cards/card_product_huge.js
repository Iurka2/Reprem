import phone from '../resources/png/phone22.png'






const CardProduct5 = ({title, text}) => {
  



  return ( 
  <>
<div className="cardHuge" >

<h1>{title}</h1>
<p>{text}</p>

<span className="learn_more2">Learn more</span>
<img src={phone} className='phonePng'/>

</div>

</>

   );
};


export default CardProduct5