import styled from "styled-components";
import ColorConstants from "../Color";

const BtnAddTask = styled.button`
    color: ${ColorConstants.White};
    font-size: 16px;
    font-weight: 700;
    padding: 12px 24px;
    border: none;
    border-radius: 16px;
    background-color: ${ColorConstants.Purple};
    cursor: pointer;
`;

function ButtonAddTask(props) {
	return (
        <BtnAddTask onClick={props.toggleTaskForm}>+Add Task</BtnAddTask>
    );
}

export { ButtonAddTask };
