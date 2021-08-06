import React, { Component } from 'react'
import { useParams, Link } from 'react-router-dom'
import MenuItem from '../components/MenuItem'



const url = 'http://localhost:8081/api/items/'



const MenuItems = () => {
  const {id} = useParams();
  
  const [categories, setCategories] = React.useState(null);
  React.useEffect (() => {
    
    async function getCategory() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json();
        setCategories(data)
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getCategory();
  },[id])
   
   if(!categories) {
     return <h2 className='section-title'>categories doesnt exist</h2>
   }
   
  return (

    
    
    <section className='section'>
      

      <h2 className='section-title'>Menu</h2>
      <div className='cocktails-center'>
       {categories.map((category)=>{
         return <MenuItem key={category.id}{...category}/>
         
       } )
       }
       
      </div>

      
    </section>
  )
    }
  
    
    export default MenuItems