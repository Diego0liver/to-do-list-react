import './index.css';
import {React, useState, useEffect} from 'react';
import List from './List';
import Form from './Form';
import Item from './item'

const SALVA_ITEM = "salvaItem"


function App() {

const [item, setItems] = useState([])
let db = useEffect(()=>{
  JSON.parse(localStorage.getItem(SALVA_ITEM))
   if(db){
    setItems(db)}
},[])
useEffect(()=>{
  localStorage.setItem(SALVA_ITEM, JSON.stringify(item))
  },[item])
  
  
function onAddItem(text){
  let it = new Item(text)
  setItems([...item, it])
  
}

function delet(items){
  let filterItem = item.filter(it=>it.id !== items.id)
  setItems(filterItem)}

 function onDone(items) {
    let filterDone = item.map(it=>{
      if(it.id === items.id)
      {it.done = !it.done}
      return it
    })
    setItems(filterDone)
 }
    
  return (
    <div className='conteiner'>
    <h1>Lista de tarefa  'CRUD'</h1>
    <Form onAddItem={onAddItem}/>
    <List onDone={onDone}  delet={delet} item={item} />
    </div>
    
  );
}

export default App;
