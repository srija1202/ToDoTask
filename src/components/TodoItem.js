import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);
  const [editedDescription, setEditedDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(todo.id, { ...todo, name: editedName, description: editedDescription, status });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedName(todo.name);
    setEditedDescription(todo.description);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
          <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
        </>
      ) : (
        <>
          <p className="todo-title"><b>Name:</b> {todo.name}</p>
          <p className="todo-desc"><b>Desc:</b> {todo.description}</p>
        </>
      )}
      <div className="todo-actions">
        <div className="status-filter">
          <label><b>Status:</b></label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{ backgroundColor: status === 'Completed' ? '#11ad89' : '#ff817a', color: 'white' }}
          >
            <option value="Not Completed" style={{ backgroundColor: '#ff817a', color: 'white' }}>
              Not Completed
            </option>
            <option value="Completed" style={{ backgroundColor: '#11ad89', color: 'white' }}>
              Completed
            </option>
          </select>
        </div>
        <div className="buttons">
          {isEditing ? (
            <>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Remove</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
