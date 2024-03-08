import styled from "styled-components";
import Color from "../../utilities/Color";

const StyledForm = styled.form`
    padding: 16px;
    width: ${({w}) => w || "480px"};
    border-radius: 8px;
    background-color: ${Color.White};
    box-shadow: 0 0 10px grey;
`;

function Form({children, ...rest}) {
    return <StyledForm {...rest}>{children}</StyledForm>;
}

export default Form;
