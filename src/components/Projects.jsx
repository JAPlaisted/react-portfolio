import React from 'react';
import github from "../assets/GitHub-Mark-32px.png"
import weather from "../assets/weatherme.png"
import java from "../assets/java.png"
import rpsls from "../assets/rpsls-hands-spock.png"

const Projects = () => {
    return ( 
    <section id="projects" className="block container block--light block-projects">
      <h2 data-aos="zoom-in">Projects</h2>
      <div className="grid grid--1x2">
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
                    src={github}
                    alt="GitHub logo"
                    width="20px"
                    height="20px"
                /></a>
              </header>
              <p className="card__description">
                Located in Fresno, California. Pacifica Pizza, a pizzeria chain offering specialty pies plus familiar comfort food. 
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
        <div className="project" data-aos="fade-up">
          <div className="card">
            <a href="https://upbeat-wiles-ffe15a.netlify.app/"  target="/">
              <img
                src={java}
                alt=""
                width="300px"
                height="200px"
              />
            </a>
            <div className="card__body">
              <header className="card__header">
                <h3>React/MUI Blog</h3>
                <a className="github" href="https://github.com/JAPlaisted/concepts" target="/">
                  <img
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
              <img
                src={rpsls}
                alt=""
                width="300px"
                height="200px"
              />
            </a>
            <div className="card__body">
              <header className="card__header">
                <h3>Rock, Paper, Scissors, Lizard, Spock</h3>
                <a className="github" href="https://github.com/JAPlaisted/RPSLP" target="/">
                  <img
                    src={github}
                    alt="GitHub logo"
                    width="20px"
                    height="20px"
                  />
                </a>
              </header>
              <p className="card__description">
                A twist to the classic game only Sheldon Cooper could invent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
     );
}
 
export default Projects;