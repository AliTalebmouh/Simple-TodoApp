import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim()) return;
    addTask(value);
    setValue('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task..."
        value={value}
        onChange={e => setValue(e.target.value)}
        name="text"
        className="todo-input"
        aria-label="Task input"
      />
      <button className="todo-button" type="submit" aria-label="Add task">Add Task</button>
    </form>
  );
};

export default TodoForm;