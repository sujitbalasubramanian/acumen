import React, {useState} from "react"
import Header from '../Components/header'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import './Home.css';

function Dev(){
    return(
        <div className="relative">
            <Header/>
            <NavBar/>
            <Footer/>
        </div>
    );
}

export default Dev
