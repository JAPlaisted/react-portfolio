import React from 'react';
import Sprite from '../assets/icon_sprite.svg'
import wave from "../assets/wave-bkgrnd.svg"


const Contact = () => {

  const sectionStyle = {
    backgroundImage:`url(${wave})`,
    backgroundSize: '100%',
    transform: 'scaleY(-1)',
  };

    return ( 
        <section id="contact" className='container'>
            <div className="callout callout--primary container">
                <div className="grid grid--1x2" data-aos="fade-up-left">
                <div className="callout__content">
                 <h2 className="callout__heading">Ready to Get In Touch?</h2>
                 <p>
                   I am eager to work with you and create great technology. 
                  </p>
                 </div>
                  <a href="mailto: jonathan.plaisted@outlook.com" className="btn btn--stretched" style={ sectionStyle }><div className='flip'>Contact</div></a>
              </div>
             </div>
            <div className="icons container" data-aos="fade-up">
                <span className="icon-container f">
                    <a href="https://www.linkedin.com/in/jonathan-plaisted/">
                    <svg className='icon'>
                    <use xlinkHref={`${Sprite}#linkedin`}/>
                  </svg>
                    </a>
                  </span>
                  <span className="icon-container f">
                  <a href="https://twitter.com/cssslinger">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#twitter`}/>
                      </svg>
                  </a>
                  </span>
                  <span className="icon-container f">
                  <a href="https://codepen.io/japlaisted">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#codepen`}/>
                      </svg>
                  </a>
                  </span>
                  <span className="icon-container f">
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