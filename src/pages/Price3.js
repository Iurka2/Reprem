const PriceTags = ({type, price,button,h1,cathyPhrase,li1,li2,li3,li4,li5,li6}) => {
  return ( 
    <div className="price_container">
<h1 className="price_h1" style={h1} >{type}</h1>
<div className="price_top">
  <h1>{price}$<span className="price_span">/month</span>  </h1>
  <p>{cathyPhrase}</p>
  <button className="price_button" style={button} >Sign up</button>
</div>
<div className="list_style">
<ul className="price_list">
  <li>{li1}</li>
  <li>{li2}</li>
  <li>{li3}</li>
  <li>{li4}</li>
  <li>{li5}</li>
  <li>{li6}</li>
</ul>
</div>
    </div>
   );
}
 
export default PriceTags;