import styled from "styled-components";
import ColorConstants from "../../utilities/Color";

const CardDiv = styled.div`
    color: ${ColorConstants.White};
    padding: 30px;
    width: ${({width}) => width};
    border-radius: 16px;
    background-color: ${ColorConstants.Purple};
`;

function Card(props) {
	return (
        <CardDiv>
            <h1>{props.title}</h1>
            <h1>{props.price}</h1>
        </CardDiv>
    );
}

export default Card;
