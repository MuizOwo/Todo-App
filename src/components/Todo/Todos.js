import React  from 'react'
import {Toast} from 'react-bootstrap'
import './Todo.css'


const Todos = ({tittle,description, deleteTodo}) =>{
     return(
          <div className='todo' onClick={() => deleteTodo(description)}>
               <Toast style={{width:'100%'}}>
                    <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">{tittle}</strong>
                    </Toast.Header>
                    <Toast.Body>{description}</Toast.Body>
               </Toast>
          </div>
     )
}

export default Todos