// import placeholder from "./resources/placeholder.jpg"







const CardProduct4 = ({title, text,model}) => {
  



  return ( 
  <>
<div className="cardBig2" >

<h1>{title}</h1>
<p>{text}</p>
 <div className="bottom_of_card2">  
  <a href="/"><span className="learn_more">Learn more</span></a> 
<div className="model_style1">{model}</div>
 </div>
</div>

</>

   );
};


export default CardProduct4