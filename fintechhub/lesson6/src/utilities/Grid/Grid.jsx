import styled from "styled-components";

const StyledGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
    row-gap: 20px;
`;

function Grid({...rest}) {
    return <StyledGrid {...rest}/>;
}

export default Grid;
