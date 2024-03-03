import Flex from "../../utilities/Flex";
import ColorConstants from "../../utilities/Color";
import Text from "../../utilities/Text";

function Footer() {
	return (
        <Flex padding={"20px 100px"} bg={ColorConstants.LightDark}>
            <Text content={"Build by Bobby"} type={"s"} color={ColorConstants.White}/>
        </Flex>
    );
}

export default Footer;
