import React from 'react'
import { Link } from 'react-router-dom'


const MenuItem = ({imageUrl,description,id, price, producer}) => {
  return (
   <article className='cocktail'>
      <div className='img-container'>
        <img src={imageUrl}  alt='logo' />
      </div>
      <div className='cocktail-footer'>
       
     <h4>{description}</h4>
     <h4>{price} den</h4>
      {producer.map(prod => <h5>{prod.producer}</h5>)} 
     
     <Link to= {`/item/${id}`} className='btn btn-primary btn-details'>
      Details
     </Link>
      </div>
    </article>
  )
}

export default MenuItem