import React from 'react';
import { lebenslaufData } from '../constants';
import { Link } from 'react-router-dom'
import CTA from '../components/CTA';
import nils from '../assets/images/nils.jpeg';


const Lebenslauf = () => {
  if (window.innerWidth > 930 ) {
  return (
    <div>
      <section className="max-container h-auto">
      <h1 className="head-text">
      {lebenslaufData.personalInfo.name}'s <span className="blue-gradient_text font-semibold drop-shadow">Lebenslauf</span>
      </h1>
        

        <br />

        <div className="text-black-500/50 font-normal pl-1">
          <div className="flex" style={{ alignItems: 'end', justifyContent: 'end' }}>

            <div style={{ maxWidth: '300px', marginRight: '32px', marginTop: 'auto' }}>
              <img src={nils} alt="Nils" />
              <br/>
            </div>

          <ul>
        <h2 className="text-black text-cl font-popping font-semibold"> Persönliche Informationen</h2>
    
            <li>Name: {lebenslaufData.personalInfo.name}</li>
            <li>Anschrift: {lebenslaufData.personalInfo.anschrift}</li>
            <li>E-Mail: {lebenslaufData.personalInfo.email}</li>
            <li>Telefonnummer: {lebenslaufData.personalInfo.phone}</li>
            <li>Geburtsdatum: {lebenslaufData.personalInfo.geburtsdatum}</li>
            <li>Geburtsort: {lebenslaufData.personalInfo.geburtsort}</li>
            <li>Staatsangehörigkeit: {lebenslaufData.personalInfo.staatsangehörigkeit}</li>
            <br/>

            <h2 className="text-black text-cl font-popping font-semibold">Ausbildung</h2>
            {lebenslaufData.ausbildung.map((edu, index) => (
            <li key={index} >
              {edu.year}, {edu.degree} at {edu.school}
              </li>
          ))}
          </ul>
          
          </div>
        </div>

        <br />

        <div className="flex" style={{ alignItems: 'normal', justifyContent: 'normal', textAlign: 'justify' }}>
          <ul className="text-black-500/50 font-normal pl-1 text-small" style={{ flex: 1 }}>
          <h2 className="text-black text-cl font-popping font-semibold">Praktische Erfahrungen</h2>
          {lebenslaufData.praktischeErfahrungen.map((exp, index) => (
            <li key={index}>
              {exp.year}, {exp.what} {exp.where}
            </li>
          ))}
          </ul>
        </div>

        <br/>
        <Link to="/About" className="btn max-width">
            <button className="w-min-300"> Infos | Skillset </button>
        </Link>
        <br/>
        <br/>
        <br/>
        <hr className="border-slate-200" />

        <CTA />
        <br/>
        <br/>

        <hr className="border-slate-200" />
        
        <div style={{display: 'flex', justifyContent: 'center', alignContent: 'auto'}}>        
        <Link to="/datenschutz" className="underline" style={{ marginLeft: '10px', fontSize: '8px'}}>
            Datenschutz
          </Link>
        
          <Link to="/impressum" className="underline" style={{ marginLeft: '5px', fontSize: '8px'}}>
            Impressum
          </Link>
        </div>

      </section>
    </div>
    );
  }
  else
  {
    return(
    <div>
      <section className="max-container">
      <h1 className="head-text">
      {lebenslaufData.personalInfo.name}'s <span className="blue-gradient_text font-semibold drop-shadow">Lebenslauf</span>
      </h1>
            <div style={{ maxWidth: '180px', marginRight: '32px', marginTop: '15px' }}>
              <img src={nils} alt="Nils" />
            </div>

        <br />

        <div className="text-black-500/50 font-normal pl-1">
          <div className="flex">


          <ul>
        <h2 className="text-black text-cl font-popping font-semibold"> Persönliche Informationen</h2>
            <li>Email: {lebenslaufData.personalInfo.name}</li>
            <li>Phone: {lebenslaufData.personalInfo.email}</li>
            <li>Anschrift: {lebenslaufData.personalInfo.Anschrift}</li>
            <li>Geburtsdatum: {lebenslaufData.personalInfo.Geburtsdatum}</li>
            <li>Geburtsort: {lebenslaufData.personalInfo.Geburtsort}</li>
            <li>Staatsangehörigkeit: {lebenslaufData.personalInfo.Staatsangehörigkeit}</li>
            <li>Telefon: {lebenslaufData.personalInfo.Telefon}</li>
            <li>E-Mail: {lebenslaufData.personalInfo.email}</li>
            <br/>

            <h2 className="text-black text-cl font-popping font-semibold">Ausbildung</h2>
            {lebenslaufData.ausbildung.map((edu, index) => (
            <li key={index} >
              {edu.year}, {edu.degree} at {edu.school}
              </li>
          ))}
          </ul>
          
          </div>
        </div>

        <br />
        <div style={{ maxWidth: '280px', width:'auto', marginRight: '50px', marginLeft: '14px' }}>
          <Link to="/About" className="btn max-width">
            <button className="w-min-300"> Infos | Skillset </button>
          </Link>
        </div>
        <br />

        <div className="flex">
          <ul className="text-black-500/50 font-normal pl-1 text-small" style={{ flex: 1 }}>
          <h2 className="text-black text-cl font-popping font-semibold">Praktische Erfahrungen</h2>
          {lebenslaufData.praktischeErfahrungen.map((exp, index) => (
            <li key={index}>
              {exp.year}, {exp.what} {exp.where}
            </li>
          ))}
          </ul>
        </div>
        <br/>

        <hr className="border-slate-200" />

        <CTA /> <br/><br/>

        <hr className="border-slate-200" />

        <div style={{display: 'flex', justifyContent: 'center', alignContent: 'auto'}}>        
        <Link to="/datenschutz" className="underline" style={{ marginLeft: '10px', fontSize: '8px'}}>
            Datenschutz
          </Link>
        
          <Link to="/impressum" className="underline" style={{ marginLeft: '5px', fontSize: '8px'}}>
            Impressum
          </Link>
        </div>

      </section>

    </div>
    );
  }
};

export default Lebenslauf;

