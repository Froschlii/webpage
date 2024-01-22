import React from 'react'

import { projects, notfinprojects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className="max-container h-auto ">
      <h1 className="head-text">
        My <span className="blue-gradient_txt font-semibold drop-shadow">Projects</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Ich habe im Juni 2023 mit dem Programmieren angefangen und bin unfassbar motiviert! Hier unten sind alle Dinge aufgelistet, die ich schon gemacht/ an denen ich mich bis dato versucht habe!
        </p>
      </div>
      
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`}/> 
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-[75%] h-[75%] object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-popping font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              <div className="mt-5 flex items.center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font.semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
                <br/> 
              </div>
            </div>
          </div>
        ))}
      </div>
      <div >
        <h3 className="subhead-text">
          Working on:
        </h3>
      <div className="flex flex-wrap my-20 gap-16">
      {notfinprojects.map((notfinprojects) => (
        <div className="lg:w-[400px] w-full" key={notfinprojects.name}>
          <div className="block-container w-12 h-12">
            <div className={`btn-back rounded-xl ${notfinprojects.theme}`}/> 
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={notfinprojects.iconUrl}
                alt="Project Icon"
                className="w-[75%] h-[75%] object-contain"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col">
            <h4 className="text-2xl font-popping font-semibold">
              {notfinprojects.name}
            </h4>
            <p className="mt-2 text-slate-500">
              {notfinprojects.description}
            </p>
            <div className="mt-5 flex items.center gap-2 font-poppins">
              <Link
                to={notfinprojects.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font.semibold text-blue-600"
              >
                Live Link
              </Link>
              <img
                src={arrow}
                alt="arrow"
                className="w-4 h-4 object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>


          
      </div>
      

      <hr className="border-slate-200" />

      <CTA />
      
    </section>
  )
}

export default Projects