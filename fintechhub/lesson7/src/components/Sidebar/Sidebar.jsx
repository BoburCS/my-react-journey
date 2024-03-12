import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex from "../../utilities/Flex";
import Text from "../../utilities/Text";
import Color from "../../utilities/Color";
import "./Sidebar.css";

const StyledSidebar = styled.aside`
    padding: 30px;
    width: 280px;
    min-height: 400px;
    border-radius: 8px;
    background-color: aliceblue;
`;

function Sidebar({currentUser}) {
    return (
        <StyledSidebar>
            <Flex mb={"20px"}>
                <NavLink to="/profile">
                    <Text color={Color.Blue} fs={"20px"} fw={"700"} align={"center"}>Welcome, {currentUser?.userName}!</Text>
                </NavLink>
            </Flex>
            <Flex direction={"column"} gap={"30px"}>
                <NavLink to="/" className="sidebar-links">Home</NavLink>
                <NavLink to="/about" className="sidebar-links">About</NavLink>
                <NavLink to="/news" className="sidebar-links">News</NavLink>
                <NavLink to="/post" className="sidebar-links">Post</NavLink>
            </Flex>
        </StyledSidebar>
    );
}

export default Sidebar;
