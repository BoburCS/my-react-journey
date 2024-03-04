import Flex from "../utilities/Flex";
import ColorConstants from "../utilities/Color";
import Text from "../utilities/Text";

function About() {
	return (
		<Flex padding={"30px"}>
			<Text content={"About"} color={ColorConstants.White} type={"l"}/>
		</Flex>
	);
}

export default About;
