import { Canvas } from "react-three-fiber";
import Model from "./jsxModels/Message";
import { Suspense, useRef} from "react";
import Lights from "./lights";
import { useState } from "react";






const MessageModel = () => {
  const [hover, setHover] = useState(false)

const target = useRef()
  return ( 
    <>
    
    <Canvas 
     camera={{fov: 95, position:[ 5.6 ,1, 4]}}
    onPointerOver={(e) => console.log('over')}

     >

  
      <Lights />
    <Suspense  fallback={null} >
      <Model hover={hover} setHover={setHover}   />
 
          
    </Suspense>

    </Canvas>

    </>
   );
}
 
export default MessageModel;