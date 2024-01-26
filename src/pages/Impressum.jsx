import React from 'react'
import { lebenslaufData, haftungsausschluss } from '../constants';

const Impressum = () => {
  return (
    <section className="cta">
        <p className="cta-text"> 
          Impressum
        </p>
            <ul>
            <h2 className="text-black text-cl font-popping font-semibold"> Persönliche Informationen</h2>
                <li>{haftungsausschluss.impressum.header}</li>
                <li>{lebenslaufData.personalInfo.name}</li>
                <li>{lebenslaufData.personalInfo.adress}</li>
                <li>{lebenslaufData.personalInfo.anschrift}</li>
                <li>{lebenslaufData.personalInfo.impressumort}</li>
                <li>Telefon: {lebenslaufData.personalInfo.phone}</li>
                <li>E-Mail: {lebenslaufData.personalInfo.email}</li>
                <li>{haftungsausschluss.impressum.steueridentifikationsnummer}</li>
                <li>{haftungsausschluss.impressum.haftungshinweis}</li>
            </ul>
          <br/>
    </section>
  )
}
export default Impressum