import { useState } from 'react'
import './App.css'
import Item from './Item'

function App() {
  const [todoList,setTodoList] = useState<string[]>(["todo1","todo2"])
  const [todo,setTodo] = useState<string>("")

  function removeTodoItem(index:number){
    const newTodoList = [...todoList]
    newTodoList.splice(index,1)
    setTodoList(newTodoList)
  }
  
  function addTodoItem(){
    if(todo === "") return
    setTodoList([...todoList,todo])
  }

  return (
    <>
      <div className="App">
        <h1>Todo List</h1>
        <input type="text" onChange={e => setTodo(e.target.value)}/>
        <button onClick={addTodoItem}>Add</button>
        <ul>
          {todoList.map((todoItem,index)=>(
           <Item key={index} todo={todoItem} index={index} emitDeleteItem={removeTodoItem} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
