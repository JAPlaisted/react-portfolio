import React, { Component } from 'react';
import Nav from "../components/Nav";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Bio from '../components/Bio';
import AIArt  from '../components/AIArt';

class Home extends Component {
    render() { 
        return (
            <div>
                <Nav />
                <Header />
                <Projects />
                <Skills />
                <AIArt />
                <Bio/>
                <Contact />
                <Footer />
            </div>
        );
    }
}
 
export default Home;