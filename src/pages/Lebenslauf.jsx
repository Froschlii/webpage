import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { personalInfo, ausbildung, praktischeErfahrungen } from '../constants';
import CTA from '../components/CTA';
import { Link } from 'react-router-dom'
import nils from '../assets/images/nils.jpeg';


const Lebenslauf = () => {
  return (
    <div>
    <section className="max-container">
      <h1 className="head-text">
        <span className="blue-gradient_text font-semibold drop-shadow">Lebenslauf</span>
      </h1>
    
        <div className="max-w-[30%] flex alignItems:center justifyContent: center">
            <img src={nils} alt="Nils"/>
        </div>
        

      <div className="py-16">
        <div className="mt-12 flex">
          <VerticalTimeline>
            {personalInfo.map((info) => (
              <VerticalTimelineElement
                key={info.Infos}
                date={info.date}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: info.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-cl font-popping font-semibold">
                    {info.Überschrift}
                  </h3>
                  <p className="text-black/50 text-cl font-medium font-base" style={{ margin: 0 }}>
                    {info.Infos}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {info.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-small">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}

            {ausbildung.map((ausbildung) => (
              <VerticalTimelineElement
                key={ausbildung.Infos}
                date={ausbildung.date}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: ausbildung.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-cl font-popping font-semibold">{ausbildung.Überschrift}</h3>
                  <p className="text-black/50 text-cl font-medium font-base" style={{ margin: 0 }}>
                    {ausbildung.Infos}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {ausbildung.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-small">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
            
            {praktischeErfahrungen.map((praktischeErfahrungen) => (
              <VerticalTimelineElement
                key={praktischeErfahrungen.Infos}
                date={praktischeErfahrungen.date}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: praktischeErfahrungen.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-cl font-popping font-semibold">{praktischeErfahrungen.Überschrift}</h3>
                  <p className="text-black/50 text-cl font-medium font-base" style={{ margin: 0 }}>
                    {praktischeErfahrungen.Infos}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {praktischeErfahrungen.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-small">
                      {point}
                    </li>
                  ))}
                  <br/>
                    
                <div className="blue-gradient_text">
                </div>
                
                  <p className ="flex w-full">
                    <Link to="/About" className="btn w-full">
                        <button className ="w-full"> Infos | Skillset </button>
                    </Link>
                    </p>
                </ul>
              </VerticalTimelineElement>
            ))}

                

          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
    </div>
  );
};

export default Lebenslauf;
