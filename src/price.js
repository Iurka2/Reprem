import Navbar from './pages/Navbar';
import Footer from './pages/footer';
import PriceTags from './pages/Price3';
import Faq from './pages/faq';
import Dashobrd from './pages/dashboard';
import Security from './pages/security';
import all from "./pages/resources/png/all.png"





const Price = () => {
  
    const bg1 ={
        backgroundColor:"#6FCF97",
        
      }
      const bg2 ={
        color:"#6FCF97",
        
      }

      const bg3 ={
        backgroundColor:"#8A81ED",
        
      }
      const bg4 ={
        color:"#8A81ED",
        
      }
  
  
    return ( 
    <>
    <Navbar />
    <h1 className='features_text2'>We have something for&nbsp;<span className='span_bold'>everyone</span>  </h1>
<div className='all_people'>
<img src={all} alt='all' className='all_img' ></img>
</div>
    <Security></Security>



<Dashobrd></Dashobrd>





    <h1 className='features_text2'> Benefitis and prices  </h1>
    <p className="price_p" >Whether you're a hairdreser or CEO <br /> we have you covered    </p>
    <div className='contaiener_choice' >
    <PriceTags  type='Free'  price='0' cathyPhrase="Started pack" li1="Unlimited E-Cards" li2='Unlimited E-Card Shares' li3="Unlimited Business Card Scanning " li4="Unlimited Contacts Storage" li5="Messenger Feature Access" li6="Bring your own logo" />
    <PriceTags button={bg1} h1={bg2} type='Business' price='20' cathyPhrase="Reach full potential" li1="Includes all free features" li2="Access to the Radar feature" li3="Access to the Global community" li4="Access to the Calendar & Events Feature" li5="Access to E-Cult Management Dashboard" li6="Manage Employee permissions & Analytics"  />
    <PriceTags button={bg3} h1={bg4} type='Enterprise' price='50' cathyPhrase="Go beyond and above" li1="All Business features" li2="Tailored E-Card Templates for brand identity" li3="HR tools integration" li4="Onboarding Assistance" li5='Enterprise Support' li6="Onboarding Assistance"/>
    </div>
    <h1 className='features_text'>FAQ</h1>
<Faq question='How do I get acess to Dashbord' answer='Dashbord is the part of the business plan, as long as you are subscribed you have access to it.' />
<Faq question='When can I unsubscribe from the plans' answer='You can do that at any time, just go to your settings -> subscriptions and press unsubsribe.' />
<Faq question='Can I create events ?' answer='Yes, you can create events for either your company or outside of it.' />


    <hr className='line' size='1' ></hr>
    <Footer />
    </>
   );
}
 
export default Price;