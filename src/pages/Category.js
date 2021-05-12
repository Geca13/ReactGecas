import React, { Component } from 'react'
import {useParams} from 'react-router-dom'


class Category extends Component {
    

        state = {
           categories: []
        }

        async componentDidMount(){
            const {id} = useParams();
      const response = await fetch(`'http://localhost:8081/api/subCategories'+${id}`);
    const body = await response.json();
    this.setState({ categories: body});
    }
    render() {
      const categories = this.state.categories
        if(categories.length < 1) {
    return (
    <h2 className='section-title'></h2>
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
    export default Category