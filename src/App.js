import React from 'react'
import './App.css';

import TodoItems from './TodoItems'


function App (){
    return (
        <div className="todo-list">
       <TodoItems />
       <TodoItems />
       <TodoItems />
       <TodoItems />
       
        </div>
    )
}

export default App
