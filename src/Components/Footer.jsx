import React, {useState} from "react"
import isf from "../assets/ece.png"
import iete from "../assets/iete.png"
import {
    FaInstagram,
    FaGoogle,
} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div>
            <div className='max-w-[1240px] mx-auto py-16 px-4 flex flex-row flex-wrap justify-between text-gray-300 relative footer max-sm:justify-center'>
                <div className='col-span-2 max-sm:py-4'>
                    <h1 className='w-full text-4xl font-bold text-[var(--red)]'>Contact Us</h1>
                    <p className='py-4 font-bold  text-1xl text-white'>Staff Co ordinator</p>
                    <p className='font-mono'>Mr.Chandrasekaran - 73255432</p>
                    <p className='font-mono'>Mr.Arulmurugan - 9659341901</p>
                    <p className='py-4 font-bold text-1xl text-white'>Student Co ordinator</p>
                    <p className='font-mono'>Arun Aditya N - 7339685594</p>
                    <p className='font-mono'>SAHASRA V - 9994528549 </p>
                </div>
                <div className='col-span-2 max-sm:py-4'>
                    <h1 className='w-full text-4xl font-bold text-[var(--red)]'>Venue</h1>
                    <h1 className='w-full text-3xl font-bold text-white py-4'>MBA Seminar Hall</h1>
                    <p className='font-bold text-1xl text-white'>Student Co ordinator</p>
                    <p className='font-mono'>7339685594</p>
                    <p className='font-mono'>9994528549</p>
                    <ul className="py-4">
                        <a href='mailto:ece.isf.2023@gmailcom' rel="noopener noreferrer " target={"_blank"} >
                            <li className='text-lg'> <FaGoogle size={30} className="inline-block" /><span className="px-2 text-lg">ece.isf.2023@gmail.com</span></li>
                        </a>
                    </ul>
                </div>
                <div className='col-span-2'>
                    <div className='flex flex-col social justify-center items-center'>
                        <p className='py-4 font-bold text-2xl text-white'>ECEA & IETE Forum</p>
                            <img src={iete} className="my-2 w-[80px] h-[80px] bg-white rounded" alt="beingkecinan"></img>
                            <img src={isf} className="my-2 w-[80px] h-[80px] bg-white rounded" alt="appatakars"></img>
                    </div>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto py-16 px-4 text-gray-300 relative'>
                <hr />
                <div className='p-4 flex justify-center allign-center '>
                    <p className='px-4'>Developed and Designed By</p> <Link to='/dev' className='underline underline-offset-2 text-[var(--red)]'><p>Uruv</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
