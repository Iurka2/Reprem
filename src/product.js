import './App.css';
import Navbar from './pages/Navbar';
import Footer from './pages/footer';
import VideoActual from './pages/Video';
import HowWOrks from './pages/HowItWorks';
import video2 from './pages/resources/phone2.mp4'
import FeaturesProduct from './pages/Features_product';
import Integrations from './pages/marquee';
import CardIndustry from './pages/cards/card_industries';
import Faq from './pages/faq'



const Product = () => {
  return ( 
    <>
    <Navbar />
    <h1 className='features_text2'>Digital cards were never this&nbsp;<span className='span_bold'>convinient</span></h1>
    <p className="p_product" > Create your&nbsp;<span className='span_bold'>own design</span>&nbsp;/ find&nbsp;<span className='span_bold'>people</span>&nbsp;around you / and much more !  </p>
  <VideoActual actvideo={video2} />
  <HowWOrks />
  <FeaturesProduct />
  <h1 className='features_text3'>Connected with&nbsp;<span className='span_bold'>20+</span>&nbsp;apps  </h1>
    <Integrations />
    <h1 className='features_text2'> <span className='span_bold'>Everyone</span>&nbsp;is welcome </h1>
    <p className="p_product" >From hairdressers to sales associates we welcome you  </p>
<CardIndustry />


<h1 className='features_text'>FAQ</h1>
<Faq question='I am a bricklayer. Is this app going to be useful for me ?' answer='Absolutely, everyone can find something useful in the app.' />
<Faq question='Are all features free ?' answer='Most of them are, but there are some features like radar that are unlike with the business plan.' />
<Faq question='Do I have a limit for how many E-cards I can make ?' answer='No, you can create and costumize as many as you want.' />

<hr className='line' size='1' ></hr>
    <Footer />

    </>
   );
}
 
export default Product;