import { useNavigate } from "react-router-dom";
import Flex from "../utilities/Flex";
import ColorConstants from "../utilities/Color";
import Text from "../utilities/Text";
import Button from "../components/Button";

function Home({theme}) {
	const navigate = useNavigate();
	
	return (
		<Flex bg={theme} padding={"30px"} justify={"space-between"}>
			<Text content={"Home"} color={ColorConstants.White} type={"l"}/>
			<Button onClick={() => navigate("/about")} content={"Go to About Page"}/>
		</Flex>
	);
}

export default Home;
