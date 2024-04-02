import styled from "styled-components";

const GridStyled = styled.div`
    margin: ${({ m = "0" }) => m};
    margin-top: ${({ mt }) => (mt ? mt : "unset")};
    margin-right: ${({ mr }) => (mr ? mr : "unset")};
    margin-bottom: ${({ mb }) => (mb ? mb : "unset")};
    margin-left: ${({ ml }) => (ml ? ml : "unset")};
    padding: ${({ p = "0" }) => p};
    width: ${({ w }) => w || "100%"};
    height: ${({ h }) => h || "fit-content"};
    border-radius: ${({ br }) => br};
    background-color: ${({ bg }) => bg};
    display: grid;
    grid-template-columns: ${({ cols }) => cols};
    gap: ${({ gap = "0" }) => gap};
`;

function Grid(rest) {
    return <GridStyled {...rest} />;
}

export default Grid;
