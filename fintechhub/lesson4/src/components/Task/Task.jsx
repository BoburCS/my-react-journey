import styled from "styled-components";

const TaskCard = styled.div`
    color: white;
    padding: 12px 24px;
    width: 400px;
    background-color: blue;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

function Task({ task }) {
    return (
        <TaskCard>
            <h3>{task.title}</h3>
            <p>{task.type}</p>
            <p>{new Date(task.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </TaskCard>
    );
}

export default Task;