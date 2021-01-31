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
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id){
                   return{
                       ...todo,
                       completed: !todo.completed
                   }
                }
                return todo
            })
            return {
                todos : updatedTodos
           }
        })
            //console.log("Changed", id)
    }

    render(){
        const todoItem = this.state.todos.map((item) => <TodoItems key={item.id} item = {item}
         handleChange={this.handleChange}/>)
        
        return (
        <div className="todo-list">
       {todoItem}
     
        </div>
    )
    }
    
}

export default App
