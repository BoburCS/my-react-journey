import styled from "styled-components";
import ColorConstants from "../../utilities/Color";

const StyledForm = styled.form`
    padding: 30px;
    width: 400px;
    min-height: 320px;
    border-radius: 16px;
    background-color: ${ColorConstants.LightDark};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`;

function Form() {
	return <StyledForm/>;
}

export default Form;
