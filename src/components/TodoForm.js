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
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="todo-btn" onClick={handleFormSubmit}>
            Add 
          </button>
    </form>
  );
}

export default TodoForm;
