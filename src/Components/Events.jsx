import React, {useState} from "react"
import {Fade} from 'react-awesome-reveal';
import '../styles/EventPage.css';
import Modal from './Model.jsx'

function Events(){
    var contest = [
        {
            name: "PAPER PRESENTATION",
            content: "Each team having minimum of 1 member and maximum of 3 members can present a paper on any particular technical or core topic. One registration per team is enough. No need for individual registration of participants. Registration Fee is Rs.150 Per head. Registration Deadline is 22rd April, 2023. (11:59 PM). Papers related to Embedded, VLSI, Communication and Networking, Signal and Image Processing, Artificial Intelligence andMachine Learning, Website, Mobile App, Biomedical and etc are accepted. Prior registration is required to participate in this event. Abstract should not exceed the limit of 400 words. Maximum of 15 slides and minimum of 10 slides should be there in the PPT. The team will get 5 minutes to present their paper followed by a 2 minutes query session. The work should be original and plagiarism must be avoided. Bring soft copy of PPT in pendrive or have it in mail.",
            session: "FORENOON",
            link: "https://forms.gle/3xay27geiWRFrNVKA",
        },
        {
            name: "PROJECT PRESENTATION",
            content: "Each team having minimum of 1 member and maximum of 3 members can display their project. One registration per team is enough. No need for individual registration of participants. Registration Fee is Rs.150 per head. Registration Deadline is 22nd April, 2023. (11:59PM) Hardware/ Prototype should be displayed on the day of the event. It is mandatory, if failed the team will be disqualified. Prior registration isrequired to participate in this event. Abstract should not exceed the limit of 400 words. PPT about the project is optional.",
            session: "FORENOON",
            link: "https://forms.gle/XsTWTi1UKi2zs39g9",
        },
        {
            name: "CIRCUITRIX",
            content: "Each team having maximum of 3 members can participate. One registration per team is enough. No need for individual registration of participants. Questions related to ECE will be asked. Consists of various rounds which includes quiz and circuit debugging.",
            session: "FORENOON",
            link: "https://forms.gle/o2H84R4JMdw2ikb69",
        },
        {
            name: "TREASURE HUNT",
            content: "Each team having maximum of 3 members can participate. One registration per team is enough. No need for individual registration of participants.",
            note: "ONLY THOSE WHO HAVE PARTICIPATED IN TECHNICAL EVENT CAN TAKE PART IN NON TECHNICAL EVENT. Registration Fee is Rs.150 Per head.",
            session: "AFTERNOON",
            link: "https://forms.gle/UQVgagfa7uad9obt7",
        },
        {
            name: "RHYTHUM GALA",
            content: "Each team having maximum of 3 members can participate. One registration per team is enough. No need for individual registration of participants. Consists of various rounds like enacting to identify the song, find the Tamil song from English lyrics, identify the missed word in a song, identify the song which is played.",
            note: "ONLY THOSE WHO HAVE PARTICIPATED IN TECHNICAL EVENT CAN TAKE PART IN NON TECHNICAL EVENT. Registration Fee is Rs.150 Per head.",
            session: "AFTERNOON",
            link: "https://forms.gle/4r8efkqFymwh7BKo6",
        },
        {
            name: "SMART ANTENNAS",
            content: "Registration fees per head Rs.200",
            session: "9.00 am to 4.30 pm",
            link: "https://forms.gle/SFQdMw8gM72DVwHh8",
        },
        {
            name: "BATTERY FOR EV",
            content: "Registration fees per head Rs.200",
            session: "9.00 am to 4.30 pm",
            link: "https://forms.gle/SFQdMw8gM72DVwHh8",
        },
        {
            name: "Recent trends in drone technology",
            content: "Registration fees per head Rs.200",
            session: "9.00 am to 4.30 pm",
            link: "https://forms.gle/SFQdMw8gM72DVwHh8",
        }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [Contest,setContest] = useState(1);
    const handleClick = event => {
        setIsOpen(current => !current);
        setContest(Number(event.target.id));
    };
    return(
           <div className="flex flex-col justify-between text-center items-center  w-full relative py-[calc(100%*0.05)]" id="events">
                <Fade left cascade>
                <div className="flex mar-20">
                    <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-[var(--red)]">
                        Technical Events
                    </h1>
                </div>
                </Fade>
               <Fade top>
                   <div className="flex shield-wrap w-full justify-between items-center text-center md:justify-between">
                           <div className="shield " >
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
