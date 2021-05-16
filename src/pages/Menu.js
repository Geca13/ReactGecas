import React, { Component } from 'react'
import Item from '../Item'

class Menu extends Component {
    

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
        if(categories.length < 1) {
    return (
    <h2 className='section-title'>Ups the manu is empty...</h2>
  )}
  return (
    <section className='section'>

      <h2 className='section-title'>Menu</h2>
      <div className='cocktails-center'>
       {categories.map((category)=>{
         return <Item key={category.id}{...category}/>
       })}
      </div>
    </section>
  )
    }
        
    }
    export default Menu