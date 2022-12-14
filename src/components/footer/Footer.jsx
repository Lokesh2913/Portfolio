import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
function Footer() {
  return (
    <footer>
      <a href='#' className='footer_logo'>LokeshNainwaL</a>

      <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/" target="_blank"><BsInstagram/></a>
        <a href="https://github.com/" target="_blank"><BsGithub/></a>
        </div>

        <div className="footer__copyright">
             <small>&copy; LokeshNainwal. All rights reserved.</small>
        
      </div>
    </footer>
  )
}

export default Footer