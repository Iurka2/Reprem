/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { a,useSpring } from "@react-spring/three";




export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../../message.glb')
  


 
  const handleOpen = () => {
    props.setHover(!props.hover);
  }
  
  const rotationAnimation  = useSpring({
    rotation: props.hover ? [0,-1,0] : [0,-1.2,0],

  });
  

  return (

    <a.group ref={group} {...props} dispose={null}scale={1.7} position={[1.2,-4,2]} rotation={rotationAnimation.rotation}
    onPointerOver={(e) => handleOpen(false)}
    onPointerOut={(e) => handleOpen(true)}>
         
      <group position={[1.15, 2.29, 1.34]} rotation={[0, 0.28, 0]} scale={[0.04, 0.12, 0.86]}>
        <mesh geometry={nodes.Cube005.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube005_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-0.57, 2.91, -0.92]} rotation={[0, 0.24, 0]} scale={[0.04, 0.12, 0.86]}>
        <mesh geometry={nodes.Cube006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials['Material.004']} />
      </group>

    </a.group>
  )
}

useGLTF.preload('../../../../message.glb')