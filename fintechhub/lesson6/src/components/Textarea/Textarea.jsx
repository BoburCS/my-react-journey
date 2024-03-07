import styled from "styled-components";
import Color from "../../utilities/Color";

const StyledTextarea = styled.textarea`
    color: ${Color.PrimaryColor};
    padding: 10px;
    width: 100%;
    border: 1px solid ${Color.PrimaryColor};
    border-radius: 16px;
    outline: none;
    background: transparent;
`;

function Textarea() {
    return <StyledTextarea/>;
}

export default Textarea;
