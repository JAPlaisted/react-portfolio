import React from 'react';
import { HashLink } from 'react-router-hash-link';
import resume from '../assets/resume.pdf'

const Nav = () => {


    return ( 
    <nav className="nav sticky ">
      <ul className="list nav__list container">
        <li className="nav__item"><HashLink to="/#projects">PROJECTS</HashLink></li>
        <li className="nav__item"><HashLink to="#skills">SKILLS</HashLink></li>
        <li className="nav__item "><HashLink to="#contact">CONTACT</HashLink></li>
        <li className="nav__item "><a href={resume} target="_blank" rel="noreferrer">RESUME</a></li>
      </ul>
    </nav>
     );
}
 
export default Nav;

