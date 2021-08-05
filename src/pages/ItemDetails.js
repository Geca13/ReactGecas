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
   const {description,price,imageUrl,available, producer: {name}, ingredients} = item;
   if(available === true) {
       let available = 'yes';
   } else {
       let available = 'no';
   }
  return (
    <>
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
          <p>{name !== null ? name : ''}</p>
            
            
          
          
          
        </div>
       </div>
    </section>
    <section>
    {ingredients.length > 0 && <section className='room-extras'>
    <h6>extras</h6>
    <ul className='extras'>
        {ingredients.map((item,index)=>{
            return <li key={index}>-{item}</li>
        })}

    </ul>
</section>}
</section>
</>

  )
    
}

export default ItemDetails