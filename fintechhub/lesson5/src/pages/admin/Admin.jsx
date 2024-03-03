import styled from "styled-components";
import Flex from "../../utilities/Flex";
import Grid from "../../utilities/Grid";
import Card from "../../components/Card";
import Form from "../../components/Form";

const Text = styled.h1`
	color: #fff;
`;

function Admin({ isOpen, setIsOpen }) {
	return (
		<>
			<Grid padding={"30px"} gap={"30px"}>
				<Card title={"Apple"} price={"20$"} />
				<Card title={"Apple"} price={"20$"} />
				<Card title={"Apple"} price={"20$"} />
				<Card title={"Apple"} price={"20$"} />
			</Grid>

			{isOpen ? (
				<Form>
					<Flex direction={"column"} align={"center"}>
						<input type="text" placeholder="title" />
						<input type="text" placeholder="price" />
					</Flex>
				</Form>
			) : null}
		</>
	);
}

export default Admin;
