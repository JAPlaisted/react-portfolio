import React from 'react';
import Sprite from '../assets/icon_sprite.svg'


const Contact = () => {
    return ( 
        <section id="contact">
            <div className="callout callout--primary">
                <div className="grid grid--1x2" data-aos="fade-up-left">
                <div className="callout__content">
                 <h2 className="callout__heading">Ready to Get in touch?</h2>
                 <p>
                   I am eager to work with you and create great technology. 
                  </p>
                 </div>
                  <a href="mailto: jonathan.plaisted@outlook.com" className="btn btn--stretched">Contact</a>
              </div>
             </div>
            <div className="icons" data-aos="fade-up">
                <span className="icon-container">
                    <a href="https://www.linkedin.com/in/jonathan-plaisted/">
                    <svg className='icon'>
                    <use xlinkHref={`${Sprite}#linkedin`}/>
                  </svg>
                    </a>
                  </span>
                  <span className="icon-container">
                  <a href="https://twitter.com/cssslinger">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#twitter`}/>
                      </svg>
                  </a>
                  </span>
                  <span className="icon-container">
                  <a href="https://codepen.io/japlaisted">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#codepen`}/>
                      </svg>
                  </a>
                  </span>
                  <span className="icon-container">
                  <a href="https://github.com/JAPlaisted">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#github`}/>
                      </svg>
                  </a>
                  </span>
            </div>
        
            </section>
         );
    }
 
export default Contact;