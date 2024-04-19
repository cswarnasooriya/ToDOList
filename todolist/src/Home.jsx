import Create from './Create'
import { useState } from 'react'
const Home = () => {

    const [todo, setTodo] = useState([]);

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
            <div>
                {todo}
            </div>    
        ))

      }

    </div>
  )
}

export default Home
