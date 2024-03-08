import { useState } from "react";
import styled from "styled-components";
import Color from "../../../utilities/Color";
import Text from "../../../components/Text";
import Flex from "../../../utilities/Flex";
import Button from "../../../components/Button";

const Card = styled.div`
    padding: 30px;
    width: 100%;
    background-color: ${Color.PrimaryBgColor};
`;

function VoteCard({tech, ...rest}) {
    const [votes, setVotes] = useState(Number(tech.vote));

    return (
        <Card {...rest}>
            <Flex align={"center"} gap={"30px"}>
                <Text color={Color.PrimaryColor} type={"h1"}>{tech.language}</Text>
                <Text type={"h1"}>{votes}</Text>
                <Button onClick={() => setVotes(prev => prev + 1)} padding={"10px 16px"}>+1</Button>
                <Button onClick={() => setVotes(prev => prev - 1)} padding={"10px 16px"}>-1</Button>
            </Flex>
        </Card>
    );
}

export default VoteCard;
