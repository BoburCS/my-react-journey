import styled from "styled-components";
import ColorConstants from "../Color";

const StyledText = styled.p`
    color: ${({color = ColorConstants.Dark}) => color};
    font-size: ${({type}) => {
        switch (type) {
            case "xxl": return "32px";
            case "xl": return "28px";
            case "l": return "24px";
            case "m": return "20px";
            case "s": return "18px";
            case "xs": return "16px";
            case "paragraph": return "16px";
            case "small": return "14px";
            default: return "16px";
        }
    }};
    font-weight: ${({type}) => {
        switch (type) {
            case "xxl":
            case "xl":
            case "l": 
            case "m": 
            case "s":
            case "xs": return "700";
            case "paragraph":
            case "small": return "500";
            default: return "500";
        }
    }};
    font-style: ${({italic}) => italic ? "italic" : "normal"};
    text-align: ${({align}) => align ? align : "left"};
    text-decoration: ${({decoration}) => decoration ? decoration : "none"};
    text-transform: ${({transform}) => transform ? transform : "none"};
    line-height: normal;

`;

function Text({content, ...props}) {
	return <StyledText {...props}>{content}</StyledText>;
}

export default Text;
