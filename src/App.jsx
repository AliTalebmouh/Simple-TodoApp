import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      id: 1528374687269,
    },
    {
      text: "Meet friend for lunch at Pokémon Center",
      id: 1528376687280,
    },
  ]);

  const addTask = (text) => {
    const newTask = { text, id: Date.now() };
    const newTodos = [...todos, newTask];
    setTodos(newTodos);
  };

  const removeTask = (id) => {
    const remainingTasks = todos.filter((task) => task.id !== id);
    setTodos(remainingTasks);
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TodoForm addTask={addTask} />
      <TodoList todos={todos} removeTask={removeTask} />
    </div>
  );
}

export default App;