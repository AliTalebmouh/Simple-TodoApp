import React from 'react';

const TodoList = ({ todos, removeTask }) => {
  return (
    <div className="todo-list">
      {todos.map((item) => (
        <div key={item.id} className="todo-item">
          <p>{item.text}</p>
          <button onClick={() => removeTask(item.id)} className="remove-btn" aria-label={`Remove ${item.text}`}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;