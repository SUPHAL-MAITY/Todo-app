import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import {addTodo} from "../features/todol/todoSlice"





const  AddTodo=() =>{

const[input,setInput]=useState("")

const dispatch =useDispatch()

const addTodoHandler=(e)=>{
  e.preventDefault()
  dispatch(addTodo(input))
  setInput("")
 
}
   
  return (
    <div>
        
        <form onSubmit={addTodoHandler}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Enter a ToDo</label>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
         
            
            <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        
      
    </div>
  )
}

export default AddTodo
