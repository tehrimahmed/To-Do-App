import React, { useState } from 'react';

function TodoList({ todos, updateTodo, deleteTodo }) {
  const [editedTodoId, setEditedTodoId] = useState(null);
  const [editedTodoValue, setEditedTodoValue] = useState('');

  const handleEditClick = (todo) => {
    setEditedTodoId(todo.id);
    setEditedTodoValue(todo.title);
  };

  const handleSaveClick = () => {
    if (editedTodoId && editedTodoValue.trim() !== '') {
      const updatedTodo = { id: editedTodoId, title: editedTodoValue };
      updateTodo && updateTodo(updatedTodo);
      setEditedTodoId(null);
      setEditedTodoValue('');
    }
  };

  const handleCancelClick = () => {
    setEditedTodoId(null);
    setEditedTodoValue('');
  };

  const handleInputChange = (e) => {
    setEditedTodoValue(e.target.value);
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {editedTodoId === todo.id ? (
            <>
              <input type="text" value={editedTodoValue} onChange={handleInputChange} />
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            <>
              <span>{todo.title}</span>
              <button onClick={() => handleEditClick(todo)}>Edit</button>
              <button onClick={() => deleteTodo && deleteTodo(todo.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
