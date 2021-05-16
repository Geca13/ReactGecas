import React from 'react'
import { Link } from 'react-router-dom'


const MenuItem = ({imageUrl,description,id, price}) => {
  return (
    <div className='section-center'>
      
      <article className='menu-item'>
      
        <img src={imageUrl} className='photo'  alt='logo' />
        <div className='item-info'>

         <header>
         <h4>{description}</h4>
         <h4>{price}</h4>

         </header>

      </div>
      
    </article>
    </div>
  )
}

export default MenuItem