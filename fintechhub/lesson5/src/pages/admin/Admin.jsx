import { useState } from "react";
import Flex from "../../utilities/Flex";
import Grid from "../../utilities/Grid";
import Card from "../../components/Card";
import Text from "../../utilities/Text";
import Button from "../../components/Button";
import { StyledForm, StyledInput, StyledLabel } from "../../components/Form";
import ColorConstants from "../../utilities/Color";

function Admin({ isOpen, setIsOpen }) {
	const [items, setItems] = useState([]);
	const [item, setItem] = useState({title: "", price: ""});
	const handleChange = (event) => setItem({...item, [event.target.name] : event.target.value});

	const handleSubmit = (event) => {
		event.preventDefault();
		setItems(previous => [...previous, {...item, id: items.length}]);
		setItem({title: "", price: ""});
		event.target.reset();
	}

	const handleDelete = (id) => setItems(items.filter(item => item.id !== id));

	return (
		<>
			<Grid padding={"30px"} gap={"30px"}>
				{items.map((item, index) => {
					return <Card key={item.id} {...item} handleDelete={handleDelete}/>
				})}
			</Grid>

			{isOpen ? (
				<StyledForm onSubmit={handleSubmit}>
					<Flex direction={"column"} gap={"24px"}>
						<Text content="Add New Item" type={"s"} color={ColorConstants.White}/>
						<Flex direction={"column"} width={"100%"} gap={"8px"}>
							<StyledLabel>Title</StyledLabel>
							<StyledInput onChange={handleChange} name="title" type="text" placeholder="e.g. Apple" required/>
						</Flex>
						<Flex direction={"column"} width={"100%"} gap={"8px"}>
							<StyledLabel>Price</StyledLabel>
							<StyledInput onChange={handleChange} name="price" type="number" placeholder="e.g. $20" required/>
						</Flex>
						<Button content={"Add item"} width={"100%"}/>
					</Flex>
				</StyledForm>
			) : null}
		</>
	);
}

export default Admin;
