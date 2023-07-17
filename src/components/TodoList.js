import React, { useState } from 'react';

function TodoList({ todos, toggleTodo, deleteTodo, updateTodo }) {
  const [editValue, setEditValue] = useState('');
  const [editId, setEditId] = useState(null);

  const handleEditInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditFormSubmit = (e, id) => {
    e.preventDefault();
    if (editValue.trim() !== '') {
      updateTodo({
        id,
        text: editValue,
      });
      setEditValue('');
      setEditId(null);
    }
  };

  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`Todo ${todo.completed ? 'completed' : ''}`}
          onClick={() => toggleTodo(todo.id)}
        >
          {editId === todo.id ? (
            <form onSubmit={(e) => handleEditFormSubmit(e, todo.id)}>
              <input
                type="text"
                className="edit-input"
                value={editValue}
                onChange={handleEditInputChange}
              />
              <button type="submit" className="save-button">
                Save
              </button>
            </form>
          ) : (
            <span className="todo-text">{todo.text}</span>
          )}
          <div className="actions">
            {editId !== todo.id && (
              <button
                className="edit-button"
                onClick={() => {
                  setEditValue(todo.text);
                  setEditId(todo.id);
                }}
              >
              Edit
              </button>
            )}
              <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
              Delete
              </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
