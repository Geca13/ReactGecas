import React from 'react'
import { useParams, Link } from 'react-router-dom'

const url = 'http://localhost:8081/api/location/'

const RestourantDetails = () => {
  const {id} = useParams();
  
  const [location, setLocation] = React.useState(null);
  React.useEffect (() => {
    
    async function getLocation() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json();
        setLocation(data)
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLocation();
  },[id])
   
   if(!location) {
     return <h2 className='section-title'>Location doesnt exist</h2>
   }
   const {street,number,city,zipCode,imageUrl,phone} = location;
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back
      </Link>
       <h2 className='section-title'>{street} </h2>
       <div className='drink'>
        <img src={imageUrl} alt='image' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>street :</span> {street}, {number}
          </p>
          <p>
            <span className='drink-data'>city :</span> 
          </p>
          <p>
            <span className='drink-data'>city :</span>{zipCode}, {city}
          </p>
          <p>
            <span className='drink-data'>glass :</span> 
          </p>
          <p>
            <span className='drink-data'>phone :</span> {phone}
          </p>
          
        </div>
       </div>
    </section>
  )
}

export default RestourantDetails