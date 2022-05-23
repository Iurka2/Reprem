import { Canvas } from "react-three-fiber";
import Model from "./jsxModels/Compas1";
import { Suspense} from "react";
import Lights from "./lights2";
import { useState } from "react";



const CompasModel = ({scalable,place}) => {
  
  
  
  
  const [hover, setHover] = useState(false)
  

  return ( 
    <>
    
    <Canvas 
     camera={{fov: 35, position:[ 2.9 ,-1, 3.5]}}
       
    //  onCreated={(state) => state.events.connect(target.current)}
     >

  
      <Lights />
    <Suspense  fallback={null} >
      <Model  hover={hover} setHover={setHover}  scale={scalable} position={place}  />
      
          
    </Suspense>

    </Canvas>

    </>
   );
}
 
export default CompasModel;