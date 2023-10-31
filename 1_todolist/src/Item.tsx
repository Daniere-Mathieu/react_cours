import "./App.css";

function Item({
  todo,
  index,
  isEditing,
  editingText,
  emitDeleteItem,
  emitStartEditing,
  emitUpdateTodo,
  emitChangeEditingText,
  stopEditing,
}: {
  todo: string;
  index: number;
  isEditing: boolean;
  editingText: string;
  emitDeleteItem: (index: number) => void;
  emitStartEditing: (index: number) => void;
  emitUpdateTodo: () => void;
  emitChangeEditingText: (text: string) => void;
  stopEditing: () => void;
}) {
  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editingText}
            onChange={(e) => emitChangeEditingText(e.target.value)}
          />
          <button onClick={emitUpdateTodo}>Save</button>
          <button onClick={stopEditing}>Cancel</button>
        </>
      ) : (
        <>
          {todo}
          <button onClick={() => emitStartEditing(index)}>Edit</button>
          <button onClick={() => emitDeleteItem(index)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default Item;
