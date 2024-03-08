import styled from "styled-components";
import Color from "../../utilities/Color";

const StyledInput = styled.input`
    color: ${Color.Black};
    font-size: 16px;
    width: ${({w}) => w || "100%"};
    padding: ${({p}) => p || "12px 18px"};
    border: 1px solid #94a3b8;
    border-radius: 6px;
    outline: none;
    background: transparent;
`;

function Input({name, placeholder, type, ...rest}) {
    return <StyledInput name={name} type={type} placeholder={placeholder} {...rest}/>;
}

export default Input;
