import React from 'react'

export default function Todo( { todo, toggleTodo } ) {


    function handleTodoClick() {
        toggleTodo(todo.id)
    }

  return (
    <div>
        {/* to print todos */}
        {/* include name reference from App.js */}
    
        
        <label>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            {todo.name}
        </label>
      
    </div>
  )
}
