const TextCards = ({heading, text}) => {
  return ( 
    <>
    <div className="text_container">
<h1 className="text_h1">{heading}</h1>
<p className="text_p">{text}</p>
    </div>
    
    </>
   );
}
 
export default TextCards;