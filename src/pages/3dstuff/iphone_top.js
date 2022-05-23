import { Canvas,  } from "react-three-fiber";
import Model from "./Iphone2";
import { Suspense } from "react";
import Lights from "./lights";
import { OrbitControls,Loader } from "@react-three/drei";





const IphoneModel = () => {
  
  return ( 
    <>
    <Canvas
 
    camera={{fov: 60, position:[ 0 ,0, 3.5]}}
    >
      <Lights />
    <Suspense  fallback={null} >
      <Model   />
      <OrbitControls
          enableZoom={false} />
    </Suspense>

    </Canvas>
    <Loader />
    </>
   );
}
 
export default IphoneModel;