import React, { useState } from 'react'
import ToDoForm from './components/ToDoForm';
import './App.css';
import ToDoDisplay from './components/ToDoDisplay';

// lift state
// 1 parent component - create state & function to change the state
function App() {
  const [tasks, setTasks] = useState([])

  const receiveNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const handleUpdate = (allTasks) =>
    setTasks(allTasks)

  return (
    <div className="container bg-dark text-warning w-50 mt-5 p-3 ">
      <ToDoForm onNewTask={receiveNewTask} />
      <ToDoDisplay tasks={tasks} handleUpdate={handleUpdate} />
    </div>
  );
}

export default App;
