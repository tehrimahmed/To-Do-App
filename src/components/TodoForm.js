import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };
  
  return (
    <form className="TodoForm" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
