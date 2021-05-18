import React from 'react'
import { Link } from 'react-router-dom'

const Restaurant = ({imageUrl,street,number,phone,city,zipCode,id}) => {
  return (
   <article className='cocktail'>
      <div className='img-container'>
        <img src={imageUrl}  alt='logo' />
      </div>
      <div className='cocktail-footer'>
     <h3>{city}</h3>
     
     <Link to= {`/restourant/${id}`} className='btn btn-primary btn-details'>
      Details
     </Link>
      </div>
    </article>
  )
}

export default Restaurant