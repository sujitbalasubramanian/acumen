import React, {useState} from "react"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'
import Events from '../Components/Events'
import Landing from '../Components/Landing'
import Header from '../Components/header'
import './Home.css';

function Home(){
    return(
        <div className="relative">
            <Header/>
            <NavBar/>
            <Landing/>
            <AboutUs/>
            <Events/>
            <Footer/>
        </div>
    );
}

export default Home
