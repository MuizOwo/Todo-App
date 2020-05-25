import React, { useState } from 'react';   
import './App.css'
import Todo from './components/Todo/Todo';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
 const [todos,setTodos] = useState([]);
 const addTodo=(todo)=>{
    setTodos([...todos, todo])
 }
 const deleteTodo = description => {
    const newTodos = todos.filter(todo => todo.description !== description)
    setTodos(newTodos)
 }
    return ( 
        <div className='container'>
            <div className='wrap'>
               <div className='text'>
                  <h2>Todo</h2>
               </div>
                  <AddTodo addTodo={addTodo} />
                  <div className="dropdown-divider"></div>
                  <Todo todos={todos} deleteTodo={deleteTodo}/>
            </div> 
        </div>
     );
  }   

 
export default App ;