import styled from "styled-components";

const StyledSidebar = styled.aside`
    color: #fff;
    padding: 30px;
    width: 330px;
    height: 100vh;
    background-color: orange;
`;

function Sidebar({ children }) {
    return (
        <StyledSidebar>
            { children }
        </StyledSidebar>
    );
}

export default Sidebar;
