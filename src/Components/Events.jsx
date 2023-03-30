import React, {useState} from "react"
import path from "./../assets/icons/path.png";
import ball from "./../assets/icons/ball.png";
import mental from "./../assets/icons/mental-health.png";
import sword from "./../assets/icons/swords.png";
import train from "./../assets/icons/training.png";
import tyre from "./../assets/icons/tyre.png";
import { Link } from "react-router-dom";
import {Fade} from 'react-awesome-reveal';
import '../styles/EventPage.css';

function Events(){
    return(
           <div className="flex flex-col justify-center text-center items-center h-scree w-full relative py-[calc(100%*0.05)]">
                <Fade left cascade>
                <div className="flex mar-20">
                    <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-white">
                        Technical Events
                    </h1>
                </div>
                </Fade>
               <Fade top>
                   <div className="flex shield-wrap w-full justify-between items-center text-center md:justify-center">
                       <Link to="/eventdetails1">
                           <div id="1" className="shield" >
                               <h1 className="p-2">Paper Presentaion</h1>
                               <img src={mental} alt="race" />
                           </div>
                       </Link>
                       <Link to="/eventdetails2">
                           <div id="2" className="shield" >
                               <h1 className="p-2">Project Presentation</h1>
                               <img src={sword} alt="fight" />
                           </div>
                       </Link>
                        <Link to="/eventdetails4">
                            <div id="4" className="shield">
                                <h1 className="p-2">Circuitrix</h1>
                                <img src={path} alt="Line" />
                            </div>
                        </Link>
                   </div>
               </Fade>

                <Fade left cascade>
                <div className="flex mar-20">
                    <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-white">
                        Non-Technical Events
                    </h1>
                </div>
                </Fade>
               <Fade top>
                   <div className="flex shield-wrap w-full justify-between items-center text-center md:justify-center">
                        <Link to="/eventdetails5">
                            <div id="5" className="shield">
                                <h1 className="p-2">Funtivities</h1>
                                <img src={tyre} alt="race" />
                            </div>
                        </Link>
                        <Link to="/eventdetails6">
                            <div id="6" className="shield" >
                                <h1 className="p-2">Rythm Gala</h1>
                                <img src={train} alt="workshop" />
                            </div>
                        </Link>
                    </div>
                </Fade>
                <Fade left cascade>
                <div className="flex mar-20">
                    <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-white">
                       Work Shops 
                    </h1>
                </div>
                </Fade>
               <Fade top>
                   <div className="flex shield-wrap w-full justify-between items-center text-center md:justify-center">
                       <Link to="/eventdetails1">
                           <div id="1" className="shield" >
                               <h1 className="p-2">Paper Presentaion</h1>
                               <img src={mental} alt="race" />
                           </div>
                       </Link>
                       <Link to="/eventdetails2">
                           <div id="2" className="shield" >
                               <h1 className="p-2">Project Presentation</h1>
                               <img src={sword} alt="fight" />
                           </div>
                       </Link>
                        <Link to="/eventdetails4">
                            <div id="4" className="shield">
                                <h1 className="p-2">Circuitrix</h1>
                                <img src={path} alt="Line" />
                            </div>
                        </Link>
                   </div>
               </Fade>
            </div>
    )
}

export default Events
