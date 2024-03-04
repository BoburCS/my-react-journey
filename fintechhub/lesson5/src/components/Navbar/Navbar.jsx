import { useState } from "react";
import { NavLink } from "react-router-dom";
import Flex from "../../utilities/Flex";
import ColorConstants from "../../utilities/Color";
import Text from "../../utilities/Text";
import Button from "../Button/Button";

function Navbar({ isOpen, setIsOpen }) {
	const handleClick = () => setIsOpen(!isOpen);

	const [theme, setTheme] = useState("light");

	const handleTheme = () => setTheme(previous => previous === "light" ? "dark" : "light")

	return (
		<Flex padding={"20px 100px"} bg={ColorConstants.LightDark} align={"center"} justify={"space-between"}>
			<div>
				<Text content={"Logo"} type={"xxl"} color={ColorConstants.White} />
			</div>

			<ul>
			    <Flex gap={"30px"}>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/admin">Admin</NavLink>
					</li>
			    </Flex>
			</ul>

			<Flex align={"center"} gap={"30px"}>
				<Button content={"Add new item"} onClick={handleClick}/>
				<Button onClick={handleTheme} content={theme.charAt(0).toUpperCase() + theme.slice(1).toLowerCase()}/>
			</Flex>
		</Flex>
	);
}

export default Navbar;
