import React from 'react'
import './App.css'
import todosData from './todoData'
import TodoItems from './TodoItems'



class App extends React.Component{
    constructor(){
        super()
        this.state = { 
        todos: todosData
        }
    }

    render(){
        const todoItem = this.state.todos.map((item) => <TodoItems key={item.id} item = {item} />)
        return (
        <div className="todo-list">
       {todoItem}
     
        </div>
    )
    }
    
}

export default App
