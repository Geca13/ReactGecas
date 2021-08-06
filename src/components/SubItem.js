import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const SubItem = ({imageUrl,description,id}) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={imageUrl}  alt='logo' />
      </div>
      <div className='cocktail-footer'>
     <h3>{description}</h3>
     
     <Link to= {`/items/${id}`} className='btn btn-primary btn-details'>
       See All
     </Link>
      </div>
    </article>
  )
}

export default SubItem