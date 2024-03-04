import Flex from "../utilities/Flex";
import ColorConstants from "../utilities/Color";
import Text from "../utilities/Text";

function Home() {
	return (
		<Flex padding={"30px"}>
			<Text content={"Home"} color={ColorConstants.White} type={"l"}/>
		</Flex>
	);
}

export default Home;
