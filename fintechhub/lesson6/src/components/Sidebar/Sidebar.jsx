import styled from "styled-components";
import Color from "../../utilities/Color";
import Text from "../Text";

const StyledSidebar  = styled.aside`
    padding: 30px;
    width: ${({width}) => width};
    height: 100vh;
    background-color: ${Color.PrimaryBgColor};
    display: ${({display}) => display};
`; 

function Sidebar({children, ...rest}) {
    return <StyledSidebar {...rest}>{children}</StyledSidebar>;
}

export default Sidebar;
