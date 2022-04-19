import React from 'react';
import { HashLink } from 'react-router-hash-link';
import resume from '../assets/resume.pdf'
import wave from "../assets/wave-bkgrnd.svg"

const Nav = () => {

  
  const sectionStyle = {
    backgroundImage:`url(${wave})`,
    backgroundSize: '105%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

    return ( 
    <nav className="nav sticky ">
      <ul className="list nav__list ">
        <li className="nav__item"><HashLink to="/#projects">PROJECTS</HashLink></li>
        <li className="nav__item"><HashLink to="#skills">SKILLS</HashLink></li>
        <li className="nav__item "><a className="contact" style={ sectionStyle } href="mailto: jonathan.plaisted@outlook.com">CONTACT</a></li>
        <li className="nav__item "><a href={resume} target="_blank" rel="noreferrer">RESUME</a></li>
      </ul>
    </nav>
     );
}
 
export default Nav;

