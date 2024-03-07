import styled from "styled-components";
import Color from "../../utilities/Color";

const StyledButton = styled.button`
    color: ${Color.PrimaryBgColor};
    font-size: 20px;
    font-weight: 700;
    padding: ${({padding}) => padding || "0"};
    width: ${({width}) => width};
    border: none;
    border-radius: 16px;
    background-color: ${Color.PrimaryColor};
    outline: none;
    cursor: pointer;
`;

function Button({content, children, ...rest}) {
    return <StyledButton {...rest}> {content || children} </StyledButton>;
}

export default Button;
