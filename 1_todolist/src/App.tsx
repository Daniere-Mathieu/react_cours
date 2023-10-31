import { useState } from "react";
import "./App.css";
import Item from "./Item";
import Modal from "./Modal";

function App() {
  const [todoList, setTodoList] = useState<string[]>(["todo1", "todo2"]);
  const [todo, setTodo] = useState<string>("");
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [indexToDelete, setIndexToDelete] = useState<number | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  function removeTodoItem(index: number) {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function addTodoItem() {
    if (todo === "") return;
    setTodoList([...todoList, todo]);
    setTodo(""); // clear the input after adding
  }

  function openModal(index: number) {
    setIndexToDelete(index); // save the index of the todo item to be deleted
    setModalOpen(true);
  }

  function handleModalClose(confirm: boolean) {
    if (confirm && indexToDelete !== null) {
      removeTodoItem(indexToDelete);
    }
    setModalOpen(false);
    setIndexToDelete(null); // reset indexToDelete
  }

  function startEditing(index: number) {
    setEditingIndex(index);
    setEditingText(todoList[index]);
  }

  function stopEditing() {
    setEditingIndex(null);
    setEditingText("");
  }

  function updateTodoItem() {
    if (editingIndex !== null && editingText !== "") {
      const newTodoList = [...todoList];
      newTodoList[editingIndex] = editingText;
      setTodoList(newTodoList);
      stopEditing();
    }
  }

  return (
    <>
      <div className="App">
        <h1>Todo List</h1>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodoItem}>Add</button>
        <ul>
          {todoList.map((todoItem, index) => (
            <Item
              key={index}
              todo={todoItem}
              index={index}
              isEditing={editingIndex === index}
              editingText={editingText}
              emitDeleteItem={removeTodoItem}
              emitStartEditing={startEditing}
              emitUpdateTodo={updateTodoItem}
              emitChangeEditingText={setEditingText}
              stopEditing={stopEditing}
            />
          ))}
        </ul>
      </div>
      <Modal
        isOpen={isModalOpen}
        content={
          <div>
            Are you sure ?
            <button onClick={() => handleModalClose(true)}>Yes</button>
            <button onClick={() => handleModalClose(false)}>No</button>
          </div>
        }
        onClose={() => handleModalClose(false)}
      />
    </>
  );
}

export default App;
