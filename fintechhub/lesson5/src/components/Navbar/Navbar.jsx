import { NavLink } from "react-router-dom";
import Flex from "../../utilities/Flex";
import ColorConstants from "../../utilities/Color";

function Navbar() {
	return (
		<Flex padding={"20px 100px"} bg={ColorConstants.LightDark} align={"center"} justify={"space-between"}>
			<div>
				<h1>Lesson 5</h1>
			</div>

			<ul>
			    <Flex gap={"30px"}>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
			    </Flex>
			</ul>

			<div>
				<button>Sign In</button>
			</div>
		</Flex>
	);
}

export default Navbar;
