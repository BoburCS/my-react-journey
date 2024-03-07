import styled from "styled-components";
import Color from "../../utilities/Color";

const StyledText = styled.p`
    color: ${({color}) => color || Color.PrimaryColor};
    font-size: ${({type}) => {
        switch (type) {
            case "h1": return "32px";
            case "h2": return "24px";
            case "h3": return "20px";
            case "p": return "16px";
            default: return "16px";
        }
    }};
    font-weight: ${({type}) => {
        switch (type) {
            case "h1":
            case "h2":
            case "h3": return "700";
            case "p": return "500";
            default: return "500";
        }
    }};
    text-align: ${({align}) => align || "start"};
`; 

function Text({content, children, ...rest}) {
    return <StyledText {...rest}>{content || children}</StyledText>;
}

export default Text;
