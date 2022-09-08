import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
         <div className="experience__frontend">
          <h3>Skills</h3>
           <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icons"/>
               <div>
               <h4>C++</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
               <div>
               <h4>DSA</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
               <div>
               <h4>OS</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
               <div>
               <h4>Computer Network</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
               <div>
               <h4>DBMS</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>

           </div>
         </div>
         <div className="ecperience__backend">
         <h3>Web Development</h3>
           <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
               <div>
               <h4>HTML</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
               <div>
               <h4>CSS</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
               <div>
               <h4>Javascript</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
               <div>
               <h4>React</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
               <div>
               <h4>NodeJs</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>
            
            </div>
 
         </div>
      </div>
    </section>
  )
}

export default Experience