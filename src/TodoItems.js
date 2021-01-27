import React from 'react'

function TodoItems(props){
  return (
    <div className= "todo-items">
       <input type = "checkbox" checked={props.item.completed} />
        <p>{props.item.text}</p>
    </div>
  )
}

export default TodoItems
