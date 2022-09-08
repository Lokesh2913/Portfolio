import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
    <h2>About Me</h2>

  <div className="conatiner about_container">
    <div className="about_me">
      <div className="about__me-image">
        <img src={ME} alt="About Image"/>
      </div>
    </div>

      <div className="about_content">
        <div className="about__cards">
          <article className='about_card'>
            <FaAward className='about__icon'/>
             <h5>Experience</h5>
             <small>1+ Years Working</small>
          </article>

          <article className='about_card'>
            <FiUsers className='about__icon'/>
             <h5>Clients</h5>
             <small>50+ Clients</small>
          </article>

          <article className='about_card'>
            <VscFolderLibrary className='about__icon'/>
             <h5>Projects</h5>
             <small>5+ Projects</small>
          </article>
        </div>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, vel? Id ratione omnis deleniti molestias odio culpa a atque eligendi nesciunt quidem sapiente eveniet fugiat magni, ea ipsam odit delectus.
         </p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
    
  )
}

export default About