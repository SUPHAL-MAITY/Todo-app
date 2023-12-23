import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {removeTodo} from  "../features/todol/todoSlice"
import '../App.css';
import { MdDelete } from "react-icons/md"



function Todos ()  {
  const todos=useSelector(state=>state.todos)
  const dispatch=useDispatch()
  return (
    <>
    <div className="center my-2">
      
     <div> <h3>Todos</h3></div>
    
     {todos.map((todo)=>(
      <li key={todo.id}>
        {todo.text}
       
      <button className="btn-tab" onClick={()=>dispatch(removeTodo(todo.id))} ><MdDelete /></button>
        


      </li>
     ))}

      
</div>
      </>
    )
    
   
}

export default Todos
