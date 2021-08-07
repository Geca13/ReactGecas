import React, { useEffect, useState,useRef } from 'react'
import {FaBars, FaTwitter,FaShoppingCart } from 'react-icons/fa'
import { links ,social} from './data'

const Navbar =() => {
   const [cart, setCart] = React.useState([]);
   const [showLinks, setShowLinks] = useState(false);
   const linksContainerRef = useRef(null);
   const linksRef = useRef(null);
   
   
   localStorage.setItem("cart", cart)
   console.log(cart)
   useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if(showLinks) {
       linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
       linksContainerRef.current.style.height = '0px'
    }
   },[showLinks])
        return (
            <nav >
               <div className='nav-center'>
                <div className='nav-header'>
                   
                    <button className='nav-toggle' onClick={()=> setShowLinks(!showLinks)}>
                       <FaBars/>
                    </button>
                  </div>
                  
                  
                  <div className='links-container' ref={linksContainerRef}>
                      
                   <ul className='links' ref={linksRef}>
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
                    <FaShoppingCart/>{cart.length}
                   </ul>
                   
                  </div>

                  
                   

                  

              </div>
          </nav>
        );
    }


export default Navbar;