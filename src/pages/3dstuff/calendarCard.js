import { Canvas} from "react-three-fiber";

import {Suspense, useRef} from "react";
import Lights from "./lights2";
import { useState } from 'react'
import Model from "./jsxModels/Calendar1";



const CalendarModel = ()  => {
  const [hover, setHover] = useState(false)


  return ( 
    <>
   
    <Canvas 
     camera={{fov: 35, position:[ 2.9 ,1, 1]}}     >

  
      <Lights />
    <Suspense  fallback={null} >
< Model hover={hover} setHover={setHover}   ></Model>
    </Suspense>

    </Canvas>

    </>
   );
}
 
export default CalendarModel;