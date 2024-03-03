import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { MainLayout, SidebarButton, ContentLayout } from "./Layouts/Layout.jsx";
import TaskForm from "./components/TaskForm/TaskForm.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import "./App.css";

function App() {
	// Tasks Related
	const [tasks, setTasks] = useState([{title: "Go to gym", type: "To Do", date: new Date()}]);
	const addTask = (task) => setTasks((previousTasks) => [...previousTasks, task]);
	
	const [addTaskForm, setAddTaskForm] = useState(false);
	const toggleTaskForm = () => setAddTaskForm((previous) => !previous);

	// Sidebar related
	const [visibility, setVisibility] = useState(false);
	const openSidebar = () => setVisibility((previousState) => !previousState);

	return (
		<MainLayout>
			<Sidebar visibility={visibility} />
            <ContentLayout>
			    <Navbar toggleTaskForm={toggleTaskForm} />
			    <TaskList tasks = {tasks}/>  
            </ContentLayout>
			<SidebarButton onClick={openSidebar}>{visibility ? "Close" : "Open"}</SidebarButton>
			<TaskForm addTask={addTask} showForm={addTaskForm} />
		</MainLayout>
	);
}

export default App;
