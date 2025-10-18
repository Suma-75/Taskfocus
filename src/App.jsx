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
  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className="App">
      <header>
      <h1 className="title">Task Focus</h1>
       <p className="tagline">Our friendly TaskManager</p>
      </header>
       <Taskform addTask ={addTask}/>
       <TaskList tasks = {tasks}
       updateTask={updateTask}
       deleteTask={deleteTask} />
       <Progresstracker tasks = {tasks}/>
       {tasks.length>0 && 
         (<button onClick={clearTasks} className='clear-btn'>Clear all tasks</button>)}
    </div>
  )
}

export default App;
