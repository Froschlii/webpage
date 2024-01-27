import React, { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';

import Pokeball from '../models/Pokeball';
import Sky from '../models/sky';
import Hooh from '../models/Hooh';
import Mew from '../models/Mew';
import HomeInfo from '../components/HomeInfo';

import TwinleafTown from '../assets/TwinleafTown.mp3' //2:44:40
import { soundoff, soundon } from '../assets/icons';



const Home = () => {
  const audioRef = useRef(new Audio(TwinleafTown));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const[isRotating, setIsRotating] = useState(false);
  const[currentStage, setCurrentStage] = useState(1);
  const[isPlayingMusic, setIsPlayingMusic] = useState(false);
  
  useEffect(() => {
    if(isPlayingMusic){
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }

  }, [isPlayingMusic])

  const adjustPokeballForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    let rotation = [1.7, 9.42, -0.8];

    if (window.innerWidth < 768) {
      screenPosition = [0, 8.7, -45];
      screenScale = [0.35, 0.35, 0.35];
    } else {
      screenPosition = [0, 18.7, -45];
      screenScale = [0.52, 0.52, 0.52];
    }
    return [screenScale, screenPosition, rotation];
  }

    const adjustMewForScreenSize = () => {
      let screenScale, screenPosition;
     
      if (window.innerWidth < 768) {
        screenScale = [0.2, 0.2, 0.2];
        screenPosition=[0, -1.5, 0]
      } else {
        screenScale = [0.6, 0.6, 0.6];
        screenPosition=[0, -1.5, -4];
      }
      
    return [screenScale, screenPosition];
  }

  const [pokeballScale, pokeballPosition, pokeballRotation] = adjustPokeballForScreenSize();
  const [mewScale, mewPosition] = adjustMewForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center"> 
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>}

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity = {2.3}/>
          <ambientLight intensity = {0.5} />
          <hemisphereLight skyColor="#b1e1f" groundColoe="#000000" intensity={1}/>
          <Hooh />
          <Sky isRotating={isRotating}/>
          <Pokeball 
            position={pokeballPosition}
            scale={pokeballScale}  
            rotation={pokeballRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Mew 
            isRotating={isRotating}
            scale={mewScale}
            position={mewPosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home;
