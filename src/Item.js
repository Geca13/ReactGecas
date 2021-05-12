import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({imageUrl,category,id}) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={imageUrl}  alt='logo' />
      </div>
      <div className='cocktail-footer'>
     <h3>{category}</h3>
     
     <Link to= {`/${id}`} className='btn btn-primary btn-details'>
       See All
     </Link>
      </div>
    </article>
  )
}

export default Item