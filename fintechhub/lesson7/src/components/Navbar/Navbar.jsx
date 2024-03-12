import { NavLink, useNavigate } from "react-router-dom";
import Flex from "../../utilities/Flex";
import Button from "../Button";
import Text from "../../utilities/Text";
import Color from "../../utilities/Color";
import FacebookIcon from "../../assets/icons/icon-facebook.svg";
import Input from "../Input";

function Navbar({setToken, currentUser, setCurrentUser}) {
    const navigate = useNavigate();
    
    const signoutHandler = () => {
        setToken(prev => !prev);
        setCurrentUser(null);
        navigate("/signin");
    }

    return (
        <Flex p={"8px 30px"} bg={Color.White} align={"center"} justify={"space-between"}>
            <Flex align={"center"}>
                <NavLink to="/"><img src={FacebookIcon} alt="Facebook Logo" /></NavLink>
                <Input placeholder="Search..." p={"6px 10px"} w={"450px"}/>
            </Flex>
            <Flex align={"center"} gap={"20px"}>
                <NavLink to="/profile">
                    <Text color={Color.Blue} fs={"18px"}>{currentUser?.userName}</Text>
                </NavLink>
                <Button onClick={signoutHandler} fs={"16px"} p={"6px 10px"} bg={Color.Red}>Sign out</Button>
            </Flex>
        </Flex>
    );
}

export default Navbar;
