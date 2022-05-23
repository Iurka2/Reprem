import './App.css';
import TopPart from './pages/first_part_top';
import Navbar from './pages/Navbar';
import Slider from './pages/cardSlider';
import WhySlider from './pages/Why_us_slider';
import GetStared from './pages/Get_strated';
import Footer from './pages/footer';
import VideoActual from './pages/Video';
import Faq from './pages/faq';
import video from "./pages/resources/Main_page_video.mp4";




const MainPage = () => {
  return ( 
    <div >
    <Navbar />
    <TopPart />
    <h1 className='main_h1'>We are on a mission to change how the world sees business cards</h1>
    <p className="main_p" > </p>
 <VideoActual actvideo={video} />
 <h1 className='features_text'>Features</h1>
    <Slider />
<h1 className='features_text'>Why Us</h1>
  <WhySlider />

<GetStared />
<h1 className='features_text'>FAQ</h1>
<Faq question='Is the app free of charge ?' answer='Yes, you can use it compleatly free, and if you feel like upgrading you can always do that in the app.' />
<Faq question='Is the dashbord same as the app ?' answer='Yes,it has the same features but you also get access to more analytics as well as customization options.' />
<Faq question='Where is the app avalable ?' answer='It is going to be avalable on IOS Android and PC' />
<Faq question='Can I trust my data to the app ?' answer='We care about your security, so we have developed a secure solution for all your business needs.' />
<hr className='line' size='1' ></hr>
<Footer />

    </div>
   );
}
 
export default MainPage;







