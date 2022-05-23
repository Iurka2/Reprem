import { Link } from "react-router-dom";

 const Navbar = () => {

  return ( 
<nav className="navbar"> 
<Link className="logo" to='/'>E-cult</Link>
<div className='links'>
<Link to='/product'>Product</Link>
<Link to='/price'>Price</Link>

</div>

</nav>
   );
}
 
export default Navbar;