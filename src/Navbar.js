import React, { Component } from 'react'
import {FaBars, FaTwitter } from 'react-icons/fa'
import CategoryService from './service/CategoryService'
import logo from './logo.svg'
class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
           categories: []
        }
    }
    componentDidMount(){
      CategoryService.getCategories().then((response) =>{
         this.setState({categories: response.data});
      });
    }

    render() {
      const categories = this.state.categories
        return (
            <nav >
              <div className='nav-center'>
                  <div className='nav-header'>
                    <img src={logo} alt='logo'/>
                    <button className='nav-toggle'>
                       <FaBars/>
                    </button>
                  </div>

                  <div className='links-container show-container'>
                      
                  <ul className='links'>
                    {categories.map((category)=>{
                    const { id , description,imageUrl}= category; 
                    return (
                        <li key={id}>
                           <a href='#'>
                            {description}
                           </a>
                        </li>
                    )
                    })}
                  </ul>

                    <ul className='social-icons'>
                      <li>
                          <a href='https://www.twitter.com'>
                             <FaTwitter/>
                          </a>
                      </li>
                    </ul>

                  </div>

              </div>

                
            </nav>
        );
    }
}

export default Navbar;