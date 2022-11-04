import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';

const MyShop=()=> { 

  const[api,setApi]= useState([]);  
  const fetchProducts = async() =>{
    const response= await axios.get("https://dummyjson.com/products?limit=6");
    setApi(response.data.products);
    console.log(response);
  }
  if(api.length<1){
    fetchProducts();
  }
  return (
    <>
    <div>
        {
            api.map((item,index) => (
                <Card key={index} item={item} />
            ))
            
        }               
    </div>
    </>
  )
}

export default MyShop