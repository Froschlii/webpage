import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center"> {text} </p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h- object-contain"/>
        </Link>
    </div>
)

const renderContent ={
    1: (
        <h1 className= "sm:text-xl sm:leading-dnug text-center neo-brutalism-blue py-4 px-6 text-white mx-5"> 
        Hey! Ich heiße <span className="font-semibold"> Nils Paweldyk</span> ✌🏻
        <br/>
        und befinde mich im M.Sc.Psychologie. Nebenbei begeistere ich mich fürs Front- sowie Backend-development.
        </h1>
    ),
    2: (
        <InfoBox 
        text="Alles, was ich zu bieten habe auf einen Blick:"
        link="/about"
        btnText="learn more"
        />
    ),
    3: (
        <InfoBox 
        text="Hier sind meine Hobbies / Projekte, sowie alles, an was ich bis dato in meiner Freizeit gearbeitet habe:"
        link="/projects"
        btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
        text="Konnte ich dein Interesse wecken? Dann würde ich mich sehr darüber freuen, wenn du mir hier Bescheid gibst:"
        link="/contact"
        btnText="Let's talk"
        />
    ),
}




const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo

