import React,{useState} from 'react'
import ListGroup  from 'react-bootstrap/ListGroup';
import { getTodos,delItem,delItems,addItem } from './getData';
import {useQuery,useQueryClient,useMutation, QueryClient} from 'react-query';
 
 
export const Todo=()=> {
  const [newItem,setNewItem] = useState('')
  const {data,isLoading}=useQuery("todos",getTodos)
  !isLoading && console.log(data.data)
 
  const clientQuery = useQueryClient()
 
  const mutationDel = useMutation(delItem,{
    onSuccess:()=>{
      clientQuery.invalidateQueries("todos")
    }
  })
 
  const mutationDelAll = useMutation(delItems,{
    onSuccess:()=>{
      clientQuery.invalidateQueries("todos")
    }
  })
 
  const mutationAdd = useMutation(addItem,{
    onSuccess:()=>{
      setNewItem('')
      clientQuery.invalidateQueries("todos")
    }
  })
 
 
  return (
    <>
    {isLoading?<p>is loading...</p>:
    <div className='todo'>
      <h1 className='text-center'>My todos</h1>
      <form className='d-flex justify-content-evenly m-1 p-2'>
        <input type="text"  onChange={(e)=>setNewItem(e.target.value)} value={newItem} />
 
        <i className="fa-solid fa-plus fa-2x m-1 text-success" onClick={()=>mutationAdd.mutate({name:newItem})}></i>
 
        <i className="fa-solid fa-trash text-danger fa-2x" onClick={()=>mutationDelAll.mutate()}></i>
      </form>
      <ListGroup>
        {data.data.map(item=>
        <ListGroup.Item className='d-flex justify-content-between' key={item.id}>
          <i className={item.status? "fa-solid fa-square-check text-success fa-2x":"fa-solid fa-square-check text-secondary fa-2x"} 
          onClick={()=>console.log(item.id)}></i>
          <span className={item.status? "text-decoration-line-through":""}>
            {item.name}</span>
          <i className="fa-solid fa-trash text-danger fa-2x" 
          onClick={()=>mutationDel.mutate(item.id)}></i>
          </ListGroup.Item>)}
        </ListGroup>
 
 
    </div>
        }
        </>
  )
}