import Flex from "../utilities/Flex";
import ColorConstants from "../utilities/Color";
import Text from "../utilities/Text";
import Button from "../components/Button";

function About({handleTheme}) {
	return (
		<Flex padding={"30px"} direction={"column"}>
			<Text content={"About"} color={ColorConstants.White} type={"l"}/>
			<Text content={"This is about page"} color={ColorConstants.White} type={"l"}/>
			<Button onClick={handleTheme} content={"Blue"}/>
		</Flex>
	);
}

export default About;
