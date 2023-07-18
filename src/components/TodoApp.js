import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './styles.css';

function TodoApp({ onLogout }) {
  const [todos, setTodos] = useState([]);
  const [searchTodo, setSearchTodo] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setTodos(data);
      })
      .catch(function(error) {
        console.log('Error fetching todos:', error);
      });
  }, []);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      title: text,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return {
          ...todo,
          title: updatedTodo.title,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleSearch = (e) => {
    setSearchTodo(e.target.value);
  };

  const searchTodos = () => {
    const filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTodo.toLowerCase())
    );
    setFilteredTodos(filteredTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
      <div className="TodoWrapper">
        <TodoForm addTodo={addTodo} />
        <div className="search-bar">
          <input
            type="text"
            value={searchTodo}
            onChange={handleSearch}
          />
          <button className="search-button" onClick={searchTodos}>
            Search
          </button>
        </div>
        <TodoList
          todos={filteredTodos.length > 0 ? filteredTodos : todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default TodoApp;
