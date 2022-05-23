const VideoActual = ({actvideo}) => {

  return ( 
  
      <div className='video_container'>
  <video  src={actvideo} controls  autoPlay="autoPlay" muted className='video'  loop></video>

  </div> 

  
  );
}
 
export default VideoActual;