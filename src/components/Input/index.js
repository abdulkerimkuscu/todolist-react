import {useState, useEffect} from 'react'

function Input({addTodo, todo}) {
  // const [itemId, setItemId] = useState(3);
    const [input,setInput] = useState({todos :""})
    useEffect(() => {
      setInput({ todos: ""});
    },[todo]);
    const formSubmit = (e) => {
        e.preventDefault();
        if(input === ""){
          return false
        }
        // setItemId(itemId + 1)
        addTodo([...todo, input])
      };

      const onChange = (e) =>{
        setInput({... input, todos: e.target.value})
      }

  return (
    <div>
        <form onSubmit={formSubmit}>
            <input type="text"
            name = "value"
            className='new-todo'
            placeholder='Bugün Ne Yapacaksınız' 
            value = {input.todos}
            onChange = {onChange}
             autoFocus/>
          
        </form>
    </div>
  )
}

export default Input