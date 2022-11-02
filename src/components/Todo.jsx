import React,{useState} from 'react'
import ListGroup  from 'react-bootstrap/ListGroup';
import { getTodos } from './getData';
import {useQuery} from 'react-query';


export const Todo=()=> {
  const {data,status}=useQuery("todos",getTodos)
  status == 'success' && console.log(data.data)

  const handleAdd=()=>{
    console.log("insert")
    //setTodos([...todos,newTodo])
  }
  const handleDelete=(id)=>{
    console.log("törlés:",id)
    /*const newArr=todos.filter(item=>item!=value)
    setTodos(newArr)*/
  }
  /*const handleDone=(obj)=>{
    console.log(obj.nextElementSibling)
    obj.nextElementSibling.classList.toggle('text-decoration-line-through')
  }*/

  return (
    <div className='todo'>
      <h1 className='text-center'>My todos</h1>
      <form className='d-flex justify-content-evenly m-1 p-2'>
        <input type="text"  onChange={(e)=>console.log(e.target.value)} />
        <i className="fa-solid fa-plus fa-2x m-1 text-success" onClick={handleAdd}></i>
        <i className="fa-solid fa-trash text-danger fa-2x" onClick={()=>console.log("Összes törlés")}></i>
      </form>
      <ListGroup>
        {status=='success'&& data.data.map(item=>
        <ListGroup.Item className='d-flex justify-content-between' key={item.id}>
          <i className="fa-solid fa-square-check text-success fa-2x" onClick={(e)=>console.log(item.id)}></i>
          <span className="">{item.name}</span>
          <i className="fa-solid fa-trash text-danger fa-2x" onClick={(e)=>handleDelete(item.id)}></i>
          </ListGroup.Item>)}
        </ListGroup>
        
      
    </div>
  )
}