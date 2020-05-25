import React, { Component } from 'react'
import Todos from './Todos'

class Todo extends Component {
     
     render() {
          console.log(this.props.todos)
          return (
               <div>
                    {
                         this.props.todos.map(todo=>(
                              <div key={todo.description}>
                                   <Todos tittle={todo.tittle} description={todo.description} deleteTodo={this.props.deleteTodo} />
                              </div>
                         ))
                    }
               </div>
          )
     }
}

export default Todo
