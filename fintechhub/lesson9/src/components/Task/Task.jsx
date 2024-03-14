
function Task({ task, handleEdit, handleDelete }) {
    return (
        <div>
            <h4>{task?.title}</h4>
            <p>{task?.description}</p>
            <button onClick={() => handleEdit(task.id)}>Edit</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
    );
}

export default Task;
