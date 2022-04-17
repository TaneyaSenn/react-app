
// set up state as React manages state and rerenders componentry
// to use state in a function component we need a "useState hook" and create default state
import React, { useState, useRef } from "react";
import TodoList from "./TodoList";


function App() {
  // useState creates and returns a default empty array ->   const [todos, setTodos] = useState([]);
  // 1st element is all of our todos
  // 2nd element is the function we call that allows us to update our todos
  // e.g. Todo 1 & Todo 2 become our default values -> const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])


  // set up id, name and complete flag ->  const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1', complete: false }])
 

  // will have empty array as will by default when app starts up, set up eventlistener
  const [todos, setTodos] = useState([])

  function handleAddTodo(e) {
    //need access import, using reference hook -> useRef
  }

  return (
    //  wrap in an empty element <></>, "fragment" as a JS function can only return one thing
    <>
     {/* props defaults passed through props like attributes to an HTML component */}
    <TodoList todos={todos}/>
    <input type="text"></input>
    <button onClick={handleAddTodo}> Add Todo</button>
    <button> Clear Complete</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
