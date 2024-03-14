import { useContext } from "react";
import taskContext from "../../context/taskContext";
import Task from "../../components/Task";

function Home() {
    const { tasks, setTasks } = useContext(taskContext);

    const handleNewTask = (event) => {
        event.preventDefault();
        const newTask = Object.fromEntries(new FormData(event.target));
        setTasks(prev => [...prev, { ...newTask, id: tasks.length + 1 }]);
        event.target.reset();
    }

    const handleDelete = (id) => setTasks(tasks.filter(task => task.id !== id));

    const handleEdit = (id) => {
        const newTitle = prompt("enter new title");
        const newDescription = prompt("enter new description");
        if (newTitle !== null && newDescription !== null) {
            setTasks(prev => prev.map(task => task.id === id ? { ...task, title: newTitle, description: newDescription} : task));
        }
    }

    return (
        <>
            <form onSubmit={handleNewTask}>
                <input name="title" type="text" placeholder="title"/>    
                <input name="description" type="text" placeholder="description"/>    
                <button type="submit">add task</button>    
            </form>   

            <h1>Tasks</h1>
            {tasks.length > 0 ? (
                tasks.map(task => <Task key={task.id} task={task} handleEdit={handleEdit} handleDelete={handleDelete}/>)
            ) : <p>No tasks</p> 
            }
        </>
    );
}

export default Home;
