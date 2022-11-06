import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MyShop from './component/MyShop';
import Home from './component/Home';
import Cart from './component/Cart';
import AddNewProduct from './component/AddNewProduct';
import Navbar from './component/Navbar';
import axios from 'axios';
import { useState } from 'react';

const App=()=>{
  
  const [api,setApi]= useState([]);  

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
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home data={api} />}/>
    <Route path='/cart' element={<Cart />} />
    <Route path='/add-product' element={<AddNewProduct  setData={setApi} data={api} />} />
  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
