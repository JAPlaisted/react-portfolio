import React from 'react';
import Sprite from '../assets/sprite.svg'



const Skills = () => {
    return ( 
        <section id="skills" className="block block--primary block--light">
        <h2 data-aos="zoom-in">Skills & Tools</h2>   
        <div className="media--block">
            <div className="grid grid--1x3" >
            <div className="media" data-aos="fade-right">
            <div className="media__image" >
              <span className="icon-container">
              <svg className='icon'>
                <use xlinkHref={`${Sprite}#website`}/>
              </svg>
              </span>
            </div>
            <div className="media__body">
              <h3 className="media__title">Responsive Design</h3>
              <p>I create layouts that adjust to any type of screen size, desktop, tablet or mobile.</p>
                  </div>
            </div>
            
            <div className="media" data-aos="fade-right">
            <div className="media__image">
              <span className="icon-container">
              <svg className='icon'>
                <use xlinkHref={`${Sprite}#css3`}/>
              </svg>
              </span>
            </div>
            <div className="media__body">
              <h3 className="media__title">CSS</h3>
              <p>I think CSS is widely under appreciated, I use CSS to create beautiful and smooth animations and styling. </p>
                  </div>
            </div>

            <div className="media" data-aos="fade-right">
            <div className="media__image">
              <span className="icon-container">
              <svg className='icon'>
                <use xlinkHref={`${Sprite}#react`}/>
              </svg>
              </span>
            </div>
            <div className="media__body">
              <h3 className="media__title">React JS</h3>
              <p>React is a powerful framework that allows me to pack a ton of functionality into my software.</p>
             </div>
            </div>
           </div>
          </div> 
          <div className="media--block" >
          <div className="grid grid--1x3" data-aos="fade-left">

            <div className="media">
              <div className="media__image">
                <span className="icon-container">
                  <svg className='icon'>
                <use xlinkHref={`${Sprite}#code`}/>
              </svg>
            </span>
          </div>
          <div className="media__body">
            <h3 className="media__title">VSCODE</h3>
              <p>My IDE of choice, combined with plugins that allow me to write clean, readable, shareable code.</p>
                </div>
           </div>
    
           <div className="media" data-aos="fade-left">
              <div className="media__image">
                <span className="icon-container">
                <svg className='icon'>
                    <use xlinkHref={`${Sprite}#adobe`}/>
                  </svg>
               </span>
              </div>
             <div className="media__body">
                <h3 className="media__title">Adobe Creative Cloud</h3>
                  <p>With this fleet of world-class software, I create mock-up site designs, multiple image sizes and files, professional video clips, and endlessly more.</p>
                </div>
            </div>

           <div className="media" data-aos="fade-left">
              <div className="media__image">
                  <span className="icon-container">
                 <svg className='icon'>
                   <use xlinkHref={`${Sprite}#python`}/>
                 </svg>
                 </span>
             </div>
             <div className="media__body">
                <h3 className="media__title">Python</h3>
                 <p>I believe Python is the language of the future, with back end development applications and machine learning capabilites, I use Python to bring the internet to the future.</p>
                </div>
            </div>

          </div>
        </div>
        </section>
     );
}
 
export default Skills;