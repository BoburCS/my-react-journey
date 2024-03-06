import { NavLink } from "react-router-dom";
import Flex from "../../utilities/Flex";
import Color from "../../utilities/Color";

function Navbar() {
    return (
        <Flex padding={"20px 100px"} width={"100%"} bg={Color.PrimaryBgColor} gap={"30px"}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
        </Flex>
    );
}

export default Navbar;
