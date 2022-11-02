import React,{useState} from 'react'
import ListGroup  from 'react-bootstrap/ListGroup';
import { getCateg } from './getData';
import {useQuery} from 'react-query';


export const Todo=()=> {
  const {data,status}=useQuery("todos",getCateg)
  status == 'success' && console.log(data.data)

  const handleAdd=()=>{
    console.log("klikk")
    //setTodos([...todos,newTodo])
  }
  const handleDelete=(value)=>{
    console.log("törlés",value)
    /*const newArr=todos.filter(item=>item!=value)
    setTodos(newArr)*/
  }
  const handleDone=(obj)=>{
    console.log(obj.nextElementSibling)
    obj.nextElementSibling.classList.toggle('text-decoration-line-through')
  }

  return (
    <div className='todo'>
      <h1 className='text-center'>My todos</h1>
      <form className='d-flex justify-content-evenly m-1 p-2'>
        <input type="text"  onChange={(e)=>console.log(e.target.value)} />
        <i className="fa-solid fa-plus fa-2x m-1 text-success" onClick={handleAdd}></i>
        <i className="fa-solid fa-trash text-danger fa-2x" onClick={()=>console.log("törlés")}></i>
      </form>
      <ListGroup>
        {status=='success'&& data.data.map(item=>
        <ListGroup.Item className='d-flex justify-content-between' key={item.id}>
          <i className="fa-solid fa-square-check text-success fa-2x" onClick={(e)=>handleDone(e.target)}></i>
          <span className="">{item.name}</span>
          <i className="fa-solid fa-trash text-danger fa-2x" id={item} onClick={(e)=>handleDelete(e.target.id)}></i>
          </ListGroup.Item>)}
        </ListGroup>
        
      
    </div>
  )
}