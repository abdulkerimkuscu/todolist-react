import {useState, useEffect} from 'react'

function List({todo , removeTodo, updateTodo}) {
    const [filterType, setFilterType] = useState(0);
    const[filteredTodo, setFilteredTodo] = useState(todo);

    useEffect(() => {
        if(filterType===1){
          setFilteredTodo(todo.filter((item => item.isCompleted === false)));
        } else if (filterType === 2){
          setFilteredTodo(todo.filter((item => item.isCompleted)));
        } else {
          setFilteredTodo(todo);
        }   
       
      }, [filterType, todo]);

    const checkbox =(itemIndex) => {
        updateTodo(todo.map((item, index) => {
          if(itemIndex === index){
            item.isCompleted = !item.isCompleted
          
          }    
          return item
            }     
        ));
      }
      const removeItem = (itemId) => removeTodo(todo.filter((item) => item.id !== itemId)) ;

      const clearCompleted = () => removeTodo(todo.filter((item) => !item.isCompleted));

    const todoCompleted = () =>{
        if(todo.every((item) => item.isCompleted)){
            updateTodo(todo.map(item => {
                return {...item , isCompleted : false}
            }));
        }
        else {
            updateTodo(todo.map((item) => {
                if(item.isCompleted !== true){
                    return {...item , isCompleted: true}
                }
                return {...item}
            }))
        }
    }
    let completed= 0;
  for (let i=0; i<todo.length; i++){
    if(todo[i].isCompleted){
      completed++
    }
  };


  return (
    <div>
        <section className='main'>    
      <input onChange={() => todoCompleted()} id="toggle-all" className="toggle-all" 
      type="checkbox" />

      <label htmlFor="toggle-all" className={todo.length === 0 ? "hidden" : "show"}>Mark all as complete</label>

    <ul className='todo-list'>
    {

   
      filteredTodo.map((todos, index) => (
      <li key={index} className={todos.isCompleted ? "completed" : ""}>
        <div className='view'>

          <input type="checkbox" className='toggle' checked={todos.isCompleted} onChange={() => checkbox(index)} />

              

          <button onClick={() => removeItem(todos.id)} className='destroy'></button>
       </div>
      </li>            
      ))
    }  
    </ul>
    </section>

    <footer className={todo.length === 1 ? "hidden" : "footer"}>
      <span className='todo-count'>
          <strong>{filteredTodo.length}</strong>
          items left
      </span>
      

    
    <ul className='filters'>
      <li>
        <button className={filterType === 0 ? "selected" : ""} onClick={() => setFilterType(0)}>All</button>
      </li>

      <li>
        <button className={filterType === 1 ? "selected" : ""} onClick={() => setFilterType(1)}>Active</button>
      </li>

      <li>
        <button className={filterType === 2 ? "selected" : ""} onClick={() => setFilterType(2)}>Completed</button>
      </li>
    </ul>

    <button onClick={clearCompleted} className={todoCompleted===0 ? "hidden" : "clear-completed"}> Clear Completed</button>    
    </footer>
    </div>
  )
}

export default List