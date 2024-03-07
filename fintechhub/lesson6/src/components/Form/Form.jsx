import styled from "styled-components";
import Color from "../../utilities/Color";

const StyledForm = styled.form`
    padding: 32px;
    width: 480px;
    min-height: 320px;
    border-radius: 16px;
    background-color: ${Color.PrimaryBgColor}; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`;

function Form({content, children, onSubmit, ...rest}) {
    return (
        <StyledForm onSubmit={onSubmit} {...rest}>
            {content || children}
        </StyledForm>
    );
}

export default Form;
