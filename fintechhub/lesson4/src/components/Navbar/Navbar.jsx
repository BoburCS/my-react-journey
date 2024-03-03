import { useState } from "react";
import styled from "styled-components";
import Flex from "../Flex";
import ColorConstants from "../Color";
import { ButtonAddTask } from "../Button/Button.jsx";

const Logo = styled.h1`
    color: ${({color}) => color};
`;

function Navbar(props) {
	return (
        <Flex padding={"20px 100px"} width={"100%"} bg={ColorConstants.LightDark} align={"center"} justify={"space-between"}>
            <Logo color={ColorConstants.White}>To Do App</Logo>
            <ButtonAddTask toggleTaskForm = {props.toggleTaskForm}/>
        </Flex>
    );
}

export default Navbar;
