import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.aside`
    color: #fff;
    width: ${({ visibility }) => visibility ? "300px" : "0"};
    height: 100vh;
    background-color: #000;
`;

function Sidebar(props) {
	return (
        <SidebarContainer visibility={props.visibility}>
            Sidebar
        </SidebarContainer>
    );
}

export default Sidebar;
