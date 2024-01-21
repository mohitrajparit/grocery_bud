import React from 'react'
import {useState} from 'react';
import Form from './Form';
import {nanoid} from 'nanoid';
import Items from './Items';
import {ToastContainer,toast} from 'react-toastify'
const setLocalStorage=(items)=>{
    localStorage.setItem('list',JSON.stringify(items));
}
const getLocalStorage=()=>{
  let list=localStorage.getItem('list');
  if(list){
    list=JSON.parse(localStorage.getItem('list'));
  }
  else{
    list=[];
  }
  return list;
}
const defaultItem=JSON.parse(localStorage.getItem('list')||'[]');
const App = () => {
  const [items,setItems]=useState(defaultItem);
  const addItem=(itemName)=>{
    const newItem={
      name:itemName,
      completed:false,
      id:nanoid(),
    };
    setItems([...items,newItem]);
    setLocalStorage([...items,newItem]);
    toast.success("item added to list");
  }
  const removeItem=(id)=>{
      const newItems=items.filter((it)=>id !== it.id)
      setItems(newItems);
      setLocalStorage(newItems);
      toast.success("Item Deleted");
  }
  const editItem=(itemId)=>{
    const newItems=items.map((item)=>{
      if(item.id===itemId){
          const newitem={...item,completed:!item.completed}
          return newitem;
      }
      return item; 
    })
    setItems(newItems);
    setLocalStorage(newItems);
  }
  return (
    <section className='section-center'>
      <ToastContainer position='top-center'/>
      <Form addItem={addItem}></Form>
      <Items items={items} removeItem={removeItem} editItem={editItem}></Items>
    </section>
  )
}

export default App