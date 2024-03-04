import styled from "styled-components";
import ColorConstants from "../../utilities/Color";

const StyledForm = styled.form`
    padding: 30px;
    width: 480px;
    min-height: 320px;
    border-radius: 16px;
    background-color: ${ColorConstants.LightDark};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`;

const StyledInput = styled.input`
    color: ${ColorConstants.White};
    font-size: 13px;
    font-weight: 500;
    padding: 8px 16px;
    width: 100%;
    border: 1px solid ${ColorConstants.Grey};
    border-radius: 8px;
    background: transparent;
    outline: none;
`;

const StyledLabel = styled.label`
    color: ${ColorConstants.Grey};
    font-size: 12px;
    font-weight: 700;
`;

const StyledSelect = styled.select`
    color: ${ColorConstants.Text};
    font-size: 13px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 8px;
    outline: none;
`;

export { StyledForm, StyledInput, StyledLabel, StyledSelect };
