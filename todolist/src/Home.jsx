import axios from 'axios';
import Create from './Create'
import { useEffect, useState } from 'react'
import { BsCircleFill } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";


const Home = () => {

    const [todo, setTodo] = useState([]);

    useEffect(()=>{
      axios.get('http://localhost:3001/get')
      .then(result => setTodo(result.data))
      .catch(err => console.log(err))
    })


    //edit checkbox
    const handleEdit = (id) =>{
      axios.put('http://localhost:3001/update/'+id)
      .then(() =>{
          location.reload()
      })
      .catch(err => console.log(err))

    }

    //delete activity
    const handleDelete = (id) =>{
        axios.delete('http://localhost:3001/delete/'+id)
        .then(() => {
          location.reload()
        })
        .catch(err => console.log(err))

      }


  return (
    <div className='home'>
      <h2>ToDo List</h2>
      <Create/>

      {

        todo.length === 0
        ?
        <div><h2>No Record</h2></div>
        :
        todo.map(todo => (
          <>
            
          
          <div className='outer'>
          <div className='task'>
            <div className='checkbox' onClick={() => handleEdit(todo._id)}>

            {
              todo.done ?
              <IoMdCheckmarkCircle className='icon'/>
            :
              <BsCircleFill className='icon'/>
            }
                
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
            </div>
            <div>
            <span><FaRegTrashCan name='icon' onClick={() => handleDelete(todo._id)}/></span>
            </div>
               
          </div>    

         
          </div>
          </>
            
        ))

      }

    </div>
  )
}

export default Home
