import React from 'react'
import ListItem from './ListItem'


const List = (props) => {
  return (<ul>
       {props.item.map
       (items=><ListItem key={items.id}
       items={items}
       db={props.db} 
       onDone={props.onDone} 
       delet={props.delet}></ListItem>)} 
    </ul>)}
  

export default List