import React, { useEffect, useState } from 'react'
import {FaBars, FaTwitter } from 'react-icons/fa'
import CategoryService from './service/CategoryService'
import logo from './logo.svg'
import { links ,social} from './data'

const Navbar =() => {

   const [showLinks, setShowLinks] = useState(false);
    
        return (
            <nav >
               <div className='nav-center'>
                <div className='nav-header'>
                   
                    <button className='nav-toggle' onClick={()=> setShowLinks(!showLinks)}>
                       <FaBars/>
                    </button>
                  </div>
                  
                  
                  <div className={`${showLinks}`}'links-container show-container'>
                      
                   <ul className='links'>
                    {links.map((link)=>{
                    const { id , url, text}= link; 
                    return (
                        <li key={id}>
                           <a href={url}>
                            {text}
                           </a>
                        </li>
                    )
                    })}

                   </ul>
                  </div>

                  
                    <ul className='social-icons'>
                       {social.map((media) =>{
                          const {id, url ,icon} = media;

                          return (
                           <li key={id}>
                              <a href={url}>
                               {icon}
                              </a>
                           </li>
                       )

                       })}
                      
                    </ul>

                  

              </div>

                
            </nav>
        );
    }


export default Navbar;