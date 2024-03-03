import styled from "styled-components";
import Flex from "../Flex";
import ColorConstants from "../Color";

// Task Title 
const TaskTitle = styled.h4`
    color: ${({color}) => color};
    font-size: 20px;
    text-decoration: ${( {decoration} ) => decoration ? "line-through" : "none"};
`;

// Task Description
const TaskDescription = styled.p`
    color: ${({color}) => color};
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
`;

// Task Type
const TaskType = styled.span`
    color: ${({color}) => color};
    font-size: 14px;
`;

// Task Date
const TaskDate = styled.span`
    color: ${({color}) => color};
    font-size: 14px;
`;

function Task({ task }) {
    const { title, type, date } = task;
    return (
        <Flex padding={"20px"} width={"240px"} radius={"16px"} bg={ColorConstants.Purple} direction={"column"}>
            <TaskTitle color={ColorConstants.White}> {title} </TaskTitle>
            <TaskDescription color={ColorConstants.White}> Description </TaskDescription>
            <Flex mt={"10px"} width={"100%"} align={"center"} justify={"space-between"}>
                <TaskType color={ColorConstants.White}> {type} </TaskType>
                <TaskDate color={ColorConstants.White}> {new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })} </TaskDate>
            </Flex>
        </Flex>
    );
}

export default Task;
