import React from 'react'

export default function Todo( { todo } ) {
  return (
    <div>
        {/* to print todos */}
        {/* include name reference from App.js */}
        
        
        <label>
            <input type="checkbox" checked={todo.complete}/>
            {todo.name}
        </label>
      
    </div>
  )
}
