import styled from "styled-components";
import ColorConstants from "../../utilities/Color";
import Text from "../../utilities/Text";

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
            <Text color={ColorConstants.White} type={"xl"} content={props.title} />
            <Text color={ColorConstants.White} type={"l"} content={props.price} />
        </CardDiv>
    );
}

export default Card;
