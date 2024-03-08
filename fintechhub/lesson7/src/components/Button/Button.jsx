import styled from "styled-components";
import Color from "../../utilities/Color";

const StyledButton = styled.button`
    color: ${Color.White};
    font-size: ${({fs}) => fs || "18px"};
    font-weight: 700;
    padding: ${({p}) => p || "12px 18px"};
    width: ${({w}) => w};
    border: none;
    border-radius: 6px;
    outline: none;
    background-color: ${({bg}) => bg || Color.Blue};
    cursor: pointer;
`;

function Button({content, children, ...rest}) {
    return <StyledButton {...rest}>{content || children}</StyledButton>;
}

export default Button;
