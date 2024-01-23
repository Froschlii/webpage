import React, { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';
import mewScene from '../assets/3d/mew.glb';

const Mew = ({ isRotating, ...props}) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(mewScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if(isRotating) {
        actions['Take 001'].play();
    } else {
        actions['Take 001'].stop();
    }
  }, [actions, isRotating])

  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Mew