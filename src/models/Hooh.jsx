import { useRef, useEffect } from 'react'
import hoohScene from '../assets/3d/hooh.glb'
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Hooh = () => {
    const hoohRef = useRef();
    const { scene, animations } = useGLTF(hoohScene);
    const { actions } = useAnimations(animations, hoohRef);

    useEffect(() => {
        actions['hover_skeletal.1'].play();
    }, []);
    
    // Outside the component
let moveDirection = 1; // 1 for moving right, -1 for moving left

// Inside the component
useFrame(({ clock, camera }) => {
    hoohRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 -13.3 ;

    // Adjust the position based on the moveDirection
    hoohRef.current.position.x += 0.01 * moveDirection;
    hoohRef.current.position.z -= 0.01 * moveDirection;

    // Face the direction it's moving
    const lookAtX = hoohRef.current.position.x + moveDirection;
    const lookAtZ = hoohRef.current.position.z;
    hoohRef.current.lookAt(lookAtX, hoohRef.current.position.y, lookAtZ);

    // Check if the bee should change direction
    if (hoohRef.current.position.x > camera.position.x + 2) {
        moveDirection = -1; // Change direction to left
    } else if (hoohRef.current.position.x < camera.position.x - 2) {
        moveDirection = 1; // Change direction to right
    }
});



    return (
        <mesh position={[-3, 10, -34]} scale={[0.009, 0.009, 0.009]} ref={hoohRef}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Hooh;