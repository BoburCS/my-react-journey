import styled from "styled-components";

const StyledText = styled.p`
    color: ${({color}) => color || "#1C1E21"};
    font-size: ${({fs}) => fs || "16px"};
    font-weight: ${({fw}) => fw || "500"};
    text-align: ${({align}) => align || "left"};
    font-style: normal;
`;

function Text({content, children, ...rest}) {
    return <StyledText {...rest}>{content || children}</StyledText>;
}

export default Text;
