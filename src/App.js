
// set up state as React manages state and rerenders componentry
// to use state in a function component we need a "useState hook" and create default state
import React, { useState } from "react";
import TodoList from "./TodoList";


function App() {
  // useState creates and returns a default empty array ->   const [todos, setTodos] = useState([]);
  // 1st element is all of our todos
  // 2nd element is the function we call that allows us to update our todos
  // e.g. Todo 1 & Todo 2 become our default values
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    //  wrap in an empty element <></>, "fragment" as a JS function can only return one thing
    <>

     <TodoList />
    <input type="text"></input>
    <button> Add Todo</button>
    <button> Clear Complete</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
