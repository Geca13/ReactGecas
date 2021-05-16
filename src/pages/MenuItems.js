import React, { Component } from 'react'
import { useParams, Link } from 'react-router-dom'
import MenuItem from '../MenuItem'
import SubCategory from '../SubCategory'


const url = 'http://localhost:8081/api/items/'



const MenuItems = () => {
  const {id} = useParams();
  
  const [items, setItems] = React.useState(null);
  React.useEffect (() => {
    
    async function getItems() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json();
        setItems(data)
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getItems();
  },[id])
   
   if(!items) {
     return <h2 className='section-title'>categories doesnt exist</h2>
   }
   
  return (
    <main>
    <section className='menu section'>
   
      <div className='title'>
      <div className='underline'></div>
      </div>
      
       {items.map((category)=>{
         return <MenuItem key={category.id}{...category}/>
       })}
      
    </section>
    </main>
  )
    }
  
    
    export default MenuItems