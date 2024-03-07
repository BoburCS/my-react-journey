import styled from "styled-components";
import Color from "../../utilities/Color";

const StyledInput = styled.input`
    color: ${Color.PrimaryColor};
    padding: 10px 16px;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${Color.PrimaryColor};
    border-radius: 16px;
    outline: none;
    background: transparent;
`;

function Input({name, type, placeholder, onChange}) {
    return <StyledInput onChange={onChange} name={name} type={type} placeholder={placeholder}/>;
}

export default Input;
