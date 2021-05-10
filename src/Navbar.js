import React, { Component } from 'react'
import {FaBars, FaTwitter } from 'react-icons/fa'
import CategoryService from './service/CategoryService'
import logo from './logo.svg'
class Navbar extends Component {
    

        state = {
           categories: []
        }

    
   async componentDidMount(){
      const response = await fetch('http://localhost:8081/api/categories');
    const body = await response.json();
    this.setState({ categories: body});
    }

    render() {
      const categories = this.state.categories
        return (
            <nav >
               <div className='nav-center'>
                <div className='nav-header'>
                   
                    <button className='nav-toggle'>
                       <FaBars/>
                    </button>
                  </div>
                  

                  <div className='links-container'>
                      
                  <ul className='links'>
                    {categories.map((categori)=>{
                    const { id , category, 
                      
                      imageUrl}= categori; 
                    return (
                        <li key={id}>
                           <a href='#'>
                            {category}
                           </a>
                        </li>
                    )
                    })}
                  </ul>
</div>
                    <ul className='social-icons'>
                      <li>
                          <a href='https://www.twitter.com'>
                             <FaTwitter/>
                          </a>
                      </li>
                      <li>
                          <a href='https://www.twitter.com'>
                             <FaTwitter/>
                          </a>
                      </li>
                      <li>
                          <a href='https://www.twitter.com'>
                             <FaTwitter/>
                          </a>
                      </li>
                    </ul>

                  

              </div>

                
            </nav>
        );
    }
}

export default Navbar;