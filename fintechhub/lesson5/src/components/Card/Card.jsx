import styled from "styled-components";
import ColorConstants from "../../utilities/Color";
import Flex from "../../utilities/Flex";
import Text from "../../utilities/Text";
import Button from "../Button";

const CardDiv = styled.div`
    color: ${ColorConstants.White};
    padding: 30px;
    width: ${({width}) => width};
    border-radius: 16px;
    background-color: ${ColorConstants.LightDark};
`;

function Card(props) {
	return (
        <CardDiv>
            <Flex mb={"10px"} width={"100%"} align={"center"} justify={"space-between"}>
                <Text color={ColorConstants.White} type={"xl"} content={props.title} />
                <Text color={ColorConstants.White} type={"l"} content={`Price: $${props.price}`} />
            </Flex>
            <Button onClick={() => props.handleDelete(props.id)} content={"Delete"} width={"100%"}/>
        </CardDiv>
    );
}

export default Card;
