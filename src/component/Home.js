import React from 'react';
import Navbar from './Navbar';
import MyShop from './MyShop';


const Home=(props)=> {
  return (
    <>
    <Navbar />
    <MyShop data = {props.data} />

    </>
  )
}

export default Home