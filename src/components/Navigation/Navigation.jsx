import React,{Fragment, useEffect, useState} from 'react';
// import {Outlet } from 'react-router-dom'

import './Navigation.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FaTimes} from 'react-icons/fa';


function Navigation() {
    const [isHidden, setIsHidden] = useState(true);

    return(
        <Fragment >         
            <div className='nav-container flex'>
                <span className='Logo'></span>
                <div className={`nav-menu flex`}>
                    <ul className=''>
                        <li>
                        Home</li>
                        <li>
                        Our Services</li>
                        <li>
                        Case Studies</li>
                        <li>
                        Blog</li>
                        <li>
                        Contact</li>
                    </ul>
                    <button className='call-btn'>Schedule a call</button>
                    <FontAwesomeIcon icon={faBars} className='open' onClick={()=>setIsHidden(!isHidden)} />
                </div>
               
            <div  className={`sidenav ${isHidden ? '' : 'show'}`}>
            <div className="flex">
                    <li onClick={()=>setIsHidden(!isHidden)}>
                      <span  className='nav-item'>Home</span>
                    </li>
                    <li onClick={()=>setIsHidden(!isHidden)}>
                        <span className='nav-item'>Our Services</span> 
                    </li> 
                    <li onClick={()=>setIsHidden(!isHidden)}>
                        <span className='nav-item'>Case Studies</span> 
                    </li> 
                    <li onClick={()=>setIsHidden(!isHidden)}>
                        <span className='nav-item'>Blog</span> 
                    </li>  
                    <li onClick={()=>setIsHidden(!isHidden)}>
                        <span className='nav-item'>Blog</span> 
                    </li>                  
            </div>
            <FaTimes className='close' onClick={()=>setIsHidden(!isHidden)}/>
            </div>
        </div>
        {/* <Outlet/> */}
        </Fragment>
    )
}

export default Navigation;