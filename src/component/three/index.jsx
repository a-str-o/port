import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "../../utils/angle";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";



export default function Three () {
    const orbitControlsRef = useRef(null)
    useFrame((state) => {
        if(!!orbitControlsRef.current){
           const { x , y} = state.mouse;
           orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(15));
           orbitControlsRef.current.setPolarAngle((y+0.5) * angleToRadians(60));

           orbitControlsRef.current.update();
         }
    })

    useEffect(() => {
       if(!!orbitControlsRef.current){
           console.log(orbitControlsRef.current)
        }

    }, [orbitControlsRef.current])
    return (
        <>
        // camera
        <PerspectiveCamera  makeDefault position={[0,1,5]}/>
        <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(40)}/>
        
        // ball
        <mesh position={[0,0.5,0]} castShadow>
            <sphereGeometry args={[0.5,32,32]} />
            <meshStandardMaterial color="#ffbb00"/>
        </mesh>
        
        <mesh rotation={[-(angleToRadians(90)) , 0 , 0]} receiveShadow>
            <planeGeometry args={[1000,1000]} />
            <meshStandardMaterial color="#ffffff"/>
        </mesh> 
         
        <ambientLight args={["#ffffff",0.25]} />
        <directionalLight  args={["#ffffff", 1]} position={[-3,1,0]} castShadow />
        <Environment background>
             <mesh>
                <sphereGeometry args={[50,100,100]}/>
                <meshBasicMaterial  color="#2280cc" side={THREE.BackSide}/>
            </mesh>
        </Environment>
        </>
    )
}