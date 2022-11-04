import React, { useState } from 'react';
import addnewproduct from './styles/addnewproduct.css';
import Navbar from './Navbar';

const AddNewProduct=({newProd,SetNewProd})=> {
  const[exiPro,SetExiPro] =useState({title:"",description:"",category:"",thumbnail:""});
  const changePro=(e)=>{
    SetExiPro({...exiPro,[e.target.name]:e.target.value})
  }
  const addPro = () => {
    SetNewProd([...newProd, exiPro])
    SetExiPro({title:"",description:"",category:"",thumbnail:""});
    }
    
  return (
    <>
     <Navbar />
    <div className='form-container'>

        <div className='form'>
        <h1>Add new product:</h1>
        <div>
        <label>Title:</label>
        </div>
        <div>
        <input type="text" name="title" value={exiPro.title} onChange={changePro} placeholder="title"/><br></br>
        </div>
        <div>
        <label className="form-label">Description:</label>
        </div>
        <div>
        <input type="text" name="description" value={exiPro.description} onChange={changePro} placeholder="description"/><br></br>
        </div>
        <div>
        <label className="form-label">category:</label>
        </div>
        <div>
        <input type="text"  name="category" value={exiPro.category} onChange={changePro} placeholder="categoryyy"/><br></br>
        </div>
        <div>
        <label className="form-label">Image:</label>
        </div>
        <div>
        <input type="url" placeholder='//https://' name="thumbnail"  onChange={changePro}/><br></br>
        </div>
        <button className='form-button' onClick={addPro} >Add new product</button>
        </div>  

    </div>
    </>
  )
}

export default AddNewProduct