import React, { useState } from 'react'
import {toast} from 'react-toastify'
const Form = ({addItem}) => {
  const [item,setItem]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!item){
      toast.error("Please provide a value")
      return;
    }
    addItem(item);
    setItem('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
      <input type="text" name='item' onChange={(e)=>setItem(e.target.value)}/>
        <button type="submit" className='btn'>Add item</button>
      </div>
        
    </form>
  )
}

export default Form