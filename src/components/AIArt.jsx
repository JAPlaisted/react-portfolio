import React from 'react';

const AIArt = () => {
    return ( 
        <section id="ai--art" className='ai--art'>
            <h2 data-aos="zoom-in" className='centered'>Human & AI Art</h2>
            <div className="art--wrapper centered" data-aos="fade-up">
                <div className="art--image"></div>
                <div className="art--content">
                    
                    <div className="art--title"><h3>"A photo of an astronaught playing tennis with a robot on Mars"</h3></div>
                    <div className="art--signature">
                        <h4>Jonathan Plaisted <bold>x DALL-E</bold></h4>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default AIArt;