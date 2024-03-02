import styled from "styled-components";

const StyledGrid = styled.div`
    padding: ${({padding = "0"}) => padding};
    display: grid;
    grid-template-columns: ${({gridCols}) => gridCols || "repeat(4, 1fr)"};
    gap: ${({gap = "0"}) => gap};
`;

function Grid(props) {
	return <StyledGrid {...props}/>;
}

export default Grid;
