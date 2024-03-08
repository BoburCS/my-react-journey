import styled from "styled-components";
import techs from "../../data/techs";
import Flex from "../../utilities/Flex";
import VoteCard from "./VoteCard/VoteCard";

function VotingPage() {
    return (
        <>
            <Flex padding={"30px"} direction={"column"} gap={"30px"}>
                {techs.map(tech => <VoteCard key={tech.id} tech={tech}></VoteCard>)}
            </Flex>
        </>
    );
}

export default VotingPage;
