import styled from "styled-components";
import Grid from "../../utilities/Grid";
import Card from "../../components/Card";

const Text = styled.h1`
    color: #fff;
`;

function Admin() {
	return (
        <>
            <Grid padding={"30px"} gap={"30px"}>
                <Card title={"Apple"} price={"20$"}/>
                <Card title={"Apple"} price={"20$"}/>
                <Card title={"Apple"} price={"20$"}/>
                <Card title={"Apple"} price={"20$"}/>
            </Grid>
        </>
    );
}

export default Admin;
