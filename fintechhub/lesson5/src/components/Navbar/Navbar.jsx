import { useState } from "react";
import { NavLink } from "react-router-dom";
import Flex from "../../utilities/Flex";
import ColorConstants from "../../utilities/Color";
import Text from "../../utilities/Text";
import Button from "../Button/Button";

function Navbar({ isOpen, setIsOpen }) {
	
	const handleClick = () => setIsOpen(!isOpen);

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
			    </Flex>
			</ul>

			<div>
				<Button content={"Add new item"} onClick={handleClick}/>
			</div>
		</Flex>
	);
}

export default Navbar;
