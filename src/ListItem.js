import React from 'react'
import Exclui from './img/trash.svg'
import On from './img/on.png'
import Off from './img/off.png'




function Mudaimg(props){
  if(props.done){
    return(<img alt='on' style={{width:35}} src={On} ></img>)
  }else{
    return(<img alt='off' style={{width:35}} src={Off} ></img>)
  }
  
}

const ListItem = (props) => {
  return ( <li className={props.items.done ? "done item":"item"}>{props.items.text}
       <div>
       <button onClick={()=>{props.onDone(props.items)}}><Mudaimg done={props.items.done} ></Mudaimg></button>
       <button onClick={()=>{props.delet(props.items)}} ><img alt='delit' style={{width:35}} src={Exclui} ></img></button>
       </div>
       </li>)}

export default ListItem