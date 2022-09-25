import './index.css';
import {React, useState} from 'react';
import List from './List';
import Form from './Form';
import Item from './item'




function App() {
  const data = localStorage.getItem("salvarDb");
const [item, setItems] = useState(data ? JSON.parse(data) : [])

let salvar = (localStorage.setItem("salvarDb", JSON.stringify(item)))
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
    <h1>Lista de tarefa 'To-do List'</h1>
    <Form onAddItem={onAddItem}/>
    <List onDone={onDone}  delet={delet} item={item} salvar={salvar}  />
    </div>
    
  );
}

export default App;
