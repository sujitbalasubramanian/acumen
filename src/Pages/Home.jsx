import React, {useState} from "react"
import NavBar from '../Components/NavBar'
import VantaBg from '../Components/VantaBg'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'
import Events from '../Components/Events'
import Landing from '../Components/Landing'

function Home(){
    return(
        <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 right-0">
                <VantaBg/>
            </div>
            <NavBar/>
            <Landing/>
            <AboutUs/>
            <Events/>
            <Footer/>
        </div>
    );
}

export default Home
