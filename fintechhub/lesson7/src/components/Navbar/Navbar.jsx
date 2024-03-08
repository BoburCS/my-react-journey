import { NavLink } from "react-router-dom";
import Flex from "../../utilities/Flex";
import Text from "../../utilities/Text";
import Color from "../../utilities/Color";

function Navbar({currentUser}) {
    return (
        <Flex p={"20px 100px"} bg={Color.White} justify={"space-between"}>
            <NavLink to="/">Home</NavLink>
            <Text color={Color.Blue}>Hello, {currentUser?.userName}!</Text>
        </Flex>
    );
}

export default Navbar;
