import React, {useState} from "react";
import '../styles/card.css'


function About(){
    return(
        <>
       
        <div className="cards">
        <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front " >
                            <img src={require('../assets/office_barriers/naveen.jpeg')}/>
                            <div className="absolute text-black paraname">Naveen Bharathi P</div>
                        </div>
                        <div class="flip-card-back">
                            <h1 className="post text-center">Office Bearers</h1>
                            <h1 className="text-center post">ISF</h1>
                            

                        </div>
                    </div>
                </div>
            
           <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front " >
                            <img src={require('../assets/office_barriers/20230328_173816.jpg')}/>
                            <div className="absolute text-black paraname">Cibi Krishna V </div>
                        </div>
                        <div class="flip-card-back">
                            <h1 className="post text-center">Office Bearers</h1>
                            <h1 className="text-center post">ISF</h1>
                            

                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                             <img src={require('../assets/office_barriers/WhatsApp Image 2023-03-30 at 10.58.20 PM.jpeg')} />
                             <div className="absolute text-black paraname">Bhoovitha S </div>
                        </div>
                        <div class="flip-card-back">
                        <h1 className="post text-center">Office Bearers</h1>
                            <h1 className="text-center post">ISF</h1>

                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                             <img src={require('../assets/office_barriers/WhatsApp Image 2023-03-30 at 10.59.37 PM.jpeg')} />
                             <div className="absolute text-black paraname">RAGHUNATH R S</div>
                        </div>
                        <div class="flip-card-back">
                        <h1 className="post text-center">Office Bearers</h1>
                            <h1 className="text-center post">ISF</h1>

                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                             <img src={require('../assets/office_barriers/WhatsApp Image 2023-03-30 at 10.59.57 PM.jpeg')} />
                             <div className="absolute text-black paraname">ARAVINDAN A</div>
                        </div>
                        <div class="flip-card-back">
                        <h1 className="post text-center">Office Bearers</h1>
                            <h1 className="text-center post">ISF</h1>

                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                             <img src={require('../assets/office_barriers/WhatsApp Image 2023-03-30 at 11.00.36 PM.jpeg')} />
                             <div className="absolute text-black paraname">Jayaprasath M</div>
                        </div>
                        <div class="flip-card-back">
                        <h1 className="post text-center">Vice chairman</h1>
                            <h1 className="text-center post">ISF</h1>

                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                             <img src={require('../assets/office_barriers/WhatsApp Image 2023-03-30 at 11.02.00 PM.jpeg')} />
                             <div className="absolute text-black paraname">Nandha Kumar</div>
                        </div>
                        <div class="flip-card-back">
                        <h1 className="post text-center">Office Bearers</h1>
                            <h1 className="text-center post">ISF</h1>

                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                             <img src={require('../assets/office_barriers/kavyashreevn.jpeg')} />
                             <div className="absolute text-black paraname">Kavya Shree V N</div>
                        </div>
                        <div class="flip-card-back">
                        <h1 className="post text-center">Office Bearers</h1>
                            <h1 className="text-center post">ISF</h1>

                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                             <img src={require('../assets/office_barriers/jinisha.jpg')} />
                             <div className="absolute text-black paraname">Jinisha</div>
                        </div>
                        <div class="flip-card-back">
                        <h1 className="post text-center">Office Bearers</h1>
                            <h1 className="text-center post">ISF</h1>

                        </div>
                    </div>
                </div>
        </div></>
        
    )
}

export default About
