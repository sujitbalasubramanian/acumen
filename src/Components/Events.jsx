import React, {useState} from "react"
import { Link } from "react-router-dom";
import {Fade} from 'react-awesome-reveal';
import '../styles/EventPage.css';
import Modal from './Model.jsx'

function Events(){
    var contest = ['Paper Presentaion','Project Presentaion','Circuitrix','Treasure Hunt','Rhythm Gala','Battery For EV','Drone Tech','Smart 5G'];
    const [isOpen, setIsOpen] = useState(false);
    const [Contest,setContest] = useState(1);
    const handleClick = event => {
        setIsOpen(current => !current);
        setContest(Number(event.target.id));
    };
    return(
           <div className="flex flex-col justify-center text-center items-center h-scree w-full relative py-[calc(100%*0.05)]">
                <Fade left cascade>
                <div className="flex mar-20">
                    <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-[var(--red)]">
                        Technical Events
                    </h1>
                </div>
                </Fade>
               <Fade top>
                   <div className="flex shield-wrap w-full justify-between items-center text-center md:justify-center">
                           <div className="shield" >
                               <h1 className="p-2 text-[var(--blue)]">Paper Presentaion</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="0" onClick={handleClick}>Register soon</button>
                           </div>
                           <div id="2" className="shield" >
                               <h1 className="p-2 text-[var(--blue)]">Project Presentaion</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="1" onClick={handleClick}>Register soon</button>
                           </div>
                            <div id="4" className="shield">
                               <h1 className="p-2 text-[var(--blue)]">Circuitrix</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="2" onClick={handleClick}>Register soon</button>
                            </div>
                   </div>
               </Fade>

                <Fade left cascade>
                <div className="flex mar-20">
                    <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-[var(--red)]">
                        Non-Technical Events
                    </h1>
                </div>
                </Fade>
               <Fade top>
                   <div className="flex shield-wrap w-full justify-between items-center text-center md:justify-center">
                            <div id="5" className="shield">
                               <h1 className="p-2 text-[var(--blue)]">Treasure Hunt</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="3" onClick={handleClick}>Register soon</button>
                            </div>
                            <div id="6" className="shield" >
                               <h1 className="p-2 text-[var(--blue)]">Rhythm Gala</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="4" onClick={handleClick}>Register soon</button>
                            </div>
                    </div>
                </Fade>
                <Fade left cascade>
                <div className="flex mar-20">
                    <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-[var(--red)]">
                       Work Shops 
                    </h1>
                </div>
                </Fade>
               <Fade top>
                   <div className="flex shield-wrap w-full justify-between items-center text-center md:justify-center">
                           <div id="1" className="shield" >
                               <h1 className="p-2 text-[var(--blue)]">Battery For EV</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="5" onClick={handleClick}>Register soon</button>
                           </div>
                           <div id="2" className="shield" >
                               <h1 className="p-2 text-[var(--blue)]">Drone Tech</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="6" onClick={handleClick}>Register soon</button>
                           </div>
                            <div id="4" className="shield">
                               <h1 className="p-2 text-[var(--blue)]">Smart 5G Antenna</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="7" onClick={handleClick}>Register soon</button>
                            </div>
                   </div>
               </Fade>
               <div>
                   {isOpen && <Modal setIsOpen={setIsOpen} handleClick={handleClick} Content={contest[Contest]}/>}
               </div>
            </div>
    )
}

export default Events
