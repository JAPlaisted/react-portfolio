import React from 'react';
import programmer from '../assets/programmer.svg';

const Header = () => {
    return ( 
    <section className="block block--dark block--skewed-left">
      <div className="container grid grid--1x2">
        <header className="block__header hero__content">
          <h1 className="block__heading">Jonathan Plaisted</h1>
          <p className="hero__tagline">Your next Web Developer.</p>
        </header>
        <img
          className="hero__image"
          src={programmer}
          alt=""
        />
      </div>
    </section>
     );
}
 
export default Header;