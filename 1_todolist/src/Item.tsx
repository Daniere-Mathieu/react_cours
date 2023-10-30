import './App.css'

function Item({todo,index,emitDeleteItem}: {todo:string,index:number,emitDeleteItem:(index:number)=>void}) {



  return (
    <li>{todo} <button onClick={() => emitDeleteItem(index)}>Delete</button> </li>

  )
}

export default Item
