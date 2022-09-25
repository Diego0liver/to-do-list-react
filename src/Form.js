import {React, useState} from 'react'

const Form = (props) => {
    const [text, setText] = useState("")
    function pegaValor(event){
        const t = event.target.value
        setText(t)}
  

  function addItem(event){
    event.preventDefault()
    if(text){
    props.onAddItem(text)
    setText("")}
}
  return (
    <form>
      <input type="text" onChange={pegaValor} value={text}></input>
      <button className='btnadd' onClick={addItem} >Adicionar</button>
    </form>  
  )
}

export default Form