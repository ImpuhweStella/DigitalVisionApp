import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MyShop from './component/MyShop';
import Home from './component/Home';
import Cart from './component/Cart';
import AddNewProduct from './component/AddNewProduct';
import Navbar from './component/Navbar';

const App=()=>{
  const addNew=()=>{
  }
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='cart' element={<Cart />} />
    <Route path='/add-product' element={<AddNewProduct />} />
  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
