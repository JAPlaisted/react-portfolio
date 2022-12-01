import React from 'react'
import "./pyTracking.css";
import video from "../assets/webcam-tracking.mp4"
import github from "../assets/GitHub-Mark-32px.png"

const PyTracking = () => {
    return ( 
        <div>
            <a id="top" className='home--link' href="/">J</a>
            <video className='centered' width="320" height="240" controls autoplay loop muted>
                <source src={video}  type="video/mp4"></source>
            </video>
            <a className="github" href="https://github.com/JAPlaisted/facial-recognition">
                  <img 
                    className='brightness centered'
                    src={github}
                    alt="GitHub logo"
                    width="40px"
                    height="40px"
                /></a>

                <h3 className='centered title'>Python Tracking</h3>
                <p className='centered p'>The above video is a recording of a python script running <br/> over video from my webcam.
                The script tracks my face from <br/> frame to frame and puts a red box around it.
                I am currently <br/> developing this program to include functionality to recognize a <br/> human hand in the browser and allow it to interact with a website. <br/> This program is being developed with OpenCV and PyScript. <br/> Currently, the script does not run in the browser, but feel free to <br/> check out the GitHub to see the code.
                </p>
            </div>
     );
}
 
export default PyTracking;