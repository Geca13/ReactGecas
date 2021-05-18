import React from 'react'
import { useParams, Link } from 'react-router-dom'

const url = 'http://localhost:8081/api/item/'

const ItemDetails = () => {
  const {id} = useParams();
  
  const [item, setItem] = React.useState(null);
  React.useEffect (() => {
    
    async function getItem() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json();
        setItem(data)
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getItem();
  },[id])
   
   if(!item) {
     return <h2 className='section-title'>Item doesnt exist</h2>
   }
   const {description,price,imageUrl,available} = item;
   if(available === true) {
       let available = 'yes';
   } else {
       let available = 'no';
   }
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back
      </Link>
       <h2 className='section-title'>{description} </h2>
       <div className='drink'>
        <img src={imageUrl} alt='image' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>price :</span> {price}
          </p>
          <p>
            <span className='drink-data'>category :</span> {available}
          </p>
          <p>
            <span className='drink-data'>info :</span> {price}
          </p>
          <p>
            <span className='drink-data'>glass :</span> {price}
          </p>
          <p>
            <span className='drink-data'>instructions :</span> {price}
          </p>
          
        </div>
       </div>
    </section>
  )
}

export default ItemDetails