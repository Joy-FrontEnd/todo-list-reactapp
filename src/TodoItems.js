import React from 'react'

function TodoItems(props){
  const styleItem ={
    fontStyle : "italic",
    textDecoration : "line-through",
  }
  return (
    <div className= "todo-items">
       <input 
       type = "checkbox"
        checked={props.item.completed} 
        onChange={() => props.handleChange(props.item.id)} />
        <p style = {props.item.completed ? styleItem : null}>{props.item.text}</p>
    </div>
  )
}

export default TodoItems
