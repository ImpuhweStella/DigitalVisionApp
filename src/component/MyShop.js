import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';
import AddNewProduct from './AddNewProduct';
import Navbar from './Navbar';

const MyShop=(props)=> { 

 
  return (
    <>
    
    <div>
        {
          props.data.map((item,index) => (
                <Card key={index} item={item} />
            ))
            
        }               
    </div>
    </>
  )
}

export default MyShop