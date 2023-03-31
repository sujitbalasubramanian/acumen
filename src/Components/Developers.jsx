import React, { useState } from "react"
import '../styles/dev.css'
import * as Icon from 'react-bootstrap-icons';

function Developers() {
    return (

        <div className='max-w-[1240px] mx-auto relative gap-2' >
            {/* <div class="background"></div> */}
        <div id="card">
        <div class="outer-div">
                <div class="inner-div">
                    <div class="front">
                        <div class="front__bkg-photo "></div>
                        <div class="front__face-photo "> 
                            <img src={require('../assets/developers/naveen.jpg')} />
                        </div>
                        <div class="front__text">
                            <h3 class="front__text-header">Sujit R B</h3>
                            {/* <p class="front__text-para"><i class="fas fa-map-marker-alt front-icons"></i>Seattle</p> */}

                            <span class="front__text-hover">Web Developer</span>
                        </div>
                    </div>
                    <div class="back">
                        <div class="social-media-wrapper">
                            <a href="#" class="social-icon"><Icon.Instagram color="white" size={40} /></a>
                            <a href="#" class="social-icon"><Icon.Github color="white" size={40} /></a>
                            <a href="#" class="social-icon"><Icon.Linkedin color="white" size={40} /></a>
                            <a href="#" class="social-icon"><Icon.Twitter color="white" size={40} /></a>
                        </div>
                    </div>

                </div>
            </div>
            <div class="outer-div">
                <div class="inner-div">
                    <div class="front">
                        <div class="front__bkg-photo"></div>
                        <div class="front__face-photo">
                        <img src={require('../assets/developers/naveen.jpg')} />
                        </div>
                        <div class="front__text">
                            <h3 class="front__text-header">Veenas Kumar S</h3>
                            {/* <p class="front__text-para"><i class="fas fa-map-marker-alt front-icons"></i>Seattle</p> */}

                            <span class="front__text-hover">Web Developer</span>
                        </div>
                    </div>
                    <div class="back">
                        <div class="social-media-wrapper">
                        <a href="https://instagram.com/_naveen_bharathi?igshid=ZDdkNTZiNTM= " class="social-icon"><Icon.Instagram color="white" size={40} /></a>
                            <a href="https://github.com/Naveenelan " class="social-icon"><Icon.Github color="white" size={40} /></a>
                            <a href="https://www.linkedin.com/in/naveen-bharathi-739423235/" class="social-icon"><Icon.Linkedin color="white" size={40} /></a>
                            <a href="https://twitter.com/Naveen03972024?t=ExzdyO-x4lUD9IdKhpon8A&s=08" class="social-icon"><Icon.Twitter color="white" size={40} /></a>
                        </div>
                    </div>

                </div>
            </div>
        </div><br /><br />
        <div class="outer-div">
                <div class="inner-div">
                    <div class="front">
                        <div class="front__bkg-photo"></div>
                        <div class="front__face-photo">
                        <img src={require('../assets/developers/naveen.jpg')} />
                        </div>
                        <div class="front__text">
                            <h3 class="front__text-header">Naveen Bharathi P</h3>
                            {/* <p class="front__text-para"><i class="fas fa-map-marker-alt front-icons"></i>Seattle</p> */}

                            <span class="front__text-hover">UI Designer</span>
                        </div>
                    </div>
                    <div class="back">
                        <div class="social-media-wrapper">
                        <div class="social-media-wrapper">
                            <a href="https://instagram.com/_naveen_bharathi?igshid=ZDdkNTZiNTM= " class="social-icon"><Icon.Instagram color="white" size={40} /></a>
                            <a href="https://github.com/Naveenelan " class="social-icon"><Icon.Github color="white" size={40} /></a>
                            <a href="https://www.linkedin.com/in/naveen-bharathi-739423235/" class="social-icon"><Icon.Linkedin color="white" size={40} /></a>
                            <a href="https://twitter.com/Naveen03972024?t=ExzdyO-x4lUD9IdKhpon8A&s=08" class="social-icon"><Icon.Twitter color="white" size={40} /></a>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        
            
        </div>




    )
}

export default Developers;
