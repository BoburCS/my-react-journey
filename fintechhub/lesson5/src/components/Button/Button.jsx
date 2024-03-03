import styled from "styled-components";
import ColorConstants from "../../utilities/Color";

const MainButton = styled.button`
    color: ${ColorConstants.White};
    font-size: 16px;
    font-weight: 700;
    padding: 12px 24px;
    min-width: 160px;
    border: none;
    border-radius: 16px;
    outline: none;
    background-color: ${ColorConstants.Purple};
    cursor: pointer;
`;

function Button({content, ...props}) {
	return <MainButton {...props}>{content}</MainButton>;
}

export default Button;
