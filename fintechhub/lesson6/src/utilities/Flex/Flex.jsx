import styled from "styled-components";

const StyledFlex = styled.div`
    padding: ${({padding}) => padding || "0"};
    margin: ${({margin}) => margin || "0"};
    width: ${({width}) => width};
    background-color: ${({bg}) => bg};
    display: flex;
    flex-direction: ${({direction}) => direction || "row"};
    align-items: ${({align}) => align || "flex-start"};
    justify-content: ${({justify}) => justify || "flex-start"};
    gap: ${({gap}) => gap || "0"};
`;

function Flex({...rest}) {
    return <StyledFlex {...rest}/>;
}

export default Flex;
