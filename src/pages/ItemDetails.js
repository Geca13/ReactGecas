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
        console.log(data)
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getItem();
  },[id])
   
   if(!item) {
     return <h2 className='section-title'>Item doesnt exist</h2>
   }
   const {description,price,imageUrl,available,  igredients , producer, subCategory } = item;
   if(available === true) {
       let available = 'yes';
   } else {
       let available = 'no';
   }
  return (
    <>
    <section className='section cocktail-section'>
      <Link to={`/items/${subCategory.id}` }className='btn btn-primary'>
        Back to {subCategory.description}s
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
          {producer !== null && <p>
            <span className='drink-data'>producer :</span> {producer.name}
          </p>}
          {igredients.length > 0 &&
          <p>
            <span className='drink-data'>ingredients :</span>
             {igredients.map(ingredient=> <li >{ingredient.ingredient}</li>)}
          </p>}
          
            
        </div>
       </div>
    </section>
   
</>

  )
    
}

export default ItemDetails