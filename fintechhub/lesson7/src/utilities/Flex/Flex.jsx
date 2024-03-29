import styled from "styled-components";

const StyledFlex = styled.div`
    margin: ${({m}) => m || "0"};
    margin-top: ${({mt}) => mt};
    margin-right: ${({mr}) => mr};
    margin-bottom: ${({mb}) => mb};
    margin-left: ${({ml}) => ml};
    padding: ${({p}) => p || "0"};
    padding-bottom: ${({pb}) => pb};
    width: ${({w}) => w};
    height: ${({h}) => h};
    border-bottom: ${({bb}) => bb};
    border-radius: ${({radius}) => radius};
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
