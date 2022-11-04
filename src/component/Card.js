import React from 'react';
import card from './styles/card.css';

const Card =({item})=> {
  const{id,thumbnail,title,price,description,category}=item; 
  return (
    <>
    <div className='cards'>
        <div className='image-box'>
            <img src={thumbnail} alt="img"/>
        </div>
        <div className='details'>
            <p>{title}</p>
            <p>{price}</p>
            <p>{description}</p>
            <p>{category}</p>
            <button className='cart-btn'>Add to cart</button>
        </div>
        
    </div>
    </>
  
  )
}

export default Card