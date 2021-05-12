import React, { Component } from 'react'
import Item from '../Item'


class Category extends Component {
       
       state = {
           categories: []
           
        }
        
      async componentDidMount(){
        if (this.props.match && this.props.match.params.id) {
          
      const id = this.props.match.params.id
     const iid = parseInt(id);
      
    const response = await fetch(`'http://localhost:8081/api/subCategories/'${iid}`)
    const body = await response.json();
    this.setState({ categories: body});
    }
  }
    render() {
      const categories = this.state.categories
        
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
    export default Category