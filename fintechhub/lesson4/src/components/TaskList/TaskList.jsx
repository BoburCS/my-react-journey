import styled from "styled-components";
import Task from "../Task/Task.jsx";

const TaskContainer = styled.div`
    margin: auto;
    padding: 20px 0;
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

function TaskList({ tasks }) {
    return (
        <TaskContainer>
            {tasks.map((task, index) => <Task key={index} task={task}/>)}
        </TaskContainer>
    );
}

export default TaskList;
