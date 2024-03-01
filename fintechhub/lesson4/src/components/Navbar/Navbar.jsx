import { useState } from "react";
import styled from "styled-components";
import { ButtonAddTask } from "../Button/Button.jsx";

const NavbarContainer = styled.nav`
    color: #fff;
    padding: 20px 100px;
    width: 100%;
    background-color: royalblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

function Navbar(props) {
	return (
        <NavbarContainer>
            <div>Logo</div>
            <ButtonAddTask toggleTaskForm = {props.toggleTaskForm}/>
        </NavbarContainer>
    );
}

export default Navbar;
