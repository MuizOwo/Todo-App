import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
// import {Row} from 'react-bootstrap'
import "./Addtodo.css"

function AddTodo(props){
     const [tittle, setTittle] = useState("")
     const [description, setDescription] =useState("")
          return (
               <div className='add-todo'>
                    <Form className='form'>
                         <div className='input'>
                              <Form.Control className='form-control' type='text' placeholder="Enter Todo"
                                   value={tittle} onChange={(e)=>setTittle(e.target.value)}
                              />
                         </div>
                         <div className='des'>
                              <Form.Control type="text" placeholder="Description" 
                                   value={description} onChange={(e)=>setDescription(e.target.value)}
                              />
                         </div>
                         <div className='button'>
                         <Button variant="primary" type="submit"
                              onClick={(e) => {
                                   e.preventDefault()
                                   props.addTodo({tittle, description})
                                   }}
                         >
                              Submit
                         </Button>
                    </div>
                    </Form>
               </div>
          )
     }

export default AddTodo
