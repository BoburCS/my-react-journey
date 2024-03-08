import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex from "../../utilities/Flex";
import Text from "../../utilities/Text";

const StyledSidebar = styled.aside`
    padding: 30px;
    width: 280px;
    min-height: 400px;
    background-color: aliceblue;
`;

function Sidebar({currentUser}) {
    return (
        <StyledSidebar>
            <Text>Welcome, {currentUser?.userName}!</Text>
            <Flex direction={"column"} gap={"30px"}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/post">Post</NavLink>
            </Flex>
        </StyledSidebar>
    );
}

export default Sidebar;
