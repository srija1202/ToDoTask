import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Office Task-1', description: 'This is the description of my First Task', status: 'Not Completed' },
    { id: 2, name: 'Office Task-2', description: 'This is the description of my Second Task', status: 'Completed' },
    { id: 3, name: 'Office Task-3', description: 'This is the description of my Third Task', status: 'Not Completed' }
  ]);

  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: todos.length + 1, status: 'Not Completed' }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => 
    filter === 'All' || todo.status === filter
  );

  const getFilterColor = () => {
    switch (filter) {
      case 'Completed':
        return '#11ad89';
      case 'Not Completed':
        return '#ff817a';
      default:
        return '#dc3545';
    }
  };

  return (
    <div className="App">
      <header style={{color : '#13ad89'}}>
        <h1>My todo</h1>
      </header>
      <TodoForm addTodo={addTodo} />
      <div className="filter-container">
        <p className="filter-title">My Todos</p>
        <div className="filter">
          <label>Status Filter :</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ background: getFilterColor(), color: 'white' }}
          >
            <option value="All">All</option>
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
      <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
