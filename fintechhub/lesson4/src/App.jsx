import { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => setTasks(previousTasks => [...previousTasks, task]);

    return (
        <>
          <TaskForm addTask = {addTask}/>
          <TaskList tasks = {tasks}/>  
        </>
    );
}

export default App;

// new formdata event.target
// object.fromentries = forma.entries
