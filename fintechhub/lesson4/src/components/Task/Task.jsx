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

const TaskTitle = styled.h4`
    font-size: 16px;
`;

const TaskType = styled.span`
    font-size: 14px;
`;

const TaskDate = styled.span`
    font-size: 14px;
`;

function Task({ task }) {
    return (
        <TaskCard>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskType>{task.type}</TaskType>
            <TaskDate>{new Date(task.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</TaskDate>
        </TaskCard>
    );
}

export default Task;
