import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
    return ( 
    <nav className="nav sticky ">
      <ul className="list nav__list ">
        <li className="nav__item"><HashLink to="/#projects">Projects</HashLink></li>
        <li className="nav__item"><HashLink to="#skills">Skills</HashLink></li>
        <li className="nav__item "><a className="contact" href="mailto: jonathan.plaisted@outlook.com">Contact</a></li>
      </ul>
    </nav>
     );
}
 
export default Nav;

