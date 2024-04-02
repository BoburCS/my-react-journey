import styled from "styled-components";

const StyledFlex = styled.div`
	margin: ${({ m = "0" }) => m};
	margin-top: ${({ mt }) => (mt ? mt : "unset")};
	margin-right: ${({ mr }) => (mr ? mr : "unset")};
	margin-bottom: ${({ mb }) => (mb ? mb : "unset")};
	margin-left: ${({ ml }) => (ml ? ml : "unset")};
	padding: ${({ p = "0" }) => p};
	width: ${({ w }) => w};
	border-radius: ${({ radius = "0" }) => radius};
	background-color: ${({ bg }) => bg};
	display: flex;
	flex-direction: ${({ direction = "row" }) => direction};
	align-items: ${({ align = "flex-start" }) => align};
	justify-content: ${({ justify = "flex-start" }) => justify};
	flex-wrap: ${({ wrap = "nowrap" }) => wrap};
	flex-grow: ${({ grow = "0" }) => grow};
	gap: ${({ gap = "0" }) => gap};
`;

function Flex(rest) {
	return <StyledFlex {...rest}/>;
}

export default Flex;
