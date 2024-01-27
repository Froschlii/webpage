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
      {lebenslaufData.personalInfo.name}s <span className="blue-gradient_text font-semibold drop-shadow">Lebenslauf</span>
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
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Jahr</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alles Andere</td>
                </tr>
                {lebenslaufData.ausbildung.map((edu, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{edu.year}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{edu.degree} - {edu.school}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </ul>
              
          </div>
        </div>

        <br />

        <div className="flex" style={{ alignItems: 'normal', justifyContent: 'normal', textAlign: 'justify' }}>
        <ul className="text-black-500/50 font-normal pl-1 text-small" style={{ flex: 1 }}>
          <h2 className="text-black text-cl font-popping font-semibold">Praktische Erfahrungen</h2>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Wann</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Was</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Wo</th>
              </tr>
            </thead>
            <tbody>
              {lebenslaufData.praktischeErfahrungen.map((exp, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exp.year}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exp.what}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exp.where}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Jahr</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alles Andere</td>
                </tr>
                {lebenslaufData.ausbildung.map((edu, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{edu.year}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{edu.degree} - {edu.school}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </ul>
              
          </div>
        </div>

        <br />

        <div className="flex" style={{ alignItems: 'normal', justifyContent: 'normal', textAlign: 'Left' }}>
        <ul className="text-black-500/50 font-normal pl-1 text-small" style={{ flex: 1 }}>
          <h2 className="text-black text-cl font-popping font-semibold">Praktische Erfahrungen</h2>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '4px' }}>Wann</th>
                <th style={{ border: '1px solid #ddd', padding: '4px' }}>Was</th>
                <th style={{ border: '1px solid #ddd', padding: '4px' }}>Wo</th>
              </tr>
            </thead>
            <tbody>
              {lebenslaufData.praktischeErfahrungen.map((exp, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #ddd', padding: '4px' }}>{exp.year}</td>
                  <td style={{ border: '1px solid #ddd', padding: '4px' }}>{exp.what}</td>
                  <td style={{ border: '1px solid #ddd', padding: '4px' }}>{exp.where}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ul>
      </div>

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

