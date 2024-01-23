import React from 'react';
import { lebenslaufData } from '../constants';
import { Link } from 'react-router-dom'
import CTA from '../components/CTA';
import nils from '../assets/images/nils.jpeg';


const Lebenslauf = () => {
  if (window.innerWidth > 930 ) {
  return (
    <div className="py-16">
      <section className="max-container">
        <h1 className="head-text">{lebenslaufData.personalInfo.name}'s Lebenslauf</h1>

        <br />

        <div className="text-black-500/50 font-normal pl-1">
          <div className="flex" style={{ alignItems: 'end', justifyContent: 'end' }}>

            <div style={{ maxWidth: '300px', marginRight: '32px', marginTop: 'auto' }}>
              <img src={nils} alt="Nils" />
              <br/>
              <Link to="/About" className="btn max-width">
            <button className="w-[260px]
            "> Infos | Skillset </button>
            </Link>
            </div>

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

        <hr className="border-slate-200" />

        <CTA />
      </section>
    </div>
    );
  }
  else
  {
    return(
    <div className="py-16">
      <section className="max-container">
        <h1 className="head-text">{lebenslaufData.personalInfo.name}'s Lebenslauf</h1>
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
            <button className="w-full"> Infos | Skillset </button>
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

        <CTA />
      </section>
    </div>
    );
  }
};

export default Lebenslauf;

