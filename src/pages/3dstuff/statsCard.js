import { Canvas } from "react-three-fiber";
import Model from "./jsxModels/Stats";
import {Suspense} from "react";
import { useState } from "react";
// import Lights from "./lights";







const StatsModel = () => {
  const [hover, setHover] = useState(false)
  
  



  

  return ( 
    <>
 
    <Canvas 
     camera={{fov: 35, position:[ 2.9 ,2, 3.5]}}
 
    
     >


      <directionalLight
      
        position={[-40, 80,0]}
        intensity={1}


      />
      <pointLight position={[100, 40, 0]} intensity={1.3} />
     
    <Suspense  fallback={null} >
      <Model hover={hover} setHover={setHover}  position={[-1,-1,-1]} rotation={[0,3.4,0]} scale={1.8} />

          
    </Suspense>

    </Canvas>

    </>
   );
}
 
export default StatsModel;