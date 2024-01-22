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
    
    useFrame(({ clock, camera }) => {
        hoohRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        if (hoohRef.current.position.x > camera.position.x + 10) {
            // Face the positive z-axis when moving right
            hoohRef.current.lookAt(camera.position.x +1 , hoohRef.current.position.y, hoohRef.current.position.z + 10);
        } else if (hoohRef.current.position.x < camera.position.x - 10) {
            // Face the negative z-axis when moving left
            hoohRef.current.lookAt(camera.position.x - 1, hoohRef.current.position.y, hoohRef.current.position.z + 10);
        }

        if (hoohRef.current.rotation.y === 0) {
            hoohRef.current.position.x += 0.01;
            hoohRef.current.position.z -= 0.01;
        } else {
            hoohRef.current.position.x -= 0.01;
            hoohRef.current.position.z += 0.01;
        }
    });

    return (
        <mesh position={[-5, 2, 1]} scale={[0.03, 0.03, 0.03]} ref={hoohRef}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Hooh;