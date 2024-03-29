import React from 'react';
import github from "../assets/GitHub-Mark-32px.png"
import weather from "../assets/weatherme.png"
import synoptic from "../assets/synoptic.png"
import rpsls from "../assets/rpsls-hands-spock.png"

const Projects = () => {
    return ( 
    <section id="projects" className="block container block--light block-projects">
      <h2 data-aos="zoom-in">Projects</h2>

      {/* Start First Row */}
      <div className="grid grid--1x3">
        <div className="project" data-aos="fade-up">
          <div className="card ">
            <a href="https://superchat-7b816.web.app/" target="/">
              <div className="project-1a">
                
              </div>
            </a>
            <div className="card__body">
              <header className="card__header">
                <h3>InitChat</h3>
                <a className="github" href="https://github.com/JAPlaisted/init-chat" target="/">
                  <img 
                    className='brightness'
                    src={github}
                    alt="GitHub logo"
                    width="20px"
                    height="20px"
                /></a>
              </header>
              <p className="card__description">
                InitChat is a fullstack chat app utilizing React.js on the front-end and Firebase on the back end. This app features google authentication on the backend as well as a banned users list. Images available in the github repo or feel free to leave a comment on the live site!
              </p>
            </div>
          </div>
        </div>

        <div className="project" data-aos="fade-up">
          <div className="card">
            <a href="/advantageRoute" target="/">
              <div className="project-2a">
                
              </div>
            </a>
            <div className="card__body">
              <header className="card__header">
                <h3>Advantage Route Systems</h3>
              </header>
              <p className="card__description">
              Advantage Route Systems provides route optimization services to a multitude of delivery companies. I was a front end developer on this project, working in Vue.js, Amazon Web Services, Knex.js, Quasar, and Swagger. 
              </p>
            </div>
          </div>
        </div>
        <div className="project" data-aos="fade-up">
          <div className="card ">
            <a href="https://incredible-cactus-081ef1.netlify.app/" target="/">
              <div className="project-3a">
                
              </div>
            </a>
            <div className="card__body">
              <header className="card__header">
                <h3>IAT</h3>
                <a className="github" href="https://github.com/JAPlaisted/iat" target="/">
                  <img 
                    className='brightness'
                    src={github}
                    alt="GitHub logo"
                    width="20px"
                    height="20px"
                /></a>
              </header>
              <p className="card__description">
                Intelligent Automation Technologies is a software automation service that automates processes for businesses. This React site features reusable components, browser router, and custom CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Start First Row */}

      <div className="grid grid--1x3">
      <div className="project" data-aos="fade-up">
          <div className="card">
            <a href="https://calm-figolla-4ac6c5.netlify.app/" target="/">
              <div className="project-b">
                
              </div>
            </a>
            <div className="card__body">
              <header className="card__header">
                <h3>Rainy Data</h3>
                <a className="github" href="https://github.com/JAPlaisted/rainy-data" target="/">
                  <img 
                    className='brightness'
                    src={github}
                    alt="GitHub logo"
                    width="20px"
                    height="20px"
                /></a>
              </header>
              <p className="card__description">
              I created this site to hopefully help fellow developers save time in
creating test databases to test their applications during development. Made with React.js, express.js, cors, axios, file-downloader. This is a full stack application.
              </p>
            </div>
          </div>
        </div>

        <div className="project" data-aos="fade-up">
          <div className="card ">
            <a href="https://cosmic-sunburst-b998ed.netlify.app/" target="/">
              <div className="project-6">
                
              </div>
            </a>
            <div className="card__body">
              <header className="card__header">
                <h3>Find Jon</h3>
                <a className="github" href="https://github.com/JAPlaisted/find-jon" target="/">
                  <img 
                    className='brightness'
                    src={github}
                    alt="GitHub logo"
                    width="20px"
                    height="20px"
                /></a>
              </header>
              <p className="card__description">
                This single page React app is my solution to sites like Instagram only offering a spot for a single link. This site uses media queries to render backgrounds based on screen size.
              </p>
            </div>
          </div>
        </div>
        <div className="project" data-aos="fade-up">
          <div className="card ">
            <a href="/pyTracking" target="/">
              <div className="project-c">
                
              </div>
            </a>
            <div className="card__body">
              <header className="card__header">
                <h3>Python Tracking</h3>
                <a className="github" href="https://github.com/JAPlaisted/facial-recognition">
                  <img 
                    className='brightness'
                    src={github}
                    alt="GitHub logo"
                    width="20px"
                    height="20px"
                /></a>
              </header>
              <p className="card__description">
                Here is where I experiment with python object tracking scripts which will eventually be used to make the web more interactive.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid--1x3">
      <div className="project" data-aos="fade-up">
          <div className="card">
            <a href="https://magnificent-torte-aec714.netlify.app/" target="/">
              <div className="project-2">
                
              </div>
            </a>
            <div className="card__body">
              <header className="card__header">
                <h3>Pacifica Pizza</h3>
                <a className="github" href="https://github.com/JAPlaisted/react-pizza" target="/">
                  <img 
                    className='brightness'
                    src={github}
                    alt="GitHub logo"
                    width="20px"
                    height="20px"
                /></a>
              </header>
              <p className="card__description">
                Located in Fresno, California. Pacifica Pizza, a pizzeria chain offering specialty pies plus familiar comfort food. Made with React.js.
              </p>
            </div>
          </div>
        </div>

        <div className="project" data-aos="fade-up">
          <div className="card">
            <a href="https://stately-tarsier-fd5ad6.netlify.app/" target="/">
              <img
                src={rpsls}
                alt=""
                width="300px"
                height="200px"
              />
            </a>
            <div className="card__body">
              <header className="card__header">
                <h3>Mike Bourne Music</h3>
                <a className="github" href="https://github.com/JAPlaisted/bourne-music" target="/">
                  <img
                    className='brightness'
                    src={github}
                    alt="GitHub logo"
                    width="20px"
                    height="20px"
                  />
                </a>
              </header>
              <p className="card__description">
                Official Website for Arkansas rapper Mike Bourne. Made with React.js, React Router, Email.js, and custom CSS. 
              </p>
            </div>
          </div>
        </div>
        <div className="project" data-aos="fade-up">
          <div className="card ">
            <a href="https://admirable-lebkuchen-db46f7.netlify.app/" target="/">
              <div className="project-1">
                
              </div>
            </a>
            <div className="card__body">
              <header className="card__header">
                <h3>Zoa Energy</h3>
                <a className="github" href="https://github.com/JAPlaisted/ZoaEnergyLandingPage" target="/">
                  <img 
                    className='brightness'
                    src={github}
                    alt="GitHub logo"
                    width="20px"
                    height="20px"
                /></a>
              </header>
              <p className="card__description">
                ZOA is about healthy, positive energy that helps us
all focus, be productive, and get stronger together. This Zoa landing page is made with react and can be used to learn about and purchase some Zoa Energy!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid--1x3">
        <div className="project" data-aos="fade-up">
          <div className="card">
            <a href="https://wizardly-khorana-32e30d.netlify.app/#main" target="/">
              <img
                src={weather}
                alt=""
                width="300px"
                height="200px"
              />
            </a>
            <div className="card__body">
              <header className="card__header">
                <h3>WeatherMe</h3>
                <a className="github" href="https://github.com/JAPlaisted/Weather-Web-App" target="/">
                  <img
                    className='brightness'
                    src={github}
                    alt="GitHub logo"
                    width="20px"
                    height="20px"
                /></a>
              </header>
              <p className="card__description">
                Fast and accurate weather reports in a clean, elegant design.
                Toggle between English and Metric and view additional weather
                information.
              </p>
            </div>
          </div>
        </div>
        <div className="noPad project" data-aos="fade-up">
          <div className="card">
            <a  href="https://upbeat-wiles-ffe15a.netlify.app/"  target="/">
              <img
                src={synoptic}
                alt=""
                borderRadius='100%'
              />
            </a>
            <div className="card__body">
              <header className="card__header">
                <h3>Synoptic</h3>
                <a className="github" href="https://github.com/JAPlaisted/concepts" target="/">
                  <img
                    className='brightness'
                    src={github}
                    alt="GitHub logo"
                    width="20px"
                    height="20px"
                /></a>
              </header>
              <p className="card__description">
                This blog was made with the React framework alongside the Material-UI library.
              </p>
            </div>
          </div>
        </div>
        <div className="project" data-aos="fade-up">
          <div className="card">
            <a href="https://elegant-austin-e61aa0.netlify.app/" target="/">
            <div className="project-5">
                
                </div>
            </a>
            <div className="card__body">
              <header className="card__header">
                <h3>Rock, Paper, Scissors, Lizard, Spock.</h3>
                <a className="github" href="https://github.com/JAPlaisted/RPSLP" target="/">
                  <img
                    className='brightness'
                    src={github}
                    alt="GitHub logo"
                    width="20px"
                    height="20px"
                  />
                </a>
              </header>
              <p className="card__description">
              Rock, Paper, Scissors, Lizard, Spock is a fun extension to the classic game. This game was built with javascript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
     );
}
 
export default Projects;