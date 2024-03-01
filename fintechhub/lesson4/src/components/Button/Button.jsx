import styled from "styled-components";

const BtnAddTask = styled.button`
    color: #fff;
    padding: 12px 24px;
    border: none;
    background-color: green;
`;

function ButtonAddTask(props) {
	return (
        <BtnAddTask onClick={props.toggleTaskForm}>+Add Task</BtnAddTask>
    );
}

export { ButtonAddTask };
