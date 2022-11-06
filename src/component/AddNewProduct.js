import React, { useState } from 'react';
import addnewproduct from './styles/addnewproduct.css';
import Navbar from './Navbar';

const AddNewProduct=(props)=> {

 const [newPro,setNewPro]=useState({title:"",description:"",category:"",thumbnail:""});
  const[exiPro,SetExiPro] =useState();

  const changePro=(e)=>{
    setNewPro({...newPro,[e.target.name]:e.target.value})
  }

  const addPro = () => {
   props.setData([...props.data, newPro])
    setNewPro({title:"",description:"",category:"",thumbnail:""});
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
        <input type="text" name="title" value={newPro.title} onChange={changePro} placeholder="title"/><br></br>
        </div>
        <div>
        <label className="form-label">Description:</label>
        </div>
        <div>
        <input type="text" name="description" value={newPro.description} onChange={changePro} placeholder="description"/><br></br>
        </div>
        <div>
        <label className="form-label">category:</label>
        </div>
        <div>
        <input type="text"  name="category" value={newPro.category} onChange={changePro} placeholder="categoryyy"/><br></br>
        </div>
        <div>
        <label className="form-label">Image:</label>
        </div>
        <div>
        <input type="url" placeholder='//https://' name="thumbnail" value={newPro.thumbnail}  onChange={changePro}/><br></br>
        </div>
        <button type="submit" className='form-button' onClick={addPro} >Add new product</button>
        </div>  

        {JSON.stringify(newPro)}


    </div>
    </>
  )
}

export default AddNewProduct