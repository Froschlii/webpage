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
          <div className="flex" style={{ alignItems: 'end', justifyContent: 'start' }}>

            <div style={{ maxWidth: '226.5px', marginRight: '32px', marginTop: 'auto' }}>
              <div className="vertical-line"></div>
              <img src={nils} alt="Nils" />
              <br/>
            </div>

          <ul>
          <h2 className="text-black text-cl font-popping font-semibold">Persönliche Informationen</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Name</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lebenslaufData.personalInfo.name}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anschrift</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lebenslaufData.personalInfo.anschrift}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>E-Mail</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lebenslaufData.personalInfo.email}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Telefonnummer</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lebenslaufData.personalInfo.phone}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Geburtsdatum</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lebenslaufData.personalInfo.geburtsdatum}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Geburtsort</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lebenslaufData.personalInfo.geburtsort}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Staatsangehörigkeit</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lebenslaufData.personalInfo.staatsangehörigkeit}</td>
                </tr>
              </tbody>
            </table>

            <br/>

                </ul>
                </div>

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
          <h2 className="text-black text-cl font-popping font-semibold">Persönliche Informationen</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Name</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lebenslaufData.personalInfo.name}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anschrift</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lebenslaufData.personalInfo.anschrift}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>E-Mail</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lebenslaufData.personalInfo.email}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Telefonnummer</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lebenslaufData.personalInfo.phone}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Geburtsdatum</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lebenslaufData.personalInfo.geburtsdatum}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Geburtsort</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lebenslaufData.personalInfo.geburtsort}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Staatsangehörigkeit</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{lebenslaufData.personalInfo.staatsangehörigkeit}</td>
                </tr>
              </tbody>
            </table>

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

