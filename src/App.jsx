import TaskList from './assets/Components/TaskList';
import Taskform from './assets/Components/Taskform';
import Progresstracker from './assets/Components/Progresstracker';
import { useEffect, useState } from 'react';
import "./style.css";

function App() {

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask =(task) => {
     setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
     const newtask = [...tasks];
     newtask[index] = updatedTask;
     setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));

  }

  return (
    <div>
      <h1>Task Focus</h1>
       <p>Our friendly TaskManager</p>
       <Taskform addTask ={addTask}/>
       <TaskList tasks = {tasks}
       updateTask={updateTask}
       deleteTask={deleteTask} />
       <Progresstracker/>
       <button>Clear all tasks</button>
    </div>
  )
}

export default App;
