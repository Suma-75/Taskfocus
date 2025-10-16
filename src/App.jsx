import TaskList from './assets/Components/TaskList';
import Taskform from './assets/Components/Taskform';
import Progresstracker from './assets/Components/Progresstracker';
import { useEffect, useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask =(task) => {
     setTasks([...tasks,task]);
  }
  return (
    <div>
      <h1>Task Focus</h1>
       <p>Our friendly TaskManager</p>
       <Taskform addTask ={addTask}/>
       <TaskList/>
       <Progresstracker/>
       <button>Clear all tasks</button>
    </div>
  )
}

export default App;
