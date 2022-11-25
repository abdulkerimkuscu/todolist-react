import {useState, useEffect} from 'react'
import Input from '../Input'
import List from '../List'

function Todo() {
  const [todos, setTodos] = useState([])

  useEffect(() => {      
    const localStr = JSON.parse(localStorage.getItem("todoapp"));      
    if(localStr) {
      setTodos(localStr);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("todoapp" , JSON.stringify(todos))
  },[todos])
  return (
    <div>
       <section className='todoapp'>
        <header className="header">
          <h1>todos</h1>
          </header>
          
        

          <Input todo={todos} addTodo={setTodos}/>
          <List todo={todos} removeTodo={setTodos} updateTodo={setTodos}/>
        </section>
    </div>
  )
}

export default Todo