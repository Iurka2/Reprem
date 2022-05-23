// test one 

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'



export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../iphone2.glb')
  
  const texture = useTexture('../../../wallpaper2.jpg')


  useFrame((state) => {
    const t = state.clock.getElapsedTime()
   
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 4) / 21, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-5 + Math.sin(t)) / 6, 0.1)
  
  }
  )
  return (
    <group ref={group} {...props} dispose={null}>
  <group rotation={[Math.PI / 2.1, -0.1, 3.8]} scale={0.7} position={[-0,-0,0]} >
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_1'].geometry} material={materials['Body.001']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_2'].geometry} material={materials['Body_RED.002']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_3'].geometry} material={materials['Camera_RED.002']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_4'].geometry} material={materials['Camera_GLOSS_.002']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_5'].geometry} material={materials['Camera_GLASS.002']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_6'].geometry} material={materials['Frame_RED.002']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_7'].geometry} material={materials['Camera_BLACK.002']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_8'].geometry} material={materials['Camera_GRAY.002']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_9'].geometry} material={materials['Camera_LENS.002']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_10'].geometry} material={materials['Mic/Speaker.003']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_11'].geometry} material={materials['Flash.003']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_12'].geometry} material={materials['Bezel_BLACK.002']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_13'].geometry}  > <meshLambertMaterial map={texture} toneMapped={false}  /></mesh>
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_14'].geometry} material={materials['Sensor.003']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_15'].geometry} material={materials['BLACK.003']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_16'].geometry} material={materials['GRAY.003']} />
        <mesh geometry={nodes['IP_SE_3_-_2022_Plane001_17'].geometry} material={materials['Antennas.003']} />
    
      <mesh geometry={nodes.Text002.geometry} material={materials['Material.001']} position={[-5.12, 3.3, 1.43]} rotation={[Math.PI / 2, 0, 0]} scale={0.51} />
      </group>
    </group>
  )
}

useGLTF.preload('../../../iphone2.glb')
